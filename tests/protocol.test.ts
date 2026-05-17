import { describe, expect, it } from 'vitest';
import {
  CONTRACTS,
  SchemaIds,
  WireSchemaIds,
  WIRE_SCHEMAS,
  implementedContracts,
  readAllSamples,
  sampleFiles,
  targetOnlyContracts,
  validateSampleEnvelope,
} from '../src/index.js';

describe('@viewportai/protocol registry', () => {
  it('declares schema ids for every first-class contract', () => {
    expect(Object.values(SchemaIds)).toEqual([
      'viewport.workflow/v1',
      'viewport.repo_config/v1',
      'viewport.route/v1',
      'viewport.execution_profile/v1',
      'viewport.runner_workspace/v1',
      'viewport.context_package/v1',
      'viewport.agent_event/v1',
      'viewport.evidence/v1',
      'viewport.action_proposal/v1',
      'viewport.authorization_decision/v1',
      'viewport.approval_decision/v1',
      'viewport.execution_grant/v1',
      'viewport.execution_receipt/v1',
      'viewport.context_receipt/v1',
      'viewport.audit_receipt/v1',
    ]);
  });

  it('declares generated wire schemas separately from document contracts', () => {
    expect(Object.values(WireSchemaIds)).toEqual([
      'viewport.workflow_run_record/v1',
      'viewport.workflow_runs_message/v1',
      'viewport.workflow_run_started_message/v1',
      'viewport.workflow_run_updated_message/v1',
      'viewport.workflow_run_detail_message/v1',
    ]);
    expect(WIRE_SCHEMAS.map((schema) => schema.key)).toEqual([
      'workflowRunRecord',
      'workflowRunsMessage',
      'workflowRunStartedMessage',
      'workflowRunUpdatedMessage',
      'workflowRunDetailMessage',
    ]);
  });

  it('keeps implemented and target-only contracts explicit', () => {
    expect(implementedContracts().map((contract) => contract.key)).toEqual([
      'workflow',
      'repoConfig',
      'route',
      'executionProfile',
      'evidence',
      'actionProposal',
      'authorizationDecision',
      'approvalDecision',
      'executionGrant',
      'executionReceipt',
      'contextReceipt',
      'auditReceipt',
    ]);
    expect(targetOnlyContracts().map((contract) => contract.key)).toEqual([
      'runnerWorkspace',
      'contextPackage',
      'agentEvent',
    ]);
  });

  it('has one sample file per contract', () => {
    expect(sampleFiles()).toHaveLength(CONTRACTS.length);
    expect(new Set(sampleFiles()).size).toBe(sampleFiles().length);
  });

  it('loads all sample envelopes', async () => {
    const samples = await readAllSamples();
    expect(samples).toHaveLength(CONTRACTS.length);
    for (const sample of samples) {
      expect(validateSampleEnvelope(sample)).toEqual({ ok: true, issues: [] });
    }
  });

  it('rejects malformed route and execution profile samples', async () => {
    const samples = await readAllSamples();
    const route = samples.find((sample) => sample.contract.key === 'route');
    const profile = samples.find((sample) => sample.contract.key === 'executionProfile');

    expect(route).toBeDefined();
    expect(profile).toBeDefined();

    expect(
      validateSampleEnvelope({
        ...route!,
        document: {
          ...route!.document,
          resolve: { workflow: 'bug-to-pr' },
        },
      }).ok,
    ).toBe(false);

    expect(
      validateSampleEnvelope({
        ...profile!,
        document: {
          ...profile!.document,
          runner: {},
        },
      }).ok,
    ).toBe(false);
  });

  it('rejects malformed operational record samples', async () => {
    const samples = await readAllSamples();
    const evidence = samples.find((sample) => sample.contract.key === 'evidence');
    const action = samples.find((sample) => sample.contract.key === 'actionProposal');
    const approval = samples.find((sample) => sample.contract.key === 'approvalDecision');
    const grant = samples.find((sample) => sample.contract.key === 'executionGrant');
    const execution = samples.find((sample) => sample.contract.key === 'executionReceipt');
    const audit = samples.find((sample) => sample.contract.key === 'auditReceipt');

    expect(evidence).toBeDefined();
    expect(action).toBeDefined();
    expect(approval).toBeDefined();
    expect(grant).toBeDefined();
    expect(execution).toBeDefined();
    expect(audit).toBeDefined();

    expect(
      validateSampleEnvelope({
        ...evidence!,
        document: {
          ...evidence!.document,
          title: '',
        },
      }).ok,
    ).toBe(false);

    expect(
      validateSampleEnvelope({
        ...action!,
        document: {
          ...action!.document,
          proposalDigest: 'not-a-digest',
        },
      }).ok,
    ).toBe(false);

    expect(
      validateSampleEnvelope({
        ...approval!,
        document: {
          ...approval!.document,
          subjectDigest: 'not-a-digest',
        },
      }).ok,
    ).toBe(false);

    expect(
      validateSampleEnvelope({
        ...grant!,
        document: {
          ...grant!.document,
          digest: 'not-a-digest',
        },
      }).ok,
    ).toBe(false);

    expect(
      validateSampleEnvelope({
        ...execution!,
        document: {
          ...execution!.document,
          idempotencyKey: '',
        },
      }).ok,
    ).toBe(false);

    expect(
      validateSampleEnvelope({
        ...execution!,
        document: {
          ...execution!.document,
          providerReconciliation: {
            status: 'guessed',
            checkedAt: '2026-05-16T12:06:12Z',
          },
        },
      }).ok,
    ).toBe(false);

    expect(
      validateSampleEnvelope({
        ...audit!,
        document: {
          ...audit!.document,
          payloadDigest: 'not-a-digest',
        },
      }).ok,
    ).toBe(false);
  });
});
