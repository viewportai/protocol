import { mkdirSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = path.resolve(import.meta.dirname, '..');
const workdir = mkdtempSync(path.join(tmpdir(), 'viewport-protocol-pack-'));
const packdir = path.join(workdir, 'pack');
const consumer = path.join(workdir, 'consumer');

try {
  mkdirSync(packdir);
  mkdirSync(consumer);

  execFileSync('npm', ['run', 'build'], { cwd: root, stdio: 'inherit' });
  const tarball = execFileSync('npm', ['pack', '--pack-destination', packdir], {
    cwd: root,
    encoding: 'utf8',
  }).trim().split('\n').at(-1);

  if (!tarball) {
    throw new Error('npm pack did not produce a tarball name');
  }

  execFileSync('npm', ['init', '-y'], { cwd: consumer, stdio: 'ignore' });
  execFileSync('npm', ['install', path.join(packdir, tarball)], {
    cwd: consumer,
    stdio: 'inherit',
  });
  execFileSync(
    'node',
    [
      '--input-type=module',
      '--eval',
      [
        "import { SchemaIds, readAllSamples, validateSampleEnvelope } from '@viewportai/protocol';",
        "const samples = await readAllSamples();",
        "if (SchemaIds.workflow !== 'viewport.workflow/v1') throw new Error('bad schema id');",
        "if (samples.length === 0) throw new Error('no samples loaded');",
        "const invalid = samples.filter((sample) => !validateSampleEnvelope(sample).ok);",
        "if (invalid.length > 0) throw new Error(`invalid samples: ${invalid.map((sample) => sample.fileName).join(', ')}`);",
        "console.log(`pack smoke ok: ${samples.length} samples`);",
      ].join('\n'),
    ],
    { cwd: consumer, stdio: 'inherit' },
  );
} finally {
  rmSync(workdir, { recursive: true, force: true });
}
