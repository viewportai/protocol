import { describe, expect, it } from 'vitest';
import {
  WorkflowRunDetailMessageSchema,
  WorkflowRunRecordSchema,
  WorkflowRunsMessageSchema,
} from '../src/workflow-run.js';

const baseRun = {
  id: 'run_pay1842',
  workflowName: 'bug-to-pr',
  workflowTitle: 'Bug to PR',
  workflowDefinitionId: 'wf_bug_to_pr',
  workflowVersionId: 'wfv_001',
  sourceType: 'viewport_snapshot',
  digest: 'sha256:workflow-pay1842',
  schema: 'viewport.workflow/v1',
  yamlSnapshot: 'schema: viewport.workflow/v1\nid: bug-to-pr\n',
  directoryId: 'dir_payments',
  directoryPath: '/srv/payments-api',
  resourceId: 'res_payments',
  runtimeTargetId: 'rt_payments_vps',
  executorTarget: 'local_machine',
  assignmentStatus: 'completed',
  platformRunId: 'wr_001',
  machineId: 'machine_payments_vps',
  executorAgent: 'codex',
  executorModel: 'gpt-5.3-codex',
  executionPolicy: {
    mode: 'isolated_worktree',
    branch: 'viewport/PAY-1842',
  },
  dataCapturePolicy: {
    transcripts: 'excerpt',
    logs: 'metadata',
    artifacts: 'local_reference',
  },
  initiation: 'browser',
  status: 'completed',
  inputs: {
    issueKey: 'PAY-1842',
    dryRun: false,
    metadata: {
      source: 'linear',
      priority: 1,
    },
  },
  preflight: {
    ok: true,
    issues: [],
  },
  nodes: {
    investigate: {
      id: 'investigate',
      type: 'agent',
      title: 'Investigate issue',
      status: 'completed',
      startedAt: 1778790000,
      completedAt: 1778790060,
      sessionId: 'sess_001',
      nativeSessionId: 'codex_sess_001',
      output: 'Found lowercase discount normalization bug.',
      outputs: {
        rootCause: 'case-sensitive discount lookup',
      },
      transcriptExcerpt: [
        {
          role: 'assistant',
          text: 'The failing path is in DiscountService.',
        },
      ],
      inlineAgents: {
        codex: {
          id: 'agent_run_001',
          agent: 'codex',
          model: 'gpt-5.3-codex',
          status: 'completed',
          sessionId: 'sess_001',
        },
      },
    },
    approve_pr: {
      id: 'approve_pr',
      type: 'approval',
      status: 'completed',
      approval: {
        prompt: 'Approve PR creation?',
        requestedAt: 1778790061,
        resolvedAt: 1778790080,
        approved: true,
        decision: 'approve',
        actor: {
          id: 'user_1',
          name: 'Alice',
          source: 'viewport',
        },
      },
    },
  },
  artifacts: [
    {
      id: 'artifact_diff',
      runId: 'run_pay1842',
      nodeId: 'investigate',
      name: 'Proposed diff',
      kind: 'diff',
      path: '/srv/payments-api/.viewport/runs/run_pay1842/diff.patch',
      digest: 'sha256:diff-pay1842',
      createdAt: 1778790060,
    },
  ],
  reviewPackets: [
    {
      id: 'rp_001',
      artifactKind: 'action_proposal',
      subject: {
        type: 'github.open_pr',
        id: 'pr_4821',
        label: 'Open PR for PAY-1842',
      },
      workflowRunId: 'run_pay1842',
      title: 'PAY-1842 fix review',
      status: 'published',
      decision: 'approved',
      riskLevel: 'low',
      summary: 'Tests pass and change is limited to discount normalization.',
    },
  ],
  readinessTargets: [
    {
      id: 'rt_001',
      resourceId: 'res_payments',
      workflowRunId: 'run_pay1842',
      kind: 'pull_request',
      title: 'Fix lowercase discount codes',
      status: 'ready',
      riskLevel: 'low',
      repository: 'payments-api',
      headBranch: 'viewport/PAY-1842',
      reviewPackets: [
        {
          id: 'rp_001',
          artifactKind: 'action_proposal',
          subject: {
            type: 'github.open_pr',
            label: 'Open PR for PAY-1842',
          },
          readinessTargetId: 'rt_001',
          title: 'PAY-1842 fix review',
          status: 'published',
          decision: 'approved',
          riskLevel: 'low',
        },
      ],
    },
  ],
  authorizationDecisions: [
    {
      id: 'auth_001',
      action: 'workflow.run',
      decision: 'allow',
      reason: 'Matched payments route.',
    },
  ],
  evidencePackets: [
    {
      id: 'ev_001',
      evidenceKey: 'evidence:root-cause',
      nodeId: 'investigate',
      kind: 'root_cause',
      title: 'Case-sensitive lookup',
      summary: 'Discount code lookup does not normalize lowercase input.',
      confidence: 'high',
      digest: 'sha256:evidence-root-cause',
      occurredAt: 1778790060,
    },
  ],
  actionProposals: [
    {
      id: 'ap_001',
      proposalKey: 'proposal:create-pr',
      nodeId: 'approve_pr',
      adapter: 'github',
      action: 'open_pr',
      state: 'approved',
      idempotencyKey: 'jira:PAY-1842:create-pr',
      proposalDigest: 'sha256:proposal-create-pr',
      evidenceRefs: ['ev_001'],
    },
  ],
  approvalDecisions: [
    {
      id: 'ad_001',
      proposalKey: 'proposal:create-pr',
      decisionKey: 'approval:create-pr',
      nodeId: 'approve_pr',
      decision: 'approve',
      reason: 'Low-risk normalization fix.',
      decidedAt: 1778790080,
    },
  ],
  executionReceipts: [
    {
      id: 'er_001',
      proposalKey: 'proposal:create-pr',
      decisionKey: 'approval:create-pr',
      receiptKey: 'receipt:create-pr',
      adapter: 'github',
      action: 'open_pr',
      status: 'completed',
      providerReference: '4821',
      providerUrl: 'https://github.com/acme/payments-api/pull/4821',
      idempotencyKey: 'jira:PAY-1842:create-pr',
      receiptDigest: 'sha256:receipt-create-pr',
      executedAt: 1778790082,
    },
  ],
  auditReceipts: [
    {
      id: 'audit_001',
      receiptKey: 'audit:create-pr',
      eventType: 'action.executed',
      actorType: 'system',
      payloadDigest: 'sha256:audit-payload',
      occurredAt: 1778790082,
      sequence: 1,
      receiptDigest: 'sha256:audit-create-pr',
    },
  ],
  contextReceipts: [
    {
      packageName: 'payments.domain-rules',
      requested: '^2.0.0',
      resolvedVersion: '2.4.1',
      provider: 'viewport-vault',
      digest: 'sha256:context-payments-domain-rules',
      freshness: 'current',
      usedBy: {
        runId: 'run_pay1842',
        nodeId: 'investigate',
      },
      resolvedAt: 1778790000,
    },
  ],
  contractHealth: {
    status: 'valid',
    summary: {
      evidencePackets: 1,
      actionProposals: 1,
      approvalDecisions: 1,
      executionReceipts: 1,
      auditReceipts: 1,
      issues: 0,
    },
    issues: [],
    proposals: [],
    auditChain: {
      status: 'valid',
      checked: true,
      receiptCount: 1,
    },
    checkedAt: 1778790083,
  },
  resourceManifest: {
    schema: 'viewport.session_resource_manifest/v1',
    manifestDigest: 'sha256:manifest-payments',
    workingDirectory: '/srv/payments-api',
    configSources: [
      {
        path: '/srv/payments-api/.viewport/config.yaml',
        digest: 'sha256:config-payments',
        version: 1,
        name: 'payments-api',
      },
    ],
    resources: {
      contexts: [
        {
          id: 'payments.domain-rules',
          required: true,
          sourceConfigPath: '/srv/payments-api/.viewport/config.yaml',
          resolution: 'requested_unverified',
        },
      ],
      workflows: [],
      plans: [],
      agentProfiles: [],
    },
    warnings: [],
    conflicts: [],
  },
  events: [
    {
      id: 'evt_001',
      runId: 'run_pay1842',
      timestamp: 1778790000,
      type: 'run.started',
      severity: 'info',
      message: 'Workflow run started.',
    },
  ],
  createdAt: 1778790000,
  startedAt: 1778790001,
  updatedAt: 1778790083,
  completedAt: 1778790083,
};

describe('workflow run wire contract', () => {
  it('accepts the managed-control-plane workflow run projection', () => {
    expect(WorkflowRunRecordSchema.safeParse(baseRun).success).toBe(true);
    expect(
      WorkflowRunsMessageSchema.safeParse({
        type: 'workflow-runs',
        runs: [baseRun],
      }).success,
    ).toBe(true);
    expect(
      WorkflowRunDetailMessageSchema.safeParse({
        type: 'workflow-run-detail',
        run: baseRun,
      }).success,
    ).toBe(true);
  });

  it('rejects impossible run and node state values', () => {
    expect(
      WorkflowRunRecordSchema.safeParse({
        ...baseRun,
        status: 'awaiting_everything',
      }).success,
    ).toBe(false);

    expect(
      WorkflowRunRecordSchema.safeParse({
        ...baseRun,
        nodes: {
          investigate: {
            ...baseRun.nodes.investigate,
            type: 'random_code',
          },
        },
      }).success,
    ).toBe(false);
  });

  it('rejects malformed context and approval records', () => {
    expect(
      WorkflowRunRecordSchema.safeParse({
        ...baseRun,
        contextReceipts: [
          {
            ...baseRun.contextReceipts[0],
            usedBy: 'not-a-usage-record',
          },
        ],
      }).success,
    ).toBe(false);

    expect(
      WorkflowRunRecordSchema.safeParse({
        ...baseRun,
        approvalDecisions: [
          {
            ...baseRun.approvalDecisions[0],
            decision: 'maybe',
          },
        ],
      }).success,
    ).toBe(false);
  });

  it('accepts daemon-local context receipt naming before platform normalization', () => {
    expect(
      WorkflowRunRecordSchema.safeParse({
        ...baseRun,
        contextReceipts: [
          {
            schema: 'viewport.context_receipt/v1',
            package: 'payments.domain-rules',
            requested: '^2.0.0',
            resolvedVersion: '2.4.1',
            provider: 'viewport-vault',
            digest: 'sha256:context-payments-domain-rules',
            freshness: 'current',
            usedBy: {
              runId: 'run_pay1842',
              nodeId: 'investigate',
            },
            resolvedAt: '2026-05-17T03:00:03.000Z',
          },
        ],
      }).success,
    ).toBe(true);
  });
});
