import { z } from 'zod';

const TimestampSchema = z.number();

export type WorkflowInputValue =
  | string
  | number
  | boolean
  | null
  | WorkflowInputValue[]
  | { [key: string]: WorkflowInputValue };

export const WorkflowInputValueSchema: z.ZodType<WorkflowInputValue> = z.lazy(() =>
  z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.null(),
    z.array(WorkflowInputValueSchema),
    z.record(z.string(), WorkflowInputValueSchema),
  ]),
);

export const WorkflowRunStatusSchema = z.enum([
  'queued',
  'running',
  'blocked',
  'completed',
  'failed',
  'canceled',
]);

export const WorkflowNodeStatusSchema = z.enum([
  'queued',
  'running',
  'blocked',
  'completed',
  'failed',
  'skipped',
  'canceled',
]);

export const WorkflowNodeTypeSchema = z.enum([
  'prompt',
  'shell',
  'approval',
  'plan',
  'gate',
  'loop',
  'subflow',
  'agent',
  'context',
  'condition',
  'artifact',
  'action',
]);

export const WorkflowPreflightIssueSchema = z.object({
  kind: z.enum(['agent', 'tool', 'node']),
  name: z.string(),
  message: z.string(),
});

export const WorkflowPreflightResultSchema = z.object({
  ok: z.boolean(),
  issues: z.array(WorkflowPreflightIssueSchema),
});

export const WorkflowRunEventSchema = z.object({
  id: z.string(),
  runId: z.string(),
  timestamp: TimestampSchema,
  type: z.string(),
  severity: z.enum(['debug', 'info', 'warning', 'error']).optional(),
  nodeId: z.string().optional(),
  message: z.string(),
  data: z.record(z.string(), z.unknown()).optional(),
});

export const WorkflowRunArtifactSchema = z.object({
  id: z.string(),
  runId: z.string(),
  nodeId: z.string(),
  name: z.string(),
  kind: z.string().optional(),
  path: z.string(),
  digest: z.string().optional(),
  description: z.string().optional(),
  sizeBytes: z.number().optional(),
  createdAt: TimestampSchema,
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const ReviewPacketSchema = z.object({
  id: z.string(),
  readinessTargetId: z.string().optional(),
  workflowRunId: z.string().optional(),
  planId: z.string().optional(),
  sourceKey: z.string().optional(),
  title: z.string(),
  status: z.enum(['draft', 'published', 'failed', 'canceled']),
  decision: z.enum(['approved', 'changes_requested', 'blocked', 'needs_review']),
  riskLevel: z.enum(['unknown', 'low', 'medium', 'high', 'critical']),
  summary: z.string().optional(),
  checks: z.array(z.record(z.string(), z.unknown())).optional(),
  findings: z.array(z.record(z.string(), z.unknown())).optional(),
  proofItems: z.array(z.record(z.string(), z.unknown())).optional(),
  artifacts: z.array(z.record(z.string(), z.unknown())).optional(),
  sourceSnapshot: z.record(z.string(), z.unknown()).optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
  publishedAt: TimestampSchema.optional(),
  createdAt: TimestampSchema.optional(),
});

export const ReadinessTargetSchema = z.object({
  id: z.string(),
  resourceId: z.string(),
  ownerUserId: z.number().nullable().optional(),
  workflowDefinitionId: z.string().optional(),
  workflowRunId: z.string().optional(),
  planId: z.string().optional(),
  kind: z.string(),
  title: z.string(),
  status: z.enum(['draft', 'running', 'ready', 'blocked', 'failed', 'canceled']),
  riskLevel: z.enum(['unknown', 'low', 'medium', 'high', 'critical']),
  repository: z.string().optional(),
  baseBranch: z.string().optional(),
  headBranch: z.string().optional(),
  headSha: z.string().optional(),
  externalUrl: z.string().optional(),
  summary: z.string().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
  completedAt: TimestampSchema.optional(),
  createdAt: TimestampSchema.optional(),
  updatedAt: TimestampSchema.optional(),
  reviewPackets: z.array(ReviewPacketSchema).optional(),
});

export const AuthorizationDecisionRecordSchema = z.object({
  id: z.string(),
  decisionKey: z.string().optional(),
  subjectType: z.string().optional(),
  subjectId: z.string().optional(),
  action: z.string(),
  resourceType: z.string().optional(),
  resourceId: z.string().optional(),
  decision: z.enum(['allow', 'deny', 'require_approval', 'quarantine', 'weak_legacy_allow']),
  reason: z.string().optional(),
  subjectSnapshot: z.record(z.string(), z.unknown()).optional(),
  resourceSnapshot: z.record(z.string(), z.unknown()).optional(),
  context: z.record(z.string(), z.unknown()).optional(),
  matchedRules: z.array(z.string()).optional(),
  policySnapshot: z.record(z.string(), z.unknown()).optional(),
  payload: z.record(z.string(), z.unknown()).optional(),
  decidedAt: TimestampSchema.optional(),
  expiresAt: TimestampSchema.optional(),
});

export const EvidencePacketRecordSchema = z.object({
  id: z.string(),
  evidenceKey: z.string().optional(),
  nodeId: z.string().optional(),
  kind: z.string(),
  title: z.string().optional(),
  summary: z.string().optional(),
  confidence: z.string().optional(),
  visibility: z.string().optional(),
  digest: z.string().optional(),
  payload: z.record(z.string(), z.unknown()).optional(),
  occurredAt: TimestampSchema.optional(),
  createdAt: TimestampSchema.optional(),
});

export const ActionProposalRecordSchema = z.object({
  id: z.string(),
  proposalKey: z.string().optional(),
  nodeId: z.string().optional(),
  adapter: z.string(),
  action: z.string(),
  state: z.string().optional(),
  idempotencyKey: z.string().optional(),
  proposalDigest: z.string().optional(),
  evidenceRefs: z.array(z.string()).optional(),
  policyEvaluation: z.record(z.string(), z.unknown()).optional(),
  payload: z.record(z.string(), z.unknown()).optional(),
  proposedAt: TimestampSchema.optional(),
  expiresAt: TimestampSchema.optional(),
});

export const ApprovalDecisionRecordSchema = z.object({
  id: z.string(),
  proposalKey: z.string().optional(),
  decisionKey: z.string().optional(),
  nodeId: z.string().optional(),
  actorUserId: z.number().nullable().optional(),
  subjectType: z.string().optional(),
  subjectId: z.string().optional(),
  subjectDigest: z.string().optional(),
  decision: z.enum(['approve', 'deny', 'request_changes', 'unknown']),
  reason: z.string().optional(),
  actorSnapshot: z.record(z.string(), z.unknown()).optional(),
  payload: z.record(z.string(), z.unknown()).optional(),
  decidedAt: TimestampSchema.optional(),
});

export const ExecutionReceiptRecordSchema = z.object({
  id: z.string(),
  proposalKey: z.string().optional(),
  decisionKey: z.string().optional(),
  receiptKey: z.string().optional(),
  adapter: z.string(),
  action: z.string(),
  status: z.string(),
  providerReference: z.string().optional(),
  providerUrl: z.string().optional(),
  idempotencyKey: z.string().optional(),
  payloadDigest: z.string().optional(),
  providerResponseDigest: z.string().optional(),
  receiptDigest: z.string().optional(),
  providerReconciliation: z.record(z.string(), z.unknown()).optional(),
  payload: z.record(z.string(), z.unknown()).optional(),
  executedAt: TimestampSchema.optional(),
});

export const AuditReceiptRecordSchema = z.object({
  id: z.string(),
  receiptKey: z.string().optional(),
  eventType: z.string(),
  actorType: z.string().optional(),
  actorId: z.string().optional(),
  payloadDigest: z.string().optional(),
  payload: z.record(z.string(), z.unknown()).optional(),
  occurredAt: TimestampSchema.optional(),
  sequence: z.number().optional(),
  previousReceiptDigest: z.string().optional(),
  receiptDigest: z.string().optional(),
});

export const ContextReceiptRecordSchema = z.object({
  schema: z.literal('viewport.context_receipt/v1').optional(),
  package: z.string().optional(),
  packageName: z.string().optional(),
  requested: z.string().optional(),
  resolvedVersion: z.string().optional(),
  provider: z.string().optional(),
  digest: z.string().optional(),
  freshness: z.string().optional(),
  usedBy: z.record(z.string(), z.unknown()).optional(),
  resolvedAt: z.union([TimestampSchema, z.string()]).optional(),
  payload: z.record(z.string(), z.unknown()).optional(),
});

export const ContractHealthIssueSchema = z.object({
  severity: z.enum(['warning', 'error']),
  code: z.string(),
  message: z.string(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const ContractHealthSchema = z.object({
  status: z.enum(['valid', 'warning', 'invalid', 'unknown', 'not_applicable']),
  summary: z.object({
    evidencePackets: z.number(),
    actionProposals: z.number(),
    approvalDecisions: z.number(),
    executionReceipts: z.number(),
    auditReceipts: z.number(),
    issues: z.number(),
  }),
  issues: z.array(ContractHealthIssueSchema),
  proposals: z.array(z.record(z.string(), z.unknown())),
  auditChain: z.object({
    status: z.string(),
    checked: z.boolean(),
    receiptCount: z.number(),
  }),
  checkedAt: TimestampSchema.optional(),
});

export const WorkflowExecutionPolicySchema = z.object({
  mode: z.enum(['current_tree', 'isolated_worktree', 'named_branch']),
  branch: z.string().optional(),
});

export const WorkflowDataCapturePolicySchema = z.object({
  transcripts: z.enum(['none', 'excerpt']),
  logs: z.enum(['metadata', 'content']),
  artifacts: z.enum(['metadata', 'local_reference']),
});

export const WorkflowInlineAgentRunStateSchema = z.object({
  id: z.string(),
  title: z.string().optional(),
  agent: z.string().optional(),
  model: z.string().optional(),
  status: z.enum(['queued', 'running', 'completed', 'failed', 'canceled']),
  startedAt: TimestampSchema.optional(),
  completedAt: TimestampSchema.optional(),
  sessionId: z.string().optional(),
  nativeSessionId: z.string().optional(),
  worktreePath: z.string().optional(),
  output: z.string().optional(),
  error: z.string().optional(),
});

export const WorkflowTranscriptExcerptMessageSchema = z.object({
  role: z.enum(['user', 'assistant']),
  text: z.string(),
});

export const WorkflowApprovalActorSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  email: z.string().optional(),
  source: z.string().optional(),
});

export const WorkflowNodeApprovalStateSchema = z.object({
  prompt: z.string(),
  requestedAt: TimestampSchema,
  resolvedAt: TimestampSchema.optional(),
  approved: z.boolean().optional(),
  decision: z.enum(['approve', 'request_changes', 'reject']).optional(),
  message: z.string().optional(),
  actor: WorkflowApprovalActorSchema.optional(),
  feedback: z.record(z.string(), z.unknown()).optional(),
  executionGrant: z.record(z.string(), z.unknown()).optional(),
});

export const WorkflowLoopIterationRecordSchema = z.object({
  index: z.number(),
  status: z.enum(['running', 'completed', 'failed', 'skipped', 'canceled']),
  startedAt: TimestampSchema,
  completedAt: TimestampSchema.optional(),
  sessionId: z.string().optional(),
  nativeSessionId: z.string().optional(),
  worktreePath: z.string().optional(),
  output: z.string().optional(),
  exitCode: z.number().optional(),
  error: z.string().optional(),
  item: z.unknown().optional(),
});

export const WorkflowNodeRunStateSchema = z.object({
  id: z.string(),
  type: WorkflowNodeTypeSchema,
  title: z.string().optional(),
  status: WorkflowNodeStatusSchema,
  startedAt: TimestampSchema.optional(),
  completedAt: TimestampSchema.optional(),
  sessionId: z.string().optional(),
  nativeSessionId: z.string().optional(),
  worktreePath: z.string().optional(),
  output: z.string().optional(),
  outputs: z.record(z.string(), z.unknown()).optional(),
  transcriptExcerpt: z.array(WorkflowTranscriptExcerptMessageSchema).optional(),
  exitCode: z.number().optional(),
  error: z.string().optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
  approval: WorkflowNodeApprovalStateSchema.optional(),
  iterations: z.array(WorkflowLoopIterationRecordSchema).optional(),
  inlineAgents: z.record(z.string(), WorkflowInlineAgentRunStateSchema).optional(),
});

const ResourceResolutionSchema = z.enum(['requested_unverified']);

export const SessionResourceManifestResourceSchema = z.object({
  id: z.string(),
  required: z.boolean(),
  sourceConfigPath: z.string(),
  resolution: ResourceResolutionSchema,
});

export const SessionContextProviderManifestSchema = z.object({
  id: z.string(),
  provider: z.enum(['repo-docs', 'viewport-vault', 'notebooklm', 'glean', 'custom-cli', 'custom-mcp']),
  required: z.boolean(),
  privacy: z.enum(['local_only', 'control_plane_blind', 'third_party_terms', 'customer_hosted', 'unknown']),
  capabilities: z.array(z.enum(['search', 'get', 'propose', 'write_approved'])),
  sourceConfigPath: z.string(),
  vault: z.string().optional(),
  paths: z.array(z.string()).optional(),
  notebook: z.string().optional(),
  command: z.string().optional(),
  resolution: ResourceResolutionSchema,
});

export const SessionWorkflowManifestSchema = z.object({
  id: z.string(),
  required: z.boolean(),
  sourceConfigPath: z.string(),
  path: z.string().optional(),
  resource: z.string().optional(),
  version: z.string().optional(),
  digest: z.string().optional(),
  resolution: ResourceResolutionSchema,
});

export const SessionResourceManifestSchema = z.object({
  schema: z.literal('viewport.session_resource_manifest/v1'),
  manifestDigest: z.string(),
  workingDirectory: z.string(),
  configSources: z.array(
    z.object({
      path: z.string(),
      digest: z.string(),
      version: z.literal(1),
      name: z.string().optional(),
    }),
  ),
  resources: z.object({
    contexts: z.array(SessionResourceManifestResourceSchema),
    workflows: z.array(SessionResourceManifestResourceSchema),
    plans: z.array(SessionResourceManifestResourceSchema),
    agentProfiles: z.array(SessionResourceManifestResourceSchema),
  }),
  contract: z
    .object({
      contextProviders: z.array(SessionContextProviderManifestSchema),
      contextResolution: z.object({
        order: z.array(z.string()).optional(),
        sizeBudgetBytes: z.number().optional(),
        strategy: z.enum(['rank_by_recency_then_query', 'pinned_then_recent', 'provider_order']).optional(),
      }),
      workflows: z.array(SessionWorkflowManifestSchema),
    })
    .optional(),
  conflicts: z.array(
    z.object({
      field: z.string(),
      values: z.array(
        z.object({
          value: z.string(),
          sourceConfigPath: z.string(),
        }),
      ),
      resolution: z.literal('requires_user_selection'),
    }),
  ),
  warnings: z.array(
    z.object({
      code: z.string(),
      message: z.string(),
      path: z.string().optional(),
    }),
  ),
});

export const WorkflowRunRecordSchema = z.object({
  id: z.string(),
  workflowName: z.string(),
  workflowTitle: z.string().optional(),
  workflowDefinitionId: z.string().optional(),
  workflowVersionId: z.string().optional(),
  rerunOfWorkflowRunId: z.string().optional(),
  sourceType: z.enum(['local_file', 'viewport_snapshot', 'local_modified']),
  sourcePath: z.string().optional(),
  digest: z.string(),
  schema: z.string(),
  yamlSnapshot: z.string(),
  directoryId: z.string(),
  directoryPath: z.string(),
  resourceId: z.string().optional(),
  runtimeTargetId: z.string().optional(),
  managedExecutorId: z.string().optional(),
  executorTarget: z.enum(['local_machine', 'managed_executor']).optional(),
  assignmentStatus: z.string().optional(),
  platformRunId: z.string().optional(),
  machineId: z.string(),
  executorAgent: z.string().optional(),
  executorModel: z.string().optional(),
  executionPolicy: WorkflowExecutionPolicySchema.optional(),
  dataCapturePolicy: WorkflowDataCapturePolicySchema.optional(),
  initiation: z.enum(['cli', 'browser', 'agent_skill']),
  status: WorkflowRunStatusSchema,
  inputs: z.record(z.string(), WorkflowInputValueSchema),
  preflight: WorkflowPreflightResultSchema,
  nodes: z.record(z.string(), WorkflowNodeRunStateSchema),
  artifacts: z.array(WorkflowRunArtifactSchema).optional(),
  reviewPackets: z.array(ReviewPacketSchema).optional(),
  readinessTargets: z.array(ReadinessTargetSchema).optional(),
  authorizationDecisions: z.array(AuthorizationDecisionRecordSchema).optional(),
  evidencePackets: z.array(EvidencePacketRecordSchema).optional(),
  actionProposals: z.array(ActionProposalRecordSchema).optional(),
  approvalDecisions: z.array(ApprovalDecisionRecordSchema).optional(),
  executionReceipts: z.array(ExecutionReceiptRecordSchema).optional(),
  auditReceipts: z.array(AuditReceiptRecordSchema).optional(),
  contextReceipts: z.array(ContextReceiptRecordSchema).optional(),
  contractHealth: ContractHealthSchema.optional(),
  resourceManifest: SessionResourceManifestSchema.optional(),
  events: z.array(WorkflowRunEventSchema),
  createdAt: TimestampSchema,
  startedAt: TimestampSchema.optional(),
  updatedAt: TimestampSchema,
  completedAt: TimestampSchema.optional(),
  error: z.string().optional(),
});

export const WorkflowRunsMessageSchema = z.object({
  type: z.literal('workflow-runs'),
  runs: z.array(WorkflowRunRecordSchema),
});

export const WorkflowRunStartedMessageSchema = z.object({
  type: z.literal('workflow-run-started'),
  run: WorkflowRunRecordSchema,
});

export const WorkflowRunUpdatedMessageSchema = z.object({
  type: z.literal('workflow-run-updated'),
  run: WorkflowRunRecordSchema,
});

export const WorkflowRunDetailMessageSchema = z.object({
  type: z.literal('workflow-run-detail'),
  run: WorkflowRunRecordSchema,
});

export type WorkflowRunStatus = z.infer<typeof WorkflowRunStatusSchema>;
export type WorkflowNodeStatus = z.infer<typeof WorkflowNodeStatusSchema>;
export type WorkflowNodeType = z.infer<typeof WorkflowNodeTypeSchema>;
export type WorkflowPreflightIssue = z.infer<typeof WorkflowPreflightIssueSchema>;
export type WorkflowPreflightResult = z.infer<typeof WorkflowPreflightResultSchema>;
export type WorkflowRunEvent = z.infer<typeof WorkflowRunEventSchema>;
export type WorkflowRunArtifact = z.infer<typeof WorkflowRunArtifactSchema>;
export type ReviewPacket = z.infer<typeof ReviewPacketSchema>;
export type ReadinessTarget = z.infer<typeof ReadinessTargetSchema>;
export type AuthorizationDecisionRecord = z.infer<typeof AuthorizationDecisionRecordSchema>;
export type EvidencePacketRecord = z.infer<typeof EvidencePacketRecordSchema>;
export type ActionProposalRecord = z.infer<typeof ActionProposalRecordSchema>;
export type ApprovalDecisionRecord = z.infer<typeof ApprovalDecisionRecordSchema>;
export type ExecutionReceiptRecord = z.infer<typeof ExecutionReceiptRecordSchema>;
export type AuditReceiptRecord = z.infer<typeof AuditReceiptRecordSchema>;
export type ContextReceiptRecord = z.infer<typeof ContextReceiptRecordSchema>;
export type ContractHealthIssue = z.infer<typeof ContractHealthIssueSchema>;
export type ContractHealth = z.infer<typeof ContractHealthSchema>;
export type WorkflowExecutionPolicy = z.infer<typeof WorkflowExecutionPolicySchema>;
export type WorkflowDataCapturePolicy = z.infer<typeof WorkflowDataCapturePolicySchema>;
export type WorkflowInlineAgentRunState = z.infer<typeof WorkflowInlineAgentRunStateSchema>;
export type WorkflowTranscriptExcerptMessage = z.infer<typeof WorkflowTranscriptExcerptMessageSchema>;
export type WorkflowApprovalActor = z.infer<typeof WorkflowApprovalActorSchema>;
export type WorkflowNodeApprovalState = z.infer<typeof WorkflowNodeApprovalStateSchema>;
export type WorkflowLoopIterationRecord = z.infer<typeof WorkflowLoopIterationRecordSchema>;
export type WorkflowNodeRunState = z.infer<typeof WorkflowNodeRunStateSchema>;
export type SessionResourceManifest = z.infer<typeof SessionResourceManifestSchema>;
export type WorkflowRunRecord = z.infer<typeof WorkflowRunRecordSchema>;
export type WorkflowRunsMessage = z.infer<typeof WorkflowRunsMessageSchema>;
export type WorkflowRunStartedMessage = z.infer<typeof WorkflowRunStartedMessageSchema>;
export type WorkflowRunUpdatedMessage = z.infer<typeof WorkflowRunUpdatedMessageSchema>;
export type WorkflowRunDetailMessage = z.infer<typeof WorkflowRunDetailMessageSchema>;
