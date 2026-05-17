import path from 'node:path';
import { existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import YAML from 'yaml';
import {
  implementedContracts,
  readAllSamples,
  validateSampleEnvelope,
  type ProtocolSample,
} from '../src/index.js';

interface CheckResult {
  name: string;
  ok: boolean;
  detail: string;
}

const samples = await readAllSamples();
const results: CheckResult[] = [];

for (const sample of samples) {
  const envelope = validateSampleEnvelope(sample);
  results.push({
    name: `protocol envelope ${sample.fileName}`,
    ok: envelope.ok,
    detail: envelope.ok ? sample.contract.schemaId : envelope.issues.map(formatIssue).join('; '),
  });
}

for (const sample of samples.filter((entry) => entry.contract.status === 'implemented')) {
  if (sample.contract.key === 'workflow') {
    results.push(await validateDaemonWorkflow(sample));
    results.push(await validatePlatformWorkflowCore(sample));
  }
  if (sample.contract.key === 'repoConfig') {
    results.push(await validateDaemonRepoConfig(sample));
  }
}

for (const contract of implementedContracts()) {
  const expected =
    contract.webCompatibility === 'pending' || contract.webCompatibility === 'not-applicable';
  results.push({
    name: `web projection ${contract.sampleFile}`,
    ok: expected,
    detail: expected
      ? `${contract.webCompatibility} explicitly; no web fixture claim in Batch A`
      : contract.webCompatibility,
  });
}

let failed = 0;
for (const result of results) {
  const marker = result.ok ? 'ok' : 'fail';
  console.log(`${marker} - ${result.name}: ${result.detail}`);
  if (!result.ok) failed += 1;
}

const targetOnly = samples.filter((entry) => entry.contract.status === 'target-only');
console.log(`target-only samples: ${targetOnly.map((entry) => entry.fileName).join(', ')}`);

if (failed > 0) {
  process.exitCode = 1;
}

async function validateDaemonWorkflow(sample: ProtocolSample): Promise<CheckResult> {
  const daemonRoot = resolveDaemonRoot();
  if (!daemonRoot) {
    return {
      name: `daemon workflow validator ${sample.fileName}`,
      ok: true,
      detail: 'skipped; set VIEWPORT_DAEMON_ROOT or check out sibling viewport repo for consumer compatibility proof',
    };
  }

  try {
    const moduleUrl = pathToFileURL(
      path.resolve(daemonRoot, 'src/workflows/parser.ts'),
    ).href;
    const { parseWorkflow } = (await import(moduleUrl)) as {
      parseWorkflow: (sourceText: string, sourcePath: string) => { definition: { name: string } };
    };
    const parsed = parseWorkflow(sample.text, sample.path);
    return {
      name: `daemon workflow validator ${sample.fileName}`,
      ok: true,
      detail: parsed.definition.name,
    };
  } catch (error) {
    return {
      name: `daemon workflow validator ${sample.fileName}`,
      ok: false,
      detail: error instanceof Error ? error.message : String(error),
    };
  }
}

async function validateDaemonRepoConfig(sample: ProtocolSample): Promise<CheckResult> {
  const daemonRoot = resolveDaemonRoot();
  if (!daemonRoot) {
    return {
      name: `daemon repo config validator ${sample.fileName}`,
      ok: true,
      detail: 'skipped; set VIEWPORT_DAEMON_ROOT or check out sibling viewport repo for consumer compatibility proof',
    };
  }

  try {
    const moduleUrl = pathToFileURL(
      path.resolve(daemonRoot, 'src/config-resolution/schema.ts'),
    ).href;
    const { ViewportConfigSchema } = (await import(moduleUrl)) as {
      ViewportConfigSchema: { safeParse: (value: unknown) => { success: boolean; error?: unknown } };
    };
    const parsed = ViewportConfigSchema.safeParse(YAML.parse(sample.text));
    return {
      name: `daemon repo config validator ${sample.fileName}`,
      ok: parsed.success,
      detail: parsed.success ? 'version 1' : JSON.stringify(parsed.error),
    };
  } catch (error) {
    return {
      name: `daemon repo config validator ${sample.fileName}`,
      ok: false,
      detail: error instanceof Error ? error.message : String(error),
    };
  }
}

async function validatePlatformWorkflowCore(sample: ProtocolSample): Promise<CheckResult> {
  const platformRoot = resolvePlatformRoot();
  const platformValidatorPath = platformRoot
    ? path.resolve(platformRoot, 'packages/workflow-core/src/validate.ts')
    : null;

  if (!platformValidatorPath || !existsSync(platformValidatorPath)) {
    return {
      name: `platform workflow-core validator ${sample.fileName}`,
      ok: true,
      detail: 'skipped; set VIEWPORT_PLATFORM_ROOT or check out sibling platform repo for consumer compatibility proof',
    };
  }

  try {
    const moduleUrl = pathToFileURL(platformValidatorPath).href;
    const { parseWorkflowYaml } = (await import(moduleUrl)) as {
      parseWorkflowYaml: (sourceText: string) => {
        ok: boolean;
        issues: Array<{ path: string; message: string }>;
        document?: { name: string };
      };
    };
    const result = parseWorkflowYaml(sample.text);
    return {
      name: `platform workflow-core validator ${sample.fileName}`,
      ok: result.ok,
      detail: result.ok
        ? result.document?.name ?? 'validated'
        : result.issues.map(formatIssue).join('; '),
    };
  } catch (error) {
    return {
      name: `platform workflow-core validator ${sample.fileName}`,
      ok: false,
      detail: `platform validator unavailable or failed: ${
        error instanceof Error ? error.message : String(error)
      }`,
    };
  }
}

function resolveDaemonRoot(): string | null {
  const candidates = [
    process.env.VIEWPORT_DAEMON_ROOT,
    path.resolve(import.meta.dirname, '../../viewport/packages/daemon'),
    path.resolve(import.meta.dirname, '../viewport/packages/daemon'),
  ].filter((candidate): candidate is string => Boolean(candidate));

  return candidates.find((candidate) => existsSync(path.join(candidate, 'src/workflows/parser.ts'))) ?? null;
}

function resolvePlatformRoot(): string | null {
  const candidates = [
    process.env.VIEWPORT_PLATFORM_ROOT,
    path.resolve(import.meta.dirname, '../../platform'),
    path.resolve(import.meta.dirname, '../platform'),
  ].filter((candidate): candidate is string => Boolean(candidate));

  return candidates.find((candidate) => existsSync(path.join(candidate, 'packages/workflow-core/src/validate.ts'))) ?? null;
}

function formatIssue(issue: { path: string; message: string }): string {
  return `${issue.path}: ${issue.message}`;
}
