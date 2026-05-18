import { z } from 'zod';
import { SchemaIds } from './schema-ids.js';
const NonEmptyString = z.string().trim().min(1);
const OptionalStringList = z.array(NonEmptyString).min(1).optional();
const IsoDateTime = z.string().datetime({ offset: true });
const Digest = z.string().regex(/^sha256:[A-Za-z0-9._-]+$/);
const RouteMatchClauseSchema = z
    .object({
    source: NonEmptyString,
    eventTypes: OptionalStringList,
    event_types: OptionalStringList,
    project: NonEmptyString.optional(),
    issueTypes: OptionalStringList,
    labelsAny: OptionalStringList,
    channels: OptionalStringList,
    mentionsAny: OptionalStringList,
    repositories: OptionalStringList,
})
    .passthrough();
export const RouteContractSchema = z
    .object({
    schema: z.literal(SchemaIds.route),
    id: NonEmptyString,
    title: NonEmptyString.optional(),
    enabled: z.boolean().optional(),
    matches: z.object({
        any: z.array(RouteMatchClauseSchema).min(1),
    }),
    resolve: z.object({
        executionProfile: NonEmptyString,
        workflow: NonEmptyString,
    }),
    ambiguity: z
        .object({
        behavior: z.literal('fail_closed'),
        message: NonEmptyString.optional(),
    })
        .passthrough()
        .optional(),
    audit: z
        .object({
        recordPayloadSummary: z.boolean().optional(),
        retainRawPayload: z.boolean().optional(),
    })
        .passthrough()
        .optional(),
})
    .passthrough();
export const ExecutionProfileContractSchema = z
    .object({
    schema: z.literal(SchemaIds.executionProfile),
    id: NonEmptyString,
    title: NonEmptyString.optional(),
    ownedBy: z
        .object({
        team: NonEmptyString,
    })
        .passthrough()
        .optional(),
    repos: z
        .object({
        primary: z.array(NonEmptyString).min(1).optional(),
        related: z.array(NonEmptyString).optional(),
    })
        .passthrough()
        .optional(),
    runner: z
        .object({
        pool: NonEmptyString,
        workspaceTemplate: NonEmptyString.optional(),
        isolation: NonEmptyString.optional(),
    })
        .passthrough(),
    agent: z
        .object({
        default: NonEmptyString,
        allowed: z.array(NonEmptyString).min(1).optional(),
    })
        .passthrough()
        .optional(),
    context: z
        .object({
        packages: z.array(NonEmptyString).optional(),
        refresh: NonEmptyString.optional(),
        cacheTtlSeconds: z.number().int().nonnegative().optional(),
    })
        .passthrough()
        .optional(),
    approvals: z.record(z.unknown()).optional(),
    actions: z
        .object({
        allowed: z.array(NonEmptyString).optional(),
        blocked: z.array(NonEmptyString).optional(),
    })
        .passthrough()
        .optional(),
    dataCapture: z
        .object({
        transcripts: NonEmptyString.optional(),
        logs: NonEmptyString.optional(),
        artifacts: NonEmptyString.optional(),
    })
        .passthrough()
        .optional(),
})
    .passthrough();
const ActorSchema = z
    .object({
    kind: NonEmptyString,
    id: NonEmptyString,
    source: NonEmptyString.optional(),
    displayName: NonEmptyString.optional(),
})
    .passthrough();
export const EvidenceContractSchema = z
    .object({
    schema: z.literal(SchemaIds.evidence),
    id: NonEmptyString,
    workflowRunId: NonEmptyString,
    nodeId: NonEmptyString.optional(),
    kind: NonEmptyString,
    title: NonEmptyString,
    summary: NonEmptyString,
    confidence: NonEmptyString.optional(),
    visibility: NonEmptyString.optional(),
    createdAt: IsoDateTime,
    references: z.array(z.record(z.unknown())).optional(),
    findings: z.array(z.record(z.unknown())).optional(),
    tests: z.array(z.record(z.unknown())).optional(),
    risks: z.array(z.record(z.unknown())).optional(),
    proposedActions: z.array(z.record(z.unknown())).optional(),
})
    .passthrough();
export const ActionProposalContractSchema = z
    .object({
    schema: z.literal(SchemaIds.actionProposal),
    id: NonEmptyString,
    workflowRunId: NonEmptyString,
    nodeId: NonEmptyString.optional(),
    adapter: NonEmptyString,
    action: NonEmptyString,
    payload: z.record(z.unknown()),
    idempotencyKey: NonEmptyString,
    proposalDigest: Digest,
    evidenceRefs: z.array(NonEmptyString).optional(),
    policyEvaluation: z
        .object({
        decision: NonEmptyString,
        reason: NonEmptyString.optional(),
        matchedRules: z.array(NonEmptyString).optional(),
        evaluatedAt: IsoDateTime.optional(),
    })
        .passthrough()
        .optional(),
    state: NonEmptyString,
    createdAt: IsoDateTime,
    expiresAt: IsoDateTime.optional(),
})
    .passthrough();
export const AuthorizationDecisionContractSchema = z
    .object({
    schema: z.literal(SchemaIds.authorizationDecision),
    id: NonEmptyString,
    workspaceId: NonEmptyString,
    occurredAt: IsoDateTime,
    subject: ActorSchema,
    action: NonEmptyString,
    resource: z.record(z.unknown()),
    context: z.record(z.unknown()).optional(),
    decision: z.enum(['allow', 'deny', 'require_approval']),
    reason: NonEmptyString,
    matchedRules: z.array(NonEmptyString).optional(),
    policy: z
        .object({
        id: NonEmptyString,
        version: z.number().int().positive(),
    })
        .passthrough()
        .optional(),
    expiresAt: IsoDateTime.optional(),
})
    .passthrough();
export const ApprovalDecisionContractSchema = z
    .object({
    schema: z.literal(SchemaIds.approvalDecision),
    id: NonEmptyString,
    subjectType: NonEmptyString,
    subjectId: NonEmptyString,
    subjectDigest: Digest,
    decision: z.enum(['approve', 'deny', 'request_changes']),
    actor: ActorSchema,
    reason: NonEmptyString.optional(),
    createdAt: IsoDateTime,
})
    .passthrough();
export const ExecutionGrantContractSchema = z
    .object({
    schema: z.literal(SchemaIds.executionGrant),
    digest: Digest,
    proposalKey: NonEmptyString,
    approvalDecisionKey: NonEmptyString,
    issuedAt: IsoDateTime,
})
    .passthrough();
const ProviderReconciliationSchema = z
    .object({
    status: z.enum(['not_checked', 'verified', 'mismatch', 'unavailable', 'failed']),
    method: NonEmptyString.optional(),
    checkedAt: IsoDateTime.optional(),
    checkedBy: ActorSchema.optional(),
    providerReference: NonEmptyString.optional(),
    providerUrl: NonEmptyString.optional(),
    targetDigest: Digest.optional(),
    payloadDigest: Digest.optional(),
    error: NonEmptyString.optional(),
    payload: z.record(z.unknown()).optional(),
})
    .passthrough();
export const ExecutionReceiptContractSchema = z
    .object({
    schema: z.literal(SchemaIds.executionReceipt),
    id: NonEmptyString,
    workflowRunId: NonEmptyString,
    actionProposalId: NonEmptyString.optional(),
    approvalDecisionId: NonEmptyString.optional(),
    adapter: NonEmptyString,
    action: NonEmptyString,
    status: NonEmptyString,
    providerReference: NonEmptyString.optional(),
    providerUrl: NonEmptyString.optional(),
    idempotencyKey: NonEmptyString,
    payloadDigest: Digest.optional(),
    providerResponseDigest: Digest.optional(),
    proposalDigest: Digest.optional(),
    approvalDecisionDigest: Digest.optional(),
    executionGrant: ExecutionGrantContractSchema.optional(),
    providerReconciliation: ProviderReconciliationSchema.optional(),
    payload: z.record(z.unknown()).optional(),
    recovery: z.record(z.unknown()).optional(),
    executedAt: IsoDateTime,
})
    .passthrough();
export const ContextReceiptContractSchema = z
    .object({
    schema: z.literal(SchemaIds.contextReceipt),
    package: NonEmptyString,
    requested: NonEmptyString,
    resolvedVersion: NonEmptyString,
    provider: NonEmptyString,
    digest: Digest,
    freshness: NonEmptyString,
    usedBy: z
        .object({
        runId: NonEmptyString,
        nodeId: NonEmptyString.optional(),
    })
        .passthrough(),
    resolvedAt: IsoDateTime,
})
    .passthrough();
const ContextSourceOfTruthSchema = z.enum([
    'viewport_managed',
    'git_backed',
    'self_hosted_provider',
    'local_only',
]);
const ContextPackageChannelSchema = z
    .string()
    .trim()
    .regex(/^(\d+\.\d+\.\d+|\d+\.x|latest-approved|draft)$/);
const ContextVisibilitySchema = z.enum([
    'platform_visible',
    'provider_visible',
    'trusted_edge_only',
    'encrypted_body',
]);
const ContextPackageItemSchema = z
    .object({
    id: NonEmptyString,
    body: NonEmptyString,
    visibility: ContextVisibilitySchema.optional(),
    digest: Digest.optional(),
})
    .passthrough();
const ContextPackageSectionsSchema = z
    .object({
    summary: z
        .object({
        body: NonEmptyString,
        visibility: ContextVisibilitySchema.optional(),
        digest: Digest.optional(),
    })
        .passthrough()
        .optional(),
    rules: z.array(ContextPackageItemSchema).optional(),
    gotchas: z.array(ContextPackageItemSchema).optional(),
    workflows: z.array(ContextPackageItemSchema).optional(),
    facts: z.array(ContextPackageItemSchema).optional(),
})
    .passthrough();
const ContextMemoryObjectSchema = z
    .object({
    id: NonEmptyString,
    type: z.enum([
        'decision',
        'constraint',
        'gotcha',
        'workflow',
        'fact',
        'question',
        'architecture',
        'synthesis',
        'source',
    ]),
    status: z.enum(['active', 'stale', 'superseded', 'open', 'rejected']),
    title: NonEmptyString,
    body: NonEmptyString.optional(),
    appliesTo: z
        .object({
        repos: z.array(NonEmptyString).optional(),
        services: z.array(NonEmptyString).optional(),
        jiraProjects: z.array(NonEmptyString).optional(),
        linearTeams: z.array(NonEmptyString).optional(),
        workflows: z.array(NonEmptyString).optional(),
    })
        .passthrough()
        .optional(),
    loadModes: z.array(NonEmptyString).optional(),
    evidence: z.array(z.record(z.unknown())).optional(),
    source: z
        .object({
        runId: NonEmptyString.optional(),
        agent: NonEmptyString.optional(),
        human: NonEmptyString.optional(),
        workflowId: NonEmptyString.optional(),
    })
        .passthrough()
        .optional(),
    version: z.number().int().nonnegative().optional(),
    contentHash: Digest.optional(),
    visibility: ContextVisibilitySchema.optional(),
})
    .passthrough();
const ContextMemoryRelationSchema = z
    .object({
    from: NonEmptyString,
    to: NonEmptyString,
    type: z.enum([
        'supersedes',
        'conflicts_with',
        'depends_on',
        'derived_from',
        'documents',
        'implements',
    ]),
    evidence: z.array(z.record(z.unknown())).optional(),
})
    .passthrough();
export const ContextPackageContractSchema = z
    .object({
    schema: z.literal(SchemaIds.contextPackage),
    name: NonEmptyString,
    version: z.string().trim().regex(/^\d+\.\d+\.\d+$/),
    channel: ContextPackageChannelSchema.optional(),
    title: NonEmptyString,
    description: NonEmptyString.optional(),
    owners: z.array(NonEmptyString).min(1),
    sourceOfTruth: z
        .object({
        mode: ContextSourceOfTruthSchema,
        provider: NonEmptyString.optional(),
        repository: NonEmptyString.optional(),
        path: NonEmptyString.optional(),
        digest: Digest.optional(),
    })
        .passthrough(),
    appliesWhen: z.array(NonEmptyString).min(1),
    useFor: z.array(NonEmptyString).min(1),
    updateWhen: z.array(NonEmptyString).min(1),
    approval: z
        .object({
        required: z.boolean(),
        approvers: z.array(NonEmptyString).min(1).optional(),
    })
        .passthrough(),
    sections: ContextPackageSectionsSchema,
    memoryObjects: z.array(ContextMemoryObjectSchema),
    relations: z.array(ContextMemoryRelationSchema),
    receipts: z
        .object({
        required: z.boolean(),
    })
        .passthrough()
        .optional(),
})
    .passthrough();
export const AuditReceiptContractSchema = z
    .object({
    schema: z.literal(SchemaIds.auditReceipt),
    id: NonEmptyString,
    workspaceId: NonEmptyString,
    workflowRunId: NonEmptyString,
    eventType: NonEmptyString,
    occurredAt: IsoDateTime,
    actor: ActorSchema,
    route: z
        .object({
        id: NonEmptyString,
        version: z.number().int().positive(),
    })
        .passthrough()
        .optional(),
    executionProfile: z
        .object({
        id: NonEmptyString,
        version: z.number().int().positive(),
    })
        .passthrough()
        .optional(),
    workflow: z
        .object({
        id: NonEmptyString,
        schema: z.literal(SchemaIds.workflow),
        digest: Digest,
    })
        .passthrough(),
    contextReceipts: z.array(z.record(z.unknown())).optional(),
    evidenceRefs: z.array(NonEmptyString).optional(),
    actionProposal: z
        .object({
        id: NonEmptyString,
        digest: Digest,
    })
        .passthrough()
        .optional(),
    approvalDecision: z.record(z.unknown()).optional(),
    sideEffectReceipt: z
        .object({
        adapter: NonEmptyString,
        action: NonEmptyString,
        status: NonEmptyString,
    })
        .passthrough()
        .optional(),
    payloadDigest: Digest,
})
    .passthrough();
export const ProtocolDocumentSchemas = {
    [SchemaIds.route]: RouteContractSchema,
    [SchemaIds.executionProfile]: ExecutionProfileContractSchema,
    [SchemaIds.evidence]: EvidenceContractSchema,
    [SchemaIds.actionProposal]: ActionProposalContractSchema,
    [SchemaIds.authorizationDecision]: AuthorizationDecisionContractSchema,
    [SchemaIds.approvalDecision]: ApprovalDecisionContractSchema,
    [SchemaIds.executionGrant]: ExecutionGrantContractSchema,
    [SchemaIds.executionReceipt]: ExecutionReceiptContractSchema,
    [SchemaIds.contextPackage]: ContextPackageContractSchema,
    [SchemaIds.contextReceipt]: ContextReceiptContractSchema,
    [SchemaIds.auditReceipt]: AuditReceiptContractSchema,
};
//# sourceMappingURL=schemas.js.map