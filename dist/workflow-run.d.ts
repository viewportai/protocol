import { z } from 'zod';
export type WorkflowInputValue = string | number | boolean | null | WorkflowInputValue[] | {
    [key: string]: WorkflowInputValue;
};
export declare const WorkflowInputValueSchema: z.ZodType<WorkflowInputValue>;
export declare const WorkflowRunStatusSchema: z.ZodEnum<["queued", "running", "blocked", "completed", "failed", "canceled"]>;
export declare const WorkflowNodeStatusSchema: z.ZodEnum<["queued", "running", "blocked", "completed", "failed", "skipped", "canceled"]>;
export declare const WorkflowNodeTypeSchema: z.ZodEnum<["prompt", "shell", "approval", "plan", "gate", "loop", "subflow", "agent", "context", "condition", "artifact", "action"]>;
export declare const WorkflowPreflightIssueSchema: z.ZodObject<{
    kind: z.ZodEnum<["agent", "tool", "node"]>;
    name: z.ZodString;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    kind: "agent" | "tool" | "node";
    name: string;
}, {
    message: string;
    kind: "agent" | "tool" | "node";
    name: string;
}>;
export declare const WorkflowPreflightResultSchema: z.ZodObject<{
    ok: z.ZodBoolean;
    issues: z.ZodArray<z.ZodObject<{
        kind: z.ZodEnum<["agent", "tool", "node"]>;
        name: z.ZodString;
        message: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        message: string;
        kind: "agent" | "tool" | "node";
        name: string;
    }, {
        message: string;
        kind: "agent" | "tool" | "node";
        name: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    issues: {
        message: string;
        kind: "agent" | "tool" | "node";
        name: string;
    }[];
    ok: boolean;
}, {
    issues: {
        message: string;
        kind: "agent" | "tool" | "node";
        name: string;
    }[];
    ok: boolean;
}>;
export declare const WorkflowRunEventSchema: z.ZodObject<{
    id: z.ZodString;
    runId: z.ZodString;
    timestamp: z.ZodNumber;
    type: z.ZodString;
    severity: z.ZodOptional<z.ZodEnum<["debug", "info", "warning", "error"]>>;
    nodeId: z.ZodOptional<z.ZodString>;
    message: z.ZodString;
    data: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    message: string;
    type: string;
    id: string;
    runId: string;
    timestamp: number;
    nodeId?: string | undefined;
    severity?: "error" | "debug" | "info" | "warning" | undefined;
    data?: Record<string, unknown> | undefined;
}, {
    message: string;
    type: string;
    id: string;
    runId: string;
    timestamp: number;
    nodeId?: string | undefined;
    severity?: "error" | "debug" | "info" | "warning" | undefined;
    data?: Record<string, unknown> | undefined;
}>;
export declare const WorkflowRunArtifactSchema: z.ZodObject<{
    id: z.ZodString;
    runId: z.ZodString;
    nodeId: z.ZodString;
    name: z.ZodString;
    kind: z.ZodOptional<z.ZodString>;
    path: z.ZodString;
    digest: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    sizeBytes: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodNumber;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    path: string;
    id: string;
    nodeId: string;
    createdAt: number;
    runId: string;
    name: string;
    kind?: string | undefined;
    digest?: string | undefined;
    description?: string | undefined;
    sizeBytes?: number | undefined;
    metadata?: Record<string, unknown> | undefined;
}, {
    path: string;
    id: string;
    nodeId: string;
    createdAt: number;
    runId: string;
    name: string;
    kind?: string | undefined;
    digest?: string | undefined;
    description?: string | undefined;
    sizeBytes?: number | undefined;
    metadata?: Record<string, unknown> | undefined;
}>;
export declare const ReviewPacketArtifactKindSchema: z.ZodEnum<["plan", "evidence_packet", "action_proposal", "approval_request", "context_candidate", "remediation", "run_summary", "other"]>;
export declare const ReviewPacketSubjectSchema: z.ZodObject<{
    type: z.ZodString;
    id: z.ZodOptional<z.ZodString>;
    label: z.ZodOptional<z.ZodString>;
    uri: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    type: string;
    id?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
    label?: string | undefined;
    uri?: string | undefined;
}, {
    type: string;
    id?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
    label?: string | undefined;
    uri?: string | undefined;
}>;
export declare const ReviewPacketSchema: z.ZodObject<{
    id: z.ZodString;
    artifactKind: z.ZodOptional<z.ZodEnum<["plan", "evidence_packet", "action_proposal", "approval_request", "context_candidate", "remediation", "run_summary", "other"]>>;
    subject: z.ZodOptional<z.ZodObject<{
        type: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
        label: z.ZodOptional<z.ZodString>;
        uri: z.ZodOptional<z.ZodString>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "strip", z.ZodTypeAny, {
        type: string;
        id?: string | undefined;
        metadata?: Record<string, unknown> | undefined;
        label?: string | undefined;
        uri?: string | undefined;
    }, {
        type: string;
        id?: string | undefined;
        metadata?: Record<string, unknown> | undefined;
        label?: string | undefined;
        uri?: string | undefined;
    }>>;
    readinessTargetId: z.ZodOptional<z.ZodString>;
    workflowRunId: z.ZodOptional<z.ZodString>;
    planId: z.ZodOptional<z.ZodString>;
    sourceKey: z.ZodOptional<z.ZodString>;
    title: z.ZodString;
    status: z.ZodEnum<["draft", "published", "failed", "canceled"]>;
    decision: z.ZodEnum<["approved", "changes_requested", "blocked", "needs_review"]>;
    riskLevel: z.ZodEnum<["unknown", "low", "medium", "high", "critical"]>;
    summary: z.ZodOptional<z.ZodString>;
    checks: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
    findings: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
    proofItems: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
    artifacts: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
    sourceSnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    publishedAt: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    status: "failed" | "canceled" | "draft" | "published";
    id: string;
    title: string;
    decision: "blocked" | "approved" | "changes_requested" | "needs_review";
    riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
    artifacts?: Record<string, unknown>[] | undefined;
    workflowRunId?: string | undefined;
    summary?: string | undefined;
    createdAt?: number | undefined;
    findings?: Record<string, unknown>[] | undefined;
    subject?: {
        type: string;
        id?: string | undefined;
        metadata?: Record<string, unknown> | undefined;
        label?: string | undefined;
        uri?: string | undefined;
    } | undefined;
    metadata?: Record<string, unknown> | undefined;
    artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
    readinessTargetId?: string | undefined;
    planId?: string | undefined;
    sourceKey?: string | undefined;
    checks?: Record<string, unknown>[] | undefined;
    proofItems?: Record<string, unknown>[] | undefined;
    sourceSnapshot?: Record<string, unknown> | undefined;
    publishedAt?: number | undefined;
}, {
    status: "failed" | "canceled" | "draft" | "published";
    id: string;
    title: string;
    decision: "blocked" | "approved" | "changes_requested" | "needs_review";
    riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
    artifacts?: Record<string, unknown>[] | undefined;
    workflowRunId?: string | undefined;
    summary?: string | undefined;
    createdAt?: number | undefined;
    findings?: Record<string, unknown>[] | undefined;
    subject?: {
        type: string;
        id?: string | undefined;
        metadata?: Record<string, unknown> | undefined;
        label?: string | undefined;
        uri?: string | undefined;
    } | undefined;
    metadata?: Record<string, unknown> | undefined;
    artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
    readinessTargetId?: string | undefined;
    planId?: string | undefined;
    sourceKey?: string | undefined;
    checks?: Record<string, unknown>[] | undefined;
    proofItems?: Record<string, unknown>[] | undefined;
    sourceSnapshot?: Record<string, unknown> | undefined;
    publishedAt?: number | undefined;
}>;
export declare const ReadinessTargetSchema: z.ZodObject<{
    id: z.ZodString;
    resourceId: z.ZodString;
    ownerUserId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    workflowDefinitionId: z.ZodOptional<z.ZodString>;
    workflowRunId: z.ZodOptional<z.ZodString>;
    planId: z.ZodOptional<z.ZodString>;
    kind: z.ZodString;
    title: z.ZodString;
    status: z.ZodEnum<["draft", "running", "ready", "blocked", "failed", "canceled"]>;
    riskLevel: z.ZodEnum<["unknown", "low", "medium", "high", "critical"]>;
    repository: z.ZodOptional<z.ZodString>;
    baseBranch: z.ZodOptional<z.ZodString>;
    headBranch: z.ZodOptional<z.ZodString>;
    headSha: z.ZodOptional<z.ZodString>;
    externalUrl: z.ZodOptional<z.ZodString>;
    summary: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    completedAt: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodOptional<z.ZodNumber>;
    reviewPackets: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        artifactKind: z.ZodOptional<z.ZodEnum<["plan", "evidence_packet", "action_proposal", "approval_request", "context_candidate", "remediation", "run_summary", "other"]>>;
        subject: z.ZodOptional<z.ZodObject<{
            type: z.ZodString;
            id: z.ZodOptional<z.ZodString>;
            label: z.ZodOptional<z.ZodString>;
            uri: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        }, "strip", z.ZodTypeAny, {
            type: string;
            id?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            label?: string | undefined;
            uri?: string | undefined;
        }, {
            type: string;
            id?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            label?: string | undefined;
            uri?: string | undefined;
        }>>;
        readinessTargetId: z.ZodOptional<z.ZodString>;
        workflowRunId: z.ZodOptional<z.ZodString>;
        planId: z.ZodOptional<z.ZodString>;
        sourceKey: z.ZodOptional<z.ZodString>;
        title: z.ZodString;
        status: z.ZodEnum<["draft", "published", "failed", "canceled"]>;
        decision: z.ZodEnum<["approved", "changes_requested", "blocked", "needs_review"]>;
        riskLevel: z.ZodEnum<["unknown", "low", "medium", "high", "critical"]>;
        summary: z.ZodOptional<z.ZodString>;
        checks: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        findings: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        proofItems: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        artifacts: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        sourceSnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        publishedAt: z.ZodOptional<z.ZodNumber>;
        createdAt: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        status: "failed" | "canceled" | "draft" | "published";
        id: string;
        title: string;
        decision: "blocked" | "approved" | "changes_requested" | "needs_review";
        riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
        artifacts?: Record<string, unknown>[] | undefined;
        workflowRunId?: string | undefined;
        summary?: string | undefined;
        createdAt?: number | undefined;
        findings?: Record<string, unknown>[] | undefined;
        subject?: {
            type: string;
            id?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            label?: string | undefined;
            uri?: string | undefined;
        } | undefined;
        metadata?: Record<string, unknown> | undefined;
        artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
        readinessTargetId?: string | undefined;
        planId?: string | undefined;
        sourceKey?: string | undefined;
        checks?: Record<string, unknown>[] | undefined;
        proofItems?: Record<string, unknown>[] | undefined;
        sourceSnapshot?: Record<string, unknown> | undefined;
        publishedAt?: number | undefined;
    }, {
        status: "failed" | "canceled" | "draft" | "published";
        id: string;
        title: string;
        decision: "blocked" | "approved" | "changes_requested" | "needs_review";
        riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
        artifacts?: Record<string, unknown>[] | undefined;
        workflowRunId?: string | undefined;
        summary?: string | undefined;
        createdAt?: number | undefined;
        findings?: Record<string, unknown>[] | undefined;
        subject?: {
            type: string;
            id?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            label?: string | undefined;
            uri?: string | undefined;
        } | undefined;
        metadata?: Record<string, unknown> | undefined;
        artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
        readinessTargetId?: string | undefined;
        planId?: string | undefined;
        sourceKey?: string | undefined;
        checks?: Record<string, unknown>[] | undefined;
        proofItems?: Record<string, unknown>[] | undefined;
        sourceSnapshot?: Record<string, unknown> | undefined;
        publishedAt?: number | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    status: "blocked" | "failed" | "running" | "canceled" | "draft" | "ready";
    id: string;
    title: string;
    kind: string;
    riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
    resourceId: string;
    workflowRunId?: string | undefined;
    summary?: string | undefined;
    createdAt?: number | undefined;
    repository?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
    planId?: string | undefined;
    ownerUserId?: number | null | undefined;
    workflowDefinitionId?: string | undefined;
    baseBranch?: string | undefined;
    headBranch?: string | undefined;
    headSha?: string | undefined;
    externalUrl?: string | undefined;
    completedAt?: number | undefined;
    updatedAt?: number | undefined;
    reviewPackets?: {
        status: "failed" | "canceled" | "draft" | "published";
        id: string;
        title: string;
        decision: "blocked" | "approved" | "changes_requested" | "needs_review";
        riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
        artifacts?: Record<string, unknown>[] | undefined;
        workflowRunId?: string | undefined;
        summary?: string | undefined;
        createdAt?: number | undefined;
        findings?: Record<string, unknown>[] | undefined;
        subject?: {
            type: string;
            id?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            label?: string | undefined;
            uri?: string | undefined;
        } | undefined;
        metadata?: Record<string, unknown> | undefined;
        artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
        readinessTargetId?: string | undefined;
        planId?: string | undefined;
        sourceKey?: string | undefined;
        checks?: Record<string, unknown>[] | undefined;
        proofItems?: Record<string, unknown>[] | undefined;
        sourceSnapshot?: Record<string, unknown> | undefined;
        publishedAt?: number | undefined;
    }[] | undefined;
}, {
    status: "blocked" | "failed" | "running" | "canceled" | "draft" | "ready";
    id: string;
    title: string;
    kind: string;
    riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
    resourceId: string;
    workflowRunId?: string | undefined;
    summary?: string | undefined;
    createdAt?: number | undefined;
    repository?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
    planId?: string | undefined;
    ownerUserId?: number | null | undefined;
    workflowDefinitionId?: string | undefined;
    baseBranch?: string | undefined;
    headBranch?: string | undefined;
    headSha?: string | undefined;
    externalUrl?: string | undefined;
    completedAt?: number | undefined;
    updatedAt?: number | undefined;
    reviewPackets?: {
        status: "failed" | "canceled" | "draft" | "published";
        id: string;
        title: string;
        decision: "blocked" | "approved" | "changes_requested" | "needs_review";
        riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
        artifacts?: Record<string, unknown>[] | undefined;
        workflowRunId?: string | undefined;
        summary?: string | undefined;
        createdAt?: number | undefined;
        findings?: Record<string, unknown>[] | undefined;
        subject?: {
            type: string;
            id?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            label?: string | undefined;
            uri?: string | undefined;
        } | undefined;
        metadata?: Record<string, unknown> | undefined;
        artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
        readinessTargetId?: string | undefined;
        planId?: string | undefined;
        sourceKey?: string | undefined;
        checks?: Record<string, unknown>[] | undefined;
        proofItems?: Record<string, unknown>[] | undefined;
        sourceSnapshot?: Record<string, unknown> | undefined;
        publishedAt?: number | undefined;
    }[] | undefined;
}>;
export declare const AuthorizationDecisionRecordSchema: z.ZodObject<{
    id: z.ZodString;
    decisionKey: z.ZodOptional<z.ZodString>;
    subjectType: z.ZodOptional<z.ZodString>;
    subjectId: z.ZodOptional<z.ZodString>;
    action: z.ZodString;
    resourceType: z.ZodOptional<z.ZodString>;
    resourceId: z.ZodOptional<z.ZodString>;
    decision: z.ZodEnum<["allow", "deny", "require_approval", "quarantine", "weak_legacy_allow"]>;
    reason: z.ZodOptional<z.ZodString>;
    subjectSnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    resourceSnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    context: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    matchedRules: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    policySnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    decidedAt: z.ZodOptional<z.ZodNumber>;
    expiresAt: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id: string;
    action: string;
    decision: "allow" | "deny" | "require_approval" | "quarantine" | "weak_legacy_allow";
    context?: Record<string, unknown> | undefined;
    payload?: Record<string, unknown> | undefined;
    reason?: string | undefined;
    matchedRules?: string[] | undefined;
    expiresAt?: number | undefined;
    subjectType?: string | undefined;
    subjectId?: string | undefined;
    resourceId?: string | undefined;
    decisionKey?: string | undefined;
    resourceType?: string | undefined;
    subjectSnapshot?: Record<string, unknown> | undefined;
    resourceSnapshot?: Record<string, unknown> | undefined;
    policySnapshot?: Record<string, unknown> | undefined;
    decidedAt?: number | undefined;
}, {
    id: string;
    action: string;
    decision: "allow" | "deny" | "require_approval" | "quarantine" | "weak_legacy_allow";
    context?: Record<string, unknown> | undefined;
    payload?: Record<string, unknown> | undefined;
    reason?: string | undefined;
    matchedRules?: string[] | undefined;
    expiresAt?: number | undefined;
    subjectType?: string | undefined;
    subjectId?: string | undefined;
    resourceId?: string | undefined;
    decisionKey?: string | undefined;
    resourceType?: string | undefined;
    subjectSnapshot?: Record<string, unknown> | undefined;
    resourceSnapshot?: Record<string, unknown> | undefined;
    policySnapshot?: Record<string, unknown> | undefined;
    decidedAt?: number | undefined;
}>;
export declare const EvidencePacketRecordSchema: z.ZodObject<{
    id: z.ZodString;
    evidenceKey: z.ZodOptional<z.ZodString>;
    nodeId: z.ZodOptional<z.ZodString>;
    kind: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
    summary: z.ZodOptional<z.ZodString>;
    confidence: z.ZodOptional<z.ZodString>;
    visibility: z.ZodOptional<z.ZodString>;
    digest: z.ZodOptional<z.ZodString>;
    payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    occurredAt: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id: string;
    kind: string;
    title?: string | undefined;
    nodeId?: string | undefined;
    summary?: string | undefined;
    confidence?: string | undefined;
    visibility?: string | undefined;
    createdAt?: number | undefined;
    payload?: Record<string, unknown> | undefined;
    occurredAt?: number | undefined;
    digest?: string | undefined;
    evidenceKey?: string | undefined;
}, {
    id: string;
    kind: string;
    title?: string | undefined;
    nodeId?: string | undefined;
    summary?: string | undefined;
    confidence?: string | undefined;
    visibility?: string | undefined;
    createdAt?: number | undefined;
    payload?: Record<string, unknown> | undefined;
    occurredAt?: number | undefined;
    digest?: string | undefined;
    evidenceKey?: string | undefined;
}>;
export declare const ActionProposalRecordSchema: z.ZodObject<{
    id: z.ZodString;
    proposalKey: z.ZodOptional<z.ZodString>;
    nodeId: z.ZodOptional<z.ZodString>;
    adapter: z.ZodString;
    action: z.ZodString;
    state: z.ZodOptional<z.ZodString>;
    idempotencyKey: z.ZodOptional<z.ZodString>;
    proposalDigest: z.ZodOptional<z.ZodString>;
    evidenceRefs: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    policyEvaluation: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    proposedAt: z.ZodOptional<z.ZodNumber>;
    expiresAt: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id: string;
    adapter: string;
    action: string;
    nodeId?: string | undefined;
    payload?: Record<string, unknown> | undefined;
    idempotencyKey?: string | undefined;
    proposalDigest?: string | undefined;
    evidenceRefs?: string[] | undefined;
    policyEvaluation?: Record<string, unknown> | undefined;
    state?: string | undefined;
    expiresAt?: number | undefined;
    proposalKey?: string | undefined;
    proposedAt?: number | undefined;
}, {
    id: string;
    adapter: string;
    action: string;
    nodeId?: string | undefined;
    payload?: Record<string, unknown> | undefined;
    idempotencyKey?: string | undefined;
    proposalDigest?: string | undefined;
    evidenceRefs?: string[] | undefined;
    policyEvaluation?: Record<string, unknown> | undefined;
    state?: string | undefined;
    expiresAt?: number | undefined;
    proposalKey?: string | undefined;
    proposedAt?: number | undefined;
}>;
export declare const ApprovalDecisionRecordSchema: z.ZodObject<{
    id: z.ZodString;
    proposalKey: z.ZodOptional<z.ZodString>;
    decisionKey: z.ZodOptional<z.ZodString>;
    nodeId: z.ZodOptional<z.ZodString>;
    actorUserId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    subjectType: z.ZodOptional<z.ZodString>;
    subjectId: z.ZodOptional<z.ZodString>;
    subjectDigest: z.ZodOptional<z.ZodString>;
    decision: z.ZodEnum<["approve", "deny", "request_changes", "unknown"]>;
    reason: z.ZodOptional<z.ZodString>;
    actorSnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    decidedAt: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id: string;
    decision: "unknown" | "deny" | "approve" | "request_changes";
    nodeId?: string | undefined;
    payload?: Record<string, unknown> | undefined;
    reason?: string | undefined;
    subjectType?: string | undefined;
    subjectId?: string | undefined;
    subjectDigest?: string | undefined;
    proposalKey?: string | undefined;
    decisionKey?: string | undefined;
    decidedAt?: number | undefined;
    actorUserId?: number | null | undefined;
    actorSnapshot?: Record<string, unknown> | undefined;
}, {
    id: string;
    decision: "unknown" | "deny" | "approve" | "request_changes";
    nodeId?: string | undefined;
    payload?: Record<string, unknown> | undefined;
    reason?: string | undefined;
    subjectType?: string | undefined;
    subjectId?: string | undefined;
    subjectDigest?: string | undefined;
    proposalKey?: string | undefined;
    decisionKey?: string | undefined;
    decidedAt?: number | undefined;
    actorUserId?: number | null | undefined;
    actorSnapshot?: Record<string, unknown> | undefined;
}>;
export declare const ExecutionReceiptRecordSchema: z.ZodObject<{
    id: z.ZodString;
    proposalKey: z.ZodOptional<z.ZodString>;
    decisionKey: z.ZodOptional<z.ZodString>;
    receiptKey: z.ZodOptional<z.ZodString>;
    adapter: z.ZodString;
    action: z.ZodString;
    status: z.ZodString;
    providerReference: z.ZodOptional<z.ZodString>;
    providerUrl: z.ZodOptional<z.ZodString>;
    idempotencyKey: z.ZodOptional<z.ZodString>;
    payloadDigest: z.ZodOptional<z.ZodString>;
    providerResponseDigest: z.ZodOptional<z.ZodString>;
    receiptDigest: z.ZodOptional<z.ZodString>;
    providerReconciliation: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    executedAt: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    status: string;
    id: string;
    adapter: string;
    action: string;
    payload?: Record<string, unknown> | undefined;
    idempotencyKey?: string | undefined;
    proposalKey?: string | undefined;
    providerReference?: string | undefined;
    providerUrl?: string | undefined;
    payloadDigest?: string | undefined;
    providerResponseDigest?: string | undefined;
    providerReconciliation?: Record<string, unknown> | undefined;
    executedAt?: number | undefined;
    decisionKey?: string | undefined;
    receiptKey?: string | undefined;
    receiptDigest?: string | undefined;
}, {
    status: string;
    id: string;
    adapter: string;
    action: string;
    payload?: Record<string, unknown> | undefined;
    idempotencyKey?: string | undefined;
    proposalKey?: string | undefined;
    providerReference?: string | undefined;
    providerUrl?: string | undefined;
    payloadDigest?: string | undefined;
    providerResponseDigest?: string | undefined;
    providerReconciliation?: Record<string, unknown> | undefined;
    executedAt?: number | undefined;
    decisionKey?: string | undefined;
    receiptKey?: string | undefined;
    receiptDigest?: string | undefined;
}>;
export declare const AuditReceiptRecordSchema: z.ZodObject<{
    id: z.ZodString;
    receiptKey: z.ZodOptional<z.ZodString>;
    eventType: z.ZodString;
    actorType: z.ZodOptional<z.ZodString>;
    actorId: z.ZodOptional<z.ZodString>;
    payloadDigest: z.ZodOptional<z.ZodString>;
    payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    occurredAt: z.ZodOptional<z.ZodNumber>;
    sequence: z.ZodOptional<z.ZodNumber>;
    previousReceiptDigest: z.ZodOptional<z.ZodString>;
    receiptDigest: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    eventType: string;
    payload?: Record<string, unknown> | undefined;
    occurredAt?: number | undefined;
    payloadDigest?: string | undefined;
    receiptKey?: string | undefined;
    receiptDigest?: string | undefined;
    actorType?: string | undefined;
    actorId?: string | undefined;
    sequence?: number | undefined;
    previousReceiptDigest?: string | undefined;
}, {
    id: string;
    eventType: string;
    payload?: Record<string, unknown> | undefined;
    occurredAt?: number | undefined;
    payloadDigest?: string | undefined;
    receiptKey?: string | undefined;
    receiptDigest?: string | undefined;
    actorType?: string | undefined;
    actorId?: string | undefined;
    sequence?: number | undefined;
    previousReceiptDigest?: string | undefined;
}>;
export declare const ContextReceiptRecordSchema: z.ZodObject<{
    schema: z.ZodOptional<z.ZodLiteral<"viewport.context_receipt/v1">>;
    package: z.ZodOptional<z.ZodString>;
    packageName: z.ZodOptional<z.ZodString>;
    requested: z.ZodOptional<z.ZodString>;
    resolvedVersion: z.ZodOptional<z.ZodString>;
    provider: z.ZodOptional<z.ZodString>;
    digest: z.ZodOptional<z.ZodString>;
    freshness: z.ZodOptional<z.ZodString>;
    usedBy: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    resolvedAt: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
    payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    schema?: "viewport.context_receipt/v1" | undefined;
    payload?: Record<string, unknown> | undefined;
    digest?: string | undefined;
    package?: string | undefined;
    requested?: string | undefined;
    resolvedVersion?: string | undefined;
    provider?: string | undefined;
    freshness?: string | undefined;
    usedBy?: Record<string, unknown> | undefined;
    resolvedAt?: string | number | undefined;
    packageName?: string | undefined;
}, {
    schema?: "viewport.context_receipt/v1" | undefined;
    payload?: Record<string, unknown> | undefined;
    digest?: string | undefined;
    package?: string | undefined;
    requested?: string | undefined;
    resolvedVersion?: string | undefined;
    provider?: string | undefined;
    freshness?: string | undefined;
    usedBy?: Record<string, unknown> | undefined;
    resolvedAt?: string | number | undefined;
    packageName?: string | undefined;
}>;
export declare const ContractHealthIssueSchema: z.ZodObject<{
    severity: z.ZodEnum<["warning", "error"]>;
    code: z.ZodString;
    message: z.ZodString;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    code: string;
    message: string;
    severity: "error" | "warning";
    metadata?: Record<string, unknown> | undefined;
}, {
    code: string;
    message: string;
    severity: "error" | "warning";
    metadata?: Record<string, unknown> | undefined;
}>;
export declare const ContractHealthSchema: z.ZodObject<{
    status: z.ZodEnum<["valid", "warning", "invalid", "unknown", "not_applicable"]>;
    summary: z.ZodObject<{
        evidencePackets: z.ZodNumber;
        actionProposals: z.ZodNumber;
        approvalDecisions: z.ZodNumber;
        executionReceipts: z.ZodNumber;
        auditReceipts: z.ZodNumber;
        issues: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        issues: number;
        evidencePackets: number;
        actionProposals: number;
        approvalDecisions: number;
        executionReceipts: number;
        auditReceipts: number;
    }, {
        issues: number;
        evidencePackets: number;
        actionProposals: number;
        approvalDecisions: number;
        executionReceipts: number;
        auditReceipts: number;
    }>;
    issues: z.ZodArray<z.ZodObject<{
        severity: z.ZodEnum<["warning", "error"]>;
        code: z.ZodString;
        message: z.ZodString;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "strip", z.ZodTypeAny, {
        code: string;
        message: string;
        severity: "error" | "warning";
        metadata?: Record<string, unknown> | undefined;
    }, {
        code: string;
        message: string;
        severity: "error" | "warning";
        metadata?: Record<string, unknown> | undefined;
    }>, "many">;
    proposals: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">;
    auditChain: z.ZodObject<{
        status: z.ZodString;
        checked: z.ZodBoolean;
        receiptCount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        status: string;
        checked: boolean;
        receiptCount: number;
    }, {
        status: string;
        checked: boolean;
        receiptCount: number;
    }>;
    checkedAt: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    issues: {
        code: string;
        message: string;
        severity: "error" | "warning";
        metadata?: Record<string, unknown> | undefined;
    }[];
    status: "valid" | "unknown" | "warning" | "invalid" | "not_applicable";
    summary: {
        issues: number;
        evidencePackets: number;
        actionProposals: number;
        approvalDecisions: number;
        executionReceipts: number;
        auditReceipts: number;
    };
    proposals: Record<string, unknown>[];
    auditChain: {
        status: string;
        checked: boolean;
        receiptCount: number;
    };
    checkedAt?: number | undefined;
}, {
    issues: {
        code: string;
        message: string;
        severity: "error" | "warning";
        metadata?: Record<string, unknown> | undefined;
    }[];
    status: "valid" | "unknown" | "warning" | "invalid" | "not_applicable";
    summary: {
        issues: number;
        evidencePackets: number;
        actionProposals: number;
        approvalDecisions: number;
        executionReceipts: number;
        auditReceipts: number;
    };
    proposals: Record<string, unknown>[];
    auditChain: {
        status: string;
        checked: boolean;
        receiptCount: number;
    };
    checkedAt?: number | undefined;
}>;
export declare const WorkflowExecutionPolicySchema: z.ZodObject<{
    mode: z.ZodEnum<["current_tree", "isolated_worktree", "named_branch"]>;
    branch: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    mode: "current_tree" | "isolated_worktree" | "named_branch";
    branch?: string | undefined;
}, {
    mode: "current_tree" | "isolated_worktree" | "named_branch";
    branch?: string | undefined;
}>;
export declare const WorkflowDataCapturePolicySchema: z.ZodObject<{
    transcripts: z.ZodEnum<["none", "excerpt"]>;
    logs: z.ZodEnum<["metadata", "content"]>;
    artifacts: z.ZodEnum<["metadata", "local_reference"]>;
}, "strip", z.ZodTypeAny, {
    transcripts: "none" | "excerpt";
    logs: "metadata" | "content";
    artifacts: "metadata" | "local_reference";
}, {
    transcripts: "none" | "excerpt";
    logs: "metadata" | "content";
    artifacts: "metadata" | "local_reference";
}>;
export declare const WorkflowInlineAgentRunStateSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
    agent: z.ZodOptional<z.ZodString>;
    model: z.ZodOptional<z.ZodString>;
    status: z.ZodEnum<["queued", "running", "completed", "failed", "canceled"]>;
    startedAt: z.ZodOptional<z.ZodNumber>;
    completedAt: z.ZodOptional<z.ZodNumber>;
    sessionId: z.ZodOptional<z.ZodString>;
    nativeSessionId: z.ZodOptional<z.ZodString>;
    worktreePath: z.ZodOptional<z.ZodString>;
    output: z.ZodOptional<z.ZodString>;
    error: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "failed" | "queued" | "running" | "completed" | "canceled";
    id: string;
    title?: string | undefined;
    agent?: string | undefined;
    error?: string | undefined;
    completedAt?: number | undefined;
    model?: string | undefined;
    startedAt?: number | undefined;
    sessionId?: string | undefined;
    nativeSessionId?: string | undefined;
    worktreePath?: string | undefined;
    output?: string | undefined;
}, {
    status: "failed" | "queued" | "running" | "completed" | "canceled";
    id: string;
    title?: string | undefined;
    agent?: string | undefined;
    error?: string | undefined;
    completedAt?: number | undefined;
    model?: string | undefined;
    startedAt?: number | undefined;
    sessionId?: string | undefined;
    nativeSessionId?: string | undefined;
    worktreePath?: string | undefined;
    output?: string | undefined;
}>;
export declare const WorkflowTranscriptExcerptMessageSchema: z.ZodObject<{
    role: z.ZodEnum<["user", "assistant"]>;
    text: z.ZodString;
}, "strip", z.ZodTypeAny, {
    text: string;
    role: "user" | "assistant";
}, {
    text: string;
    role: "user" | "assistant";
}>;
export declare const WorkflowApprovalActorSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    source: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    source?: string | undefined;
    id?: string | undefined;
    name?: string | undefined;
    email?: string | undefined;
}, {
    source?: string | undefined;
    id?: string | undefined;
    name?: string | undefined;
    email?: string | undefined;
}>;
export declare const WorkflowNodeApprovalStateSchema: z.ZodObject<{
    prompt: z.ZodString;
    requestedAt: z.ZodNumber;
    resolvedAt: z.ZodOptional<z.ZodNumber>;
    approved: z.ZodOptional<z.ZodBoolean>;
    decision: z.ZodOptional<z.ZodEnum<["approve", "request_changes", "reject"]>>;
    message: z.ZodOptional<z.ZodString>;
    actor: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        source?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        email?: string | undefined;
    }, {
        source?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        email?: string | undefined;
    }>>;
    feedback: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    executionGrant: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    prompt: string;
    requestedAt: number;
    executionGrant?: Record<string, unknown> | undefined;
    message?: string | undefined;
    decision?: "approve" | "request_changes" | "reject" | undefined;
    actor?: {
        source?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        email?: string | undefined;
    } | undefined;
    resolvedAt?: number | undefined;
    approved?: boolean | undefined;
    feedback?: Record<string, unknown> | undefined;
}, {
    prompt: string;
    requestedAt: number;
    executionGrant?: Record<string, unknown> | undefined;
    message?: string | undefined;
    decision?: "approve" | "request_changes" | "reject" | undefined;
    actor?: {
        source?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        email?: string | undefined;
    } | undefined;
    resolvedAt?: number | undefined;
    approved?: boolean | undefined;
    feedback?: Record<string, unknown> | undefined;
}>;
export declare const WorkflowLoopIterationRecordSchema: z.ZodObject<{
    index: z.ZodNumber;
    status: z.ZodEnum<["running", "completed", "failed", "skipped", "canceled"]>;
    startedAt: z.ZodNumber;
    completedAt: z.ZodOptional<z.ZodNumber>;
    sessionId: z.ZodOptional<z.ZodString>;
    nativeSessionId: z.ZodOptional<z.ZodString>;
    worktreePath: z.ZodOptional<z.ZodString>;
    output: z.ZodOptional<z.ZodString>;
    exitCode: z.ZodOptional<z.ZodNumber>;
    error: z.ZodOptional<z.ZodString>;
    item: z.ZodOptional<z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    status: "failed" | "running" | "completed" | "canceled" | "skipped";
    startedAt: number;
    index: number;
    error?: string | undefined;
    completedAt?: number | undefined;
    sessionId?: string | undefined;
    nativeSessionId?: string | undefined;
    worktreePath?: string | undefined;
    output?: string | undefined;
    exitCode?: number | undefined;
    item?: unknown;
}, {
    status: "failed" | "running" | "completed" | "canceled" | "skipped";
    startedAt: number;
    index: number;
    error?: string | undefined;
    completedAt?: number | undefined;
    sessionId?: string | undefined;
    nativeSessionId?: string | undefined;
    worktreePath?: string | undefined;
    output?: string | undefined;
    exitCode?: number | undefined;
    item?: unknown;
}>;
export declare const WorkflowNodeRunStateSchema: z.ZodObject<{
    id: z.ZodString;
    type: z.ZodEnum<["prompt", "shell", "approval", "plan", "gate", "loop", "subflow", "agent", "context", "condition", "artifact", "action"]>;
    title: z.ZodOptional<z.ZodString>;
    status: z.ZodEnum<["queued", "running", "blocked", "completed", "failed", "skipped", "canceled"]>;
    startedAt: z.ZodOptional<z.ZodNumber>;
    completedAt: z.ZodOptional<z.ZodNumber>;
    sessionId: z.ZodOptional<z.ZodString>;
    nativeSessionId: z.ZodOptional<z.ZodString>;
    worktreePath: z.ZodOptional<z.ZodString>;
    output: z.ZodOptional<z.ZodString>;
    outputs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    transcriptExcerpt: z.ZodOptional<z.ZodArray<z.ZodObject<{
        role: z.ZodEnum<["user", "assistant"]>;
        text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        text: string;
        role: "user" | "assistant";
    }, {
        text: string;
        role: "user" | "assistant";
    }>, "many">>;
    exitCode: z.ZodOptional<z.ZodNumber>;
    error: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    approval: z.ZodOptional<z.ZodObject<{
        prompt: z.ZodString;
        requestedAt: z.ZodNumber;
        resolvedAt: z.ZodOptional<z.ZodNumber>;
        approved: z.ZodOptional<z.ZodBoolean>;
        decision: z.ZodOptional<z.ZodEnum<["approve", "request_changes", "reject"]>>;
        message: z.ZodOptional<z.ZodString>;
        actor: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            email: z.ZodOptional<z.ZodString>;
            source: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            source?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
        }, {
            source?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
        }>>;
        feedback: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        executionGrant: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "strip", z.ZodTypeAny, {
        prompt: string;
        requestedAt: number;
        executionGrant?: Record<string, unknown> | undefined;
        message?: string | undefined;
        decision?: "approve" | "request_changes" | "reject" | undefined;
        actor?: {
            source?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
        } | undefined;
        resolvedAt?: number | undefined;
        approved?: boolean | undefined;
        feedback?: Record<string, unknown> | undefined;
    }, {
        prompt: string;
        requestedAt: number;
        executionGrant?: Record<string, unknown> | undefined;
        message?: string | undefined;
        decision?: "approve" | "request_changes" | "reject" | undefined;
        actor?: {
            source?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
        } | undefined;
        resolvedAt?: number | undefined;
        approved?: boolean | undefined;
        feedback?: Record<string, unknown> | undefined;
    }>>;
    iterations: z.ZodOptional<z.ZodArray<z.ZodObject<{
        index: z.ZodNumber;
        status: z.ZodEnum<["running", "completed", "failed", "skipped", "canceled"]>;
        startedAt: z.ZodNumber;
        completedAt: z.ZodOptional<z.ZodNumber>;
        sessionId: z.ZodOptional<z.ZodString>;
        nativeSessionId: z.ZodOptional<z.ZodString>;
        worktreePath: z.ZodOptional<z.ZodString>;
        output: z.ZodOptional<z.ZodString>;
        exitCode: z.ZodOptional<z.ZodNumber>;
        error: z.ZodOptional<z.ZodString>;
        item: z.ZodOptional<z.ZodUnknown>;
    }, "strip", z.ZodTypeAny, {
        status: "failed" | "running" | "completed" | "canceled" | "skipped";
        startedAt: number;
        index: number;
        error?: string | undefined;
        completedAt?: number | undefined;
        sessionId?: string | undefined;
        nativeSessionId?: string | undefined;
        worktreePath?: string | undefined;
        output?: string | undefined;
        exitCode?: number | undefined;
        item?: unknown;
    }, {
        status: "failed" | "running" | "completed" | "canceled" | "skipped";
        startedAt: number;
        index: number;
        error?: string | undefined;
        completedAt?: number | undefined;
        sessionId?: string | undefined;
        nativeSessionId?: string | undefined;
        worktreePath?: string | undefined;
        output?: string | undefined;
        exitCode?: number | undefined;
        item?: unknown;
    }>, "many">>;
    inlineAgents: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        id: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
        agent: z.ZodOptional<z.ZodString>;
        model: z.ZodOptional<z.ZodString>;
        status: z.ZodEnum<["queued", "running", "completed", "failed", "canceled"]>;
        startedAt: z.ZodOptional<z.ZodNumber>;
        completedAt: z.ZodOptional<z.ZodNumber>;
        sessionId: z.ZodOptional<z.ZodString>;
        nativeSessionId: z.ZodOptional<z.ZodString>;
        worktreePath: z.ZodOptional<z.ZodString>;
        output: z.ZodOptional<z.ZodString>;
        error: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "failed" | "queued" | "running" | "completed" | "canceled";
        id: string;
        title?: string | undefined;
        agent?: string | undefined;
        error?: string | undefined;
        completedAt?: number | undefined;
        model?: string | undefined;
        startedAt?: number | undefined;
        sessionId?: string | undefined;
        nativeSessionId?: string | undefined;
        worktreePath?: string | undefined;
        output?: string | undefined;
    }, {
        status: "failed" | "queued" | "running" | "completed" | "canceled";
        id: string;
        title?: string | undefined;
        agent?: string | undefined;
        error?: string | undefined;
        completedAt?: number | undefined;
        model?: string | undefined;
        startedAt?: number | undefined;
        sessionId?: string | undefined;
        nativeSessionId?: string | undefined;
        worktreePath?: string | undefined;
        output?: string | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    type: "agent" | "context" | "action" | "approval" | "prompt" | "shell" | "plan" | "gate" | "loop" | "subflow" | "condition" | "artifact";
    status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled" | "skipped";
    id: string;
    title?: string | undefined;
    error?: string | undefined;
    approval?: {
        prompt: string;
        requestedAt: number;
        executionGrant?: Record<string, unknown> | undefined;
        message?: string | undefined;
        decision?: "approve" | "request_changes" | "reject" | undefined;
        actor?: {
            source?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
        } | undefined;
        resolvedAt?: number | undefined;
        approved?: boolean | undefined;
        feedback?: Record<string, unknown> | undefined;
    } | undefined;
    metadata?: Record<string, unknown> | undefined;
    completedAt?: number | undefined;
    startedAt?: number | undefined;
    sessionId?: string | undefined;
    nativeSessionId?: string | undefined;
    worktreePath?: string | undefined;
    output?: string | undefined;
    exitCode?: number | undefined;
    outputs?: Record<string, unknown> | undefined;
    transcriptExcerpt?: {
        text: string;
        role: "user" | "assistant";
    }[] | undefined;
    iterations?: {
        status: "failed" | "running" | "completed" | "canceled" | "skipped";
        startedAt: number;
        index: number;
        error?: string | undefined;
        completedAt?: number | undefined;
        sessionId?: string | undefined;
        nativeSessionId?: string | undefined;
        worktreePath?: string | undefined;
        output?: string | undefined;
        exitCode?: number | undefined;
        item?: unknown;
    }[] | undefined;
    inlineAgents?: Record<string, {
        status: "failed" | "queued" | "running" | "completed" | "canceled";
        id: string;
        title?: string | undefined;
        agent?: string | undefined;
        error?: string | undefined;
        completedAt?: number | undefined;
        model?: string | undefined;
        startedAt?: number | undefined;
        sessionId?: string | undefined;
        nativeSessionId?: string | undefined;
        worktreePath?: string | undefined;
        output?: string | undefined;
    }> | undefined;
}, {
    type: "agent" | "context" | "action" | "approval" | "prompt" | "shell" | "plan" | "gate" | "loop" | "subflow" | "condition" | "artifact";
    status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled" | "skipped";
    id: string;
    title?: string | undefined;
    error?: string | undefined;
    approval?: {
        prompt: string;
        requestedAt: number;
        executionGrant?: Record<string, unknown> | undefined;
        message?: string | undefined;
        decision?: "approve" | "request_changes" | "reject" | undefined;
        actor?: {
            source?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            email?: string | undefined;
        } | undefined;
        resolvedAt?: number | undefined;
        approved?: boolean | undefined;
        feedback?: Record<string, unknown> | undefined;
    } | undefined;
    metadata?: Record<string, unknown> | undefined;
    completedAt?: number | undefined;
    startedAt?: number | undefined;
    sessionId?: string | undefined;
    nativeSessionId?: string | undefined;
    worktreePath?: string | undefined;
    output?: string | undefined;
    exitCode?: number | undefined;
    outputs?: Record<string, unknown> | undefined;
    transcriptExcerpt?: {
        text: string;
        role: "user" | "assistant";
    }[] | undefined;
    iterations?: {
        status: "failed" | "running" | "completed" | "canceled" | "skipped";
        startedAt: number;
        index: number;
        error?: string | undefined;
        completedAt?: number | undefined;
        sessionId?: string | undefined;
        nativeSessionId?: string | undefined;
        worktreePath?: string | undefined;
        output?: string | undefined;
        exitCode?: number | undefined;
        item?: unknown;
    }[] | undefined;
    inlineAgents?: Record<string, {
        status: "failed" | "queued" | "running" | "completed" | "canceled";
        id: string;
        title?: string | undefined;
        agent?: string | undefined;
        error?: string | undefined;
        completedAt?: number | undefined;
        model?: string | undefined;
        startedAt?: number | undefined;
        sessionId?: string | undefined;
        nativeSessionId?: string | undefined;
        worktreePath?: string | undefined;
        output?: string | undefined;
    }> | undefined;
}>;
export declare const SessionResourceManifestResourceSchema: z.ZodObject<{
    id: z.ZodString;
    required: z.ZodBoolean;
    sourceConfigPath: z.ZodString;
    resolution: z.ZodEnum<["requested_unverified"]>;
}, "strip", z.ZodTypeAny, {
    id: string;
    required: boolean;
    sourceConfigPath: string;
    resolution: "requested_unverified";
}, {
    id: string;
    required: boolean;
    sourceConfigPath: string;
    resolution: "requested_unverified";
}>;
export declare const SessionContextProviderManifestSchema: z.ZodObject<{
    id: z.ZodString;
    provider: z.ZodEnum<["repo-docs", "viewport-vault", "notebooklm", "glean", "custom-cli", "custom-mcp"]>;
    required: z.ZodBoolean;
    privacy: z.ZodEnum<["local_only", "control_plane_blind", "third_party_terms", "customer_hosted", "unknown"]>;
    capabilities: z.ZodArray<z.ZodEnum<["search", "get", "propose", "write_approved"]>, "many">;
    sourceConfigPath: z.ZodString;
    vault: z.ZodOptional<z.ZodString>;
    paths: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    notebook: z.ZodOptional<z.ZodString>;
    command: z.ZodOptional<z.ZodString>;
    resolution: z.ZodEnum<["requested_unverified"]>;
}, "strip", z.ZodTypeAny, {
    id: string;
    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
    required: boolean;
    sourceConfigPath: string;
    resolution: "requested_unverified";
    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
    capabilities: ("search" | "get" | "propose" | "write_approved")[];
    vault?: string | undefined;
    paths?: string[] | undefined;
    notebook?: string | undefined;
    command?: string | undefined;
}, {
    id: string;
    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
    required: boolean;
    sourceConfigPath: string;
    resolution: "requested_unverified";
    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
    capabilities: ("search" | "get" | "propose" | "write_approved")[];
    vault?: string | undefined;
    paths?: string[] | undefined;
    notebook?: string | undefined;
    command?: string | undefined;
}>;
export declare const SessionWorkflowManifestSchema: z.ZodObject<{
    id: z.ZodString;
    required: z.ZodBoolean;
    sourceConfigPath: z.ZodString;
    path: z.ZodOptional<z.ZodString>;
    resource: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
    digest: z.ZodOptional<z.ZodString>;
    resolution: z.ZodEnum<["requested_unverified"]>;
}, "strip", z.ZodTypeAny, {
    id: string;
    required: boolean;
    sourceConfigPath: string;
    resolution: "requested_unverified";
    path?: string | undefined;
    resource?: string | undefined;
    version?: string | undefined;
    digest?: string | undefined;
}, {
    id: string;
    required: boolean;
    sourceConfigPath: string;
    resolution: "requested_unverified";
    path?: string | undefined;
    resource?: string | undefined;
    version?: string | undefined;
    digest?: string | undefined;
}>;
export declare const SessionResourceManifestSchema: z.ZodObject<{
    schema: z.ZodLiteral<"viewport.session_resource_manifest/v1">;
    manifestDigest: z.ZodString;
    workingDirectory: z.ZodString;
    configSources: z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        digest: z.ZodString;
        version: z.ZodLiteral<1>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        path: string;
        version: 1;
        digest: string;
        name?: string | undefined;
    }, {
        path: string;
        version: 1;
        digest: string;
        name?: string | undefined;
    }>, "many">;
    resources: z.ZodObject<{
        contexts: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            required: z.ZodBoolean;
            sourceConfigPath: z.ZodString;
            resolution: z.ZodEnum<["requested_unverified"]>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
        }, {
            id: string;
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
        }>, "many">;
        workflows: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            required: z.ZodBoolean;
            sourceConfigPath: z.ZodString;
            resolution: z.ZodEnum<["requested_unverified"]>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
        }, {
            id: string;
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
        }>, "many">;
        plans: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            required: z.ZodBoolean;
            sourceConfigPath: z.ZodString;
            resolution: z.ZodEnum<["requested_unverified"]>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
        }, {
            id: string;
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
        }>, "many">;
        agentProfiles: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            required: z.ZodBoolean;
            sourceConfigPath: z.ZodString;
            resolution: z.ZodEnum<["requested_unverified"]>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
        }, {
            id: string;
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        workflows: {
            id: string;
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
        }[];
        contexts: {
            id: string;
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
        }[];
        plans: {
            id: string;
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
        }[];
        agentProfiles: {
            id: string;
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
        }[];
    }, {
        workflows: {
            id: string;
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
        }[];
        contexts: {
            id: string;
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
        }[];
        plans: {
            id: string;
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
        }[];
        agentProfiles: {
            id: string;
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
        }[];
    }>;
    contract: z.ZodOptional<z.ZodObject<{
        contextProviders: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            provider: z.ZodEnum<["repo-docs", "viewport-vault", "notebooklm", "glean", "custom-cli", "custom-mcp"]>;
            required: z.ZodBoolean;
            privacy: z.ZodEnum<["local_only", "control_plane_blind", "third_party_terms", "customer_hosted", "unknown"]>;
            capabilities: z.ZodArray<z.ZodEnum<["search", "get", "propose", "write_approved"]>, "many">;
            sourceConfigPath: z.ZodString;
            vault: z.ZodOptional<z.ZodString>;
            paths: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            notebook: z.ZodOptional<z.ZodString>;
            command: z.ZodOptional<z.ZodString>;
            resolution: z.ZodEnum<["requested_unverified"]>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
            privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
            capabilities: ("search" | "get" | "propose" | "write_approved")[];
            vault?: string | undefined;
            paths?: string[] | undefined;
            notebook?: string | undefined;
            command?: string | undefined;
        }, {
            id: string;
            provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
            privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
            capabilities: ("search" | "get" | "propose" | "write_approved")[];
            vault?: string | undefined;
            paths?: string[] | undefined;
            notebook?: string | undefined;
            command?: string | undefined;
        }>, "many">;
        contextResolution: z.ZodObject<{
            order: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            sizeBudgetBytes: z.ZodOptional<z.ZodNumber>;
            strategy: z.ZodOptional<z.ZodEnum<["rank_by_recency_then_query", "pinned_then_recent", "provider_order"]>>;
        }, "strip", z.ZodTypeAny, {
            order?: string[] | undefined;
            sizeBudgetBytes?: number | undefined;
            strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
        }, {
            order?: string[] | undefined;
            sizeBudgetBytes?: number | undefined;
            strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
        }>;
        workflows: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            required: z.ZodBoolean;
            sourceConfigPath: z.ZodString;
            path: z.ZodOptional<z.ZodString>;
            resource: z.ZodOptional<z.ZodString>;
            version: z.ZodOptional<z.ZodString>;
            digest: z.ZodOptional<z.ZodString>;
            resolution: z.ZodEnum<["requested_unverified"]>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
            path?: string | undefined;
            resource?: string | undefined;
            version?: string | undefined;
            digest?: string | undefined;
        }, {
            id: string;
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
            path?: string | undefined;
            resource?: string | undefined;
            version?: string | undefined;
            digest?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        workflows: {
            id: string;
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
            path?: string | undefined;
            resource?: string | undefined;
            version?: string | undefined;
            digest?: string | undefined;
        }[];
        contextProviders: {
            id: string;
            provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
            privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
            capabilities: ("search" | "get" | "propose" | "write_approved")[];
            vault?: string | undefined;
            paths?: string[] | undefined;
            notebook?: string | undefined;
            command?: string | undefined;
        }[];
        contextResolution: {
            order?: string[] | undefined;
            sizeBudgetBytes?: number | undefined;
            strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
        };
    }, {
        workflows: {
            id: string;
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
            path?: string | undefined;
            resource?: string | undefined;
            version?: string | undefined;
            digest?: string | undefined;
        }[];
        contextProviders: {
            id: string;
            provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
            privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
            capabilities: ("search" | "get" | "propose" | "write_approved")[];
            vault?: string | undefined;
            paths?: string[] | undefined;
            notebook?: string | undefined;
            command?: string | undefined;
        }[];
        contextResolution: {
            order?: string[] | undefined;
            sizeBudgetBytes?: number | undefined;
            strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
        };
    }>>;
    conflicts: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        values: z.ZodArray<z.ZodObject<{
            value: z.ZodString;
            sourceConfigPath: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            sourceConfigPath: string;
        }, {
            value: string;
            sourceConfigPath: string;
        }>, "many">;
        resolution: z.ZodLiteral<"requires_user_selection">;
    }, "strip", z.ZodTypeAny, {
        values: {
            value: string;
            sourceConfigPath: string;
        }[];
        resolution: "requires_user_selection";
        field: string;
    }, {
        values: {
            value: string;
            sourceConfigPath: string;
        }[];
        resolution: "requires_user_selection";
        field: string;
    }>, "many">;
    warnings: z.ZodArray<z.ZodObject<{
        code: z.ZodString;
        message: z.ZodString;
        path: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        code: string;
        message: string;
        path?: string | undefined;
    }, {
        code: string;
        message: string;
        path?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    schema: "viewport.session_resource_manifest/v1";
    manifestDigest: string;
    workingDirectory: string;
    configSources: {
        path: string;
        version: 1;
        digest: string;
        name?: string | undefined;
    }[];
    resources: {
        workflows: {
            id: string;
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
        }[];
        contexts: {
            id: string;
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
        }[];
        plans: {
            id: string;
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
        }[];
        agentProfiles: {
            id: string;
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
        }[];
    };
    conflicts: {
        values: {
            value: string;
            sourceConfigPath: string;
        }[];
        resolution: "requires_user_selection";
        field: string;
    }[];
    warnings: {
        code: string;
        message: string;
        path?: string | undefined;
    }[];
    contract?: {
        workflows: {
            id: string;
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
            path?: string | undefined;
            resource?: string | undefined;
            version?: string | undefined;
            digest?: string | undefined;
        }[];
        contextProviders: {
            id: string;
            provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
            privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
            capabilities: ("search" | "get" | "propose" | "write_approved")[];
            vault?: string | undefined;
            paths?: string[] | undefined;
            notebook?: string | undefined;
            command?: string | undefined;
        }[];
        contextResolution: {
            order?: string[] | undefined;
            sizeBudgetBytes?: number | undefined;
            strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
        };
    } | undefined;
}, {
    schema: "viewport.session_resource_manifest/v1";
    manifestDigest: string;
    workingDirectory: string;
    configSources: {
        path: string;
        version: 1;
        digest: string;
        name?: string | undefined;
    }[];
    resources: {
        workflows: {
            id: string;
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
        }[];
        contexts: {
            id: string;
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
        }[];
        plans: {
            id: string;
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
        }[];
        agentProfiles: {
            id: string;
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
        }[];
    };
    conflicts: {
        values: {
            value: string;
            sourceConfigPath: string;
        }[];
        resolution: "requires_user_selection";
        field: string;
    }[];
    warnings: {
        code: string;
        message: string;
        path?: string | undefined;
    }[];
    contract?: {
        workflows: {
            id: string;
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
            path?: string | undefined;
            resource?: string | undefined;
            version?: string | undefined;
            digest?: string | undefined;
        }[];
        contextProviders: {
            id: string;
            provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
            required: boolean;
            sourceConfigPath: string;
            resolution: "requested_unverified";
            privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
            capabilities: ("search" | "get" | "propose" | "write_approved")[];
            vault?: string | undefined;
            paths?: string[] | undefined;
            notebook?: string | undefined;
            command?: string | undefined;
        }[];
        contextResolution: {
            order?: string[] | undefined;
            sizeBudgetBytes?: number | undefined;
            strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
        };
    } | undefined;
}>;
export declare const WorkflowRunRecordSchema: z.ZodObject<{
    id: z.ZodString;
    workflowName: z.ZodString;
    workflowTitle: z.ZodOptional<z.ZodString>;
    workflowDefinitionId: z.ZodOptional<z.ZodString>;
    workflowVersionId: z.ZodOptional<z.ZodString>;
    rerunOfWorkflowRunId: z.ZodOptional<z.ZodString>;
    sourceType: z.ZodEnum<["local_file", "viewport_snapshot", "local_modified"]>;
    sourcePath: z.ZodOptional<z.ZodString>;
    digest: z.ZodString;
    schema: z.ZodString;
    yamlSnapshot: z.ZodString;
    directoryId: z.ZodString;
    directoryPath: z.ZodString;
    resourceId: z.ZodOptional<z.ZodString>;
    runtimeTargetId: z.ZodOptional<z.ZodString>;
    managedExecutorId: z.ZodOptional<z.ZodString>;
    executorTarget: z.ZodOptional<z.ZodEnum<["local_machine", "managed_executor"]>>;
    assignmentStatus: z.ZodOptional<z.ZodString>;
    platformRunId: z.ZodOptional<z.ZodString>;
    machineId: z.ZodString;
    executorAgent: z.ZodOptional<z.ZodString>;
    executorModel: z.ZodOptional<z.ZodString>;
    executionPolicy: z.ZodOptional<z.ZodObject<{
        mode: z.ZodEnum<["current_tree", "isolated_worktree", "named_branch"]>;
        branch: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        mode: "current_tree" | "isolated_worktree" | "named_branch";
        branch?: string | undefined;
    }, {
        mode: "current_tree" | "isolated_worktree" | "named_branch";
        branch?: string | undefined;
    }>>;
    dataCapturePolicy: z.ZodOptional<z.ZodObject<{
        transcripts: z.ZodEnum<["none", "excerpt"]>;
        logs: z.ZodEnum<["metadata", "content"]>;
        artifacts: z.ZodEnum<["metadata", "local_reference"]>;
    }, "strip", z.ZodTypeAny, {
        transcripts: "none" | "excerpt";
        logs: "metadata" | "content";
        artifacts: "metadata" | "local_reference";
    }, {
        transcripts: "none" | "excerpt";
        logs: "metadata" | "content";
        artifacts: "metadata" | "local_reference";
    }>>;
    initiation: z.ZodEnum<["cli", "browser", "agent_skill"]>;
    status: z.ZodEnum<["queued", "running", "blocked", "completed", "failed", "canceled"]>;
    inputs: z.ZodRecord<z.ZodString, z.ZodType<WorkflowInputValue, z.ZodTypeDef, WorkflowInputValue>>;
    preflight: z.ZodObject<{
        ok: z.ZodBoolean;
        issues: z.ZodArray<z.ZodObject<{
            kind: z.ZodEnum<["agent", "tool", "node"]>;
            name: z.ZodString;
            message: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message: string;
            kind: "agent" | "tool" | "node";
            name: string;
        }, {
            message: string;
            kind: "agent" | "tool" | "node";
            name: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        issues: {
            message: string;
            kind: "agent" | "tool" | "node";
            name: string;
        }[];
        ok: boolean;
    }, {
        issues: {
            message: string;
            kind: "agent" | "tool" | "node";
            name: string;
        }[];
        ok: boolean;
    }>;
    nodes: z.ZodRecord<z.ZodString, z.ZodObject<{
        id: z.ZodString;
        type: z.ZodEnum<["prompt", "shell", "approval", "plan", "gate", "loop", "subflow", "agent", "context", "condition", "artifact", "action"]>;
        title: z.ZodOptional<z.ZodString>;
        status: z.ZodEnum<["queued", "running", "blocked", "completed", "failed", "skipped", "canceled"]>;
        startedAt: z.ZodOptional<z.ZodNumber>;
        completedAt: z.ZodOptional<z.ZodNumber>;
        sessionId: z.ZodOptional<z.ZodString>;
        nativeSessionId: z.ZodOptional<z.ZodString>;
        worktreePath: z.ZodOptional<z.ZodString>;
        output: z.ZodOptional<z.ZodString>;
        outputs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        transcriptExcerpt: z.ZodOptional<z.ZodArray<z.ZodObject<{
            role: z.ZodEnum<["user", "assistant"]>;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            text: string;
            role: "user" | "assistant";
        }, {
            text: string;
            role: "user" | "assistant";
        }>, "many">>;
        exitCode: z.ZodOptional<z.ZodNumber>;
        error: z.ZodOptional<z.ZodString>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        approval: z.ZodOptional<z.ZodObject<{
            prompt: z.ZodString;
            requestedAt: z.ZodNumber;
            resolvedAt: z.ZodOptional<z.ZodNumber>;
            approved: z.ZodOptional<z.ZodBoolean>;
            decision: z.ZodOptional<z.ZodEnum<["approve", "request_changes", "reject"]>>;
            message: z.ZodOptional<z.ZodString>;
            actor: z.ZodOptional<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
                email: z.ZodOptional<z.ZodString>;
                source: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                source?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                email?: string | undefined;
            }, {
                source?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                email?: string | undefined;
            }>>;
            feedback: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            executionGrant: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        }, "strip", z.ZodTypeAny, {
            prompt: string;
            requestedAt: number;
            executionGrant?: Record<string, unknown> | undefined;
            message?: string | undefined;
            decision?: "approve" | "request_changes" | "reject" | undefined;
            actor?: {
                source?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                email?: string | undefined;
            } | undefined;
            resolvedAt?: number | undefined;
            approved?: boolean | undefined;
            feedback?: Record<string, unknown> | undefined;
        }, {
            prompt: string;
            requestedAt: number;
            executionGrant?: Record<string, unknown> | undefined;
            message?: string | undefined;
            decision?: "approve" | "request_changes" | "reject" | undefined;
            actor?: {
                source?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                email?: string | undefined;
            } | undefined;
            resolvedAt?: number | undefined;
            approved?: boolean | undefined;
            feedback?: Record<string, unknown> | undefined;
        }>>;
        iterations: z.ZodOptional<z.ZodArray<z.ZodObject<{
            index: z.ZodNumber;
            status: z.ZodEnum<["running", "completed", "failed", "skipped", "canceled"]>;
            startedAt: z.ZodNumber;
            completedAt: z.ZodOptional<z.ZodNumber>;
            sessionId: z.ZodOptional<z.ZodString>;
            nativeSessionId: z.ZodOptional<z.ZodString>;
            worktreePath: z.ZodOptional<z.ZodString>;
            output: z.ZodOptional<z.ZodString>;
            exitCode: z.ZodOptional<z.ZodNumber>;
            error: z.ZodOptional<z.ZodString>;
            item: z.ZodOptional<z.ZodUnknown>;
        }, "strip", z.ZodTypeAny, {
            status: "failed" | "running" | "completed" | "canceled" | "skipped";
            startedAt: number;
            index: number;
            error?: string | undefined;
            completedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
            exitCode?: number | undefined;
            item?: unknown;
        }, {
            status: "failed" | "running" | "completed" | "canceled" | "skipped";
            startedAt: number;
            index: number;
            error?: string | undefined;
            completedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
            exitCode?: number | undefined;
            item?: unknown;
        }>, "many">>;
        inlineAgents: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            id: z.ZodString;
            title: z.ZodOptional<z.ZodString>;
            agent: z.ZodOptional<z.ZodString>;
            model: z.ZodOptional<z.ZodString>;
            status: z.ZodEnum<["queued", "running", "completed", "failed", "canceled"]>;
            startedAt: z.ZodOptional<z.ZodNumber>;
            completedAt: z.ZodOptional<z.ZodNumber>;
            sessionId: z.ZodOptional<z.ZodString>;
            nativeSessionId: z.ZodOptional<z.ZodString>;
            worktreePath: z.ZodOptional<z.ZodString>;
            output: z.ZodOptional<z.ZodString>;
            error: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            status: "failed" | "queued" | "running" | "completed" | "canceled";
            id: string;
            title?: string | undefined;
            agent?: string | undefined;
            error?: string | undefined;
            completedAt?: number | undefined;
            model?: string | undefined;
            startedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
        }, {
            status: "failed" | "queued" | "running" | "completed" | "canceled";
            id: string;
            title?: string | undefined;
            agent?: string | undefined;
            error?: string | undefined;
            completedAt?: number | undefined;
            model?: string | undefined;
            startedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        type: "agent" | "context" | "action" | "approval" | "prompt" | "shell" | "plan" | "gate" | "loop" | "subflow" | "condition" | "artifact";
        status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled" | "skipped";
        id: string;
        title?: string | undefined;
        error?: string | undefined;
        approval?: {
            prompt: string;
            requestedAt: number;
            executionGrant?: Record<string, unknown> | undefined;
            message?: string | undefined;
            decision?: "approve" | "request_changes" | "reject" | undefined;
            actor?: {
                source?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                email?: string | undefined;
            } | undefined;
            resolvedAt?: number | undefined;
            approved?: boolean | undefined;
            feedback?: Record<string, unknown> | undefined;
        } | undefined;
        metadata?: Record<string, unknown> | undefined;
        completedAt?: number | undefined;
        startedAt?: number | undefined;
        sessionId?: string | undefined;
        nativeSessionId?: string | undefined;
        worktreePath?: string | undefined;
        output?: string | undefined;
        exitCode?: number | undefined;
        outputs?: Record<string, unknown> | undefined;
        transcriptExcerpt?: {
            text: string;
            role: "user" | "assistant";
        }[] | undefined;
        iterations?: {
            status: "failed" | "running" | "completed" | "canceled" | "skipped";
            startedAt: number;
            index: number;
            error?: string | undefined;
            completedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
            exitCode?: number | undefined;
            item?: unknown;
        }[] | undefined;
        inlineAgents?: Record<string, {
            status: "failed" | "queued" | "running" | "completed" | "canceled";
            id: string;
            title?: string | undefined;
            agent?: string | undefined;
            error?: string | undefined;
            completedAt?: number | undefined;
            model?: string | undefined;
            startedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
        }> | undefined;
    }, {
        type: "agent" | "context" | "action" | "approval" | "prompt" | "shell" | "plan" | "gate" | "loop" | "subflow" | "condition" | "artifact";
        status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled" | "skipped";
        id: string;
        title?: string | undefined;
        error?: string | undefined;
        approval?: {
            prompt: string;
            requestedAt: number;
            executionGrant?: Record<string, unknown> | undefined;
            message?: string | undefined;
            decision?: "approve" | "request_changes" | "reject" | undefined;
            actor?: {
                source?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                email?: string | undefined;
            } | undefined;
            resolvedAt?: number | undefined;
            approved?: boolean | undefined;
            feedback?: Record<string, unknown> | undefined;
        } | undefined;
        metadata?: Record<string, unknown> | undefined;
        completedAt?: number | undefined;
        startedAt?: number | undefined;
        sessionId?: string | undefined;
        nativeSessionId?: string | undefined;
        worktreePath?: string | undefined;
        output?: string | undefined;
        exitCode?: number | undefined;
        outputs?: Record<string, unknown> | undefined;
        transcriptExcerpt?: {
            text: string;
            role: "user" | "assistant";
        }[] | undefined;
        iterations?: {
            status: "failed" | "running" | "completed" | "canceled" | "skipped";
            startedAt: number;
            index: number;
            error?: string | undefined;
            completedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
            exitCode?: number | undefined;
            item?: unknown;
        }[] | undefined;
        inlineAgents?: Record<string, {
            status: "failed" | "queued" | "running" | "completed" | "canceled";
            id: string;
            title?: string | undefined;
            agent?: string | undefined;
            error?: string | undefined;
            completedAt?: number | undefined;
            model?: string | undefined;
            startedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
        }> | undefined;
    }>>;
    artifacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        runId: z.ZodString;
        nodeId: z.ZodString;
        name: z.ZodString;
        kind: z.ZodOptional<z.ZodString>;
        path: z.ZodString;
        digest: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        sizeBytes: z.ZodOptional<z.ZodNumber>;
        createdAt: z.ZodNumber;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "strip", z.ZodTypeAny, {
        path: string;
        id: string;
        nodeId: string;
        createdAt: number;
        runId: string;
        name: string;
        kind?: string | undefined;
        digest?: string | undefined;
        description?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: Record<string, unknown> | undefined;
    }, {
        path: string;
        id: string;
        nodeId: string;
        createdAt: number;
        runId: string;
        name: string;
        kind?: string | undefined;
        digest?: string | undefined;
        description?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: Record<string, unknown> | undefined;
    }>, "many">>;
    reviewPackets: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        artifactKind: z.ZodOptional<z.ZodEnum<["plan", "evidence_packet", "action_proposal", "approval_request", "context_candidate", "remediation", "run_summary", "other"]>>;
        subject: z.ZodOptional<z.ZodObject<{
            type: z.ZodString;
            id: z.ZodOptional<z.ZodString>;
            label: z.ZodOptional<z.ZodString>;
            uri: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        }, "strip", z.ZodTypeAny, {
            type: string;
            id?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            label?: string | undefined;
            uri?: string | undefined;
        }, {
            type: string;
            id?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            label?: string | undefined;
            uri?: string | undefined;
        }>>;
        readinessTargetId: z.ZodOptional<z.ZodString>;
        workflowRunId: z.ZodOptional<z.ZodString>;
        planId: z.ZodOptional<z.ZodString>;
        sourceKey: z.ZodOptional<z.ZodString>;
        title: z.ZodString;
        status: z.ZodEnum<["draft", "published", "failed", "canceled"]>;
        decision: z.ZodEnum<["approved", "changes_requested", "blocked", "needs_review"]>;
        riskLevel: z.ZodEnum<["unknown", "low", "medium", "high", "critical"]>;
        summary: z.ZodOptional<z.ZodString>;
        checks: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        findings: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        proofItems: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        artifacts: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        sourceSnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        publishedAt: z.ZodOptional<z.ZodNumber>;
        createdAt: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        status: "failed" | "canceled" | "draft" | "published";
        id: string;
        title: string;
        decision: "blocked" | "approved" | "changes_requested" | "needs_review";
        riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
        artifacts?: Record<string, unknown>[] | undefined;
        workflowRunId?: string | undefined;
        summary?: string | undefined;
        createdAt?: number | undefined;
        findings?: Record<string, unknown>[] | undefined;
        subject?: {
            type: string;
            id?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            label?: string | undefined;
            uri?: string | undefined;
        } | undefined;
        metadata?: Record<string, unknown> | undefined;
        artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
        readinessTargetId?: string | undefined;
        planId?: string | undefined;
        sourceKey?: string | undefined;
        checks?: Record<string, unknown>[] | undefined;
        proofItems?: Record<string, unknown>[] | undefined;
        sourceSnapshot?: Record<string, unknown> | undefined;
        publishedAt?: number | undefined;
    }, {
        status: "failed" | "canceled" | "draft" | "published";
        id: string;
        title: string;
        decision: "blocked" | "approved" | "changes_requested" | "needs_review";
        riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
        artifacts?: Record<string, unknown>[] | undefined;
        workflowRunId?: string | undefined;
        summary?: string | undefined;
        createdAt?: number | undefined;
        findings?: Record<string, unknown>[] | undefined;
        subject?: {
            type: string;
            id?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            label?: string | undefined;
            uri?: string | undefined;
        } | undefined;
        metadata?: Record<string, unknown> | undefined;
        artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
        readinessTargetId?: string | undefined;
        planId?: string | undefined;
        sourceKey?: string | undefined;
        checks?: Record<string, unknown>[] | undefined;
        proofItems?: Record<string, unknown>[] | undefined;
        sourceSnapshot?: Record<string, unknown> | undefined;
        publishedAt?: number | undefined;
    }>, "many">>;
    readinessTargets: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        resourceId: z.ZodString;
        ownerUserId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        workflowDefinitionId: z.ZodOptional<z.ZodString>;
        workflowRunId: z.ZodOptional<z.ZodString>;
        planId: z.ZodOptional<z.ZodString>;
        kind: z.ZodString;
        title: z.ZodString;
        status: z.ZodEnum<["draft", "running", "ready", "blocked", "failed", "canceled"]>;
        riskLevel: z.ZodEnum<["unknown", "low", "medium", "high", "critical"]>;
        repository: z.ZodOptional<z.ZodString>;
        baseBranch: z.ZodOptional<z.ZodString>;
        headBranch: z.ZodOptional<z.ZodString>;
        headSha: z.ZodOptional<z.ZodString>;
        externalUrl: z.ZodOptional<z.ZodString>;
        summary: z.ZodOptional<z.ZodString>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        completedAt: z.ZodOptional<z.ZodNumber>;
        createdAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodOptional<z.ZodNumber>;
        reviewPackets: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            artifactKind: z.ZodOptional<z.ZodEnum<["plan", "evidence_packet", "action_proposal", "approval_request", "context_candidate", "remediation", "run_summary", "other"]>>;
            subject: z.ZodOptional<z.ZodObject<{
                type: z.ZodString;
                id: z.ZodOptional<z.ZodString>;
                label: z.ZodOptional<z.ZodString>;
                uri: z.ZodOptional<z.ZodString>;
                metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            }, "strip", z.ZodTypeAny, {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            }, {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            }>>;
            readinessTargetId: z.ZodOptional<z.ZodString>;
            workflowRunId: z.ZodOptional<z.ZodString>;
            planId: z.ZodOptional<z.ZodString>;
            sourceKey: z.ZodOptional<z.ZodString>;
            title: z.ZodString;
            status: z.ZodEnum<["draft", "published", "failed", "canceled"]>;
            decision: z.ZodEnum<["approved", "changes_requested", "blocked", "needs_review"]>;
            riskLevel: z.ZodEnum<["unknown", "low", "medium", "high", "critical"]>;
            summary: z.ZodOptional<z.ZodString>;
            checks: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
            findings: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
            proofItems: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
            artifacts: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
            sourceSnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            publishedAt: z.ZodOptional<z.ZodNumber>;
            createdAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            status: "failed" | "canceled" | "draft" | "published";
            id: string;
            title: string;
            decision: "blocked" | "approved" | "changes_requested" | "needs_review";
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            artifacts?: Record<string, unknown>[] | undefined;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            findings?: Record<string, unknown>[] | undefined;
            subject?: {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
            readinessTargetId?: string | undefined;
            planId?: string | undefined;
            sourceKey?: string | undefined;
            checks?: Record<string, unknown>[] | undefined;
            proofItems?: Record<string, unknown>[] | undefined;
            sourceSnapshot?: Record<string, unknown> | undefined;
            publishedAt?: number | undefined;
        }, {
            status: "failed" | "canceled" | "draft" | "published";
            id: string;
            title: string;
            decision: "blocked" | "approved" | "changes_requested" | "needs_review";
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            artifacts?: Record<string, unknown>[] | undefined;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            findings?: Record<string, unknown>[] | undefined;
            subject?: {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
            readinessTargetId?: string | undefined;
            planId?: string | undefined;
            sourceKey?: string | undefined;
            checks?: Record<string, unknown>[] | undefined;
            proofItems?: Record<string, unknown>[] | undefined;
            sourceSnapshot?: Record<string, unknown> | undefined;
            publishedAt?: number | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        status: "blocked" | "failed" | "running" | "canceled" | "draft" | "ready";
        id: string;
        title: string;
        kind: string;
        riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
        resourceId: string;
        workflowRunId?: string | undefined;
        summary?: string | undefined;
        createdAt?: number | undefined;
        repository?: string | undefined;
        metadata?: Record<string, unknown> | undefined;
        planId?: string | undefined;
        ownerUserId?: number | null | undefined;
        workflowDefinitionId?: string | undefined;
        baseBranch?: string | undefined;
        headBranch?: string | undefined;
        headSha?: string | undefined;
        externalUrl?: string | undefined;
        completedAt?: number | undefined;
        updatedAt?: number | undefined;
        reviewPackets?: {
            status: "failed" | "canceled" | "draft" | "published";
            id: string;
            title: string;
            decision: "blocked" | "approved" | "changes_requested" | "needs_review";
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            artifacts?: Record<string, unknown>[] | undefined;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            findings?: Record<string, unknown>[] | undefined;
            subject?: {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
            readinessTargetId?: string | undefined;
            planId?: string | undefined;
            sourceKey?: string | undefined;
            checks?: Record<string, unknown>[] | undefined;
            proofItems?: Record<string, unknown>[] | undefined;
            sourceSnapshot?: Record<string, unknown> | undefined;
            publishedAt?: number | undefined;
        }[] | undefined;
    }, {
        status: "blocked" | "failed" | "running" | "canceled" | "draft" | "ready";
        id: string;
        title: string;
        kind: string;
        riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
        resourceId: string;
        workflowRunId?: string | undefined;
        summary?: string | undefined;
        createdAt?: number | undefined;
        repository?: string | undefined;
        metadata?: Record<string, unknown> | undefined;
        planId?: string | undefined;
        ownerUserId?: number | null | undefined;
        workflowDefinitionId?: string | undefined;
        baseBranch?: string | undefined;
        headBranch?: string | undefined;
        headSha?: string | undefined;
        externalUrl?: string | undefined;
        completedAt?: number | undefined;
        updatedAt?: number | undefined;
        reviewPackets?: {
            status: "failed" | "canceled" | "draft" | "published";
            id: string;
            title: string;
            decision: "blocked" | "approved" | "changes_requested" | "needs_review";
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            artifacts?: Record<string, unknown>[] | undefined;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            findings?: Record<string, unknown>[] | undefined;
            subject?: {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
            readinessTargetId?: string | undefined;
            planId?: string | undefined;
            sourceKey?: string | undefined;
            checks?: Record<string, unknown>[] | undefined;
            proofItems?: Record<string, unknown>[] | undefined;
            sourceSnapshot?: Record<string, unknown> | undefined;
            publishedAt?: number | undefined;
        }[] | undefined;
    }>, "many">>;
    authorizationDecisions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        decisionKey: z.ZodOptional<z.ZodString>;
        subjectType: z.ZodOptional<z.ZodString>;
        subjectId: z.ZodOptional<z.ZodString>;
        action: z.ZodString;
        resourceType: z.ZodOptional<z.ZodString>;
        resourceId: z.ZodOptional<z.ZodString>;
        decision: z.ZodEnum<["allow", "deny", "require_approval", "quarantine", "weak_legacy_allow"]>;
        reason: z.ZodOptional<z.ZodString>;
        subjectSnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        resourceSnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        context: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        matchedRules: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        policySnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        decidedAt: z.ZodOptional<z.ZodNumber>;
        expiresAt: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        action: string;
        decision: "allow" | "deny" | "require_approval" | "quarantine" | "weak_legacy_allow";
        context?: Record<string, unknown> | undefined;
        payload?: Record<string, unknown> | undefined;
        reason?: string | undefined;
        matchedRules?: string[] | undefined;
        expiresAt?: number | undefined;
        subjectType?: string | undefined;
        subjectId?: string | undefined;
        resourceId?: string | undefined;
        decisionKey?: string | undefined;
        resourceType?: string | undefined;
        subjectSnapshot?: Record<string, unknown> | undefined;
        resourceSnapshot?: Record<string, unknown> | undefined;
        policySnapshot?: Record<string, unknown> | undefined;
        decidedAt?: number | undefined;
    }, {
        id: string;
        action: string;
        decision: "allow" | "deny" | "require_approval" | "quarantine" | "weak_legacy_allow";
        context?: Record<string, unknown> | undefined;
        payload?: Record<string, unknown> | undefined;
        reason?: string | undefined;
        matchedRules?: string[] | undefined;
        expiresAt?: number | undefined;
        subjectType?: string | undefined;
        subjectId?: string | undefined;
        resourceId?: string | undefined;
        decisionKey?: string | undefined;
        resourceType?: string | undefined;
        subjectSnapshot?: Record<string, unknown> | undefined;
        resourceSnapshot?: Record<string, unknown> | undefined;
        policySnapshot?: Record<string, unknown> | undefined;
        decidedAt?: number | undefined;
    }>, "many">>;
    evidencePackets: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        evidenceKey: z.ZodOptional<z.ZodString>;
        nodeId: z.ZodOptional<z.ZodString>;
        kind: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
        summary: z.ZodOptional<z.ZodString>;
        confidence: z.ZodOptional<z.ZodString>;
        visibility: z.ZodOptional<z.ZodString>;
        digest: z.ZodOptional<z.ZodString>;
        payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        occurredAt: z.ZodOptional<z.ZodNumber>;
        createdAt: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        kind: string;
        title?: string | undefined;
        nodeId?: string | undefined;
        summary?: string | undefined;
        confidence?: string | undefined;
        visibility?: string | undefined;
        createdAt?: number | undefined;
        payload?: Record<string, unknown> | undefined;
        occurredAt?: number | undefined;
        digest?: string | undefined;
        evidenceKey?: string | undefined;
    }, {
        id: string;
        kind: string;
        title?: string | undefined;
        nodeId?: string | undefined;
        summary?: string | undefined;
        confidence?: string | undefined;
        visibility?: string | undefined;
        createdAt?: number | undefined;
        payload?: Record<string, unknown> | undefined;
        occurredAt?: number | undefined;
        digest?: string | undefined;
        evidenceKey?: string | undefined;
    }>, "many">>;
    actionProposals: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        proposalKey: z.ZodOptional<z.ZodString>;
        nodeId: z.ZodOptional<z.ZodString>;
        adapter: z.ZodString;
        action: z.ZodString;
        state: z.ZodOptional<z.ZodString>;
        idempotencyKey: z.ZodOptional<z.ZodString>;
        proposalDigest: z.ZodOptional<z.ZodString>;
        evidenceRefs: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        policyEvaluation: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        proposedAt: z.ZodOptional<z.ZodNumber>;
        expiresAt: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        adapter: string;
        action: string;
        nodeId?: string | undefined;
        payload?: Record<string, unknown> | undefined;
        idempotencyKey?: string | undefined;
        proposalDigest?: string | undefined;
        evidenceRefs?: string[] | undefined;
        policyEvaluation?: Record<string, unknown> | undefined;
        state?: string | undefined;
        expiresAt?: number | undefined;
        proposalKey?: string | undefined;
        proposedAt?: number | undefined;
    }, {
        id: string;
        adapter: string;
        action: string;
        nodeId?: string | undefined;
        payload?: Record<string, unknown> | undefined;
        idempotencyKey?: string | undefined;
        proposalDigest?: string | undefined;
        evidenceRefs?: string[] | undefined;
        policyEvaluation?: Record<string, unknown> | undefined;
        state?: string | undefined;
        expiresAt?: number | undefined;
        proposalKey?: string | undefined;
        proposedAt?: number | undefined;
    }>, "many">>;
    approvalDecisions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        proposalKey: z.ZodOptional<z.ZodString>;
        decisionKey: z.ZodOptional<z.ZodString>;
        nodeId: z.ZodOptional<z.ZodString>;
        actorUserId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        subjectType: z.ZodOptional<z.ZodString>;
        subjectId: z.ZodOptional<z.ZodString>;
        subjectDigest: z.ZodOptional<z.ZodString>;
        decision: z.ZodEnum<["approve", "deny", "request_changes", "unknown"]>;
        reason: z.ZodOptional<z.ZodString>;
        actorSnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        decidedAt: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        decision: "unknown" | "deny" | "approve" | "request_changes";
        nodeId?: string | undefined;
        payload?: Record<string, unknown> | undefined;
        reason?: string | undefined;
        subjectType?: string | undefined;
        subjectId?: string | undefined;
        subjectDigest?: string | undefined;
        proposalKey?: string | undefined;
        decisionKey?: string | undefined;
        decidedAt?: number | undefined;
        actorUserId?: number | null | undefined;
        actorSnapshot?: Record<string, unknown> | undefined;
    }, {
        id: string;
        decision: "unknown" | "deny" | "approve" | "request_changes";
        nodeId?: string | undefined;
        payload?: Record<string, unknown> | undefined;
        reason?: string | undefined;
        subjectType?: string | undefined;
        subjectId?: string | undefined;
        subjectDigest?: string | undefined;
        proposalKey?: string | undefined;
        decisionKey?: string | undefined;
        decidedAt?: number | undefined;
        actorUserId?: number | null | undefined;
        actorSnapshot?: Record<string, unknown> | undefined;
    }>, "many">>;
    executionReceipts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        proposalKey: z.ZodOptional<z.ZodString>;
        decisionKey: z.ZodOptional<z.ZodString>;
        receiptKey: z.ZodOptional<z.ZodString>;
        adapter: z.ZodString;
        action: z.ZodString;
        status: z.ZodString;
        providerReference: z.ZodOptional<z.ZodString>;
        providerUrl: z.ZodOptional<z.ZodString>;
        idempotencyKey: z.ZodOptional<z.ZodString>;
        payloadDigest: z.ZodOptional<z.ZodString>;
        providerResponseDigest: z.ZodOptional<z.ZodString>;
        receiptDigest: z.ZodOptional<z.ZodString>;
        providerReconciliation: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        executedAt: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        status: string;
        id: string;
        adapter: string;
        action: string;
        payload?: Record<string, unknown> | undefined;
        idempotencyKey?: string | undefined;
        proposalKey?: string | undefined;
        providerReference?: string | undefined;
        providerUrl?: string | undefined;
        payloadDigest?: string | undefined;
        providerResponseDigest?: string | undefined;
        providerReconciliation?: Record<string, unknown> | undefined;
        executedAt?: number | undefined;
        decisionKey?: string | undefined;
        receiptKey?: string | undefined;
        receiptDigest?: string | undefined;
    }, {
        status: string;
        id: string;
        adapter: string;
        action: string;
        payload?: Record<string, unknown> | undefined;
        idempotencyKey?: string | undefined;
        proposalKey?: string | undefined;
        providerReference?: string | undefined;
        providerUrl?: string | undefined;
        payloadDigest?: string | undefined;
        providerResponseDigest?: string | undefined;
        providerReconciliation?: Record<string, unknown> | undefined;
        executedAt?: number | undefined;
        decisionKey?: string | undefined;
        receiptKey?: string | undefined;
        receiptDigest?: string | undefined;
    }>, "many">>;
    auditReceipts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        receiptKey: z.ZodOptional<z.ZodString>;
        eventType: z.ZodString;
        actorType: z.ZodOptional<z.ZodString>;
        actorId: z.ZodOptional<z.ZodString>;
        payloadDigest: z.ZodOptional<z.ZodString>;
        payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        occurredAt: z.ZodOptional<z.ZodNumber>;
        sequence: z.ZodOptional<z.ZodNumber>;
        previousReceiptDigest: z.ZodOptional<z.ZodString>;
        receiptDigest: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        eventType: string;
        payload?: Record<string, unknown> | undefined;
        occurredAt?: number | undefined;
        payloadDigest?: string | undefined;
        receiptKey?: string | undefined;
        receiptDigest?: string | undefined;
        actorType?: string | undefined;
        actorId?: string | undefined;
        sequence?: number | undefined;
        previousReceiptDigest?: string | undefined;
    }, {
        id: string;
        eventType: string;
        payload?: Record<string, unknown> | undefined;
        occurredAt?: number | undefined;
        payloadDigest?: string | undefined;
        receiptKey?: string | undefined;
        receiptDigest?: string | undefined;
        actorType?: string | undefined;
        actorId?: string | undefined;
        sequence?: number | undefined;
        previousReceiptDigest?: string | undefined;
    }>, "many">>;
    contextReceipts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        schema: z.ZodOptional<z.ZodLiteral<"viewport.context_receipt/v1">>;
        package: z.ZodOptional<z.ZodString>;
        packageName: z.ZodOptional<z.ZodString>;
        requested: z.ZodOptional<z.ZodString>;
        resolvedVersion: z.ZodOptional<z.ZodString>;
        provider: z.ZodOptional<z.ZodString>;
        digest: z.ZodOptional<z.ZodString>;
        freshness: z.ZodOptional<z.ZodString>;
        usedBy: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        resolvedAt: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
        payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "strip", z.ZodTypeAny, {
        schema?: "viewport.context_receipt/v1" | undefined;
        payload?: Record<string, unknown> | undefined;
        digest?: string | undefined;
        package?: string | undefined;
        requested?: string | undefined;
        resolvedVersion?: string | undefined;
        provider?: string | undefined;
        freshness?: string | undefined;
        usedBy?: Record<string, unknown> | undefined;
        resolvedAt?: string | number | undefined;
        packageName?: string | undefined;
    }, {
        schema?: "viewport.context_receipt/v1" | undefined;
        payload?: Record<string, unknown> | undefined;
        digest?: string | undefined;
        package?: string | undefined;
        requested?: string | undefined;
        resolvedVersion?: string | undefined;
        provider?: string | undefined;
        freshness?: string | undefined;
        usedBy?: Record<string, unknown> | undefined;
        resolvedAt?: string | number | undefined;
        packageName?: string | undefined;
    }>, "many">>;
    contractHealth: z.ZodOptional<z.ZodObject<{
        status: z.ZodEnum<["valid", "warning", "invalid", "unknown", "not_applicable"]>;
        summary: z.ZodObject<{
            evidencePackets: z.ZodNumber;
            actionProposals: z.ZodNumber;
            approvalDecisions: z.ZodNumber;
            executionReceipts: z.ZodNumber;
            auditReceipts: z.ZodNumber;
            issues: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            issues: number;
            evidencePackets: number;
            actionProposals: number;
            approvalDecisions: number;
            executionReceipts: number;
            auditReceipts: number;
        }, {
            issues: number;
            evidencePackets: number;
            actionProposals: number;
            approvalDecisions: number;
            executionReceipts: number;
            auditReceipts: number;
        }>;
        issues: z.ZodArray<z.ZodObject<{
            severity: z.ZodEnum<["warning", "error"]>;
            code: z.ZodString;
            message: z.ZodString;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        }, "strip", z.ZodTypeAny, {
            code: string;
            message: string;
            severity: "error" | "warning";
            metadata?: Record<string, unknown> | undefined;
        }, {
            code: string;
            message: string;
            severity: "error" | "warning";
            metadata?: Record<string, unknown> | undefined;
        }>, "many">;
        proposals: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">;
        auditChain: z.ZodObject<{
            status: z.ZodString;
            checked: z.ZodBoolean;
            receiptCount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            status: string;
            checked: boolean;
            receiptCount: number;
        }, {
            status: string;
            checked: boolean;
            receiptCount: number;
        }>;
        checkedAt: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        issues: {
            code: string;
            message: string;
            severity: "error" | "warning";
            metadata?: Record<string, unknown> | undefined;
        }[];
        status: "valid" | "unknown" | "warning" | "invalid" | "not_applicable";
        summary: {
            issues: number;
            evidencePackets: number;
            actionProposals: number;
            approvalDecisions: number;
            executionReceipts: number;
            auditReceipts: number;
        };
        proposals: Record<string, unknown>[];
        auditChain: {
            status: string;
            checked: boolean;
            receiptCount: number;
        };
        checkedAt?: number | undefined;
    }, {
        issues: {
            code: string;
            message: string;
            severity: "error" | "warning";
            metadata?: Record<string, unknown> | undefined;
        }[];
        status: "valid" | "unknown" | "warning" | "invalid" | "not_applicable";
        summary: {
            issues: number;
            evidencePackets: number;
            actionProposals: number;
            approvalDecisions: number;
            executionReceipts: number;
            auditReceipts: number;
        };
        proposals: Record<string, unknown>[];
        auditChain: {
            status: string;
            checked: boolean;
            receiptCount: number;
        };
        checkedAt?: number | undefined;
    }>>;
    resourceManifest: z.ZodOptional<z.ZodObject<{
        schema: z.ZodLiteral<"viewport.session_resource_manifest/v1">;
        manifestDigest: z.ZodString;
        workingDirectory: z.ZodString;
        configSources: z.ZodArray<z.ZodObject<{
            path: z.ZodString;
            digest: z.ZodString;
            version: z.ZodLiteral<1>;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            path: string;
            version: 1;
            digest: string;
            name?: string | undefined;
        }, {
            path: string;
            version: 1;
            digest: string;
            name?: string | undefined;
        }>, "many">;
        resources: z.ZodObject<{
            contexts: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                required: z.ZodBoolean;
                sourceConfigPath: z.ZodString;
                resolution: z.ZodEnum<["requested_unverified"]>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }, {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }>, "many">;
            workflows: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                required: z.ZodBoolean;
                sourceConfigPath: z.ZodString;
                resolution: z.ZodEnum<["requested_unverified"]>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }, {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }>, "many">;
            plans: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                required: z.ZodBoolean;
                sourceConfigPath: z.ZodString;
                resolution: z.ZodEnum<["requested_unverified"]>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }, {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }>, "many">;
            agentProfiles: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                required: z.ZodBoolean;
                sourceConfigPath: z.ZodString;
                resolution: z.ZodEnum<["requested_unverified"]>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }, {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            workflows: {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }[];
            contexts: {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }[];
            plans: {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }[];
            agentProfiles: {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }[];
        }, {
            workflows: {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }[];
            contexts: {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }[];
            plans: {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }[];
            agentProfiles: {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }[];
        }>;
        contract: z.ZodOptional<z.ZodObject<{
            contextProviders: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                provider: z.ZodEnum<["repo-docs", "viewport-vault", "notebooklm", "glean", "custom-cli", "custom-mcp"]>;
                required: z.ZodBoolean;
                privacy: z.ZodEnum<["local_only", "control_plane_blind", "third_party_terms", "customer_hosted", "unknown"]>;
                capabilities: z.ZodArray<z.ZodEnum<["search", "get", "propose", "write_approved"]>, "many">;
                sourceConfigPath: z.ZodString;
                vault: z.ZodOptional<z.ZodString>;
                paths: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                notebook: z.ZodOptional<z.ZodString>;
                command: z.ZodOptional<z.ZodString>;
                resolution: z.ZodEnum<["requested_unverified"]>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
                privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                capabilities: ("search" | "get" | "propose" | "write_approved")[];
                vault?: string | undefined;
                paths?: string[] | undefined;
                notebook?: string | undefined;
                command?: string | undefined;
            }, {
                id: string;
                provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
                privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                capabilities: ("search" | "get" | "propose" | "write_approved")[];
                vault?: string | undefined;
                paths?: string[] | undefined;
                notebook?: string | undefined;
                command?: string | undefined;
            }>, "many">;
            contextResolution: z.ZodObject<{
                order: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                sizeBudgetBytes: z.ZodOptional<z.ZodNumber>;
                strategy: z.ZodOptional<z.ZodEnum<["rank_by_recency_then_query", "pinned_then_recent", "provider_order"]>>;
            }, "strip", z.ZodTypeAny, {
                order?: string[] | undefined;
                sizeBudgetBytes?: number | undefined;
                strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
            }, {
                order?: string[] | undefined;
                sizeBudgetBytes?: number | undefined;
                strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
            }>;
            workflows: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                required: z.ZodBoolean;
                sourceConfigPath: z.ZodString;
                path: z.ZodOptional<z.ZodString>;
                resource: z.ZodOptional<z.ZodString>;
                version: z.ZodOptional<z.ZodString>;
                digest: z.ZodOptional<z.ZodString>;
                resolution: z.ZodEnum<["requested_unverified"]>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
                path?: string | undefined;
                resource?: string | undefined;
                version?: string | undefined;
                digest?: string | undefined;
            }, {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
                path?: string | undefined;
                resource?: string | undefined;
                version?: string | undefined;
                digest?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            workflows: {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
                path?: string | undefined;
                resource?: string | undefined;
                version?: string | undefined;
                digest?: string | undefined;
            }[];
            contextProviders: {
                id: string;
                provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
                privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                capabilities: ("search" | "get" | "propose" | "write_approved")[];
                vault?: string | undefined;
                paths?: string[] | undefined;
                notebook?: string | undefined;
                command?: string | undefined;
            }[];
            contextResolution: {
                order?: string[] | undefined;
                sizeBudgetBytes?: number | undefined;
                strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
            };
        }, {
            workflows: {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
                path?: string | undefined;
                resource?: string | undefined;
                version?: string | undefined;
                digest?: string | undefined;
            }[];
            contextProviders: {
                id: string;
                provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
                privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                capabilities: ("search" | "get" | "propose" | "write_approved")[];
                vault?: string | undefined;
                paths?: string[] | undefined;
                notebook?: string | undefined;
                command?: string | undefined;
            }[];
            contextResolution: {
                order?: string[] | undefined;
                sizeBudgetBytes?: number | undefined;
                strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
            };
        }>>;
        conflicts: z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            values: z.ZodArray<z.ZodObject<{
                value: z.ZodString;
                sourceConfigPath: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                sourceConfigPath: string;
            }, {
                value: string;
                sourceConfigPath: string;
            }>, "many">;
            resolution: z.ZodLiteral<"requires_user_selection">;
        }, "strip", z.ZodTypeAny, {
            values: {
                value: string;
                sourceConfigPath: string;
            }[];
            resolution: "requires_user_selection";
            field: string;
        }, {
            values: {
                value: string;
                sourceConfigPath: string;
            }[];
            resolution: "requires_user_selection";
            field: string;
        }>, "many">;
        warnings: z.ZodArray<z.ZodObject<{
            code: z.ZodString;
            message: z.ZodString;
            path: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            code: string;
            message: string;
            path?: string | undefined;
        }, {
            code: string;
            message: string;
            path?: string | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        schema: "viewport.session_resource_manifest/v1";
        manifestDigest: string;
        workingDirectory: string;
        configSources: {
            path: string;
            version: 1;
            digest: string;
            name?: string | undefined;
        }[];
        resources: {
            workflows: {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }[];
            contexts: {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }[];
            plans: {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }[];
            agentProfiles: {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }[];
        };
        conflicts: {
            values: {
                value: string;
                sourceConfigPath: string;
            }[];
            resolution: "requires_user_selection";
            field: string;
        }[];
        warnings: {
            code: string;
            message: string;
            path?: string | undefined;
        }[];
        contract?: {
            workflows: {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
                path?: string | undefined;
                resource?: string | undefined;
                version?: string | undefined;
                digest?: string | undefined;
            }[];
            contextProviders: {
                id: string;
                provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
                privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                capabilities: ("search" | "get" | "propose" | "write_approved")[];
                vault?: string | undefined;
                paths?: string[] | undefined;
                notebook?: string | undefined;
                command?: string | undefined;
            }[];
            contextResolution: {
                order?: string[] | undefined;
                sizeBudgetBytes?: number | undefined;
                strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
            };
        } | undefined;
    }, {
        schema: "viewport.session_resource_manifest/v1";
        manifestDigest: string;
        workingDirectory: string;
        configSources: {
            path: string;
            version: 1;
            digest: string;
            name?: string | undefined;
        }[];
        resources: {
            workflows: {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }[];
            contexts: {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }[];
            plans: {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }[];
            agentProfiles: {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }[];
        };
        conflicts: {
            values: {
                value: string;
                sourceConfigPath: string;
            }[];
            resolution: "requires_user_selection";
            field: string;
        }[];
        warnings: {
            code: string;
            message: string;
            path?: string | undefined;
        }[];
        contract?: {
            workflows: {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
                path?: string | undefined;
                resource?: string | undefined;
                version?: string | undefined;
                digest?: string | undefined;
            }[];
            contextProviders: {
                id: string;
                provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
                privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                capabilities: ("search" | "get" | "propose" | "write_approved")[];
                vault?: string | undefined;
                paths?: string[] | undefined;
                notebook?: string | undefined;
                command?: string | undefined;
            }[];
            contextResolution: {
                order?: string[] | undefined;
                sizeBudgetBytes?: number | undefined;
                strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
            };
        } | undefined;
    }>>;
    events: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        runId: z.ZodString;
        timestamp: z.ZodNumber;
        type: z.ZodString;
        severity: z.ZodOptional<z.ZodEnum<["debug", "info", "warning", "error"]>>;
        nodeId: z.ZodOptional<z.ZodString>;
        message: z.ZodString;
        data: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "strip", z.ZodTypeAny, {
        message: string;
        type: string;
        id: string;
        runId: string;
        timestamp: number;
        nodeId?: string | undefined;
        severity?: "error" | "debug" | "info" | "warning" | undefined;
        data?: Record<string, unknown> | undefined;
    }, {
        message: string;
        type: string;
        id: string;
        runId: string;
        timestamp: number;
        nodeId?: string | undefined;
        severity?: "error" | "debug" | "info" | "warning" | undefined;
        data?: Record<string, unknown> | undefined;
    }>, "many">;
    createdAt: z.ZodNumber;
    startedAt: z.ZodOptional<z.ZodNumber>;
    updatedAt: z.ZodNumber;
    completedAt: z.ZodOptional<z.ZodNumber>;
    error: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled";
    schema: string;
    id: string;
    createdAt: number;
    digest: string;
    updatedAt: number;
    workflowName: string;
    sourceType: "local_file" | "viewport_snapshot" | "local_modified";
    yamlSnapshot: string;
    directoryId: string;
    directoryPath: string;
    machineId: string;
    initiation: "cli" | "browser" | "agent_skill";
    inputs: Record<string, WorkflowInputValue>;
    preflight: {
        issues: {
            message: string;
            kind: "agent" | "tool" | "node";
            name: string;
        }[];
        ok: boolean;
    };
    nodes: Record<string, {
        type: "agent" | "context" | "action" | "approval" | "prompt" | "shell" | "plan" | "gate" | "loop" | "subflow" | "condition" | "artifact";
        status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled" | "skipped";
        id: string;
        title?: string | undefined;
        error?: string | undefined;
        approval?: {
            prompt: string;
            requestedAt: number;
            executionGrant?: Record<string, unknown> | undefined;
            message?: string | undefined;
            decision?: "approve" | "request_changes" | "reject" | undefined;
            actor?: {
                source?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                email?: string | undefined;
            } | undefined;
            resolvedAt?: number | undefined;
            approved?: boolean | undefined;
            feedback?: Record<string, unknown> | undefined;
        } | undefined;
        metadata?: Record<string, unknown> | undefined;
        completedAt?: number | undefined;
        startedAt?: number | undefined;
        sessionId?: string | undefined;
        nativeSessionId?: string | undefined;
        worktreePath?: string | undefined;
        output?: string | undefined;
        exitCode?: number | undefined;
        outputs?: Record<string, unknown> | undefined;
        transcriptExcerpt?: {
            text: string;
            role: "user" | "assistant";
        }[] | undefined;
        iterations?: {
            status: "failed" | "running" | "completed" | "canceled" | "skipped";
            startedAt: number;
            index: number;
            error?: string | undefined;
            completedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
            exitCode?: number | undefined;
            item?: unknown;
        }[] | undefined;
        inlineAgents?: Record<string, {
            status: "failed" | "queued" | "running" | "completed" | "canceled";
            id: string;
            title?: string | undefined;
            agent?: string | undefined;
            error?: string | undefined;
            completedAt?: number | undefined;
            model?: string | undefined;
            startedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
        }> | undefined;
    }>;
    events: {
        message: string;
        type: string;
        id: string;
        runId: string;
        timestamp: number;
        nodeId?: string | undefined;
        severity?: "error" | "debug" | "info" | "warning" | undefined;
        data?: Record<string, unknown> | undefined;
    }[];
    artifacts?: {
        path: string;
        id: string;
        nodeId: string;
        createdAt: number;
        runId: string;
        name: string;
        kind?: string | undefined;
        digest?: string | undefined;
        description?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: Record<string, unknown> | undefined;
    }[] | undefined;
    error?: string | undefined;
    contextReceipts?: {
        schema?: "viewport.context_receipt/v1" | undefined;
        payload?: Record<string, unknown> | undefined;
        digest?: string | undefined;
        package?: string | undefined;
        requested?: string | undefined;
        resolvedVersion?: string | undefined;
        provider?: string | undefined;
        freshness?: string | undefined;
        usedBy?: Record<string, unknown> | undefined;
        resolvedAt?: string | number | undefined;
        packageName?: string | undefined;
    }[] | undefined;
    resourceId?: string | undefined;
    workflowDefinitionId?: string | undefined;
    completedAt?: number | undefined;
    reviewPackets?: {
        status: "failed" | "canceled" | "draft" | "published";
        id: string;
        title: string;
        decision: "blocked" | "approved" | "changes_requested" | "needs_review";
        riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
        artifacts?: Record<string, unknown>[] | undefined;
        workflowRunId?: string | undefined;
        summary?: string | undefined;
        createdAt?: number | undefined;
        findings?: Record<string, unknown>[] | undefined;
        subject?: {
            type: string;
            id?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            label?: string | undefined;
            uri?: string | undefined;
        } | undefined;
        metadata?: Record<string, unknown> | undefined;
        artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
        readinessTargetId?: string | undefined;
        planId?: string | undefined;
        sourceKey?: string | undefined;
        checks?: Record<string, unknown>[] | undefined;
        proofItems?: Record<string, unknown>[] | undefined;
        sourceSnapshot?: Record<string, unknown> | undefined;
        publishedAt?: number | undefined;
    }[] | undefined;
    evidencePackets?: {
        id: string;
        kind: string;
        title?: string | undefined;
        nodeId?: string | undefined;
        summary?: string | undefined;
        confidence?: string | undefined;
        visibility?: string | undefined;
        createdAt?: number | undefined;
        payload?: Record<string, unknown> | undefined;
        occurredAt?: number | undefined;
        digest?: string | undefined;
        evidenceKey?: string | undefined;
    }[] | undefined;
    actionProposals?: {
        id: string;
        adapter: string;
        action: string;
        nodeId?: string | undefined;
        payload?: Record<string, unknown> | undefined;
        idempotencyKey?: string | undefined;
        proposalDigest?: string | undefined;
        evidenceRefs?: string[] | undefined;
        policyEvaluation?: Record<string, unknown> | undefined;
        state?: string | undefined;
        expiresAt?: number | undefined;
        proposalKey?: string | undefined;
        proposedAt?: number | undefined;
    }[] | undefined;
    approvalDecisions?: {
        id: string;
        decision: "unknown" | "deny" | "approve" | "request_changes";
        nodeId?: string | undefined;
        payload?: Record<string, unknown> | undefined;
        reason?: string | undefined;
        subjectType?: string | undefined;
        subjectId?: string | undefined;
        subjectDigest?: string | undefined;
        proposalKey?: string | undefined;
        decisionKey?: string | undefined;
        decidedAt?: number | undefined;
        actorUserId?: number | null | undefined;
        actorSnapshot?: Record<string, unknown> | undefined;
    }[] | undefined;
    executionReceipts?: {
        status: string;
        id: string;
        adapter: string;
        action: string;
        payload?: Record<string, unknown> | undefined;
        idempotencyKey?: string | undefined;
        proposalKey?: string | undefined;
        providerReference?: string | undefined;
        providerUrl?: string | undefined;
        payloadDigest?: string | undefined;
        providerResponseDigest?: string | undefined;
        providerReconciliation?: Record<string, unknown> | undefined;
        executedAt?: number | undefined;
        decisionKey?: string | undefined;
        receiptKey?: string | undefined;
        receiptDigest?: string | undefined;
    }[] | undefined;
    auditReceipts?: {
        id: string;
        eventType: string;
        payload?: Record<string, unknown> | undefined;
        occurredAt?: number | undefined;
        payloadDigest?: string | undefined;
        receiptKey?: string | undefined;
        receiptDigest?: string | undefined;
        actorType?: string | undefined;
        actorId?: string | undefined;
        sequence?: number | undefined;
        previousReceiptDigest?: string | undefined;
    }[] | undefined;
    startedAt?: number | undefined;
    workflowTitle?: string | undefined;
    workflowVersionId?: string | undefined;
    rerunOfWorkflowRunId?: string | undefined;
    sourcePath?: string | undefined;
    runtimeTargetId?: string | undefined;
    managedExecutorId?: string | undefined;
    executorTarget?: "local_machine" | "managed_executor" | undefined;
    assignmentStatus?: string | undefined;
    platformRunId?: string | undefined;
    executorAgent?: string | undefined;
    executorModel?: string | undefined;
    executionPolicy?: {
        mode: "current_tree" | "isolated_worktree" | "named_branch";
        branch?: string | undefined;
    } | undefined;
    dataCapturePolicy?: {
        transcripts: "none" | "excerpt";
        logs: "metadata" | "content";
        artifacts: "metadata" | "local_reference";
    } | undefined;
    readinessTargets?: {
        status: "blocked" | "failed" | "running" | "canceled" | "draft" | "ready";
        id: string;
        title: string;
        kind: string;
        riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
        resourceId: string;
        workflowRunId?: string | undefined;
        summary?: string | undefined;
        createdAt?: number | undefined;
        repository?: string | undefined;
        metadata?: Record<string, unknown> | undefined;
        planId?: string | undefined;
        ownerUserId?: number | null | undefined;
        workflowDefinitionId?: string | undefined;
        baseBranch?: string | undefined;
        headBranch?: string | undefined;
        headSha?: string | undefined;
        externalUrl?: string | undefined;
        completedAt?: number | undefined;
        updatedAt?: number | undefined;
        reviewPackets?: {
            status: "failed" | "canceled" | "draft" | "published";
            id: string;
            title: string;
            decision: "blocked" | "approved" | "changes_requested" | "needs_review";
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            artifacts?: Record<string, unknown>[] | undefined;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            findings?: Record<string, unknown>[] | undefined;
            subject?: {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
            readinessTargetId?: string | undefined;
            planId?: string | undefined;
            sourceKey?: string | undefined;
            checks?: Record<string, unknown>[] | undefined;
            proofItems?: Record<string, unknown>[] | undefined;
            sourceSnapshot?: Record<string, unknown> | undefined;
            publishedAt?: number | undefined;
        }[] | undefined;
    }[] | undefined;
    authorizationDecisions?: {
        id: string;
        action: string;
        decision: "allow" | "deny" | "require_approval" | "quarantine" | "weak_legacy_allow";
        context?: Record<string, unknown> | undefined;
        payload?: Record<string, unknown> | undefined;
        reason?: string | undefined;
        matchedRules?: string[] | undefined;
        expiresAt?: number | undefined;
        subjectType?: string | undefined;
        subjectId?: string | undefined;
        resourceId?: string | undefined;
        decisionKey?: string | undefined;
        resourceType?: string | undefined;
        subjectSnapshot?: Record<string, unknown> | undefined;
        resourceSnapshot?: Record<string, unknown> | undefined;
        policySnapshot?: Record<string, unknown> | undefined;
        decidedAt?: number | undefined;
    }[] | undefined;
    contractHealth?: {
        issues: {
            code: string;
            message: string;
            severity: "error" | "warning";
            metadata?: Record<string, unknown> | undefined;
        }[];
        status: "valid" | "unknown" | "warning" | "invalid" | "not_applicable";
        summary: {
            issues: number;
            evidencePackets: number;
            actionProposals: number;
            approvalDecisions: number;
            executionReceipts: number;
            auditReceipts: number;
        };
        proposals: Record<string, unknown>[];
        auditChain: {
            status: string;
            checked: boolean;
            receiptCount: number;
        };
        checkedAt?: number | undefined;
    } | undefined;
    resourceManifest?: {
        schema: "viewport.session_resource_manifest/v1";
        manifestDigest: string;
        workingDirectory: string;
        configSources: {
            path: string;
            version: 1;
            digest: string;
            name?: string | undefined;
        }[];
        resources: {
            workflows: {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }[];
            contexts: {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }[];
            plans: {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }[];
            agentProfiles: {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }[];
        };
        conflicts: {
            values: {
                value: string;
                sourceConfigPath: string;
            }[];
            resolution: "requires_user_selection";
            field: string;
        }[];
        warnings: {
            code: string;
            message: string;
            path?: string | undefined;
        }[];
        contract?: {
            workflows: {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
                path?: string | undefined;
                resource?: string | undefined;
                version?: string | undefined;
                digest?: string | undefined;
            }[];
            contextProviders: {
                id: string;
                provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
                privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                capabilities: ("search" | "get" | "propose" | "write_approved")[];
                vault?: string | undefined;
                paths?: string[] | undefined;
                notebook?: string | undefined;
                command?: string | undefined;
            }[];
            contextResolution: {
                order?: string[] | undefined;
                sizeBudgetBytes?: number | undefined;
                strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
            };
        } | undefined;
    } | undefined;
}, {
    status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled";
    schema: string;
    id: string;
    createdAt: number;
    digest: string;
    updatedAt: number;
    workflowName: string;
    sourceType: "local_file" | "viewport_snapshot" | "local_modified";
    yamlSnapshot: string;
    directoryId: string;
    directoryPath: string;
    machineId: string;
    initiation: "cli" | "browser" | "agent_skill";
    inputs: Record<string, WorkflowInputValue>;
    preflight: {
        issues: {
            message: string;
            kind: "agent" | "tool" | "node";
            name: string;
        }[];
        ok: boolean;
    };
    nodes: Record<string, {
        type: "agent" | "context" | "action" | "approval" | "prompt" | "shell" | "plan" | "gate" | "loop" | "subflow" | "condition" | "artifact";
        status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled" | "skipped";
        id: string;
        title?: string | undefined;
        error?: string | undefined;
        approval?: {
            prompt: string;
            requestedAt: number;
            executionGrant?: Record<string, unknown> | undefined;
            message?: string | undefined;
            decision?: "approve" | "request_changes" | "reject" | undefined;
            actor?: {
                source?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                email?: string | undefined;
            } | undefined;
            resolvedAt?: number | undefined;
            approved?: boolean | undefined;
            feedback?: Record<string, unknown> | undefined;
        } | undefined;
        metadata?: Record<string, unknown> | undefined;
        completedAt?: number | undefined;
        startedAt?: number | undefined;
        sessionId?: string | undefined;
        nativeSessionId?: string | undefined;
        worktreePath?: string | undefined;
        output?: string | undefined;
        exitCode?: number | undefined;
        outputs?: Record<string, unknown> | undefined;
        transcriptExcerpt?: {
            text: string;
            role: "user" | "assistant";
        }[] | undefined;
        iterations?: {
            status: "failed" | "running" | "completed" | "canceled" | "skipped";
            startedAt: number;
            index: number;
            error?: string | undefined;
            completedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
            exitCode?: number | undefined;
            item?: unknown;
        }[] | undefined;
        inlineAgents?: Record<string, {
            status: "failed" | "queued" | "running" | "completed" | "canceled";
            id: string;
            title?: string | undefined;
            agent?: string | undefined;
            error?: string | undefined;
            completedAt?: number | undefined;
            model?: string | undefined;
            startedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
        }> | undefined;
    }>;
    events: {
        message: string;
        type: string;
        id: string;
        runId: string;
        timestamp: number;
        nodeId?: string | undefined;
        severity?: "error" | "debug" | "info" | "warning" | undefined;
        data?: Record<string, unknown> | undefined;
    }[];
    artifacts?: {
        path: string;
        id: string;
        nodeId: string;
        createdAt: number;
        runId: string;
        name: string;
        kind?: string | undefined;
        digest?: string | undefined;
        description?: string | undefined;
        sizeBytes?: number | undefined;
        metadata?: Record<string, unknown> | undefined;
    }[] | undefined;
    error?: string | undefined;
    contextReceipts?: {
        schema?: "viewport.context_receipt/v1" | undefined;
        payload?: Record<string, unknown> | undefined;
        digest?: string | undefined;
        package?: string | undefined;
        requested?: string | undefined;
        resolvedVersion?: string | undefined;
        provider?: string | undefined;
        freshness?: string | undefined;
        usedBy?: Record<string, unknown> | undefined;
        resolvedAt?: string | number | undefined;
        packageName?: string | undefined;
    }[] | undefined;
    resourceId?: string | undefined;
    workflowDefinitionId?: string | undefined;
    completedAt?: number | undefined;
    reviewPackets?: {
        status: "failed" | "canceled" | "draft" | "published";
        id: string;
        title: string;
        decision: "blocked" | "approved" | "changes_requested" | "needs_review";
        riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
        artifacts?: Record<string, unknown>[] | undefined;
        workflowRunId?: string | undefined;
        summary?: string | undefined;
        createdAt?: number | undefined;
        findings?: Record<string, unknown>[] | undefined;
        subject?: {
            type: string;
            id?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            label?: string | undefined;
            uri?: string | undefined;
        } | undefined;
        metadata?: Record<string, unknown> | undefined;
        artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
        readinessTargetId?: string | undefined;
        planId?: string | undefined;
        sourceKey?: string | undefined;
        checks?: Record<string, unknown>[] | undefined;
        proofItems?: Record<string, unknown>[] | undefined;
        sourceSnapshot?: Record<string, unknown> | undefined;
        publishedAt?: number | undefined;
    }[] | undefined;
    evidencePackets?: {
        id: string;
        kind: string;
        title?: string | undefined;
        nodeId?: string | undefined;
        summary?: string | undefined;
        confidence?: string | undefined;
        visibility?: string | undefined;
        createdAt?: number | undefined;
        payload?: Record<string, unknown> | undefined;
        occurredAt?: number | undefined;
        digest?: string | undefined;
        evidenceKey?: string | undefined;
    }[] | undefined;
    actionProposals?: {
        id: string;
        adapter: string;
        action: string;
        nodeId?: string | undefined;
        payload?: Record<string, unknown> | undefined;
        idempotencyKey?: string | undefined;
        proposalDigest?: string | undefined;
        evidenceRefs?: string[] | undefined;
        policyEvaluation?: Record<string, unknown> | undefined;
        state?: string | undefined;
        expiresAt?: number | undefined;
        proposalKey?: string | undefined;
        proposedAt?: number | undefined;
    }[] | undefined;
    approvalDecisions?: {
        id: string;
        decision: "unknown" | "deny" | "approve" | "request_changes";
        nodeId?: string | undefined;
        payload?: Record<string, unknown> | undefined;
        reason?: string | undefined;
        subjectType?: string | undefined;
        subjectId?: string | undefined;
        subjectDigest?: string | undefined;
        proposalKey?: string | undefined;
        decisionKey?: string | undefined;
        decidedAt?: number | undefined;
        actorUserId?: number | null | undefined;
        actorSnapshot?: Record<string, unknown> | undefined;
    }[] | undefined;
    executionReceipts?: {
        status: string;
        id: string;
        adapter: string;
        action: string;
        payload?: Record<string, unknown> | undefined;
        idempotencyKey?: string | undefined;
        proposalKey?: string | undefined;
        providerReference?: string | undefined;
        providerUrl?: string | undefined;
        payloadDigest?: string | undefined;
        providerResponseDigest?: string | undefined;
        providerReconciliation?: Record<string, unknown> | undefined;
        executedAt?: number | undefined;
        decisionKey?: string | undefined;
        receiptKey?: string | undefined;
        receiptDigest?: string | undefined;
    }[] | undefined;
    auditReceipts?: {
        id: string;
        eventType: string;
        payload?: Record<string, unknown> | undefined;
        occurredAt?: number | undefined;
        payloadDigest?: string | undefined;
        receiptKey?: string | undefined;
        receiptDigest?: string | undefined;
        actorType?: string | undefined;
        actorId?: string | undefined;
        sequence?: number | undefined;
        previousReceiptDigest?: string | undefined;
    }[] | undefined;
    startedAt?: number | undefined;
    workflowTitle?: string | undefined;
    workflowVersionId?: string | undefined;
    rerunOfWorkflowRunId?: string | undefined;
    sourcePath?: string | undefined;
    runtimeTargetId?: string | undefined;
    managedExecutorId?: string | undefined;
    executorTarget?: "local_machine" | "managed_executor" | undefined;
    assignmentStatus?: string | undefined;
    platformRunId?: string | undefined;
    executorAgent?: string | undefined;
    executorModel?: string | undefined;
    executionPolicy?: {
        mode: "current_tree" | "isolated_worktree" | "named_branch";
        branch?: string | undefined;
    } | undefined;
    dataCapturePolicy?: {
        transcripts: "none" | "excerpt";
        logs: "metadata" | "content";
        artifacts: "metadata" | "local_reference";
    } | undefined;
    readinessTargets?: {
        status: "blocked" | "failed" | "running" | "canceled" | "draft" | "ready";
        id: string;
        title: string;
        kind: string;
        riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
        resourceId: string;
        workflowRunId?: string | undefined;
        summary?: string | undefined;
        createdAt?: number | undefined;
        repository?: string | undefined;
        metadata?: Record<string, unknown> | undefined;
        planId?: string | undefined;
        ownerUserId?: number | null | undefined;
        workflowDefinitionId?: string | undefined;
        baseBranch?: string | undefined;
        headBranch?: string | undefined;
        headSha?: string | undefined;
        externalUrl?: string | undefined;
        completedAt?: number | undefined;
        updatedAt?: number | undefined;
        reviewPackets?: {
            status: "failed" | "canceled" | "draft" | "published";
            id: string;
            title: string;
            decision: "blocked" | "approved" | "changes_requested" | "needs_review";
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            artifacts?: Record<string, unknown>[] | undefined;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            findings?: Record<string, unknown>[] | undefined;
            subject?: {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
            readinessTargetId?: string | undefined;
            planId?: string | undefined;
            sourceKey?: string | undefined;
            checks?: Record<string, unknown>[] | undefined;
            proofItems?: Record<string, unknown>[] | undefined;
            sourceSnapshot?: Record<string, unknown> | undefined;
            publishedAt?: number | undefined;
        }[] | undefined;
    }[] | undefined;
    authorizationDecisions?: {
        id: string;
        action: string;
        decision: "allow" | "deny" | "require_approval" | "quarantine" | "weak_legacy_allow";
        context?: Record<string, unknown> | undefined;
        payload?: Record<string, unknown> | undefined;
        reason?: string | undefined;
        matchedRules?: string[] | undefined;
        expiresAt?: number | undefined;
        subjectType?: string | undefined;
        subjectId?: string | undefined;
        resourceId?: string | undefined;
        decisionKey?: string | undefined;
        resourceType?: string | undefined;
        subjectSnapshot?: Record<string, unknown> | undefined;
        resourceSnapshot?: Record<string, unknown> | undefined;
        policySnapshot?: Record<string, unknown> | undefined;
        decidedAt?: number | undefined;
    }[] | undefined;
    contractHealth?: {
        issues: {
            code: string;
            message: string;
            severity: "error" | "warning";
            metadata?: Record<string, unknown> | undefined;
        }[];
        status: "valid" | "unknown" | "warning" | "invalid" | "not_applicable";
        summary: {
            issues: number;
            evidencePackets: number;
            actionProposals: number;
            approvalDecisions: number;
            executionReceipts: number;
            auditReceipts: number;
        };
        proposals: Record<string, unknown>[];
        auditChain: {
            status: string;
            checked: boolean;
            receiptCount: number;
        };
        checkedAt?: number | undefined;
    } | undefined;
    resourceManifest?: {
        schema: "viewport.session_resource_manifest/v1";
        manifestDigest: string;
        workingDirectory: string;
        configSources: {
            path: string;
            version: 1;
            digest: string;
            name?: string | undefined;
        }[];
        resources: {
            workflows: {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }[];
            contexts: {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }[];
            plans: {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }[];
            agentProfiles: {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
            }[];
        };
        conflicts: {
            values: {
                value: string;
                sourceConfigPath: string;
            }[];
            resolution: "requires_user_selection";
            field: string;
        }[];
        warnings: {
            code: string;
            message: string;
            path?: string | undefined;
        }[];
        contract?: {
            workflows: {
                id: string;
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
                path?: string | undefined;
                resource?: string | undefined;
                version?: string | undefined;
                digest?: string | undefined;
            }[];
            contextProviders: {
                id: string;
                provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                required: boolean;
                sourceConfigPath: string;
                resolution: "requested_unverified";
                privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                capabilities: ("search" | "get" | "propose" | "write_approved")[];
                vault?: string | undefined;
                paths?: string[] | undefined;
                notebook?: string | undefined;
                command?: string | undefined;
            }[];
            contextResolution: {
                order?: string[] | undefined;
                sizeBudgetBytes?: number | undefined;
                strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
            };
        } | undefined;
    } | undefined;
}>;
export declare const WorkflowRunsMessageSchema: z.ZodObject<{
    type: z.ZodLiteral<"workflow-runs">;
    runs: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        workflowName: z.ZodString;
        workflowTitle: z.ZodOptional<z.ZodString>;
        workflowDefinitionId: z.ZodOptional<z.ZodString>;
        workflowVersionId: z.ZodOptional<z.ZodString>;
        rerunOfWorkflowRunId: z.ZodOptional<z.ZodString>;
        sourceType: z.ZodEnum<["local_file", "viewport_snapshot", "local_modified"]>;
        sourcePath: z.ZodOptional<z.ZodString>;
        digest: z.ZodString;
        schema: z.ZodString;
        yamlSnapshot: z.ZodString;
        directoryId: z.ZodString;
        directoryPath: z.ZodString;
        resourceId: z.ZodOptional<z.ZodString>;
        runtimeTargetId: z.ZodOptional<z.ZodString>;
        managedExecutorId: z.ZodOptional<z.ZodString>;
        executorTarget: z.ZodOptional<z.ZodEnum<["local_machine", "managed_executor"]>>;
        assignmentStatus: z.ZodOptional<z.ZodString>;
        platformRunId: z.ZodOptional<z.ZodString>;
        machineId: z.ZodString;
        executorAgent: z.ZodOptional<z.ZodString>;
        executorModel: z.ZodOptional<z.ZodString>;
        executionPolicy: z.ZodOptional<z.ZodObject<{
            mode: z.ZodEnum<["current_tree", "isolated_worktree", "named_branch"]>;
            branch: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            mode: "current_tree" | "isolated_worktree" | "named_branch";
            branch?: string | undefined;
        }, {
            mode: "current_tree" | "isolated_worktree" | "named_branch";
            branch?: string | undefined;
        }>>;
        dataCapturePolicy: z.ZodOptional<z.ZodObject<{
            transcripts: z.ZodEnum<["none", "excerpt"]>;
            logs: z.ZodEnum<["metadata", "content"]>;
            artifacts: z.ZodEnum<["metadata", "local_reference"]>;
        }, "strip", z.ZodTypeAny, {
            transcripts: "none" | "excerpt";
            logs: "metadata" | "content";
            artifacts: "metadata" | "local_reference";
        }, {
            transcripts: "none" | "excerpt";
            logs: "metadata" | "content";
            artifacts: "metadata" | "local_reference";
        }>>;
        initiation: z.ZodEnum<["cli", "browser", "agent_skill"]>;
        status: z.ZodEnum<["queued", "running", "blocked", "completed", "failed", "canceled"]>;
        inputs: z.ZodRecord<z.ZodString, z.ZodType<WorkflowInputValue, z.ZodTypeDef, WorkflowInputValue>>;
        preflight: z.ZodObject<{
            ok: z.ZodBoolean;
            issues: z.ZodArray<z.ZodObject<{
                kind: z.ZodEnum<["agent", "tool", "node"]>;
                name: z.ZodString;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }, {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            issues: {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }[];
            ok: boolean;
        }, {
            issues: {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }[];
            ok: boolean;
        }>;
        nodes: z.ZodRecord<z.ZodString, z.ZodObject<{
            id: z.ZodString;
            type: z.ZodEnum<["prompt", "shell", "approval", "plan", "gate", "loop", "subflow", "agent", "context", "condition", "artifact", "action"]>;
            title: z.ZodOptional<z.ZodString>;
            status: z.ZodEnum<["queued", "running", "blocked", "completed", "failed", "skipped", "canceled"]>;
            startedAt: z.ZodOptional<z.ZodNumber>;
            completedAt: z.ZodOptional<z.ZodNumber>;
            sessionId: z.ZodOptional<z.ZodString>;
            nativeSessionId: z.ZodOptional<z.ZodString>;
            worktreePath: z.ZodOptional<z.ZodString>;
            output: z.ZodOptional<z.ZodString>;
            outputs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            transcriptExcerpt: z.ZodOptional<z.ZodArray<z.ZodObject<{
                role: z.ZodEnum<["user", "assistant"]>;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                text: string;
                role: "user" | "assistant";
            }, {
                text: string;
                role: "user" | "assistant";
            }>, "many">>;
            exitCode: z.ZodOptional<z.ZodNumber>;
            error: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            approval: z.ZodOptional<z.ZodObject<{
                prompt: z.ZodString;
                requestedAt: z.ZodNumber;
                resolvedAt: z.ZodOptional<z.ZodNumber>;
                approved: z.ZodOptional<z.ZodBoolean>;
                decision: z.ZodOptional<z.ZodEnum<["approve", "request_changes", "reject"]>>;
                message: z.ZodOptional<z.ZodString>;
                actor: z.ZodOptional<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    name: z.ZodOptional<z.ZodString>;
                    email: z.ZodOptional<z.ZodString>;
                    source: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                }, {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                }>>;
                feedback: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                executionGrant: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            }, "strip", z.ZodTypeAny, {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            }, {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            }>>;
            iterations: z.ZodOptional<z.ZodArray<z.ZodObject<{
                index: z.ZodNumber;
                status: z.ZodEnum<["running", "completed", "failed", "skipped", "canceled"]>;
                startedAt: z.ZodNumber;
                completedAt: z.ZodOptional<z.ZodNumber>;
                sessionId: z.ZodOptional<z.ZodString>;
                nativeSessionId: z.ZodOptional<z.ZodString>;
                worktreePath: z.ZodOptional<z.ZodString>;
                output: z.ZodOptional<z.ZodString>;
                exitCode: z.ZodOptional<z.ZodNumber>;
                error: z.ZodOptional<z.ZodString>;
                item: z.ZodOptional<z.ZodUnknown>;
            }, "strip", z.ZodTypeAny, {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }, {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }>, "many">>;
            inlineAgents: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                id: z.ZodString;
                title: z.ZodOptional<z.ZodString>;
                agent: z.ZodOptional<z.ZodString>;
                model: z.ZodOptional<z.ZodString>;
                status: z.ZodEnum<["queued", "running", "completed", "failed", "canceled"]>;
                startedAt: z.ZodOptional<z.ZodNumber>;
                completedAt: z.ZodOptional<z.ZodNumber>;
                sessionId: z.ZodOptional<z.ZodString>;
                nativeSessionId: z.ZodOptional<z.ZodString>;
                worktreePath: z.ZodOptional<z.ZodString>;
                output: z.ZodOptional<z.ZodString>;
                error: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }>>>;
        }, "strip", z.ZodTypeAny, {
            type: "agent" | "context" | "action" | "approval" | "prompt" | "shell" | "plan" | "gate" | "loop" | "subflow" | "condition" | "artifact";
            status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled" | "skipped";
            id: string;
            title?: string | undefined;
            error?: string | undefined;
            approval?: {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            completedAt?: number | undefined;
            startedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
            exitCode?: number | undefined;
            outputs?: Record<string, unknown> | undefined;
            transcriptExcerpt?: {
                text: string;
                role: "user" | "assistant";
            }[] | undefined;
            iterations?: {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }[] | undefined;
            inlineAgents?: Record<string, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }> | undefined;
        }, {
            type: "agent" | "context" | "action" | "approval" | "prompt" | "shell" | "plan" | "gate" | "loop" | "subflow" | "condition" | "artifact";
            status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled" | "skipped";
            id: string;
            title?: string | undefined;
            error?: string | undefined;
            approval?: {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            completedAt?: number | undefined;
            startedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
            exitCode?: number | undefined;
            outputs?: Record<string, unknown> | undefined;
            transcriptExcerpt?: {
                text: string;
                role: "user" | "assistant";
            }[] | undefined;
            iterations?: {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }[] | undefined;
            inlineAgents?: Record<string, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }> | undefined;
        }>>;
        artifacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            runId: z.ZodString;
            nodeId: z.ZodString;
            name: z.ZodString;
            kind: z.ZodOptional<z.ZodString>;
            path: z.ZodString;
            digest: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            sizeBytes: z.ZodOptional<z.ZodNumber>;
            createdAt: z.ZodNumber;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        }, "strip", z.ZodTypeAny, {
            path: string;
            id: string;
            nodeId: string;
            createdAt: number;
            runId: string;
            name: string;
            kind?: string | undefined;
            digest?: string | undefined;
            description?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: Record<string, unknown> | undefined;
        }, {
            path: string;
            id: string;
            nodeId: string;
            createdAt: number;
            runId: string;
            name: string;
            kind?: string | undefined;
            digest?: string | undefined;
            description?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: Record<string, unknown> | undefined;
        }>, "many">>;
        reviewPackets: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            artifactKind: z.ZodOptional<z.ZodEnum<["plan", "evidence_packet", "action_proposal", "approval_request", "context_candidate", "remediation", "run_summary", "other"]>>;
            subject: z.ZodOptional<z.ZodObject<{
                type: z.ZodString;
                id: z.ZodOptional<z.ZodString>;
                label: z.ZodOptional<z.ZodString>;
                uri: z.ZodOptional<z.ZodString>;
                metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            }, "strip", z.ZodTypeAny, {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            }, {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            }>>;
            readinessTargetId: z.ZodOptional<z.ZodString>;
            workflowRunId: z.ZodOptional<z.ZodString>;
            planId: z.ZodOptional<z.ZodString>;
            sourceKey: z.ZodOptional<z.ZodString>;
            title: z.ZodString;
            status: z.ZodEnum<["draft", "published", "failed", "canceled"]>;
            decision: z.ZodEnum<["approved", "changes_requested", "blocked", "needs_review"]>;
            riskLevel: z.ZodEnum<["unknown", "low", "medium", "high", "critical"]>;
            summary: z.ZodOptional<z.ZodString>;
            checks: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
            findings: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
            proofItems: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
            artifacts: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
            sourceSnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            publishedAt: z.ZodOptional<z.ZodNumber>;
            createdAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            status: "failed" | "canceled" | "draft" | "published";
            id: string;
            title: string;
            decision: "blocked" | "approved" | "changes_requested" | "needs_review";
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            artifacts?: Record<string, unknown>[] | undefined;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            findings?: Record<string, unknown>[] | undefined;
            subject?: {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
            readinessTargetId?: string | undefined;
            planId?: string | undefined;
            sourceKey?: string | undefined;
            checks?: Record<string, unknown>[] | undefined;
            proofItems?: Record<string, unknown>[] | undefined;
            sourceSnapshot?: Record<string, unknown> | undefined;
            publishedAt?: number | undefined;
        }, {
            status: "failed" | "canceled" | "draft" | "published";
            id: string;
            title: string;
            decision: "blocked" | "approved" | "changes_requested" | "needs_review";
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            artifacts?: Record<string, unknown>[] | undefined;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            findings?: Record<string, unknown>[] | undefined;
            subject?: {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
            readinessTargetId?: string | undefined;
            planId?: string | undefined;
            sourceKey?: string | undefined;
            checks?: Record<string, unknown>[] | undefined;
            proofItems?: Record<string, unknown>[] | undefined;
            sourceSnapshot?: Record<string, unknown> | undefined;
            publishedAt?: number | undefined;
        }>, "many">>;
        readinessTargets: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            resourceId: z.ZodString;
            ownerUserId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            workflowDefinitionId: z.ZodOptional<z.ZodString>;
            workflowRunId: z.ZodOptional<z.ZodString>;
            planId: z.ZodOptional<z.ZodString>;
            kind: z.ZodString;
            title: z.ZodString;
            status: z.ZodEnum<["draft", "running", "ready", "blocked", "failed", "canceled"]>;
            riskLevel: z.ZodEnum<["unknown", "low", "medium", "high", "critical"]>;
            repository: z.ZodOptional<z.ZodString>;
            baseBranch: z.ZodOptional<z.ZodString>;
            headBranch: z.ZodOptional<z.ZodString>;
            headSha: z.ZodOptional<z.ZodString>;
            externalUrl: z.ZodOptional<z.ZodString>;
            summary: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            completedAt: z.ZodOptional<z.ZodNumber>;
            createdAt: z.ZodOptional<z.ZodNumber>;
            updatedAt: z.ZodOptional<z.ZodNumber>;
            reviewPackets: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                artifactKind: z.ZodOptional<z.ZodEnum<["plan", "evidence_packet", "action_proposal", "approval_request", "context_candidate", "remediation", "run_summary", "other"]>>;
                subject: z.ZodOptional<z.ZodObject<{
                    type: z.ZodString;
                    id: z.ZodOptional<z.ZodString>;
                    label: z.ZodOptional<z.ZodString>;
                    uri: z.ZodOptional<z.ZodString>;
                    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                }, {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                }>>;
                readinessTargetId: z.ZodOptional<z.ZodString>;
                workflowRunId: z.ZodOptional<z.ZodString>;
                planId: z.ZodOptional<z.ZodString>;
                sourceKey: z.ZodOptional<z.ZodString>;
                title: z.ZodString;
                status: z.ZodEnum<["draft", "published", "failed", "canceled"]>;
                decision: z.ZodEnum<["approved", "changes_requested", "blocked", "needs_review"]>;
                riskLevel: z.ZodEnum<["unknown", "low", "medium", "high", "critical"]>;
                summary: z.ZodOptional<z.ZodString>;
                checks: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
                findings: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
                proofItems: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
                artifacts: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
                sourceSnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                publishedAt: z.ZodOptional<z.ZodNumber>;
                createdAt: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }, {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            status: "blocked" | "failed" | "running" | "canceled" | "draft" | "ready";
            id: string;
            title: string;
            kind: string;
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            resourceId: string;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            repository?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            planId?: string | undefined;
            ownerUserId?: number | null | undefined;
            workflowDefinitionId?: string | undefined;
            baseBranch?: string | undefined;
            headBranch?: string | undefined;
            headSha?: string | undefined;
            externalUrl?: string | undefined;
            completedAt?: number | undefined;
            updatedAt?: number | undefined;
            reviewPackets?: {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }[] | undefined;
        }, {
            status: "blocked" | "failed" | "running" | "canceled" | "draft" | "ready";
            id: string;
            title: string;
            kind: string;
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            resourceId: string;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            repository?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            planId?: string | undefined;
            ownerUserId?: number | null | undefined;
            workflowDefinitionId?: string | undefined;
            baseBranch?: string | undefined;
            headBranch?: string | undefined;
            headSha?: string | undefined;
            externalUrl?: string | undefined;
            completedAt?: number | undefined;
            updatedAt?: number | undefined;
            reviewPackets?: {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }[] | undefined;
        }>, "many">>;
        authorizationDecisions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            decisionKey: z.ZodOptional<z.ZodString>;
            subjectType: z.ZodOptional<z.ZodString>;
            subjectId: z.ZodOptional<z.ZodString>;
            action: z.ZodString;
            resourceType: z.ZodOptional<z.ZodString>;
            resourceId: z.ZodOptional<z.ZodString>;
            decision: z.ZodEnum<["allow", "deny", "require_approval", "quarantine", "weak_legacy_allow"]>;
            reason: z.ZodOptional<z.ZodString>;
            subjectSnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            resourceSnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            context: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            matchedRules: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            policySnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            decidedAt: z.ZodOptional<z.ZodNumber>;
            expiresAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            action: string;
            decision: "allow" | "deny" | "require_approval" | "quarantine" | "weak_legacy_allow";
            context?: Record<string, unknown> | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            matchedRules?: string[] | undefined;
            expiresAt?: number | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            resourceId?: string | undefined;
            decisionKey?: string | undefined;
            resourceType?: string | undefined;
            subjectSnapshot?: Record<string, unknown> | undefined;
            resourceSnapshot?: Record<string, unknown> | undefined;
            policySnapshot?: Record<string, unknown> | undefined;
            decidedAt?: number | undefined;
        }, {
            id: string;
            action: string;
            decision: "allow" | "deny" | "require_approval" | "quarantine" | "weak_legacy_allow";
            context?: Record<string, unknown> | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            matchedRules?: string[] | undefined;
            expiresAt?: number | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            resourceId?: string | undefined;
            decisionKey?: string | undefined;
            resourceType?: string | undefined;
            subjectSnapshot?: Record<string, unknown> | undefined;
            resourceSnapshot?: Record<string, unknown> | undefined;
            policySnapshot?: Record<string, unknown> | undefined;
            decidedAt?: number | undefined;
        }>, "many">>;
        evidencePackets: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            evidenceKey: z.ZodOptional<z.ZodString>;
            nodeId: z.ZodOptional<z.ZodString>;
            kind: z.ZodString;
            title: z.ZodOptional<z.ZodString>;
            summary: z.ZodOptional<z.ZodString>;
            confidence: z.ZodOptional<z.ZodString>;
            visibility: z.ZodOptional<z.ZodString>;
            digest: z.ZodOptional<z.ZodString>;
            payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            occurredAt: z.ZodOptional<z.ZodNumber>;
            createdAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            kind: string;
            title?: string | undefined;
            nodeId?: string | undefined;
            summary?: string | undefined;
            confidence?: string | undefined;
            visibility?: string | undefined;
            createdAt?: number | undefined;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            digest?: string | undefined;
            evidenceKey?: string | undefined;
        }, {
            id: string;
            kind: string;
            title?: string | undefined;
            nodeId?: string | undefined;
            summary?: string | undefined;
            confidence?: string | undefined;
            visibility?: string | undefined;
            createdAt?: number | undefined;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            digest?: string | undefined;
            evidenceKey?: string | undefined;
        }>, "many">>;
        actionProposals: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            proposalKey: z.ZodOptional<z.ZodString>;
            nodeId: z.ZodOptional<z.ZodString>;
            adapter: z.ZodString;
            action: z.ZodString;
            state: z.ZodOptional<z.ZodString>;
            idempotencyKey: z.ZodOptional<z.ZodString>;
            proposalDigest: z.ZodOptional<z.ZodString>;
            evidenceRefs: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            policyEvaluation: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            proposedAt: z.ZodOptional<z.ZodNumber>;
            expiresAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            adapter: string;
            action: string;
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalDigest?: string | undefined;
            evidenceRefs?: string[] | undefined;
            policyEvaluation?: Record<string, unknown> | undefined;
            state?: string | undefined;
            expiresAt?: number | undefined;
            proposalKey?: string | undefined;
            proposedAt?: number | undefined;
        }, {
            id: string;
            adapter: string;
            action: string;
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalDigest?: string | undefined;
            evidenceRefs?: string[] | undefined;
            policyEvaluation?: Record<string, unknown> | undefined;
            state?: string | undefined;
            expiresAt?: number | undefined;
            proposalKey?: string | undefined;
            proposedAt?: number | undefined;
        }>, "many">>;
        approvalDecisions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            proposalKey: z.ZodOptional<z.ZodString>;
            decisionKey: z.ZodOptional<z.ZodString>;
            nodeId: z.ZodOptional<z.ZodString>;
            actorUserId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            subjectType: z.ZodOptional<z.ZodString>;
            subjectId: z.ZodOptional<z.ZodString>;
            subjectDigest: z.ZodOptional<z.ZodString>;
            decision: z.ZodEnum<["approve", "deny", "request_changes", "unknown"]>;
            reason: z.ZodOptional<z.ZodString>;
            actorSnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            decidedAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            decision: "unknown" | "deny" | "approve" | "request_changes";
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            subjectDigest?: string | undefined;
            proposalKey?: string | undefined;
            decisionKey?: string | undefined;
            decidedAt?: number | undefined;
            actorUserId?: number | null | undefined;
            actorSnapshot?: Record<string, unknown> | undefined;
        }, {
            id: string;
            decision: "unknown" | "deny" | "approve" | "request_changes";
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            subjectDigest?: string | undefined;
            proposalKey?: string | undefined;
            decisionKey?: string | undefined;
            decidedAt?: number | undefined;
            actorUserId?: number | null | undefined;
            actorSnapshot?: Record<string, unknown> | undefined;
        }>, "many">>;
        executionReceipts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            proposalKey: z.ZodOptional<z.ZodString>;
            decisionKey: z.ZodOptional<z.ZodString>;
            receiptKey: z.ZodOptional<z.ZodString>;
            adapter: z.ZodString;
            action: z.ZodString;
            status: z.ZodString;
            providerReference: z.ZodOptional<z.ZodString>;
            providerUrl: z.ZodOptional<z.ZodString>;
            idempotencyKey: z.ZodOptional<z.ZodString>;
            payloadDigest: z.ZodOptional<z.ZodString>;
            providerResponseDigest: z.ZodOptional<z.ZodString>;
            receiptDigest: z.ZodOptional<z.ZodString>;
            providerReconciliation: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            executedAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            status: string;
            id: string;
            adapter: string;
            action: string;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalKey?: string | undefined;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
            payloadDigest?: string | undefined;
            providerResponseDigest?: string | undefined;
            providerReconciliation?: Record<string, unknown> | undefined;
            executedAt?: number | undefined;
            decisionKey?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
        }, {
            status: string;
            id: string;
            adapter: string;
            action: string;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalKey?: string | undefined;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
            payloadDigest?: string | undefined;
            providerResponseDigest?: string | undefined;
            providerReconciliation?: Record<string, unknown> | undefined;
            executedAt?: number | undefined;
            decisionKey?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
        }>, "many">>;
        auditReceipts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            receiptKey: z.ZodOptional<z.ZodString>;
            eventType: z.ZodString;
            actorType: z.ZodOptional<z.ZodString>;
            actorId: z.ZodOptional<z.ZodString>;
            payloadDigest: z.ZodOptional<z.ZodString>;
            payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            occurredAt: z.ZodOptional<z.ZodNumber>;
            sequence: z.ZodOptional<z.ZodNumber>;
            previousReceiptDigest: z.ZodOptional<z.ZodString>;
            receiptDigest: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            eventType: string;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            payloadDigest?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
            actorType?: string | undefined;
            actorId?: string | undefined;
            sequence?: number | undefined;
            previousReceiptDigest?: string | undefined;
        }, {
            id: string;
            eventType: string;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            payloadDigest?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
            actorType?: string | undefined;
            actorId?: string | undefined;
            sequence?: number | undefined;
            previousReceiptDigest?: string | undefined;
        }>, "many">>;
        contextReceipts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            schema: z.ZodOptional<z.ZodLiteral<"viewport.context_receipt/v1">>;
            package: z.ZodOptional<z.ZodString>;
            packageName: z.ZodOptional<z.ZodString>;
            requested: z.ZodOptional<z.ZodString>;
            resolvedVersion: z.ZodOptional<z.ZodString>;
            provider: z.ZodOptional<z.ZodString>;
            digest: z.ZodOptional<z.ZodString>;
            freshness: z.ZodOptional<z.ZodString>;
            usedBy: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            resolvedAt: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
            payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        }, "strip", z.ZodTypeAny, {
            schema?: "viewport.context_receipt/v1" | undefined;
            payload?: Record<string, unknown> | undefined;
            digest?: string | undefined;
            package?: string | undefined;
            requested?: string | undefined;
            resolvedVersion?: string | undefined;
            provider?: string | undefined;
            freshness?: string | undefined;
            usedBy?: Record<string, unknown> | undefined;
            resolvedAt?: string | number | undefined;
            packageName?: string | undefined;
        }, {
            schema?: "viewport.context_receipt/v1" | undefined;
            payload?: Record<string, unknown> | undefined;
            digest?: string | undefined;
            package?: string | undefined;
            requested?: string | undefined;
            resolvedVersion?: string | undefined;
            provider?: string | undefined;
            freshness?: string | undefined;
            usedBy?: Record<string, unknown> | undefined;
            resolvedAt?: string | number | undefined;
            packageName?: string | undefined;
        }>, "many">>;
        contractHealth: z.ZodOptional<z.ZodObject<{
            status: z.ZodEnum<["valid", "warning", "invalid", "unknown", "not_applicable"]>;
            summary: z.ZodObject<{
                evidencePackets: z.ZodNumber;
                actionProposals: z.ZodNumber;
                approvalDecisions: z.ZodNumber;
                executionReceipts: z.ZodNumber;
                auditReceipts: z.ZodNumber;
                issues: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            }, {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            }>;
            issues: z.ZodArray<z.ZodObject<{
                severity: z.ZodEnum<["warning", "error"]>;
                code: z.ZodString;
                message: z.ZodString;
                metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            }, "strip", z.ZodTypeAny, {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }, {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }>, "many">;
            proposals: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">;
            auditChain: z.ZodObject<{
                status: z.ZodString;
                checked: z.ZodBoolean;
                receiptCount: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                status: string;
                checked: boolean;
                receiptCount: number;
            }, {
                status: string;
                checked: boolean;
                receiptCount: number;
            }>;
            checkedAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            issues: {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }[];
            status: "valid" | "unknown" | "warning" | "invalid" | "not_applicable";
            summary: {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            };
            proposals: Record<string, unknown>[];
            auditChain: {
                status: string;
                checked: boolean;
                receiptCount: number;
            };
            checkedAt?: number | undefined;
        }, {
            issues: {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }[];
            status: "valid" | "unknown" | "warning" | "invalid" | "not_applicable";
            summary: {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            };
            proposals: Record<string, unknown>[];
            auditChain: {
                status: string;
                checked: boolean;
                receiptCount: number;
            };
            checkedAt?: number | undefined;
        }>>;
        resourceManifest: z.ZodOptional<z.ZodObject<{
            schema: z.ZodLiteral<"viewport.session_resource_manifest/v1">;
            manifestDigest: z.ZodString;
            workingDirectory: z.ZodString;
            configSources: z.ZodArray<z.ZodObject<{
                path: z.ZodString;
                digest: z.ZodString;
                version: z.ZodLiteral<1>;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }, {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }>, "many">;
            resources: z.ZodObject<{
                contexts: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    required: z.ZodBoolean;
                    sourceConfigPath: z.ZodString;
                    resolution: z.ZodEnum<["requested_unverified"]>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }>, "many">;
                workflows: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    required: z.ZodBoolean;
                    sourceConfigPath: z.ZodString;
                    resolution: z.ZodEnum<["requested_unverified"]>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }>, "many">;
                plans: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    required: z.ZodBoolean;
                    sourceConfigPath: z.ZodString;
                    resolution: z.ZodEnum<["requested_unverified"]>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }>, "many">;
                agentProfiles: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    required: z.ZodBoolean;
                    sourceConfigPath: z.ZodString;
                    resolution: z.ZodEnum<["requested_unverified"]>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            }, {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            }>;
            contract: z.ZodOptional<z.ZodObject<{
                contextProviders: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    provider: z.ZodEnum<["repo-docs", "viewport-vault", "notebooklm", "glean", "custom-cli", "custom-mcp"]>;
                    required: z.ZodBoolean;
                    privacy: z.ZodEnum<["local_only", "control_plane_blind", "third_party_terms", "customer_hosted", "unknown"]>;
                    capabilities: z.ZodArray<z.ZodEnum<["search", "get", "propose", "write_approved"]>, "many">;
                    sourceConfigPath: z.ZodString;
                    vault: z.ZodOptional<z.ZodString>;
                    paths: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    notebook: z.ZodOptional<z.ZodString>;
                    command: z.ZodOptional<z.ZodString>;
                    resolution: z.ZodEnum<["requested_unverified"]>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }, {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }>, "many">;
                contextResolution: z.ZodObject<{
                    order: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    sizeBudgetBytes: z.ZodOptional<z.ZodNumber>;
                    strategy: z.ZodOptional<z.ZodEnum<["rank_by_recency_then_query", "pinned_then_recent", "provider_order"]>>;
                }, "strip", z.ZodTypeAny, {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                }, {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                }>;
                workflows: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    required: z.ZodBoolean;
                    sourceConfigPath: z.ZodString;
                    path: z.ZodOptional<z.ZodString>;
                    resource: z.ZodOptional<z.ZodString>;
                    version: z.ZodOptional<z.ZodString>;
                    digest: z.ZodOptional<z.ZodString>;
                    resolution: z.ZodEnum<["requested_unverified"]>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            }, {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            }>>;
            conflicts: z.ZodArray<z.ZodObject<{
                field: z.ZodString;
                values: z.ZodArray<z.ZodObject<{
                    value: z.ZodString;
                    sourceConfigPath: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    sourceConfigPath: string;
                }, {
                    value: string;
                    sourceConfigPath: string;
                }>, "many">;
                resolution: z.ZodLiteral<"requires_user_selection">;
            }, "strip", z.ZodTypeAny, {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }, {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }>, "many">;
            warnings: z.ZodArray<z.ZodObject<{
                code: z.ZodString;
                message: z.ZodString;
                path: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                code: string;
                message: string;
                path?: string | undefined;
            }, {
                code: string;
                message: string;
                path?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            schema: "viewport.session_resource_manifest/v1";
            manifestDigest: string;
            workingDirectory: string;
            configSources: {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }[];
            resources: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            };
            conflicts: {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }[];
            warnings: {
                code: string;
                message: string;
                path?: string | undefined;
            }[];
            contract?: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            } | undefined;
        }, {
            schema: "viewport.session_resource_manifest/v1";
            manifestDigest: string;
            workingDirectory: string;
            configSources: {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }[];
            resources: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            };
            conflicts: {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }[];
            warnings: {
                code: string;
                message: string;
                path?: string | undefined;
            }[];
            contract?: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            } | undefined;
        }>>;
        events: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            runId: z.ZodString;
            timestamp: z.ZodNumber;
            type: z.ZodString;
            severity: z.ZodOptional<z.ZodEnum<["debug", "info", "warning", "error"]>>;
            nodeId: z.ZodOptional<z.ZodString>;
            message: z.ZodString;
            data: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        }, "strip", z.ZodTypeAny, {
            message: string;
            type: string;
            id: string;
            runId: string;
            timestamp: number;
            nodeId?: string | undefined;
            severity?: "error" | "debug" | "info" | "warning" | undefined;
            data?: Record<string, unknown> | undefined;
        }, {
            message: string;
            type: string;
            id: string;
            runId: string;
            timestamp: number;
            nodeId?: string | undefined;
            severity?: "error" | "debug" | "info" | "warning" | undefined;
            data?: Record<string, unknown> | undefined;
        }>, "many">;
        createdAt: z.ZodNumber;
        startedAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodNumber;
        completedAt: z.ZodOptional<z.ZodNumber>;
        error: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled";
        schema: string;
        id: string;
        createdAt: number;
        digest: string;
        updatedAt: number;
        workflowName: string;
        sourceType: "local_file" | "viewport_snapshot" | "local_modified";
        yamlSnapshot: string;
        directoryId: string;
        directoryPath: string;
        machineId: string;
        initiation: "cli" | "browser" | "agent_skill";
        inputs: Record<string, WorkflowInputValue>;
        preflight: {
            issues: {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }[];
            ok: boolean;
        };
        nodes: Record<string, {
            type: "agent" | "context" | "action" | "approval" | "prompt" | "shell" | "plan" | "gate" | "loop" | "subflow" | "condition" | "artifact";
            status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled" | "skipped";
            id: string;
            title?: string | undefined;
            error?: string | undefined;
            approval?: {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            completedAt?: number | undefined;
            startedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
            exitCode?: number | undefined;
            outputs?: Record<string, unknown> | undefined;
            transcriptExcerpt?: {
                text: string;
                role: "user" | "assistant";
            }[] | undefined;
            iterations?: {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }[] | undefined;
            inlineAgents?: Record<string, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }> | undefined;
        }>;
        events: {
            message: string;
            type: string;
            id: string;
            runId: string;
            timestamp: number;
            nodeId?: string | undefined;
            severity?: "error" | "debug" | "info" | "warning" | undefined;
            data?: Record<string, unknown> | undefined;
        }[];
        artifacts?: {
            path: string;
            id: string;
            nodeId: string;
            createdAt: number;
            runId: string;
            name: string;
            kind?: string | undefined;
            digest?: string | undefined;
            description?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: Record<string, unknown> | undefined;
        }[] | undefined;
        error?: string | undefined;
        contextReceipts?: {
            schema?: "viewport.context_receipt/v1" | undefined;
            payload?: Record<string, unknown> | undefined;
            digest?: string | undefined;
            package?: string | undefined;
            requested?: string | undefined;
            resolvedVersion?: string | undefined;
            provider?: string | undefined;
            freshness?: string | undefined;
            usedBy?: Record<string, unknown> | undefined;
            resolvedAt?: string | number | undefined;
            packageName?: string | undefined;
        }[] | undefined;
        resourceId?: string | undefined;
        workflowDefinitionId?: string | undefined;
        completedAt?: number | undefined;
        reviewPackets?: {
            status: "failed" | "canceled" | "draft" | "published";
            id: string;
            title: string;
            decision: "blocked" | "approved" | "changes_requested" | "needs_review";
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            artifacts?: Record<string, unknown>[] | undefined;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            findings?: Record<string, unknown>[] | undefined;
            subject?: {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
            readinessTargetId?: string | undefined;
            planId?: string | undefined;
            sourceKey?: string | undefined;
            checks?: Record<string, unknown>[] | undefined;
            proofItems?: Record<string, unknown>[] | undefined;
            sourceSnapshot?: Record<string, unknown> | undefined;
            publishedAt?: number | undefined;
        }[] | undefined;
        evidencePackets?: {
            id: string;
            kind: string;
            title?: string | undefined;
            nodeId?: string | undefined;
            summary?: string | undefined;
            confidence?: string | undefined;
            visibility?: string | undefined;
            createdAt?: number | undefined;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            digest?: string | undefined;
            evidenceKey?: string | undefined;
        }[] | undefined;
        actionProposals?: {
            id: string;
            adapter: string;
            action: string;
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalDigest?: string | undefined;
            evidenceRefs?: string[] | undefined;
            policyEvaluation?: Record<string, unknown> | undefined;
            state?: string | undefined;
            expiresAt?: number | undefined;
            proposalKey?: string | undefined;
            proposedAt?: number | undefined;
        }[] | undefined;
        approvalDecisions?: {
            id: string;
            decision: "unknown" | "deny" | "approve" | "request_changes";
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            subjectDigest?: string | undefined;
            proposalKey?: string | undefined;
            decisionKey?: string | undefined;
            decidedAt?: number | undefined;
            actorUserId?: number | null | undefined;
            actorSnapshot?: Record<string, unknown> | undefined;
        }[] | undefined;
        executionReceipts?: {
            status: string;
            id: string;
            adapter: string;
            action: string;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalKey?: string | undefined;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
            payloadDigest?: string | undefined;
            providerResponseDigest?: string | undefined;
            providerReconciliation?: Record<string, unknown> | undefined;
            executedAt?: number | undefined;
            decisionKey?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
        }[] | undefined;
        auditReceipts?: {
            id: string;
            eventType: string;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            payloadDigest?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
            actorType?: string | undefined;
            actorId?: string | undefined;
            sequence?: number | undefined;
            previousReceiptDigest?: string | undefined;
        }[] | undefined;
        startedAt?: number | undefined;
        workflowTitle?: string | undefined;
        workflowVersionId?: string | undefined;
        rerunOfWorkflowRunId?: string | undefined;
        sourcePath?: string | undefined;
        runtimeTargetId?: string | undefined;
        managedExecutorId?: string | undefined;
        executorTarget?: "local_machine" | "managed_executor" | undefined;
        assignmentStatus?: string | undefined;
        platformRunId?: string | undefined;
        executorAgent?: string | undefined;
        executorModel?: string | undefined;
        executionPolicy?: {
            mode: "current_tree" | "isolated_worktree" | "named_branch";
            branch?: string | undefined;
        } | undefined;
        dataCapturePolicy?: {
            transcripts: "none" | "excerpt";
            logs: "metadata" | "content";
            artifacts: "metadata" | "local_reference";
        } | undefined;
        readinessTargets?: {
            status: "blocked" | "failed" | "running" | "canceled" | "draft" | "ready";
            id: string;
            title: string;
            kind: string;
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            resourceId: string;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            repository?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            planId?: string | undefined;
            ownerUserId?: number | null | undefined;
            workflowDefinitionId?: string | undefined;
            baseBranch?: string | undefined;
            headBranch?: string | undefined;
            headSha?: string | undefined;
            externalUrl?: string | undefined;
            completedAt?: number | undefined;
            updatedAt?: number | undefined;
            reviewPackets?: {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }[] | undefined;
        }[] | undefined;
        authorizationDecisions?: {
            id: string;
            action: string;
            decision: "allow" | "deny" | "require_approval" | "quarantine" | "weak_legacy_allow";
            context?: Record<string, unknown> | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            matchedRules?: string[] | undefined;
            expiresAt?: number | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            resourceId?: string | undefined;
            decisionKey?: string | undefined;
            resourceType?: string | undefined;
            subjectSnapshot?: Record<string, unknown> | undefined;
            resourceSnapshot?: Record<string, unknown> | undefined;
            policySnapshot?: Record<string, unknown> | undefined;
            decidedAt?: number | undefined;
        }[] | undefined;
        contractHealth?: {
            issues: {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }[];
            status: "valid" | "unknown" | "warning" | "invalid" | "not_applicable";
            summary: {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            };
            proposals: Record<string, unknown>[];
            auditChain: {
                status: string;
                checked: boolean;
                receiptCount: number;
            };
            checkedAt?: number | undefined;
        } | undefined;
        resourceManifest?: {
            schema: "viewport.session_resource_manifest/v1";
            manifestDigest: string;
            workingDirectory: string;
            configSources: {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }[];
            resources: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            };
            conflicts: {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }[];
            warnings: {
                code: string;
                message: string;
                path?: string | undefined;
            }[];
            contract?: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            } | undefined;
        } | undefined;
    }, {
        status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled";
        schema: string;
        id: string;
        createdAt: number;
        digest: string;
        updatedAt: number;
        workflowName: string;
        sourceType: "local_file" | "viewport_snapshot" | "local_modified";
        yamlSnapshot: string;
        directoryId: string;
        directoryPath: string;
        machineId: string;
        initiation: "cli" | "browser" | "agent_skill";
        inputs: Record<string, WorkflowInputValue>;
        preflight: {
            issues: {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }[];
            ok: boolean;
        };
        nodes: Record<string, {
            type: "agent" | "context" | "action" | "approval" | "prompt" | "shell" | "plan" | "gate" | "loop" | "subflow" | "condition" | "artifact";
            status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled" | "skipped";
            id: string;
            title?: string | undefined;
            error?: string | undefined;
            approval?: {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            completedAt?: number | undefined;
            startedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
            exitCode?: number | undefined;
            outputs?: Record<string, unknown> | undefined;
            transcriptExcerpt?: {
                text: string;
                role: "user" | "assistant";
            }[] | undefined;
            iterations?: {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }[] | undefined;
            inlineAgents?: Record<string, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }> | undefined;
        }>;
        events: {
            message: string;
            type: string;
            id: string;
            runId: string;
            timestamp: number;
            nodeId?: string | undefined;
            severity?: "error" | "debug" | "info" | "warning" | undefined;
            data?: Record<string, unknown> | undefined;
        }[];
        artifacts?: {
            path: string;
            id: string;
            nodeId: string;
            createdAt: number;
            runId: string;
            name: string;
            kind?: string | undefined;
            digest?: string | undefined;
            description?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: Record<string, unknown> | undefined;
        }[] | undefined;
        error?: string | undefined;
        contextReceipts?: {
            schema?: "viewport.context_receipt/v1" | undefined;
            payload?: Record<string, unknown> | undefined;
            digest?: string | undefined;
            package?: string | undefined;
            requested?: string | undefined;
            resolvedVersion?: string | undefined;
            provider?: string | undefined;
            freshness?: string | undefined;
            usedBy?: Record<string, unknown> | undefined;
            resolvedAt?: string | number | undefined;
            packageName?: string | undefined;
        }[] | undefined;
        resourceId?: string | undefined;
        workflowDefinitionId?: string | undefined;
        completedAt?: number | undefined;
        reviewPackets?: {
            status: "failed" | "canceled" | "draft" | "published";
            id: string;
            title: string;
            decision: "blocked" | "approved" | "changes_requested" | "needs_review";
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            artifacts?: Record<string, unknown>[] | undefined;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            findings?: Record<string, unknown>[] | undefined;
            subject?: {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
            readinessTargetId?: string | undefined;
            planId?: string | undefined;
            sourceKey?: string | undefined;
            checks?: Record<string, unknown>[] | undefined;
            proofItems?: Record<string, unknown>[] | undefined;
            sourceSnapshot?: Record<string, unknown> | undefined;
            publishedAt?: number | undefined;
        }[] | undefined;
        evidencePackets?: {
            id: string;
            kind: string;
            title?: string | undefined;
            nodeId?: string | undefined;
            summary?: string | undefined;
            confidence?: string | undefined;
            visibility?: string | undefined;
            createdAt?: number | undefined;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            digest?: string | undefined;
            evidenceKey?: string | undefined;
        }[] | undefined;
        actionProposals?: {
            id: string;
            adapter: string;
            action: string;
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalDigest?: string | undefined;
            evidenceRefs?: string[] | undefined;
            policyEvaluation?: Record<string, unknown> | undefined;
            state?: string | undefined;
            expiresAt?: number | undefined;
            proposalKey?: string | undefined;
            proposedAt?: number | undefined;
        }[] | undefined;
        approvalDecisions?: {
            id: string;
            decision: "unknown" | "deny" | "approve" | "request_changes";
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            subjectDigest?: string | undefined;
            proposalKey?: string | undefined;
            decisionKey?: string | undefined;
            decidedAt?: number | undefined;
            actorUserId?: number | null | undefined;
            actorSnapshot?: Record<string, unknown> | undefined;
        }[] | undefined;
        executionReceipts?: {
            status: string;
            id: string;
            adapter: string;
            action: string;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalKey?: string | undefined;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
            payloadDigest?: string | undefined;
            providerResponseDigest?: string | undefined;
            providerReconciliation?: Record<string, unknown> | undefined;
            executedAt?: number | undefined;
            decisionKey?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
        }[] | undefined;
        auditReceipts?: {
            id: string;
            eventType: string;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            payloadDigest?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
            actorType?: string | undefined;
            actorId?: string | undefined;
            sequence?: number | undefined;
            previousReceiptDigest?: string | undefined;
        }[] | undefined;
        startedAt?: number | undefined;
        workflowTitle?: string | undefined;
        workflowVersionId?: string | undefined;
        rerunOfWorkflowRunId?: string | undefined;
        sourcePath?: string | undefined;
        runtimeTargetId?: string | undefined;
        managedExecutorId?: string | undefined;
        executorTarget?: "local_machine" | "managed_executor" | undefined;
        assignmentStatus?: string | undefined;
        platformRunId?: string | undefined;
        executorAgent?: string | undefined;
        executorModel?: string | undefined;
        executionPolicy?: {
            mode: "current_tree" | "isolated_worktree" | "named_branch";
            branch?: string | undefined;
        } | undefined;
        dataCapturePolicy?: {
            transcripts: "none" | "excerpt";
            logs: "metadata" | "content";
            artifacts: "metadata" | "local_reference";
        } | undefined;
        readinessTargets?: {
            status: "blocked" | "failed" | "running" | "canceled" | "draft" | "ready";
            id: string;
            title: string;
            kind: string;
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            resourceId: string;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            repository?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            planId?: string | undefined;
            ownerUserId?: number | null | undefined;
            workflowDefinitionId?: string | undefined;
            baseBranch?: string | undefined;
            headBranch?: string | undefined;
            headSha?: string | undefined;
            externalUrl?: string | undefined;
            completedAt?: number | undefined;
            updatedAt?: number | undefined;
            reviewPackets?: {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }[] | undefined;
        }[] | undefined;
        authorizationDecisions?: {
            id: string;
            action: string;
            decision: "allow" | "deny" | "require_approval" | "quarantine" | "weak_legacy_allow";
            context?: Record<string, unknown> | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            matchedRules?: string[] | undefined;
            expiresAt?: number | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            resourceId?: string | undefined;
            decisionKey?: string | undefined;
            resourceType?: string | undefined;
            subjectSnapshot?: Record<string, unknown> | undefined;
            resourceSnapshot?: Record<string, unknown> | undefined;
            policySnapshot?: Record<string, unknown> | undefined;
            decidedAt?: number | undefined;
        }[] | undefined;
        contractHealth?: {
            issues: {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }[];
            status: "valid" | "unknown" | "warning" | "invalid" | "not_applicable";
            summary: {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            };
            proposals: Record<string, unknown>[];
            auditChain: {
                status: string;
                checked: boolean;
                receiptCount: number;
            };
            checkedAt?: number | undefined;
        } | undefined;
        resourceManifest?: {
            schema: "viewport.session_resource_manifest/v1";
            manifestDigest: string;
            workingDirectory: string;
            configSources: {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }[];
            resources: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            };
            conflicts: {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }[];
            warnings: {
                code: string;
                message: string;
                path?: string | undefined;
            }[];
            contract?: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            } | undefined;
        } | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "workflow-runs";
    runs: {
        status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled";
        schema: string;
        id: string;
        createdAt: number;
        digest: string;
        updatedAt: number;
        workflowName: string;
        sourceType: "local_file" | "viewport_snapshot" | "local_modified";
        yamlSnapshot: string;
        directoryId: string;
        directoryPath: string;
        machineId: string;
        initiation: "cli" | "browser" | "agent_skill";
        inputs: Record<string, WorkflowInputValue>;
        preflight: {
            issues: {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }[];
            ok: boolean;
        };
        nodes: Record<string, {
            type: "agent" | "context" | "action" | "approval" | "prompt" | "shell" | "plan" | "gate" | "loop" | "subflow" | "condition" | "artifact";
            status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled" | "skipped";
            id: string;
            title?: string | undefined;
            error?: string | undefined;
            approval?: {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            completedAt?: number | undefined;
            startedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
            exitCode?: number | undefined;
            outputs?: Record<string, unknown> | undefined;
            transcriptExcerpt?: {
                text: string;
                role: "user" | "assistant";
            }[] | undefined;
            iterations?: {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }[] | undefined;
            inlineAgents?: Record<string, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }> | undefined;
        }>;
        events: {
            message: string;
            type: string;
            id: string;
            runId: string;
            timestamp: number;
            nodeId?: string | undefined;
            severity?: "error" | "debug" | "info" | "warning" | undefined;
            data?: Record<string, unknown> | undefined;
        }[];
        artifacts?: {
            path: string;
            id: string;
            nodeId: string;
            createdAt: number;
            runId: string;
            name: string;
            kind?: string | undefined;
            digest?: string | undefined;
            description?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: Record<string, unknown> | undefined;
        }[] | undefined;
        error?: string | undefined;
        contextReceipts?: {
            schema?: "viewport.context_receipt/v1" | undefined;
            payload?: Record<string, unknown> | undefined;
            digest?: string | undefined;
            package?: string | undefined;
            requested?: string | undefined;
            resolvedVersion?: string | undefined;
            provider?: string | undefined;
            freshness?: string | undefined;
            usedBy?: Record<string, unknown> | undefined;
            resolvedAt?: string | number | undefined;
            packageName?: string | undefined;
        }[] | undefined;
        resourceId?: string | undefined;
        workflowDefinitionId?: string | undefined;
        completedAt?: number | undefined;
        reviewPackets?: {
            status: "failed" | "canceled" | "draft" | "published";
            id: string;
            title: string;
            decision: "blocked" | "approved" | "changes_requested" | "needs_review";
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            artifacts?: Record<string, unknown>[] | undefined;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            findings?: Record<string, unknown>[] | undefined;
            subject?: {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
            readinessTargetId?: string | undefined;
            planId?: string | undefined;
            sourceKey?: string | undefined;
            checks?: Record<string, unknown>[] | undefined;
            proofItems?: Record<string, unknown>[] | undefined;
            sourceSnapshot?: Record<string, unknown> | undefined;
            publishedAt?: number | undefined;
        }[] | undefined;
        evidencePackets?: {
            id: string;
            kind: string;
            title?: string | undefined;
            nodeId?: string | undefined;
            summary?: string | undefined;
            confidence?: string | undefined;
            visibility?: string | undefined;
            createdAt?: number | undefined;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            digest?: string | undefined;
            evidenceKey?: string | undefined;
        }[] | undefined;
        actionProposals?: {
            id: string;
            adapter: string;
            action: string;
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalDigest?: string | undefined;
            evidenceRefs?: string[] | undefined;
            policyEvaluation?: Record<string, unknown> | undefined;
            state?: string | undefined;
            expiresAt?: number | undefined;
            proposalKey?: string | undefined;
            proposedAt?: number | undefined;
        }[] | undefined;
        approvalDecisions?: {
            id: string;
            decision: "unknown" | "deny" | "approve" | "request_changes";
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            subjectDigest?: string | undefined;
            proposalKey?: string | undefined;
            decisionKey?: string | undefined;
            decidedAt?: number | undefined;
            actorUserId?: number | null | undefined;
            actorSnapshot?: Record<string, unknown> | undefined;
        }[] | undefined;
        executionReceipts?: {
            status: string;
            id: string;
            adapter: string;
            action: string;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalKey?: string | undefined;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
            payloadDigest?: string | undefined;
            providerResponseDigest?: string | undefined;
            providerReconciliation?: Record<string, unknown> | undefined;
            executedAt?: number | undefined;
            decisionKey?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
        }[] | undefined;
        auditReceipts?: {
            id: string;
            eventType: string;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            payloadDigest?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
            actorType?: string | undefined;
            actorId?: string | undefined;
            sequence?: number | undefined;
            previousReceiptDigest?: string | undefined;
        }[] | undefined;
        startedAt?: number | undefined;
        workflowTitle?: string | undefined;
        workflowVersionId?: string | undefined;
        rerunOfWorkflowRunId?: string | undefined;
        sourcePath?: string | undefined;
        runtimeTargetId?: string | undefined;
        managedExecutorId?: string | undefined;
        executorTarget?: "local_machine" | "managed_executor" | undefined;
        assignmentStatus?: string | undefined;
        platformRunId?: string | undefined;
        executorAgent?: string | undefined;
        executorModel?: string | undefined;
        executionPolicy?: {
            mode: "current_tree" | "isolated_worktree" | "named_branch";
            branch?: string | undefined;
        } | undefined;
        dataCapturePolicy?: {
            transcripts: "none" | "excerpt";
            logs: "metadata" | "content";
            artifacts: "metadata" | "local_reference";
        } | undefined;
        readinessTargets?: {
            status: "blocked" | "failed" | "running" | "canceled" | "draft" | "ready";
            id: string;
            title: string;
            kind: string;
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            resourceId: string;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            repository?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            planId?: string | undefined;
            ownerUserId?: number | null | undefined;
            workflowDefinitionId?: string | undefined;
            baseBranch?: string | undefined;
            headBranch?: string | undefined;
            headSha?: string | undefined;
            externalUrl?: string | undefined;
            completedAt?: number | undefined;
            updatedAt?: number | undefined;
            reviewPackets?: {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }[] | undefined;
        }[] | undefined;
        authorizationDecisions?: {
            id: string;
            action: string;
            decision: "allow" | "deny" | "require_approval" | "quarantine" | "weak_legacy_allow";
            context?: Record<string, unknown> | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            matchedRules?: string[] | undefined;
            expiresAt?: number | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            resourceId?: string | undefined;
            decisionKey?: string | undefined;
            resourceType?: string | undefined;
            subjectSnapshot?: Record<string, unknown> | undefined;
            resourceSnapshot?: Record<string, unknown> | undefined;
            policySnapshot?: Record<string, unknown> | undefined;
            decidedAt?: number | undefined;
        }[] | undefined;
        contractHealth?: {
            issues: {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }[];
            status: "valid" | "unknown" | "warning" | "invalid" | "not_applicable";
            summary: {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            };
            proposals: Record<string, unknown>[];
            auditChain: {
                status: string;
                checked: boolean;
                receiptCount: number;
            };
            checkedAt?: number | undefined;
        } | undefined;
        resourceManifest?: {
            schema: "viewport.session_resource_manifest/v1";
            manifestDigest: string;
            workingDirectory: string;
            configSources: {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }[];
            resources: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            };
            conflicts: {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }[];
            warnings: {
                code: string;
                message: string;
                path?: string | undefined;
            }[];
            contract?: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            } | undefined;
        } | undefined;
    }[];
}, {
    type: "workflow-runs";
    runs: {
        status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled";
        schema: string;
        id: string;
        createdAt: number;
        digest: string;
        updatedAt: number;
        workflowName: string;
        sourceType: "local_file" | "viewport_snapshot" | "local_modified";
        yamlSnapshot: string;
        directoryId: string;
        directoryPath: string;
        machineId: string;
        initiation: "cli" | "browser" | "agent_skill";
        inputs: Record<string, WorkflowInputValue>;
        preflight: {
            issues: {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }[];
            ok: boolean;
        };
        nodes: Record<string, {
            type: "agent" | "context" | "action" | "approval" | "prompt" | "shell" | "plan" | "gate" | "loop" | "subflow" | "condition" | "artifact";
            status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled" | "skipped";
            id: string;
            title?: string | undefined;
            error?: string | undefined;
            approval?: {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            completedAt?: number | undefined;
            startedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
            exitCode?: number | undefined;
            outputs?: Record<string, unknown> | undefined;
            transcriptExcerpt?: {
                text: string;
                role: "user" | "assistant";
            }[] | undefined;
            iterations?: {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }[] | undefined;
            inlineAgents?: Record<string, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }> | undefined;
        }>;
        events: {
            message: string;
            type: string;
            id: string;
            runId: string;
            timestamp: number;
            nodeId?: string | undefined;
            severity?: "error" | "debug" | "info" | "warning" | undefined;
            data?: Record<string, unknown> | undefined;
        }[];
        artifacts?: {
            path: string;
            id: string;
            nodeId: string;
            createdAt: number;
            runId: string;
            name: string;
            kind?: string | undefined;
            digest?: string | undefined;
            description?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: Record<string, unknown> | undefined;
        }[] | undefined;
        error?: string | undefined;
        contextReceipts?: {
            schema?: "viewport.context_receipt/v1" | undefined;
            payload?: Record<string, unknown> | undefined;
            digest?: string | undefined;
            package?: string | undefined;
            requested?: string | undefined;
            resolvedVersion?: string | undefined;
            provider?: string | undefined;
            freshness?: string | undefined;
            usedBy?: Record<string, unknown> | undefined;
            resolvedAt?: string | number | undefined;
            packageName?: string | undefined;
        }[] | undefined;
        resourceId?: string | undefined;
        workflowDefinitionId?: string | undefined;
        completedAt?: number | undefined;
        reviewPackets?: {
            status: "failed" | "canceled" | "draft" | "published";
            id: string;
            title: string;
            decision: "blocked" | "approved" | "changes_requested" | "needs_review";
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            artifacts?: Record<string, unknown>[] | undefined;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            findings?: Record<string, unknown>[] | undefined;
            subject?: {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
            readinessTargetId?: string | undefined;
            planId?: string | undefined;
            sourceKey?: string | undefined;
            checks?: Record<string, unknown>[] | undefined;
            proofItems?: Record<string, unknown>[] | undefined;
            sourceSnapshot?: Record<string, unknown> | undefined;
            publishedAt?: number | undefined;
        }[] | undefined;
        evidencePackets?: {
            id: string;
            kind: string;
            title?: string | undefined;
            nodeId?: string | undefined;
            summary?: string | undefined;
            confidence?: string | undefined;
            visibility?: string | undefined;
            createdAt?: number | undefined;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            digest?: string | undefined;
            evidenceKey?: string | undefined;
        }[] | undefined;
        actionProposals?: {
            id: string;
            adapter: string;
            action: string;
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalDigest?: string | undefined;
            evidenceRefs?: string[] | undefined;
            policyEvaluation?: Record<string, unknown> | undefined;
            state?: string | undefined;
            expiresAt?: number | undefined;
            proposalKey?: string | undefined;
            proposedAt?: number | undefined;
        }[] | undefined;
        approvalDecisions?: {
            id: string;
            decision: "unknown" | "deny" | "approve" | "request_changes";
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            subjectDigest?: string | undefined;
            proposalKey?: string | undefined;
            decisionKey?: string | undefined;
            decidedAt?: number | undefined;
            actorUserId?: number | null | undefined;
            actorSnapshot?: Record<string, unknown> | undefined;
        }[] | undefined;
        executionReceipts?: {
            status: string;
            id: string;
            adapter: string;
            action: string;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalKey?: string | undefined;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
            payloadDigest?: string | undefined;
            providerResponseDigest?: string | undefined;
            providerReconciliation?: Record<string, unknown> | undefined;
            executedAt?: number | undefined;
            decisionKey?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
        }[] | undefined;
        auditReceipts?: {
            id: string;
            eventType: string;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            payloadDigest?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
            actorType?: string | undefined;
            actorId?: string | undefined;
            sequence?: number | undefined;
            previousReceiptDigest?: string | undefined;
        }[] | undefined;
        startedAt?: number | undefined;
        workflowTitle?: string | undefined;
        workflowVersionId?: string | undefined;
        rerunOfWorkflowRunId?: string | undefined;
        sourcePath?: string | undefined;
        runtimeTargetId?: string | undefined;
        managedExecutorId?: string | undefined;
        executorTarget?: "local_machine" | "managed_executor" | undefined;
        assignmentStatus?: string | undefined;
        platformRunId?: string | undefined;
        executorAgent?: string | undefined;
        executorModel?: string | undefined;
        executionPolicy?: {
            mode: "current_tree" | "isolated_worktree" | "named_branch";
            branch?: string | undefined;
        } | undefined;
        dataCapturePolicy?: {
            transcripts: "none" | "excerpt";
            logs: "metadata" | "content";
            artifacts: "metadata" | "local_reference";
        } | undefined;
        readinessTargets?: {
            status: "blocked" | "failed" | "running" | "canceled" | "draft" | "ready";
            id: string;
            title: string;
            kind: string;
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            resourceId: string;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            repository?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            planId?: string | undefined;
            ownerUserId?: number | null | undefined;
            workflowDefinitionId?: string | undefined;
            baseBranch?: string | undefined;
            headBranch?: string | undefined;
            headSha?: string | undefined;
            externalUrl?: string | undefined;
            completedAt?: number | undefined;
            updatedAt?: number | undefined;
            reviewPackets?: {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }[] | undefined;
        }[] | undefined;
        authorizationDecisions?: {
            id: string;
            action: string;
            decision: "allow" | "deny" | "require_approval" | "quarantine" | "weak_legacy_allow";
            context?: Record<string, unknown> | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            matchedRules?: string[] | undefined;
            expiresAt?: number | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            resourceId?: string | undefined;
            decisionKey?: string | undefined;
            resourceType?: string | undefined;
            subjectSnapshot?: Record<string, unknown> | undefined;
            resourceSnapshot?: Record<string, unknown> | undefined;
            policySnapshot?: Record<string, unknown> | undefined;
            decidedAt?: number | undefined;
        }[] | undefined;
        contractHealth?: {
            issues: {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }[];
            status: "valid" | "unknown" | "warning" | "invalid" | "not_applicable";
            summary: {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            };
            proposals: Record<string, unknown>[];
            auditChain: {
                status: string;
                checked: boolean;
                receiptCount: number;
            };
            checkedAt?: number | undefined;
        } | undefined;
        resourceManifest?: {
            schema: "viewport.session_resource_manifest/v1";
            manifestDigest: string;
            workingDirectory: string;
            configSources: {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }[];
            resources: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            };
            conflicts: {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }[];
            warnings: {
                code: string;
                message: string;
                path?: string | undefined;
            }[];
            contract?: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            } | undefined;
        } | undefined;
    }[];
}>;
export declare const WorkflowRunStartedMessageSchema: z.ZodObject<{
    type: z.ZodLiteral<"workflow-run-started">;
    run: z.ZodObject<{
        id: z.ZodString;
        workflowName: z.ZodString;
        workflowTitle: z.ZodOptional<z.ZodString>;
        workflowDefinitionId: z.ZodOptional<z.ZodString>;
        workflowVersionId: z.ZodOptional<z.ZodString>;
        rerunOfWorkflowRunId: z.ZodOptional<z.ZodString>;
        sourceType: z.ZodEnum<["local_file", "viewport_snapshot", "local_modified"]>;
        sourcePath: z.ZodOptional<z.ZodString>;
        digest: z.ZodString;
        schema: z.ZodString;
        yamlSnapshot: z.ZodString;
        directoryId: z.ZodString;
        directoryPath: z.ZodString;
        resourceId: z.ZodOptional<z.ZodString>;
        runtimeTargetId: z.ZodOptional<z.ZodString>;
        managedExecutorId: z.ZodOptional<z.ZodString>;
        executorTarget: z.ZodOptional<z.ZodEnum<["local_machine", "managed_executor"]>>;
        assignmentStatus: z.ZodOptional<z.ZodString>;
        platformRunId: z.ZodOptional<z.ZodString>;
        machineId: z.ZodString;
        executorAgent: z.ZodOptional<z.ZodString>;
        executorModel: z.ZodOptional<z.ZodString>;
        executionPolicy: z.ZodOptional<z.ZodObject<{
            mode: z.ZodEnum<["current_tree", "isolated_worktree", "named_branch"]>;
            branch: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            mode: "current_tree" | "isolated_worktree" | "named_branch";
            branch?: string | undefined;
        }, {
            mode: "current_tree" | "isolated_worktree" | "named_branch";
            branch?: string | undefined;
        }>>;
        dataCapturePolicy: z.ZodOptional<z.ZodObject<{
            transcripts: z.ZodEnum<["none", "excerpt"]>;
            logs: z.ZodEnum<["metadata", "content"]>;
            artifacts: z.ZodEnum<["metadata", "local_reference"]>;
        }, "strip", z.ZodTypeAny, {
            transcripts: "none" | "excerpt";
            logs: "metadata" | "content";
            artifacts: "metadata" | "local_reference";
        }, {
            transcripts: "none" | "excerpt";
            logs: "metadata" | "content";
            artifacts: "metadata" | "local_reference";
        }>>;
        initiation: z.ZodEnum<["cli", "browser", "agent_skill"]>;
        status: z.ZodEnum<["queued", "running", "blocked", "completed", "failed", "canceled"]>;
        inputs: z.ZodRecord<z.ZodString, z.ZodType<WorkflowInputValue, z.ZodTypeDef, WorkflowInputValue>>;
        preflight: z.ZodObject<{
            ok: z.ZodBoolean;
            issues: z.ZodArray<z.ZodObject<{
                kind: z.ZodEnum<["agent", "tool", "node"]>;
                name: z.ZodString;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }, {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            issues: {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }[];
            ok: boolean;
        }, {
            issues: {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }[];
            ok: boolean;
        }>;
        nodes: z.ZodRecord<z.ZodString, z.ZodObject<{
            id: z.ZodString;
            type: z.ZodEnum<["prompt", "shell", "approval", "plan", "gate", "loop", "subflow", "agent", "context", "condition", "artifact", "action"]>;
            title: z.ZodOptional<z.ZodString>;
            status: z.ZodEnum<["queued", "running", "blocked", "completed", "failed", "skipped", "canceled"]>;
            startedAt: z.ZodOptional<z.ZodNumber>;
            completedAt: z.ZodOptional<z.ZodNumber>;
            sessionId: z.ZodOptional<z.ZodString>;
            nativeSessionId: z.ZodOptional<z.ZodString>;
            worktreePath: z.ZodOptional<z.ZodString>;
            output: z.ZodOptional<z.ZodString>;
            outputs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            transcriptExcerpt: z.ZodOptional<z.ZodArray<z.ZodObject<{
                role: z.ZodEnum<["user", "assistant"]>;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                text: string;
                role: "user" | "assistant";
            }, {
                text: string;
                role: "user" | "assistant";
            }>, "many">>;
            exitCode: z.ZodOptional<z.ZodNumber>;
            error: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            approval: z.ZodOptional<z.ZodObject<{
                prompt: z.ZodString;
                requestedAt: z.ZodNumber;
                resolvedAt: z.ZodOptional<z.ZodNumber>;
                approved: z.ZodOptional<z.ZodBoolean>;
                decision: z.ZodOptional<z.ZodEnum<["approve", "request_changes", "reject"]>>;
                message: z.ZodOptional<z.ZodString>;
                actor: z.ZodOptional<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    name: z.ZodOptional<z.ZodString>;
                    email: z.ZodOptional<z.ZodString>;
                    source: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                }, {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                }>>;
                feedback: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                executionGrant: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            }, "strip", z.ZodTypeAny, {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            }, {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            }>>;
            iterations: z.ZodOptional<z.ZodArray<z.ZodObject<{
                index: z.ZodNumber;
                status: z.ZodEnum<["running", "completed", "failed", "skipped", "canceled"]>;
                startedAt: z.ZodNumber;
                completedAt: z.ZodOptional<z.ZodNumber>;
                sessionId: z.ZodOptional<z.ZodString>;
                nativeSessionId: z.ZodOptional<z.ZodString>;
                worktreePath: z.ZodOptional<z.ZodString>;
                output: z.ZodOptional<z.ZodString>;
                exitCode: z.ZodOptional<z.ZodNumber>;
                error: z.ZodOptional<z.ZodString>;
                item: z.ZodOptional<z.ZodUnknown>;
            }, "strip", z.ZodTypeAny, {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }, {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }>, "many">>;
            inlineAgents: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                id: z.ZodString;
                title: z.ZodOptional<z.ZodString>;
                agent: z.ZodOptional<z.ZodString>;
                model: z.ZodOptional<z.ZodString>;
                status: z.ZodEnum<["queued", "running", "completed", "failed", "canceled"]>;
                startedAt: z.ZodOptional<z.ZodNumber>;
                completedAt: z.ZodOptional<z.ZodNumber>;
                sessionId: z.ZodOptional<z.ZodString>;
                nativeSessionId: z.ZodOptional<z.ZodString>;
                worktreePath: z.ZodOptional<z.ZodString>;
                output: z.ZodOptional<z.ZodString>;
                error: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }>>>;
        }, "strip", z.ZodTypeAny, {
            type: "agent" | "context" | "action" | "approval" | "prompt" | "shell" | "plan" | "gate" | "loop" | "subflow" | "condition" | "artifact";
            status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled" | "skipped";
            id: string;
            title?: string | undefined;
            error?: string | undefined;
            approval?: {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            completedAt?: number | undefined;
            startedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
            exitCode?: number | undefined;
            outputs?: Record<string, unknown> | undefined;
            transcriptExcerpt?: {
                text: string;
                role: "user" | "assistant";
            }[] | undefined;
            iterations?: {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }[] | undefined;
            inlineAgents?: Record<string, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }> | undefined;
        }, {
            type: "agent" | "context" | "action" | "approval" | "prompt" | "shell" | "plan" | "gate" | "loop" | "subflow" | "condition" | "artifact";
            status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled" | "skipped";
            id: string;
            title?: string | undefined;
            error?: string | undefined;
            approval?: {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            completedAt?: number | undefined;
            startedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
            exitCode?: number | undefined;
            outputs?: Record<string, unknown> | undefined;
            transcriptExcerpt?: {
                text: string;
                role: "user" | "assistant";
            }[] | undefined;
            iterations?: {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }[] | undefined;
            inlineAgents?: Record<string, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }> | undefined;
        }>>;
        artifacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            runId: z.ZodString;
            nodeId: z.ZodString;
            name: z.ZodString;
            kind: z.ZodOptional<z.ZodString>;
            path: z.ZodString;
            digest: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            sizeBytes: z.ZodOptional<z.ZodNumber>;
            createdAt: z.ZodNumber;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        }, "strip", z.ZodTypeAny, {
            path: string;
            id: string;
            nodeId: string;
            createdAt: number;
            runId: string;
            name: string;
            kind?: string | undefined;
            digest?: string | undefined;
            description?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: Record<string, unknown> | undefined;
        }, {
            path: string;
            id: string;
            nodeId: string;
            createdAt: number;
            runId: string;
            name: string;
            kind?: string | undefined;
            digest?: string | undefined;
            description?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: Record<string, unknown> | undefined;
        }>, "many">>;
        reviewPackets: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            artifactKind: z.ZodOptional<z.ZodEnum<["plan", "evidence_packet", "action_proposal", "approval_request", "context_candidate", "remediation", "run_summary", "other"]>>;
            subject: z.ZodOptional<z.ZodObject<{
                type: z.ZodString;
                id: z.ZodOptional<z.ZodString>;
                label: z.ZodOptional<z.ZodString>;
                uri: z.ZodOptional<z.ZodString>;
                metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            }, "strip", z.ZodTypeAny, {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            }, {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            }>>;
            readinessTargetId: z.ZodOptional<z.ZodString>;
            workflowRunId: z.ZodOptional<z.ZodString>;
            planId: z.ZodOptional<z.ZodString>;
            sourceKey: z.ZodOptional<z.ZodString>;
            title: z.ZodString;
            status: z.ZodEnum<["draft", "published", "failed", "canceled"]>;
            decision: z.ZodEnum<["approved", "changes_requested", "blocked", "needs_review"]>;
            riskLevel: z.ZodEnum<["unknown", "low", "medium", "high", "critical"]>;
            summary: z.ZodOptional<z.ZodString>;
            checks: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
            findings: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
            proofItems: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
            artifacts: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
            sourceSnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            publishedAt: z.ZodOptional<z.ZodNumber>;
            createdAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            status: "failed" | "canceled" | "draft" | "published";
            id: string;
            title: string;
            decision: "blocked" | "approved" | "changes_requested" | "needs_review";
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            artifacts?: Record<string, unknown>[] | undefined;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            findings?: Record<string, unknown>[] | undefined;
            subject?: {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
            readinessTargetId?: string | undefined;
            planId?: string | undefined;
            sourceKey?: string | undefined;
            checks?: Record<string, unknown>[] | undefined;
            proofItems?: Record<string, unknown>[] | undefined;
            sourceSnapshot?: Record<string, unknown> | undefined;
            publishedAt?: number | undefined;
        }, {
            status: "failed" | "canceled" | "draft" | "published";
            id: string;
            title: string;
            decision: "blocked" | "approved" | "changes_requested" | "needs_review";
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            artifacts?: Record<string, unknown>[] | undefined;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            findings?: Record<string, unknown>[] | undefined;
            subject?: {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
            readinessTargetId?: string | undefined;
            planId?: string | undefined;
            sourceKey?: string | undefined;
            checks?: Record<string, unknown>[] | undefined;
            proofItems?: Record<string, unknown>[] | undefined;
            sourceSnapshot?: Record<string, unknown> | undefined;
            publishedAt?: number | undefined;
        }>, "many">>;
        readinessTargets: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            resourceId: z.ZodString;
            ownerUserId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            workflowDefinitionId: z.ZodOptional<z.ZodString>;
            workflowRunId: z.ZodOptional<z.ZodString>;
            planId: z.ZodOptional<z.ZodString>;
            kind: z.ZodString;
            title: z.ZodString;
            status: z.ZodEnum<["draft", "running", "ready", "blocked", "failed", "canceled"]>;
            riskLevel: z.ZodEnum<["unknown", "low", "medium", "high", "critical"]>;
            repository: z.ZodOptional<z.ZodString>;
            baseBranch: z.ZodOptional<z.ZodString>;
            headBranch: z.ZodOptional<z.ZodString>;
            headSha: z.ZodOptional<z.ZodString>;
            externalUrl: z.ZodOptional<z.ZodString>;
            summary: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            completedAt: z.ZodOptional<z.ZodNumber>;
            createdAt: z.ZodOptional<z.ZodNumber>;
            updatedAt: z.ZodOptional<z.ZodNumber>;
            reviewPackets: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                artifactKind: z.ZodOptional<z.ZodEnum<["plan", "evidence_packet", "action_proposal", "approval_request", "context_candidate", "remediation", "run_summary", "other"]>>;
                subject: z.ZodOptional<z.ZodObject<{
                    type: z.ZodString;
                    id: z.ZodOptional<z.ZodString>;
                    label: z.ZodOptional<z.ZodString>;
                    uri: z.ZodOptional<z.ZodString>;
                    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                }, {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                }>>;
                readinessTargetId: z.ZodOptional<z.ZodString>;
                workflowRunId: z.ZodOptional<z.ZodString>;
                planId: z.ZodOptional<z.ZodString>;
                sourceKey: z.ZodOptional<z.ZodString>;
                title: z.ZodString;
                status: z.ZodEnum<["draft", "published", "failed", "canceled"]>;
                decision: z.ZodEnum<["approved", "changes_requested", "blocked", "needs_review"]>;
                riskLevel: z.ZodEnum<["unknown", "low", "medium", "high", "critical"]>;
                summary: z.ZodOptional<z.ZodString>;
                checks: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
                findings: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
                proofItems: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
                artifacts: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
                sourceSnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                publishedAt: z.ZodOptional<z.ZodNumber>;
                createdAt: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }, {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            status: "blocked" | "failed" | "running" | "canceled" | "draft" | "ready";
            id: string;
            title: string;
            kind: string;
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            resourceId: string;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            repository?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            planId?: string | undefined;
            ownerUserId?: number | null | undefined;
            workflowDefinitionId?: string | undefined;
            baseBranch?: string | undefined;
            headBranch?: string | undefined;
            headSha?: string | undefined;
            externalUrl?: string | undefined;
            completedAt?: number | undefined;
            updatedAt?: number | undefined;
            reviewPackets?: {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }[] | undefined;
        }, {
            status: "blocked" | "failed" | "running" | "canceled" | "draft" | "ready";
            id: string;
            title: string;
            kind: string;
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            resourceId: string;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            repository?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            planId?: string | undefined;
            ownerUserId?: number | null | undefined;
            workflowDefinitionId?: string | undefined;
            baseBranch?: string | undefined;
            headBranch?: string | undefined;
            headSha?: string | undefined;
            externalUrl?: string | undefined;
            completedAt?: number | undefined;
            updatedAt?: number | undefined;
            reviewPackets?: {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }[] | undefined;
        }>, "many">>;
        authorizationDecisions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            decisionKey: z.ZodOptional<z.ZodString>;
            subjectType: z.ZodOptional<z.ZodString>;
            subjectId: z.ZodOptional<z.ZodString>;
            action: z.ZodString;
            resourceType: z.ZodOptional<z.ZodString>;
            resourceId: z.ZodOptional<z.ZodString>;
            decision: z.ZodEnum<["allow", "deny", "require_approval", "quarantine", "weak_legacy_allow"]>;
            reason: z.ZodOptional<z.ZodString>;
            subjectSnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            resourceSnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            context: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            matchedRules: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            policySnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            decidedAt: z.ZodOptional<z.ZodNumber>;
            expiresAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            action: string;
            decision: "allow" | "deny" | "require_approval" | "quarantine" | "weak_legacy_allow";
            context?: Record<string, unknown> | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            matchedRules?: string[] | undefined;
            expiresAt?: number | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            resourceId?: string | undefined;
            decisionKey?: string | undefined;
            resourceType?: string | undefined;
            subjectSnapshot?: Record<string, unknown> | undefined;
            resourceSnapshot?: Record<string, unknown> | undefined;
            policySnapshot?: Record<string, unknown> | undefined;
            decidedAt?: number | undefined;
        }, {
            id: string;
            action: string;
            decision: "allow" | "deny" | "require_approval" | "quarantine" | "weak_legacy_allow";
            context?: Record<string, unknown> | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            matchedRules?: string[] | undefined;
            expiresAt?: number | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            resourceId?: string | undefined;
            decisionKey?: string | undefined;
            resourceType?: string | undefined;
            subjectSnapshot?: Record<string, unknown> | undefined;
            resourceSnapshot?: Record<string, unknown> | undefined;
            policySnapshot?: Record<string, unknown> | undefined;
            decidedAt?: number | undefined;
        }>, "many">>;
        evidencePackets: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            evidenceKey: z.ZodOptional<z.ZodString>;
            nodeId: z.ZodOptional<z.ZodString>;
            kind: z.ZodString;
            title: z.ZodOptional<z.ZodString>;
            summary: z.ZodOptional<z.ZodString>;
            confidence: z.ZodOptional<z.ZodString>;
            visibility: z.ZodOptional<z.ZodString>;
            digest: z.ZodOptional<z.ZodString>;
            payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            occurredAt: z.ZodOptional<z.ZodNumber>;
            createdAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            kind: string;
            title?: string | undefined;
            nodeId?: string | undefined;
            summary?: string | undefined;
            confidence?: string | undefined;
            visibility?: string | undefined;
            createdAt?: number | undefined;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            digest?: string | undefined;
            evidenceKey?: string | undefined;
        }, {
            id: string;
            kind: string;
            title?: string | undefined;
            nodeId?: string | undefined;
            summary?: string | undefined;
            confidence?: string | undefined;
            visibility?: string | undefined;
            createdAt?: number | undefined;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            digest?: string | undefined;
            evidenceKey?: string | undefined;
        }>, "many">>;
        actionProposals: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            proposalKey: z.ZodOptional<z.ZodString>;
            nodeId: z.ZodOptional<z.ZodString>;
            adapter: z.ZodString;
            action: z.ZodString;
            state: z.ZodOptional<z.ZodString>;
            idempotencyKey: z.ZodOptional<z.ZodString>;
            proposalDigest: z.ZodOptional<z.ZodString>;
            evidenceRefs: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            policyEvaluation: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            proposedAt: z.ZodOptional<z.ZodNumber>;
            expiresAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            adapter: string;
            action: string;
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalDigest?: string | undefined;
            evidenceRefs?: string[] | undefined;
            policyEvaluation?: Record<string, unknown> | undefined;
            state?: string | undefined;
            expiresAt?: number | undefined;
            proposalKey?: string | undefined;
            proposedAt?: number | undefined;
        }, {
            id: string;
            adapter: string;
            action: string;
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalDigest?: string | undefined;
            evidenceRefs?: string[] | undefined;
            policyEvaluation?: Record<string, unknown> | undefined;
            state?: string | undefined;
            expiresAt?: number | undefined;
            proposalKey?: string | undefined;
            proposedAt?: number | undefined;
        }>, "many">>;
        approvalDecisions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            proposalKey: z.ZodOptional<z.ZodString>;
            decisionKey: z.ZodOptional<z.ZodString>;
            nodeId: z.ZodOptional<z.ZodString>;
            actorUserId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            subjectType: z.ZodOptional<z.ZodString>;
            subjectId: z.ZodOptional<z.ZodString>;
            subjectDigest: z.ZodOptional<z.ZodString>;
            decision: z.ZodEnum<["approve", "deny", "request_changes", "unknown"]>;
            reason: z.ZodOptional<z.ZodString>;
            actorSnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            decidedAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            decision: "unknown" | "deny" | "approve" | "request_changes";
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            subjectDigest?: string | undefined;
            proposalKey?: string | undefined;
            decisionKey?: string | undefined;
            decidedAt?: number | undefined;
            actorUserId?: number | null | undefined;
            actorSnapshot?: Record<string, unknown> | undefined;
        }, {
            id: string;
            decision: "unknown" | "deny" | "approve" | "request_changes";
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            subjectDigest?: string | undefined;
            proposalKey?: string | undefined;
            decisionKey?: string | undefined;
            decidedAt?: number | undefined;
            actorUserId?: number | null | undefined;
            actorSnapshot?: Record<string, unknown> | undefined;
        }>, "many">>;
        executionReceipts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            proposalKey: z.ZodOptional<z.ZodString>;
            decisionKey: z.ZodOptional<z.ZodString>;
            receiptKey: z.ZodOptional<z.ZodString>;
            adapter: z.ZodString;
            action: z.ZodString;
            status: z.ZodString;
            providerReference: z.ZodOptional<z.ZodString>;
            providerUrl: z.ZodOptional<z.ZodString>;
            idempotencyKey: z.ZodOptional<z.ZodString>;
            payloadDigest: z.ZodOptional<z.ZodString>;
            providerResponseDigest: z.ZodOptional<z.ZodString>;
            receiptDigest: z.ZodOptional<z.ZodString>;
            providerReconciliation: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            executedAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            status: string;
            id: string;
            adapter: string;
            action: string;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalKey?: string | undefined;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
            payloadDigest?: string | undefined;
            providerResponseDigest?: string | undefined;
            providerReconciliation?: Record<string, unknown> | undefined;
            executedAt?: number | undefined;
            decisionKey?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
        }, {
            status: string;
            id: string;
            adapter: string;
            action: string;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalKey?: string | undefined;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
            payloadDigest?: string | undefined;
            providerResponseDigest?: string | undefined;
            providerReconciliation?: Record<string, unknown> | undefined;
            executedAt?: number | undefined;
            decisionKey?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
        }>, "many">>;
        auditReceipts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            receiptKey: z.ZodOptional<z.ZodString>;
            eventType: z.ZodString;
            actorType: z.ZodOptional<z.ZodString>;
            actorId: z.ZodOptional<z.ZodString>;
            payloadDigest: z.ZodOptional<z.ZodString>;
            payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            occurredAt: z.ZodOptional<z.ZodNumber>;
            sequence: z.ZodOptional<z.ZodNumber>;
            previousReceiptDigest: z.ZodOptional<z.ZodString>;
            receiptDigest: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            eventType: string;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            payloadDigest?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
            actorType?: string | undefined;
            actorId?: string | undefined;
            sequence?: number | undefined;
            previousReceiptDigest?: string | undefined;
        }, {
            id: string;
            eventType: string;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            payloadDigest?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
            actorType?: string | undefined;
            actorId?: string | undefined;
            sequence?: number | undefined;
            previousReceiptDigest?: string | undefined;
        }>, "many">>;
        contextReceipts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            schema: z.ZodOptional<z.ZodLiteral<"viewport.context_receipt/v1">>;
            package: z.ZodOptional<z.ZodString>;
            packageName: z.ZodOptional<z.ZodString>;
            requested: z.ZodOptional<z.ZodString>;
            resolvedVersion: z.ZodOptional<z.ZodString>;
            provider: z.ZodOptional<z.ZodString>;
            digest: z.ZodOptional<z.ZodString>;
            freshness: z.ZodOptional<z.ZodString>;
            usedBy: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            resolvedAt: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
            payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        }, "strip", z.ZodTypeAny, {
            schema?: "viewport.context_receipt/v1" | undefined;
            payload?: Record<string, unknown> | undefined;
            digest?: string | undefined;
            package?: string | undefined;
            requested?: string | undefined;
            resolvedVersion?: string | undefined;
            provider?: string | undefined;
            freshness?: string | undefined;
            usedBy?: Record<string, unknown> | undefined;
            resolvedAt?: string | number | undefined;
            packageName?: string | undefined;
        }, {
            schema?: "viewport.context_receipt/v1" | undefined;
            payload?: Record<string, unknown> | undefined;
            digest?: string | undefined;
            package?: string | undefined;
            requested?: string | undefined;
            resolvedVersion?: string | undefined;
            provider?: string | undefined;
            freshness?: string | undefined;
            usedBy?: Record<string, unknown> | undefined;
            resolvedAt?: string | number | undefined;
            packageName?: string | undefined;
        }>, "many">>;
        contractHealth: z.ZodOptional<z.ZodObject<{
            status: z.ZodEnum<["valid", "warning", "invalid", "unknown", "not_applicable"]>;
            summary: z.ZodObject<{
                evidencePackets: z.ZodNumber;
                actionProposals: z.ZodNumber;
                approvalDecisions: z.ZodNumber;
                executionReceipts: z.ZodNumber;
                auditReceipts: z.ZodNumber;
                issues: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            }, {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            }>;
            issues: z.ZodArray<z.ZodObject<{
                severity: z.ZodEnum<["warning", "error"]>;
                code: z.ZodString;
                message: z.ZodString;
                metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            }, "strip", z.ZodTypeAny, {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }, {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }>, "many">;
            proposals: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">;
            auditChain: z.ZodObject<{
                status: z.ZodString;
                checked: z.ZodBoolean;
                receiptCount: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                status: string;
                checked: boolean;
                receiptCount: number;
            }, {
                status: string;
                checked: boolean;
                receiptCount: number;
            }>;
            checkedAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            issues: {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }[];
            status: "valid" | "unknown" | "warning" | "invalid" | "not_applicable";
            summary: {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            };
            proposals: Record<string, unknown>[];
            auditChain: {
                status: string;
                checked: boolean;
                receiptCount: number;
            };
            checkedAt?: number | undefined;
        }, {
            issues: {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }[];
            status: "valid" | "unknown" | "warning" | "invalid" | "not_applicable";
            summary: {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            };
            proposals: Record<string, unknown>[];
            auditChain: {
                status: string;
                checked: boolean;
                receiptCount: number;
            };
            checkedAt?: number | undefined;
        }>>;
        resourceManifest: z.ZodOptional<z.ZodObject<{
            schema: z.ZodLiteral<"viewport.session_resource_manifest/v1">;
            manifestDigest: z.ZodString;
            workingDirectory: z.ZodString;
            configSources: z.ZodArray<z.ZodObject<{
                path: z.ZodString;
                digest: z.ZodString;
                version: z.ZodLiteral<1>;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }, {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }>, "many">;
            resources: z.ZodObject<{
                contexts: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    required: z.ZodBoolean;
                    sourceConfigPath: z.ZodString;
                    resolution: z.ZodEnum<["requested_unverified"]>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }>, "many">;
                workflows: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    required: z.ZodBoolean;
                    sourceConfigPath: z.ZodString;
                    resolution: z.ZodEnum<["requested_unverified"]>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }>, "many">;
                plans: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    required: z.ZodBoolean;
                    sourceConfigPath: z.ZodString;
                    resolution: z.ZodEnum<["requested_unverified"]>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }>, "many">;
                agentProfiles: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    required: z.ZodBoolean;
                    sourceConfigPath: z.ZodString;
                    resolution: z.ZodEnum<["requested_unverified"]>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            }, {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            }>;
            contract: z.ZodOptional<z.ZodObject<{
                contextProviders: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    provider: z.ZodEnum<["repo-docs", "viewport-vault", "notebooklm", "glean", "custom-cli", "custom-mcp"]>;
                    required: z.ZodBoolean;
                    privacy: z.ZodEnum<["local_only", "control_plane_blind", "third_party_terms", "customer_hosted", "unknown"]>;
                    capabilities: z.ZodArray<z.ZodEnum<["search", "get", "propose", "write_approved"]>, "many">;
                    sourceConfigPath: z.ZodString;
                    vault: z.ZodOptional<z.ZodString>;
                    paths: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    notebook: z.ZodOptional<z.ZodString>;
                    command: z.ZodOptional<z.ZodString>;
                    resolution: z.ZodEnum<["requested_unverified"]>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }, {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }>, "many">;
                contextResolution: z.ZodObject<{
                    order: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    sizeBudgetBytes: z.ZodOptional<z.ZodNumber>;
                    strategy: z.ZodOptional<z.ZodEnum<["rank_by_recency_then_query", "pinned_then_recent", "provider_order"]>>;
                }, "strip", z.ZodTypeAny, {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                }, {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                }>;
                workflows: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    required: z.ZodBoolean;
                    sourceConfigPath: z.ZodString;
                    path: z.ZodOptional<z.ZodString>;
                    resource: z.ZodOptional<z.ZodString>;
                    version: z.ZodOptional<z.ZodString>;
                    digest: z.ZodOptional<z.ZodString>;
                    resolution: z.ZodEnum<["requested_unverified"]>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            }, {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            }>>;
            conflicts: z.ZodArray<z.ZodObject<{
                field: z.ZodString;
                values: z.ZodArray<z.ZodObject<{
                    value: z.ZodString;
                    sourceConfigPath: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    sourceConfigPath: string;
                }, {
                    value: string;
                    sourceConfigPath: string;
                }>, "many">;
                resolution: z.ZodLiteral<"requires_user_selection">;
            }, "strip", z.ZodTypeAny, {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }, {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }>, "many">;
            warnings: z.ZodArray<z.ZodObject<{
                code: z.ZodString;
                message: z.ZodString;
                path: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                code: string;
                message: string;
                path?: string | undefined;
            }, {
                code: string;
                message: string;
                path?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            schema: "viewport.session_resource_manifest/v1";
            manifestDigest: string;
            workingDirectory: string;
            configSources: {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }[];
            resources: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            };
            conflicts: {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }[];
            warnings: {
                code: string;
                message: string;
                path?: string | undefined;
            }[];
            contract?: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            } | undefined;
        }, {
            schema: "viewport.session_resource_manifest/v1";
            manifestDigest: string;
            workingDirectory: string;
            configSources: {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }[];
            resources: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            };
            conflicts: {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }[];
            warnings: {
                code: string;
                message: string;
                path?: string | undefined;
            }[];
            contract?: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            } | undefined;
        }>>;
        events: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            runId: z.ZodString;
            timestamp: z.ZodNumber;
            type: z.ZodString;
            severity: z.ZodOptional<z.ZodEnum<["debug", "info", "warning", "error"]>>;
            nodeId: z.ZodOptional<z.ZodString>;
            message: z.ZodString;
            data: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        }, "strip", z.ZodTypeAny, {
            message: string;
            type: string;
            id: string;
            runId: string;
            timestamp: number;
            nodeId?: string | undefined;
            severity?: "error" | "debug" | "info" | "warning" | undefined;
            data?: Record<string, unknown> | undefined;
        }, {
            message: string;
            type: string;
            id: string;
            runId: string;
            timestamp: number;
            nodeId?: string | undefined;
            severity?: "error" | "debug" | "info" | "warning" | undefined;
            data?: Record<string, unknown> | undefined;
        }>, "many">;
        createdAt: z.ZodNumber;
        startedAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodNumber;
        completedAt: z.ZodOptional<z.ZodNumber>;
        error: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled";
        schema: string;
        id: string;
        createdAt: number;
        digest: string;
        updatedAt: number;
        workflowName: string;
        sourceType: "local_file" | "viewport_snapshot" | "local_modified";
        yamlSnapshot: string;
        directoryId: string;
        directoryPath: string;
        machineId: string;
        initiation: "cli" | "browser" | "agent_skill";
        inputs: Record<string, WorkflowInputValue>;
        preflight: {
            issues: {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }[];
            ok: boolean;
        };
        nodes: Record<string, {
            type: "agent" | "context" | "action" | "approval" | "prompt" | "shell" | "plan" | "gate" | "loop" | "subflow" | "condition" | "artifact";
            status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled" | "skipped";
            id: string;
            title?: string | undefined;
            error?: string | undefined;
            approval?: {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            completedAt?: number | undefined;
            startedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
            exitCode?: number | undefined;
            outputs?: Record<string, unknown> | undefined;
            transcriptExcerpt?: {
                text: string;
                role: "user" | "assistant";
            }[] | undefined;
            iterations?: {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }[] | undefined;
            inlineAgents?: Record<string, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }> | undefined;
        }>;
        events: {
            message: string;
            type: string;
            id: string;
            runId: string;
            timestamp: number;
            nodeId?: string | undefined;
            severity?: "error" | "debug" | "info" | "warning" | undefined;
            data?: Record<string, unknown> | undefined;
        }[];
        artifacts?: {
            path: string;
            id: string;
            nodeId: string;
            createdAt: number;
            runId: string;
            name: string;
            kind?: string | undefined;
            digest?: string | undefined;
            description?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: Record<string, unknown> | undefined;
        }[] | undefined;
        error?: string | undefined;
        contextReceipts?: {
            schema?: "viewport.context_receipt/v1" | undefined;
            payload?: Record<string, unknown> | undefined;
            digest?: string | undefined;
            package?: string | undefined;
            requested?: string | undefined;
            resolvedVersion?: string | undefined;
            provider?: string | undefined;
            freshness?: string | undefined;
            usedBy?: Record<string, unknown> | undefined;
            resolvedAt?: string | number | undefined;
            packageName?: string | undefined;
        }[] | undefined;
        resourceId?: string | undefined;
        workflowDefinitionId?: string | undefined;
        completedAt?: number | undefined;
        reviewPackets?: {
            status: "failed" | "canceled" | "draft" | "published";
            id: string;
            title: string;
            decision: "blocked" | "approved" | "changes_requested" | "needs_review";
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            artifacts?: Record<string, unknown>[] | undefined;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            findings?: Record<string, unknown>[] | undefined;
            subject?: {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
            readinessTargetId?: string | undefined;
            planId?: string | undefined;
            sourceKey?: string | undefined;
            checks?: Record<string, unknown>[] | undefined;
            proofItems?: Record<string, unknown>[] | undefined;
            sourceSnapshot?: Record<string, unknown> | undefined;
            publishedAt?: number | undefined;
        }[] | undefined;
        evidencePackets?: {
            id: string;
            kind: string;
            title?: string | undefined;
            nodeId?: string | undefined;
            summary?: string | undefined;
            confidence?: string | undefined;
            visibility?: string | undefined;
            createdAt?: number | undefined;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            digest?: string | undefined;
            evidenceKey?: string | undefined;
        }[] | undefined;
        actionProposals?: {
            id: string;
            adapter: string;
            action: string;
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalDigest?: string | undefined;
            evidenceRefs?: string[] | undefined;
            policyEvaluation?: Record<string, unknown> | undefined;
            state?: string | undefined;
            expiresAt?: number | undefined;
            proposalKey?: string | undefined;
            proposedAt?: number | undefined;
        }[] | undefined;
        approvalDecisions?: {
            id: string;
            decision: "unknown" | "deny" | "approve" | "request_changes";
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            subjectDigest?: string | undefined;
            proposalKey?: string | undefined;
            decisionKey?: string | undefined;
            decidedAt?: number | undefined;
            actorUserId?: number | null | undefined;
            actorSnapshot?: Record<string, unknown> | undefined;
        }[] | undefined;
        executionReceipts?: {
            status: string;
            id: string;
            adapter: string;
            action: string;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalKey?: string | undefined;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
            payloadDigest?: string | undefined;
            providerResponseDigest?: string | undefined;
            providerReconciliation?: Record<string, unknown> | undefined;
            executedAt?: number | undefined;
            decisionKey?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
        }[] | undefined;
        auditReceipts?: {
            id: string;
            eventType: string;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            payloadDigest?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
            actorType?: string | undefined;
            actorId?: string | undefined;
            sequence?: number | undefined;
            previousReceiptDigest?: string | undefined;
        }[] | undefined;
        startedAt?: number | undefined;
        workflowTitle?: string | undefined;
        workflowVersionId?: string | undefined;
        rerunOfWorkflowRunId?: string | undefined;
        sourcePath?: string | undefined;
        runtimeTargetId?: string | undefined;
        managedExecutorId?: string | undefined;
        executorTarget?: "local_machine" | "managed_executor" | undefined;
        assignmentStatus?: string | undefined;
        platformRunId?: string | undefined;
        executorAgent?: string | undefined;
        executorModel?: string | undefined;
        executionPolicy?: {
            mode: "current_tree" | "isolated_worktree" | "named_branch";
            branch?: string | undefined;
        } | undefined;
        dataCapturePolicy?: {
            transcripts: "none" | "excerpt";
            logs: "metadata" | "content";
            artifacts: "metadata" | "local_reference";
        } | undefined;
        readinessTargets?: {
            status: "blocked" | "failed" | "running" | "canceled" | "draft" | "ready";
            id: string;
            title: string;
            kind: string;
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            resourceId: string;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            repository?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            planId?: string | undefined;
            ownerUserId?: number | null | undefined;
            workflowDefinitionId?: string | undefined;
            baseBranch?: string | undefined;
            headBranch?: string | undefined;
            headSha?: string | undefined;
            externalUrl?: string | undefined;
            completedAt?: number | undefined;
            updatedAt?: number | undefined;
            reviewPackets?: {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }[] | undefined;
        }[] | undefined;
        authorizationDecisions?: {
            id: string;
            action: string;
            decision: "allow" | "deny" | "require_approval" | "quarantine" | "weak_legacy_allow";
            context?: Record<string, unknown> | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            matchedRules?: string[] | undefined;
            expiresAt?: number | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            resourceId?: string | undefined;
            decisionKey?: string | undefined;
            resourceType?: string | undefined;
            subjectSnapshot?: Record<string, unknown> | undefined;
            resourceSnapshot?: Record<string, unknown> | undefined;
            policySnapshot?: Record<string, unknown> | undefined;
            decidedAt?: number | undefined;
        }[] | undefined;
        contractHealth?: {
            issues: {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }[];
            status: "valid" | "unknown" | "warning" | "invalid" | "not_applicable";
            summary: {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            };
            proposals: Record<string, unknown>[];
            auditChain: {
                status: string;
                checked: boolean;
                receiptCount: number;
            };
            checkedAt?: number | undefined;
        } | undefined;
        resourceManifest?: {
            schema: "viewport.session_resource_manifest/v1";
            manifestDigest: string;
            workingDirectory: string;
            configSources: {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }[];
            resources: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            };
            conflicts: {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }[];
            warnings: {
                code: string;
                message: string;
                path?: string | undefined;
            }[];
            contract?: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            } | undefined;
        } | undefined;
    }, {
        status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled";
        schema: string;
        id: string;
        createdAt: number;
        digest: string;
        updatedAt: number;
        workflowName: string;
        sourceType: "local_file" | "viewport_snapshot" | "local_modified";
        yamlSnapshot: string;
        directoryId: string;
        directoryPath: string;
        machineId: string;
        initiation: "cli" | "browser" | "agent_skill";
        inputs: Record<string, WorkflowInputValue>;
        preflight: {
            issues: {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }[];
            ok: boolean;
        };
        nodes: Record<string, {
            type: "agent" | "context" | "action" | "approval" | "prompt" | "shell" | "plan" | "gate" | "loop" | "subflow" | "condition" | "artifact";
            status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled" | "skipped";
            id: string;
            title?: string | undefined;
            error?: string | undefined;
            approval?: {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            completedAt?: number | undefined;
            startedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
            exitCode?: number | undefined;
            outputs?: Record<string, unknown> | undefined;
            transcriptExcerpt?: {
                text: string;
                role: "user" | "assistant";
            }[] | undefined;
            iterations?: {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }[] | undefined;
            inlineAgents?: Record<string, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }> | undefined;
        }>;
        events: {
            message: string;
            type: string;
            id: string;
            runId: string;
            timestamp: number;
            nodeId?: string | undefined;
            severity?: "error" | "debug" | "info" | "warning" | undefined;
            data?: Record<string, unknown> | undefined;
        }[];
        artifacts?: {
            path: string;
            id: string;
            nodeId: string;
            createdAt: number;
            runId: string;
            name: string;
            kind?: string | undefined;
            digest?: string | undefined;
            description?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: Record<string, unknown> | undefined;
        }[] | undefined;
        error?: string | undefined;
        contextReceipts?: {
            schema?: "viewport.context_receipt/v1" | undefined;
            payload?: Record<string, unknown> | undefined;
            digest?: string | undefined;
            package?: string | undefined;
            requested?: string | undefined;
            resolvedVersion?: string | undefined;
            provider?: string | undefined;
            freshness?: string | undefined;
            usedBy?: Record<string, unknown> | undefined;
            resolvedAt?: string | number | undefined;
            packageName?: string | undefined;
        }[] | undefined;
        resourceId?: string | undefined;
        workflowDefinitionId?: string | undefined;
        completedAt?: number | undefined;
        reviewPackets?: {
            status: "failed" | "canceled" | "draft" | "published";
            id: string;
            title: string;
            decision: "blocked" | "approved" | "changes_requested" | "needs_review";
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            artifacts?: Record<string, unknown>[] | undefined;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            findings?: Record<string, unknown>[] | undefined;
            subject?: {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
            readinessTargetId?: string | undefined;
            planId?: string | undefined;
            sourceKey?: string | undefined;
            checks?: Record<string, unknown>[] | undefined;
            proofItems?: Record<string, unknown>[] | undefined;
            sourceSnapshot?: Record<string, unknown> | undefined;
            publishedAt?: number | undefined;
        }[] | undefined;
        evidencePackets?: {
            id: string;
            kind: string;
            title?: string | undefined;
            nodeId?: string | undefined;
            summary?: string | undefined;
            confidence?: string | undefined;
            visibility?: string | undefined;
            createdAt?: number | undefined;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            digest?: string | undefined;
            evidenceKey?: string | undefined;
        }[] | undefined;
        actionProposals?: {
            id: string;
            adapter: string;
            action: string;
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalDigest?: string | undefined;
            evidenceRefs?: string[] | undefined;
            policyEvaluation?: Record<string, unknown> | undefined;
            state?: string | undefined;
            expiresAt?: number | undefined;
            proposalKey?: string | undefined;
            proposedAt?: number | undefined;
        }[] | undefined;
        approvalDecisions?: {
            id: string;
            decision: "unknown" | "deny" | "approve" | "request_changes";
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            subjectDigest?: string | undefined;
            proposalKey?: string | undefined;
            decisionKey?: string | undefined;
            decidedAt?: number | undefined;
            actorUserId?: number | null | undefined;
            actorSnapshot?: Record<string, unknown> | undefined;
        }[] | undefined;
        executionReceipts?: {
            status: string;
            id: string;
            adapter: string;
            action: string;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalKey?: string | undefined;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
            payloadDigest?: string | undefined;
            providerResponseDigest?: string | undefined;
            providerReconciliation?: Record<string, unknown> | undefined;
            executedAt?: number | undefined;
            decisionKey?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
        }[] | undefined;
        auditReceipts?: {
            id: string;
            eventType: string;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            payloadDigest?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
            actorType?: string | undefined;
            actorId?: string | undefined;
            sequence?: number | undefined;
            previousReceiptDigest?: string | undefined;
        }[] | undefined;
        startedAt?: number | undefined;
        workflowTitle?: string | undefined;
        workflowVersionId?: string | undefined;
        rerunOfWorkflowRunId?: string | undefined;
        sourcePath?: string | undefined;
        runtimeTargetId?: string | undefined;
        managedExecutorId?: string | undefined;
        executorTarget?: "local_machine" | "managed_executor" | undefined;
        assignmentStatus?: string | undefined;
        platformRunId?: string | undefined;
        executorAgent?: string | undefined;
        executorModel?: string | undefined;
        executionPolicy?: {
            mode: "current_tree" | "isolated_worktree" | "named_branch";
            branch?: string | undefined;
        } | undefined;
        dataCapturePolicy?: {
            transcripts: "none" | "excerpt";
            logs: "metadata" | "content";
            artifacts: "metadata" | "local_reference";
        } | undefined;
        readinessTargets?: {
            status: "blocked" | "failed" | "running" | "canceled" | "draft" | "ready";
            id: string;
            title: string;
            kind: string;
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            resourceId: string;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            repository?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            planId?: string | undefined;
            ownerUserId?: number | null | undefined;
            workflowDefinitionId?: string | undefined;
            baseBranch?: string | undefined;
            headBranch?: string | undefined;
            headSha?: string | undefined;
            externalUrl?: string | undefined;
            completedAt?: number | undefined;
            updatedAt?: number | undefined;
            reviewPackets?: {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }[] | undefined;
        }[] | undefined;
        authorizationDecisions?: {
            id: string;
            action: string;
            decision: "allow" | "deny" | "require_approval" | "quarantine" | "weak_legacy_allow";
            context?: Record<string, unknown> | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            matchedRules?: string[] | undefined;
            expiresAt?: number | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            resourceId?: string | undefined;
            decisionKey?: string | undefined;
            resourceType?: string | undefined;
            subjectSnapshot?: Record<string, unknown> | undefined;
            resourceSnapshot?: Record<string, unknown> | undefined;
            policySnapshot?: Record<string, unknown> | undefined;
            decidedAt?: number | undefined;
        }[] | undefined;
        contractHealth?: {
            issues: {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }[];
            status: "valid" | "unknown" | "warning" | "invalid" | "not_applicable";
            summary: {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            };
            proposals: Record<string, unknown>[];
            auditChain: {
                status: string;
                checked: boolean;
                receiptCount: number;
            };
            checkedAt?: number | undefined;
        } | undefined;
        resourceManifest?: {
            schema: "viewport.session_resource_manifest/v1";
            manifestDigest: string;
            workingDirectory: string;
            configSources: {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }[];
            resources: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            };
            conflicts: {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }[];
            warnings: {
                code: string;
                message: string;
                path?: string | undefined;
            }[];
            contract?: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            } | undefined;
        } | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "workflow-run-started";
    run: {
        status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled";
        schema: string;
        id: string;
        createdAt: number;
        digest: string;
        updatedAt: number;
        workflowName: string;
        sourceType: "local_file" | "viewport_snapshot" | "local_modified";
        yamlSnapshot: string;
        directoryId: string;
        directoryPath: string;
        machineId: string;
        initiation: "cli" | "browser" | "agent_skill";
        inputs: Record<string, WorkflowInputValue>;
        preflight: {
            issues: {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }[];
            ok: boolean;
        };
        nodes: Record<string, {
            type: "agent" | "context" | "action" | "approval" | "prompt" | "shell" | "plan" | "gate" | "loop" | "subflow" | "condition" | "artifact";
            status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled" | "skipped";
            id: string;
            title?: string | undefined;
            error?: string | undefined;
            approval?: {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            completedAt?: number | undefined;
            startedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
            exitCode?: number | undefined;
            outputs?: Record<string, unknown> | undefined;
            transcriptExcerpt?: {
                text: string;
                role: "user" | "assistant";
            }[] | undefined;
            iterations?: {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }[] | undefined;
            inlineAgents?: Record<string, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }> | undefined;
        }>;
        events: {
            message: string;
            type: string;
            id: string;
            runId: string;
            timestamp: number;
            nodeId?: string | undefined;
            severity?: "error" | "debug" | "info" | "warning" | undefined;
            data?: Record<string, unknown> | undefined;
        }[];
        artifacts?: {
            path: string;
            id: string;
            nodeId: string;
            createdAt: number;
            runId: string;
            name: string;
            kind?: string | undefined;
            digest?: string | undefined;
            description?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: Record<string, unknown> | undefined;
        }[] | undefined;
        error?: string | undefined;
        contextReceipts?: {
            schema?: "viewport.context_receipt/v1" | undefined;
            payload?: Record<string, unknown> | undefined;
            digest?: string | undefined;
            package?: string | undefined;
            requested?: string | undefined;
            resolvedVersion?: string | undefined;
            provider?: string | undefined;
            freshness?: string | undefined;
            usedBy?: Record<string, unknown> | undefined;
            resolvedAt?: string | number | undefined;
            packageName?: string | undefined;
        }[] | undefined;
        resourceId?: string | undefined;
        workflowDefinitionId?: string | undefined;
        completedAt?: number | undefined;
        reviewPackets?: {
            status: "failed" | "canceled" | "draft" | "published";
            id: string;
            title: string;
            decision: "blocked" | "approved" | "changes_requested" | "needs_review";
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            artifacts?: Record<string, unknown>[] | undefined;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            findings?: Record<string, unknown>[] | undefined;
            subject?: {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
            readinessTargetId?: string | undefined;
            planId?: string | undefined;
            sourceKey?: string | undefined;
            checks?: Record<string, unknown>[] | undefined;
            proofItems?: Record<string, unknown>[] | undefined;
            sourceSnapshot?: Record<string, unknown> | undefined;
            publishedAt?: number | undefined;
        }[] | undefined;
        evidencePackets?: {
            id: string;
            kind: string;
            title?: string | undefined;
            nodeId?: string | undefined;
            summary?: string | undefined;
            confidence?: string | undefined;
            visibility?: string | undefined;
            createdAt?: number | undefined;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            digest?: string | undefined;
            evidenceKey?: string | undefined;
        }[] | undefined;
        actionProposals?: {
            id: string;
            adapter: string;
            action: string;
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalDigest?: string | undefined;
            evidenceRefs?: string[] | undefined;
            policyEvaluation?: Record<string, unknown> | undefined;
            state?: string | undefined;
            expiresAt?: number | undefined;
            proposalKey?: string | undefined;
            proposedAt?: number | undefined;
        }[] | undefined;
        approvalDecisions?: {
            id: string;
            decision: "unknown" | "deny" | "approve" | "request_changes";
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            subjectDigest?: string | undefined;
            proposalKey?: string | undefined;
            decisionKey?: string | undefined;
            decidedAt?: number | undefined;
            actorUserId?: number | null | undefined;
            actorSnapshot?: Record<string, unknown> | undefined;
        }[] | undefined;
        executionReceipts?: {
            status: string;
            id: string;
            adapter: string;
            action: string;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalKey?: string | undefined;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
            payloadDigest?: string | undefined;
            providerResponseDigest?: string | undefined;
            providerReconciliation?: Record<string, unknown> | undefined;
            executedAt?: number | undefined;
            decisionKey?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
        }[] | undefined;
        auditReceipts?: {
            id: string;
            eventType: string;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            payloadDigest?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
            actorType?: string | undefined;
            actorId?: string | undefined;
            sequence?: number | undefined;
            previousReceiptDigest?: string | undefined;
        }[] | undefined;
        startedAt?: number | undefined;
        workflowTitle?: string | undefined;
        workflowVersionId?: string | undefined;
        rerunOfWorkflowRunId?: string | undefined;
        sourcePath?: string | undefined;
        runtimeTargetId?: string | undefined;
        managedExecutorId?: string | undefined;
        executorTarget?: "local_machine" | "managed_executor" | undefined;
        assignmentStatus?: string | undefined;
        platformRunId?: string | undefined;
        executorAgent?: string | undefined;
        executorModel?: string | undefined;
        executionPolicy?: {
            mode: "current_tree" | "isolated_worktree" | "named_branch";
            branch?: string | undefined;
        } | undefined;
        dataCapturePolicy?: {
            transcripts: "none" | "excerpt";
            logs: "metadata" | "content";
            artifacts: "metadata" | "local_reference";
        } | undefined;
        readinessTargets?: {
            status: "blocked" | "failed" | "running" | "canceled" | "draft" | "ready";
            id: string;
            title: string;
            kind: string;
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            resourceId: string;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            repository?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            planId?: string | undefined;
            ownerUserId?: number | null | undefined;
            workflowDefinitionId?: string | undefined;
            baseBranch?: string | undefined;
            headBranch?: string | undefined;
            headSha?: string | undefined;
            externalUrl?: string | undefined;
            completedAt?: number | undefined;
            updatedAt?: number | undefined;
            reviewPackets?: {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }[] | undefined;
        }[] | undefined;
        authorizationDecisions?: {
            id: string;
            action: string;
            decision: "allow" | "deny" | "require_approval" | "quarantine" | "weak_legacy_allow";
            context?: Record<string, unknown> | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            matchedRules?: string[] | undefined;
            expiresAt?: number | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            resourceId?: string | undefined;
            decisionKey?: string | undefined;
            resourceType?: string | undefined;
            subjectSnapshot?: Record<string, unknown> | undefined;
            resourceSnapshot?: Record<string, unknown> | undefined;
            policySnapshot?: Record<string, unknown> | undefined;
            decidedAt?: number | undefined;
        }[] | undefined;
        contractHealth?: {
            issues: {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }[];
            status: "valid" | "unknown" | "warning" | "invalid" | "not_applicable";
            summary: {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            };
            proposals: Record<string, unknown>[];
            auditChain: {
                status: string;
                checked: boolean;
                receiptCount: number;
            };
            checkedAt?: number | undefined;
        } | undefined;
        resourceManifest?: {
            schema: "viewport.session_resource_manifest/v1";
            manifestDigest: string;
            workingDirectory: string;
            configSources: {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }[];
            resources: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            };
            conflicts: {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }[];
            warnings: {
                code: string;
                message: string;
                path?: string | undefined;
            }[];
            contract?: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            } | undefined;
        } | undefined;
    };
}, {
    type: "workflow-run-started";
    run: {
        status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled";
        schema: string;
        id: string;
        createdAt: number;
        digest: string;
        updatedAt: number;
        workflowName: string;
        sourceType: "local_file" | "viewport_snapshot" | "local_modified";
        yamlSnapshot: string;
        directoryId: string;
        directoryPath: string;
        machineId: string;
        initiation: "cli" | "browser" | "agent_skill";
        inputs: Record<string, WorkflowInputValue>;
        preflight: {
            issues: {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }[];
            ok: boolean;
        };
        nodes: Record<string, {
            type: "agent" | "context" | "action" | "approval" | "prompt" | "shell" | "plan" | "gate" | "loop" | "subflow" | "condition" | "artifact";
            status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled" | "skipped";
            id: string;
            title?: string | undefined;
            error?: string | undefined;
            approval?: {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            completedAt?: number | undefined;
            startedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
            exitCode?: number | undefined;
            outputs?: Record<string, unknown> | undefined;
            transcriptExcerpt?: {
                text: string;
                role: "user" | "assistant";
            }[] | undefined;
            iterations?: {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }[] | undefined;
            inlineAgents?: Record<string, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }> | undefined;
        }>;
        events: {
            message: string;
            type: string;
            id: string;
            runId: string;
            timestamp: number;
            nodeId?: string | undefined;
            severity?: "error" | "debug" | "info" | "warning" | undefined;
            data?: Record<string, unknown> | undefined;
        }[];
        artifacts?: {
            path: string;
            id: string;
            nodeId: string;
            createdAt: number;
            runId: string;
            name: string;
            kind?: string | undefined;
            digest?: string | undefined;
            description?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: Record<string, unknown> | undefined;
        }[] | undefined;
        error?: string | undefined;
        contextReceipts?: {
            schema?: "viewport.context_receipt/v1" | undefined;
            payload?: Record<string, unknown> | undefined;
            digest?: string | undefined;
            package?: string | undefined;
            requested?: string | undefined;
            resolvedVersion?: string | undefined;
            provider?: string | undefined;
            freshness?: string | undefined;
            usedBy?: Record<string, unknown> | undefined;
            resolvedAt?: string | number | undefined;
            packageName?: string | undefined;
        }[] | undefined;
        resourceId?: string | undefined;
        workflowDefinitionId?: string | undefined;
        completedAt?: number | undefined;
        reviewPackets?: {
            status: "failed" | "canceled" | "draft" | "published";
            id: string;
            title: string;
            decision: "blocked" | "approved" | "changes_requested" | "needs_review";
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            artifacts?: Record<string, unknown>[] | undefined;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            findings?: Record<string, unknown>[] | undefined;
            subject?: {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
            readinessTargetId?: string | undefined;
            planId?: string | undefined;
            sourceKey?: string | undefined;
            checks?: Record<string, unknown>[] | undefined;
            proofItems?: Record<string, unknown>[] | undefined;
            sourceSnapshot?: Record<string, unknown> | undefined;
            publishedAt?: number | undefined;
        }[] | undefined;
        evidencePackets?: {
            id: string;
            kind: string;
            title?: string | undefined;
            nodeId?: string | undefined;
            summary?: string | undefined;
            confidence?: string | undefined;
            visibility?: string | undefined;
            createdAt?: number | undefined;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            digest?: string | undefined;
            evidenceKey?: string | undefined;
        }[] | undefined;
        actionProposals?: {
            id: string;
            adapter: string;
            action: string;
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalDigest?: string | undefined;
            evidenceRefs?: string[] | undefined;
            policyEvaluation?: Record<string, unknown> | undefined;
            state?: string | undefined;
            expiresAt?: number | undefined;
            proposalKey?: string | undefined;
            proposedAt?: number | undefined;
        }[] | undefined;
        approvalDecisions?: {
            id: string;
            decision: "unknown" | "deny" | "approve" | "request_changes";
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            subjectDigest?: string | undefined;
            proposalKey?: string | undefined;
            decisionKey?: string | undefined;
            decidedAt?: number | undefined;
            actorUserId?: number | null | undefined;
            actorSnapshot?: Record<string, unknown> | undefined;
        }[] | undefined;
        executionReceipts?: {
            status: string;
            id: string;
            adapter: string;
            action: string;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalKey?: string | undefined;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
            payloadDigest?: string | undefined;
            providerResponseDigest?: string | undefined;
            providerReconciliation?: Record<string, unknown> | undefined;
            executedAt?: number | undefined;
            decisionKey?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
        }[] | undefined;
        auditReceipts?: {
            id: string;
            eventType: string;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            payloadDigest?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
            actorType?: string | undefined;
            actorId?: string | undefined;
            sequence?: number | undefined;
            previousReceiptDigest?: string | undefined;
        }[] | undefined;
        startedAt?: number | undefined;
        workflowTitle?: string | undefined;
        workflowVersionId?: string | undefined;
        rerunOfWorkflowRunId?: string | undefined;
        sourcePath?: string | undefined;
        runtimeTargetId?: string | undefined;
        managedExecutorId?: string | undefined;
        executorTarget?: "local_machine" | "managed_executor" | undefined;
        assignmentStatus?: string | undefined;
        platformRunId?: string | undefined;
        executorAgent?: string | undefined;
        executorModel?: string | undefined;
        executionPolicy?: {
            mode: "current_tree" | "isolated_worktree" | "named_branch";
            branch?: string | undefined;
        } | undefined;
        dataCapturePolicy?: {
            transcripts: "none" | "excerpt";
            logs: "metadata" | "content";
            artifacts: "metadata" | "local_reference";
        } | undefined;
        readinessTargets?: {
            status: "blocked" | "failed" | "running" | "canceled" | "draft" | "ready";
            id: string;
            title: string;
            kind: string;
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            resourceId: string;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            repository?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            planId?: string | undefined;
            ownerUserId?: number | null | undefined;
            workflowDefinitionId?: string | undefined;
            baseBranch?: string | undefined;
            headBranch?: string | undefined;
            headSha?: string | undefined;
            externalUrl?: string | undefined;
            completedAt?: number | undefined;
            updatedAt?: number | undefined;
            reviewPackets?: {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }[] | undefined;
        }[] | undefined;
        authorizationDecisions?: {
            id: string;
            action: string;
            decision: "allow" | "deny" | "require_approval" | "quarantine" | "weak_legacy_allow";
            context?: Record<string, unknown> | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            matchedRules?: string[] | undefined;
            expiresAt?: number | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            resourceId?: string | undefined;
            decisionKey?: string | undefined;
            resourceType?: string | undefined;
            subjectSnapshot?: Record<string, unknown> | undefined;
            resourceSnapshot?: Record<string, unknown> | undefined;
            policySnapshot?: Record<string, unknown> | undefined;
            decidedAt?: number | undefined;
        }[] | undefined;
        contractHealth?: {
            issues: {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }[];
            status: "valid" | "unknown" | "warning" | "invalid" | "not_applicable";
            summary: {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            };
            proposals: Record<string, unknown>[];
            auditChain: {
                status: string;
                checked: boolean;
                receiptCount: number;
            };
            checkedAt?: number | undefined;
        } | undefined;
        resourceManifest?: {
            schema: "viewport.session_resource_manifest/v1";
            manifestDigest: string;
            workingDirectory: string;
            configSources: {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }[];
            resources: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            };
            conflicts: {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }[];
            warnings: {
                code: string;
                message: string;
                path?: string | undefined;
            }[];
            contract?: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            } | undefined;
        } | undefined;
    };
}>;
export declare const WorkflowRunUpdatedMessageSchema: z.ZodObject<{
    type: z.ZodLiteral<"workflow-run-updated">;
    run: z.ZodObject<{
        id: z.ZodString;
        workflowName: z.ZodString;
        workflowTitle: z.ZodOptional<z.ZodString>;
        workflowDefinitionId: z.ZodOptional<z.ZodString>;
        workflowVersionId: z.ZodOptional<z.ZodString>;
        rerunOfWorkflowRunId: z.ZodOptional<z.ZodString>;
        sourceType: z.ZodEnum<["local_file", "viewport_snapshot", "local_modified"]>;
        sourcePath: z.ZodOptional<z.ZodString>;
        digest: z.ZodString;
        schema: z.ZodString;
        yamlSnapshot: z.ZodString;
        directoryId: z.ZodString;
        directoryPath: z.ZodString;
        resourceId: z.ZodOptional<z.ZodString>;
        runtimeTargetId: z.ZodOptional<z.ZodString>;
        managedExecutorId: z.ZodOptional<z.ZodString>;
        executorTarget: z.ZodOptional<z.ZodEnum<["local_machine", "managed_executor"]>>;
        assignmentStatus: z.ZodOptional<z.ZodString>;
        platformRunId: z.ZodOptional<z.ZodString>;
        machineId: z.ZodString;
        executorAgent: z.ZodOptional<z.ZodString>;
        executorModel: z.ZodOptional<z.ZodString>;
        executionPolicy: z.ZodOptional<z.ZodObject<{
            mode: z.ZodEnum<["current_tree", "isolated_worktree", "named_branch"]>;
            branch: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            mode: "current_tree" | "isolated_worktree" | "named_branch";
            branch?: string | undefined;
        }, {
            mode: "current_tree" | "isolated_worktree" | "named_branch";
            branch?: string | undefined;
        }>>;
        dataCapturePolicy: z.ZodOptional<z.ZodObject<{
            transcripts: z.ZodEnum<["none", "excerpt"]>;
            logs: z.ZodEnum<["metadata", "content"]>;
            artifacts: z.ZodEnum<["metadata", "local_reference"]>;
        }, "strip", z.ZodTypeAny, {
            transcripts: "none" | "excerpt";
            logs: "metadata" | "content";
            artifacts: "metadata" | "local_reference";
        }, {
            transcripts: "none" | "excerpt";
            logs: "metadata" | "content";
            artifacts: "metadata" | "local_reference";
        }>>;
        initiation: z.ZodEnum<["cli", "browser", "agent_skill"]>;
        status: z.ZodEnum<["queued", "running", "blocked", "completed", "failed", "canceled"]>;
        inputs: z.ZodRecord<z.ZodString, z.ZodType<WorkflowInputValue, z.ZodTypeDef, WorkflowInputValue>>;
        preflight: z.ZodObject<{
            ok: z.ZodBoolean;
            issues: z.ZodArray<z.ZodObject<{
                kind: z.ZodEnum<["agent", "tool", "node"]>;
                name: z.ZodString;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }, {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            issues: {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }[];
            ok: boolean;
        }, {
            issues: {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }[];
            ok: boolean;
        }>;
        nodes: z.ZodRecord<z.ZodString, z.ZodObject<{
            id: z.ZodString;
            type: z.ZodEnum<["prompt", "shell", "approval", "plan", "gate", "loop", "subflow", "agent", "context", "condition", "artifact", "action"]>;
            title: z.ZodOptional<z.ZodString>;
            status: z.ZodEnum<["queued", "running", "blocked", "completed", "failed", "skipped", "canceled"]>;
            startedAt: z.ZodOptional<z.ZodNumber>;
            completedAt: z.ZodOptional<z.ZodNumber>;
            sessionId: z.ZodOptional<z.ZodString>;
            nativeSessionId: z.ZodOptional<z.ZodString>;
            worktreePath: z.ZodOptional<z.ZodString>;
            output: z.ZodOptional<z.ZodString>;
            outputs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            transcriptExcerpt: z.ZodOptional<z.ZodArray<z.ZodObject<{
                role: z.ZodEnum<["user", "assistant"]>;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                text: string;
                role: "user" | "assistant";
            }, {
                text: string;
                role: "user" | "assistant";
            }>, "many">>;
            exitCode: z.ZodOptional<z.ZodNumber>;
            error: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            approval: z.ZodOptional<z.ZodObject<{
                prompt: z.ZodString;
                requestedAt: z.ZodNumber;
                resolvedAt: z.ZodOptional<z.ZodNumber>;
                approved: z.ZodOptional<z.ZodBoolean>;
                decision: z.ZodOptional<z.ZodEnum<["approve", "request_changes", "reject"]>>;
                message: z.ZodOptional<z.ZodString>;
                actor: z.ZodOptional<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    name: z.ZodOptional<z.ZodString>;
                    email: z.ZodOptional<z.ZodString>;
                    source: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                }, {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                }>>;
                feedback: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                executionGrant: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            }, "strip", z.ZodTypeAny, {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            }, {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            }>>;
            iterations: z.ZodOptional<z.ZodArray<z.ZodObject<{
                index: z.ZodNumber;
                status: z.ZodEnum<["running", "completed", "failed", "skipped", "canceled"]>;
                startedAt: z.ZodNumber;
                completedAt: z.ZodOptional<z.ZodNumber>;
                sessionId: z.ZodOptional<z.ZodString>;
                nativeSessionId: z.ZodOptional<z.ZodString>;
                worktreePath: z.ZodOptional<z.ZodString>;
                output: z.ZodOptional<z.ZodString>;
                exitCode: z.ZodOptional<z.ZodNumber>;
                error: z.ZodOptional<z.ZodString>;
                item: z.ZodOptional<z.ZodUnknown>;
            }, "strip", z.ZodTypeAny, {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }, {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }>, "many">>;
            inlineAgents: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                id: z.ZodString;
                title: z.ZodOptional<z.ZodString>;
                agent: z.ZodOptional<z.ZodString>;
                model: z.ZodOptional<z.ZodString>;
                status: z.ZodEnum<["queued", "running", "completed", "failed", "canceled"]>;
                startedAt: z.ZodOptional<z.ZodNumber>;
                completedAt: z.ZodOptional<z.ZodNumber>;
                sessionId: z.ZodOptional<z.ZodString>;
                nativeSessionId: z.ZodOptional<z.ZodString>;
                worktreePath: z.ZodOptional<z.ZodString>;
                output: z.ZodOptional<z.ZodString>;
                error: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }>>>;
        }, "strip", z.ZodTypeAny, {
            type: "agent" | "context" | "action" | "approval" | "prompt" | "shell" | "plan" | "gate" | "loop" | "subflow" | "condition" | "artifact";
            status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled" | "skipped";
            id: string;
            title?: string | undefined;
            error?: string | undefined;
            approval?: {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            completedAt?: number | undefined;
            startedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
            exitCode?: number | undefined;
            outputs?: Record<string, unknown> | undefined;
            transcriptExcerpt?: {
                text: string;
                role: "user" | "assistant";
            }[] | undefined;
            iterations?: {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }[] | undefined;
            inlineAgents?: Record<string, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }> | undefined;
        }, {
            type: "agent" | "context" | "action" | "approval" | "prompt" | "shell" | "plan" | "gate" | "loop" | "subflow" | "condition" | "artifact";
            status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled" | "skipped";
            id: string;
            title?: string | undefined;
            error?: string | undefined;
            approval?: {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            completedAt?: number | undefined;
            startedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
            exitCode?: number | undefined;
            outputs?: Record<string, unknown> | undefined;
            transcriptExcerpt?: {
                text: string;
                role: "user" | "assistant";
            }[] | undefined;
            iterations?: {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }[] | undefined;
            inlineAgents?: Record<string, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }> | undefined;
        }>>;
        artifacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            runId: z.ZodString;
            nodeId: z.ZodString;
            name: z.ZodString;
            kind: z.ZodOptional<z.ZodString>;
            path: z.ZodString;
            digest: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            sizeBytes: z.ZodOptional<z.ZodNumber>;
            createdAt: z.ZodNumber;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        }, "strip", z.ZodTypeAny, {
            path: string;
            id: string;
            nodeId: string;
            createdAt: number;
            runId: string;
            name: string;
            kind?: string | undefined;
            digest?: string | undefined;
            description?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: Record<string, unknown> | undefined;
        }, {
            path: string;
            id: string;
            nodeId: string;
            createdAt: number;
            runId: string;
            name: string;
            kind?: string | undefined;
            digest?: string | undefined;
            description?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: Record<string, unknown> | undefined;
        }>, "many">>;
        reviewPackets: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            artifactKind: z.ZodOptional<z.ZodEnum<["plan", "evidence_packet", "action_proposal", "approval_request", "context_candidate", "remediation", "run_summary", "other"]>>;
            subject: z.ZodOptional<z.ZodObject<{
                type: z.ZodString;
                id: z.ZodOptional<z.ZodString>;
                label: z.ZodOptional<z.ZodString>;
                uri: z.ZodOptional<z.ZodString>;
                metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            }, "strip", z.ZodTypeAny, {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            }, {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            }>>;
            readinessTargetId: z.ZodOptional<z.ZodString>;
            workflowRunId: z.ZodOptional<z.ZodString>;
            planId: z.ZodOptional<z.ZodString>;
            sourceKey: z.ZodOptional<z.ZodString>;
            title: z.ZodString;
            status: z.ZodEnum<["draft", "published", "failed", "canceled"]>;
            decision: z.ZodEnum<["approved", "changes_requested", "blocked", "needs_review"]>;
            riskLevel: z.ZodEnum<["unknown", "low", "medium", "high", "critical"]>;
            summary: z.ZodOptional<z.ZodString>;
            checks: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
            findings: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
            proofItems: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
            artifacts: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
            sourceSnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            publishedAt: z.ZodOptional<z.ZodNumber>;
            createdAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            status: "failed" | "canceled" | "draft" | "published";
            id: string;
            title: string;
            decision: "blocked" | "approved" | "changes_requested" | "needs_review";
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            artifacts?: Record<string, unknown>[] | undefined;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            findings?: Record<string, unknown>[] | undefined;
            subject?: {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
            readinessTargetId?: string | undefined;
            planId?: string | undefined;
            sourceKey?: string | undefined;
            checks?: Record<string, unknown>[] | undefined;
            proofItems?: Record<string, unknown>[] | undefined;
            sourceSnapshot?: Record<string, unknown> | undefined;
            publishedAt?: number | undefined;
        }, {
            status: "failed" | "canceled" | "draft" | "published";
            id: string;
            title: string;
            decision: "blocked" | "approved" | "changes_requested" | "needs_review";
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            artifacts?: Record<string, unknown>[] | undefined;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            findings?: Record<string, unknown>[] | undefined;
            subject?: {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
            readinessTargetId?: string | undefined;
            planId?: string | undefined;
            sourceKey?: string | undefined;
            checks?: Record<string, unknown>[] | undefined;
            proofItems?: Record<string, unknown>[] | undefined;
            sourceSnapshot?: Record<string, unknown> | undefined;
            publishedAt?: number | undefined;
        }>, "many">>;
        readinessTargets: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            resourceId: z.ZodString;
            ownerUserId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            workflowDefinitionId: z.ZodOptional<z.ZodString>;
            workflowRunId: z.ZodOptional<z.ZodString>;
            planId: z.ZodOptional<z.ZodString>;
            kind: z.ZodString;
            title: z.ZodString;
            status: z.ZodEnum<["draft", "running", "ready", "blocked", "failed", "canceled"]>;
            riskLevel: z.ZodEnum<["unknown", "low", "medium", "high", "critical"]>;
            repository: z.ZodOptional<z.ZodString>;
            baseBranch: z.ZodOptional<z.ZodString>;
            headBranch: z.ZodOptional<z.ZodString>;
            headSha: z.ZodOptional<z.ZodString>;
            externalUrl: z.ZodOptional<z.ZodString>;
            summary: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            completedAt: z.ZodOptional<z.ZodNumber>;
            createdAt: z.ZodOptional<z.ZodNumber>;
            updatedAt: z.ZodOptional<z.ZodNumber>;
            reviewPackets: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                artifactKind: z.ZodOptional<z.ZodEnum<["plan", "evidence_packet", "action_proposal", "approval_request", "context_candidate", "remediation", "run_summary", "other"]>>;
                subject: z.ZodOptional<z.ZodObject<{
                    type: z.ZodString;
                    id: z.ZodOptional<z.ZodString>;
                    label: z.ZodOptional<z.ZodString>;
                    uri: z.ZodOptional<z.ZodString>;
                    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                }, {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                }>>;
                readinessTargetId: z.ZodOptional<z.ZodString>;
                workflowRunId: z.ZodOptional<z.ZodString>;
                planId: z.ZodOptional<z.ZodString>;
                sourceKey: z.ZodOptional<z.ZodString>;
                title: z.ZodString;
                status: z.ZodEnum<["draft", "published", "failed", "canceled"]>;
                decision: z.ZodEnum<["approved", "changes_requested", "blocked", "needs_review"]>;
                riskLevel: z.ZodEnum<["unknown", "low", "medium", "high", "critical"]>;
                summary: z.ZodOptional<z.ZodString>;
                checks: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
                findings: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
                proofItems: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
                artifacts: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
                sourceSnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                publishedAt: z.ZodOptional<z.ZodNumber>;
                createdAt: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }, {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            status: "blocked" | "failed" | "running" | "canceled" | "draft" | "ready";
            id: string;
            title: string;
            kind: string;
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            resourceId: string;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            repository?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            planId?: string | undefined;
            ownerUserId?: number | null | undefined;
            workflowDefinitionId?: string | undefined;
            baseBranch?: string | undefined;
            headBranch?: string | undefined;
            headSha?: string | undefined;
            externalUrl?: string | undefined;
            completedAt?: number | undefined;
            updatedAt?: number | undefined;
            reviewPackets?: {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }[] | undefined;
        }, {
            status: "blocked" | "failed" | "running" | "canceled" | "draft" | "ready";
            id: string;
            title: string;
            kind: string;
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            resourceId: string;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            repository?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            planId?: string | undefined;
            ownerUserId?: number | null | undefined;
            workflowDefinitionId?: string | undefined;
            baseBranch?: string | undefined;
            headBranch?: string | undefined;
            headSha?: string | undefined;
            externalUrl?: string | undefined;
            completedAt?: number | undefined;
            updatedAt?: number | undefined;
            reviewPackets?: {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }[] | undefined;
        }>, "many">>;
        authorizationDecisions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            decisionKey: z.ZodOptional<z.ZodString>;
            subjectType: z.ZodOptional<z.ZodString>;
            subjectId: z.ZodOptional<z.ZodString>;
            action: z.ZodString;
            resourceType: z.ZodOptional<z.ZodString>;
            resourceId: z.ZodOptional<z.ZodString>;
            decision: z.ZodEnum<["allow", "deny", "require_approval", "quarantine", "weak_legacy_allow"]>;
            reason: z.ZodOptional<z.ZodString>;
            subjectSnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            resourceSnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            context: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            matchedRules: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            policySnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            decidedAt: z.ZodOptional<z.ZodNumber>;
            expiresAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            action: string;
            decision: "allow" | "deny" | "require_approval" | "quarantine" | "weak_legacy_allow";
            context?: Record<string, unknown> | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            matchedRules?: string[] | undefined;
            expiresAt?: number | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            resourceId?: string | undefined;
            decisionKey?: string | undefined;
            resourceType?: string | undefined;
            subjectSnapshot?: Record<string, unknown> | undefined;
            resourceSnapshot?: Record<string, unknown> | undefined;
            policySnapshot?: Record<string, unknown> | undefined;
            decidedAt?: number | undefined;
        }, {
            id: string;
            action: string;
            decision: "allow" | "deny" | "require_approval" | "quarantine" | "weak_legacy_allow";
            context?: Record<string, unknown> | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            matchedRules?: string[] | undefined;
            expiresAt?: number | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            resourceId?: string | undefined;
            decisionKey?: string | undefined;
            resourceType?: string | undefined;
            subjectSnapshot?: Record<string, unknown> | undefined;
            resourceSnapshot?: Record<string, unknown> | undefined;
            policySnapshot?: Record<string, unknown> | undefined;
            decidedAt?: number | undefined;
        }>, "many">>;
        evidencePackets: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            evidenceKey: z.ZodOptional<z.ZodString>;
            nodeId: z.ZodOptional<z.ZodString>;
            kind: z.ZodString;
            title: z.ZodOptional<z.ZodString>;
            summary: z.ZodOptional<z.ZodString>;
            confidence: z.ZodOptional<z.ZodString>;
            visibility: z.ZodOptional<z.ZodString>;
            digest: z.ZodOptional<z.ZodString>;
            payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            occurredAt: z.ZodOptional<z.ZodNumber>;
            createdAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            kind: string;
            title?: string | undefined;
            nodeId?: string | undefined;
            summary?: string | undefined;
            confidence?: string | undefined;
            visibility?: string | undefined;
            createdAt?: number | undefined;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            digest?: string | undefined;
            evidenceKey?: string | undefined;
        }, {
            id: string;
            kind: string;
            title?: string | undefined;
            nodeId?: string | undefined;
            summary?: string | undefined;
            confidence?: string | undefined;
            visibility?: string | undefined;
            createdAt?: number | undefined;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            digest?: string | undefined;
            evidenceKey?: string | undefined;
        }>, "many">>;
        actionProposals: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            proposalKey: z.ZodOptional<z.ZodString>;
            nodeId: z.ZodOptional<z.ZodString>;
            adapter: z.ZodString;
            action: z.ZodString;
            state: z.ZodOptional<z.ZodString>;
            idempotencyKey: z.ZodOptional<z.ZodString>;
            proposalDigest: z.ZodOptional<z.ZodString>;
            evidenceRefs: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            policyEvaluation: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            proposedAt: z.ZodOptional<z.ZodNumber>;
            expiresAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            adapter: string;
            action: string;
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalDigest?: string | undefined;
            evidenceRefs?: string[] | undefined;
            policyEvaluation?: Record<string, unknown> | undefined;
            state?: string | undefined;
            expiresAt?: number | undefined;
            proposalKey?: string | undefined;
            proposedAt?: number | undefined;
        }, {
            id: string;
            adapter: string;
            action: string;
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalDigest?: string | undefined;
            evidenceRefs?: string[] | undefined;
            policyEvaluation?: Record<string, unknown> | undefined;
            state?: string | undefined;
            expiresAt?: number | undefined;
            proposalKey?: string | undefined;
            proposedAt?: number | undefined;
        }>, "many">>;
        approvalDecisions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            proposalKey: z.ZodOptional<z.ZodString>;
            decisionKey: z.ZodOptional<z.ZodString>;
            nodeId: z.ZodOptional<z.ZodString>;
            actorUserId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            subjectType: z.ZodOptional<z.ZodString>;
            subjectId: z.ZodOptional<z.ZodString>;
            subjectDigest: z.ZodOptional<z.ZodString>;
            decision: z.ZodEnum<["approve", "deny", "request_changes", "unknown"]>;
            reason: z.ZodOptional<z.ZodString>;
            actorSnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            decidedAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            decision: "unknown" | "deny" | "approve" | "request_changes";
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            subjectDigest?: string | undefined;
            proposalKey?: string | undefined;
            decisionKey?: string | undefined;
            decidedAt?: number | undefined;
            actorUserId?: number | null | undefined;
            actorSnapshot?: Record<string, unknown> | undefined;
        }, {
            id: string;
            decision: "unknown" | "deny" | "approve" | "request_changes";
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            subjectDigest?: string | undefined;
            proposalKey?: string | undefined;
            decisionKey?: string | undefined;
            decidedAt?: number | undefined;
            actorUserId?: number | null | undefined;
            actorSnapshot?: Record<string, unknown> | undefined;
        }>, "many">>;
        executionReceipts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            proposalKey: z.ZodOptional<z.ZodString>;
            decisionKey: z.ZodOptional<z.ZodString>;
            receiptKey: z.ZodOptional<z.ZodString>;
            adapter: z.ZodString;
            action: z.ZodString;
            status: z.ZodString;
            providerReference: z.ZodOptional<z.ZodString>;
            providerUrl: z.ZodOptional<z.ZodString>;
            idempotencyKey: z.ZodOptional<z.ZodString>;
            payloadDigest: z.ZodOptional<z.ZodString>;
            providerResponseDigest: z.ZodOptional<z.ZodString>;
            receiptDigest: z.ZodOptional<z.ZodString>;
            providerReconciliation: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            executedAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            status: string;
            id: string;
            adapter: string;
            action: string;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalKey?: string | undefined;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
            payloadDigest?: string | undefined;
            providerResponseDigest?: string | undefined;
            providerReconciliation?: Record<string, unknown> | undefined;
            executedAt?: number | undefined;
            decisionKey?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
        }, {
            status: string;
            id: string;
            adapter: string;
            action: string;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalKey?: string | undefined;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
            payloadDigest?: string | undefined;
            providerResponseDigest?: string | undefined;
            providerReconciliation?: Record<string, unknown> | undefined;
            executedAt?: number | undefined;
            decisionKey?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
        }>, "many">>;
        auditReceipts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            receiptKey: z.ZodOptional<z.ZodString>;
            eventType: z.ZodString;
            actorType: z.ZodOptional<z.ZodString>;
            actorId: z.ZodOptional<z.ZodString>;
            payloadDigest: z.ZodOptional<z.ZodString>;
            payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            occurredAt: z.ZodOptional<z.ZodNumber>;
            sequence: z.ZodOptional<z.ZodNumber>;
            previousReceiptDigest: z.ZodOptional<z.ZodString>;
            receiptDigest: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            eventType: string;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            payloadDigest?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
            actorType?: string | undefined;
            actorId?: string | undefined;
            sequence?: number | undefined;
            previousReceiptDigest?: string | undefined;
        }, {
            id: string;
            eventType: string;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            payloadDigest?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
            actorType?: string | undefined;
            actorId?: string | undefined;
            sequence?: number | undefined;
            previousReceiptDigest?: string | undefined;
        }>, "many">>;
        contextReceipts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            schema: z.ZodOptional<z.ZodLiteral<"viewport.context_receipt/v1">>;
            package: z.ZodOptional<z.ZodString>;
            packageName: z.ZodOptional<z.ZodString>;
            requested: z.ZodOptional<z.ZodString>;
            resolvedVersion: z.ZodOptional<z.ZodString>;
            provider: z.ZodOptional<z.ZodString>;
            digest: z.ZodOptional<z.ZodString>;
            freshness: z.ZodOptional<z.ZodString>;
            usedBy: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            resolvedAt: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
            payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        }, "strip", z.ZodTypeAny, {
            schema?: "viewport.context_receipt/v1" | undefined;
            payload?: Record<string, unknown> | undefined;
            digest?: string | undefined;
            package?: string | undefined;
            requested?: string | undefined;
            resolvedVersion?: string | undefined;
            provider?: string | undefined;
            freshness?: string | undefined;
            usedBy?: Record<string, unknown> | undefined;
            resolvedAt?: string | number | undefined;
            packageName?: string | undefined;
        }, {
            schema?: "viewport.context_receipt/v1" | undefined;
            payload?: Record<string, unknown> | undefined;
            digest?: string | undefined;
            package?: string | undefined;
            requested?: string | undefined;
            resolvedVersion?: string | undefined;
            provider?: string | undefined;
            freshness?: string | undefined;
            usedBy?: Record<string, unknown> | undefined;
            resolvedAt?: string | number | undefined;
            packageName?: string | undefined;
        }>, "many">>;
        contractHealth: z.ZodOptional<z.ZodObject<{
            status: z.ZodEnum<["valid", "warning", "invalid", "unknown", "not_applicable"]>;
            summary: z.ZodObject<{
                evidencePackets: z.ZodNumber;
                actionProposals: z.ZodNumber;
                approvalDecisions: z.ZodNumber;
                executionReceipts: z.ZodNumber;
                auditReceipts: z.ZodNumber;
                issues: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            }, {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            }>;
            issues: z.ZodArray<z.ZodObject<{
                severity: z.ZodEnum<["warning", "error"]>;
                code: z.ZodString;
                message: z.ZodString;
                metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            }, "strip", z.ZodTypeAny, {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }, {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }>, "many">;
            proposals: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">;
            auditChain: z.ZodObject<{
                status: z.ZodString;
                checked: z.ZodBoolean;
                receiptCount: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                status: string;
                checked: boolean;
                receiptCount: number;
            }, {
                status: string;
                checked: boolean;
                receiptCount: number;
            }>;
            checkedAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            issues: {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }[];
            status: "valid" | "unknown" | "warning" | "invalid" | "not_applicable";
            summary: {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            };
            proposals: Record<string, unknown>[];
            auditChain: {
                status: string;
                checked: boolean;
                receiptCount: number;
            };
            checkedAt?: number | undefined;
        }, {
            issues: {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }[];
            status: "valid" | "unknown" | "warning" | "invalid" | "not_applicable";
            summary: {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            };
            proposals: Record<string, unknown>[];
            auditChain: {
                status: string;
                checked: boolean;
                receiptCount: number;
            };
            checkedAt?: number | undefined;
        }>>;
        resourceManifest: z.ZodOptional<z.ZodObject<{
            schema: z.ZodLiteral<"viewport.session_resource_manifest/v1">;
            manifestDigest: z.ZodString;
            workingDirectory: z.ZodString;
            configSources: z.ZodArray<z.ZodObject<{
                path: z.ZodString;
                digest: z.ZodString;
                version: z.ZodLiteral<1>;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }, {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }>, "many">;
            resources: z.ZodObject<{
                contexts: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    required: z.ZodBoolean;
                    sourceConfigPath: z.ZodString;
                    resolution: z.ZodEnum<["requested_unverified"]>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }>, "many">;
                workflows: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    required: z.ZodBoolean;
                    sourceConfigPath: z.ZodString;
                    resolution: z.ZodEnum<["requested_unverified"]>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }>, "many">;
                plans: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    required: z.ZodBoolean;
                    sourceConfigPath: z.ZodString;
                    resolution: z.ZodEnum<["requested_unverified"]>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }>, "many">;
                agentProfiles: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    required: z.ZodBoolean;
                    sourceConfigPath: z.ZodString;
                    resolution: z.ZodEnum<["requested_unverified"]>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            }, {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            }>;
            contract: z.ZodOptional<z.ZodObject<{
                contextProviders: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    provider: z.ZodEnum<["repo-docs", "viewport-vault", "notebooklm", "glean", "custom-cli", "custom-mcp"]>;
                    required: z.ZodBoolean;
                    privacy: z.ZodEnum<["local_only", "control_plane_blind", "third_party_terms", "customer_hosted", "unknown"]>;
                    capabilities: z.ZodArray<z.ZodEnum<["search", "get", "propose", "write_approved"]>, "many">;
                    sourceConfigPath: z.ZodString;
                    vault: z.ZodOptional<z.ZodString>;
                    paths: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    notebook: z.ZodOptional<z.ZodString>;
                    command: z.ZodOptional<z.ZodString>;
                    resolution: z.ZodEnum<["requested_unverified"]>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }, {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }>, "many">;
                contextResolution: z.ZodObject<{
                    order: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    sizeBudgetBytes: z.ZodOptional<z.ZodNumber>;
                    strategy: z.ZodOptional<z.ZodEnum<["rank_by_recency_then_query", "pinned_then_recent", "provider_order"]>>;
                }, "strip", z.ZodTypeAny, {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                }, {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                }>;
                workflows: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    required: z.ZodBoolean;
                    sourceConfigPath: z.ZodString;
                    path: z.ZodOptional<z.ZodString>;
                    resource: z.ZodOptional<z.ZodString>;
                    version: z.ZodOptional<z.ZodString>;
                    digest: z.ZodOptional<z.ZodString>;
                    resolution: z.ZodEnum<["requested_unverified"]>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            }, {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            }>>;
            conflicts: z.ZodArray<z.ZodObject<{
                field: z.ZodString;
                values: z.ZodArray<z.ZodObject<{
                    value: z.ZodString;
                    sourceConfigPath: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    sourceConfigPath: string;
                }, {
                    value: string;
                    sourceConfigPath: string;
                }>, "many">;
                resolution: z.ZodLiteral<"requires_user_selection">;
            }, "strip", z.ZodTypeAny, {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }, {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }>, "many">;
            warnings: z.ZodArray<z.ZodObject<{
                code: z.ZodString;
                message: z.ZodString;
                path: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                code: string;
                message: string;
                path?: string | undefined;
            }, {
                code: string;
                message: string;
                path?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            schema: "viewport.session_resource_manifest/v1";
            manifestDigest: string;
            workingDirectory: string;
            configSources: {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }[];
            resources: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            };
            conflicts: {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }[];
            warnings: {
                code: string;
                message: string;
                path?: string | undefined;
            }[];
            contract?: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            } | undefined;
        }, {
            schema: "viewport.session_resource_manifest/v1";
            manifestDigest: string;
            workingDirectory: string;
            configSources: {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }[];
            resources: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            };
            conflicts: {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }[];
            warnings: {
                code: string;
                message: string;
                path?: string | undefined;
            }[];
            contract?: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            } | undefined;
        }>>;
        events: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            runId: z.ZodString;
            timestamp: z.ZodNumber;
            type: z.ZodString;
            severity: z.ZodOptional<z.ZodEnum<["debug", "info", "warning", "error"]>>;
            nodeId: z.ZodOptional<z.ZodString>;
            message: z.ZodString;
            data: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        }, "strip", z.ZodTypeAny, {
            message: string;
            type: string;
            id: string;
            runId: string;
            timestamp: number;
            nodeId?: string | undefined;
            severity?: "error" | "debug" | "info" | "warning" | undefined;
            data?: Record<string, unknown> | undefined;
        }, {
            message: string;
            type: string;
            id: string;
            runId: string;
            timestamp: number;
            nodeId?: string | undefined;
            severity?: "error" | "debug" | "info" | "warning" | undefined;
            data?: Record<string, unknown> | undefined;
        }>, "many">;
        createdAt: z.ZodNumber;
        startedAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodNumber;
        completedAt: z.ZodOptional<z.ZodNumber>;
        error: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled";
        schema: string;
        id: string;
        createdAt: number;
        digest: string;
        updatedAt: number;
        workflowName: string;
        sourceType: "local_file" | "viewport_snapshot" | "local_modified";
        yamlSnapshot: string;
        directoryId: string;
        directoryPath: string;
        machineId: string;
        initiation: "cli" | "browser" | "agent_skill";
        inputs: Record<string, WorkflowInputValue>;
        preflight: {
            issues: {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }[];
            ok: boolean;
        };
        nodes: Record<string, {
            type: "agent" | "context" | "action" | "approval" | "prompt" | "shell" | "plan" | "gate" | "loop" | "subflow" | "condition" | "artifact";
            status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled" | "skipped";
            id: string;
            title?: string | undefined;
            error?: string | undefined;
            approval?: {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            completedAt?: number | undefined;
            startedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
            exitCode?: number | undefined;
            outputs?: Record<string, unknown> | undefined;
            transcriptExcerpt?: {
                text: string;
                role: "user" | "assistant";
            }[] | undefined;
            iterations?: {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }[] | undefined;
            inlineAgents?: Record<string, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }> | undefined;
        }>;
        events: {
            message: string;
            type: string;
            id: string;
            runId: string;
            timestamp: number;
            nodeId?: string | undefined;
            severity?: "error" | "debug" | "info" | "warning" | undefined;
            data?: Record<string, unknown> | undefined;
        }[];
        artifacts?: {
            path: string;
            id: string;
            nodeId: string;
            createdAt: number;
            runId: string;
            name: string;
            kind?: string | undefined;
            digest?: string | undefined;
            description?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: Record<string, unknown> | undefined;
        }[] | undefined;
        error?: string | undefined;
        contextReceipts?: {
            schema?: "viewport.context_receipt/v1" | undefined;
            payload?: Record<string, unknown> | undefined;
            digest?: string | undefined;
            package?: string | undefined;
            requested?: string | undefined;
            resolvedVersion?: string | undefined;
            provider?: string | undefined;
            freshness?: string | undefined;
            usedBy?: Record<string, unknown> | undefined;
            resolvedAt?: string | number | undefined;
            packageName?: string | undefined;
        }[] | undefined;
        resourceId?: string | undefined;
        workflowDefinitionId?: string | undefined;
        completedAt?: number | undefined;
        reviewPackets?: {
            status: "failed" | "canceled" | "draft" | "published";
            id: string;
            title: string;
            decision: "blocked" | "approved" | "changes_requested" | "needs_review";
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            artifacts?: Record<string, unknown>[] | undefined;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            findings?: Record<string, unknown>[] | undefined;
            subject?: {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
            readinessTargetId?: string | undefined;
            planId?: string | undefined;
            sourceKey?: string | undefined;
            checks?: Record<string, unknown>[] | undefined;
            proofItems?: Record<string, unknown>[] | undefined;
            sourceSnapshot?: Record<string, unknown> | undefined;
            publishedAt?: number | undefined;
        }[] | undefined;
        evidencePackets?: {
            id: string;
            kind: string;
            title?: string | undefined;
            nodeId?: string | undefined;
            summary?: string | undefined;
            confidence?: string | undefined;
            visibility?: string | undefined;
            createdAt?: number | undefined;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            digest?: string | undefined;
            evidenceKey?: string | undefined;
        }[] | undefined;
        actionProposals?: {
            id: string;
            adapter: string;
            action: string;
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalDigest?: string | undefined;
            evidenceRefs?: string[] | undefined;
            policyEvaluation?: Record<string, unknown> | undefined;
            state?: string | undefined;
            expiresAt?: number | undefined;
            proposalKey?: string | undefined;
            proposedAt?: number | undefined;
        }[] | undefined;
        approvalDecisions?: {
            id: string;
            decision: "unknown" | "deny" | "approve" | "request_changes";
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            subjectDigest?: string | undefined;
            proposalKey?: string | undefined;
            decisionKey?: string | undefined;
            decidedAt?: number | undefined;
            actorUserId?: number | null | undefined;
            actorSnapshot?: Record<string, unknown> | undefined;
        }[] | undefined;
        executionReceipts?: {
            status: string;
            id: string;
            adapter: string;
            action: string;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalKey?: string | undefined;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
            payloadDigest?: string | undefined;
            providerResponseDigest?: string | undefined;
            providerReconciliation?: Record<string, unknown> | undefined;
            executedAt?: number | undefined;
            decisionKey?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
        }[] | undefined;
        auditReceipts?: {
            id: string;
            eventType: string;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            payloadDigest?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
            actorType?: string | undefined;
            actorId?: string | undefined;
            sequence?: number | undefined;
            previousReceiptDigest?: string | undefined;
        }[] | undefined;
        startedAt?: number | undefined;
        workflowTitle?: string | undefined;
        workflowVersionId?: string | undefined;
        rerunOfWorkflowRunId?: string | undefined;
        sourcePath?: string | undefined;
        runtimeTargetId?: string | undefined;
        managedExecutorId?: string | undefined;
        executorTarget?: "local_machine" | "managed_executor" | undefined;
        assignmentStatus?: string | undefined;
        platformRunId?: string | undefined;
        executorAgent?: string | undefined;
        executorModel?: string | undefined;
        executionPolicy?: {
            mode: "current_tree" | "isolated_worktree" | "named_branch";
            branch?: string | undefined;
        } | undefined;
        dataCapturePolicy?: {
            transcripts: "none" | "excerpt";
            logs: "metadata" | "content";
            artifacts: "metadata" | "local_reference";
        } | undefined;
        readinessTargets?: {
            status: "blocked" | "failed" | "running" | "canceled" | "draft" | "ready";
            id: string;
            title: string;
            kind: string;
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            resourceId: string;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            repository?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            planId?: string | undefined;
            ownerUserId?: number | null | undefined;
            workflowDefinitionId?: string | undefined;
            baseBranch?: string | undefined;
            headBranch?: string | undefined;
            headSha?: string | undefined;
            externalUrl?: string | undefined;
            completedAt?: number | undefined;
            updatedAt?: number | undefined;
            reviewPackets?: {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }[] | undefined;
        }[] | undefined;
        authorizationDecisions?: {
            id: string;
            action: string;
            decision: "allow" | "deny" | "require_approval" | "quarantine" | "weak_legacy_allow";
            context?: Record<string, unknown> | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            matchedRules?: string[] | undefined;
            expiresAt?: number | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            resourceId?: string | undefined;
            decisionKey?: string | undefined;
            resourceType?: string | undefined;
            subjectSnapshot?: Record<string, unknown> | undefined;
            resourceSnapshot?: Record<string, unknown> | undefined;
            policySnapshot?: Record<string, unknown> | undefined;
            decidedAt?: number | undefined;
        }[] | undefined;
        contractHealth?: {
            issues: {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }[];
            status: "valid" | "unknown" | "warning" | "invalid" | "not_applicable";
            summary: {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            };
            proposals: Record<string, unknown>[];
            auditChain: {
                status: string;
                checked: boolean;
                receiptCount: number;
            };
            checkedAt?: number | undefined;
        } | undefined;
        resourceManifest?: {
            schema: "viewport.session_resource_manifest/v1";
            manifestDigest: string;
            workingDirectory: string;
            configSources: {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }[];
            resources: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            };
            conflicts: {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }[];
            warnings: {
                code: string;
                message: string;
                path?: string | undefined;
            }[];
            contract?: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            } | undefined;
        } | undefined;
    }, {
        status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled";
        schema: string;
        id: string;
        createdAt: number;
        digest: string;
        updatedAt: number;
        workflowName: string;
        sourceType: "local_file" | "viewport_snapshot" | "local_modified";
        yamlSnapshot: string;
        directoryId: string;
        directoryPath: string;
        machineId: string;
        initiation: "cli" | "browser" | "agent_skill";
        inputs: Record<string, WorkflowInputValue>;
        preflight: {
            issues: {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }[];
            ok: boolean;
        };
        nodes: Record<string, {
            type: "agent" | "context" | "action" | "approval" | "prompt" | "shell" | "plan" | "gate" | "loop" | "subflow" | "condition" | "artifact";
            status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled" | "skipped";
            id: string;
            title?: string | undefined;
            error?: string | undefined;
            approval?: {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            completedAt?: number | undefined;
            startedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
            exitCode?: number | undefined;
            outputs?: Record<string, unknown> | undefined;
            transcriptExcerpt?: {
                text: string;
                role: "user" | "assistant";
            }[] | undefined;
            iterations?: {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }[] | undefined;
            inlineAgents?: Record<string, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }> | undefined;
        }>;
        events: {
            message: string;
            type: string;
            id: string;
            runId: string;
            timestamp: number;
            nodeId?: string | undefined;
            severity?: "error" | "debug" | "info" | "warning" | undefined;
            data?: Record<string, unknown> | undefined;
        }[];
        artifacts?: {
            path: string;
            id: string;
            nodeId: string;
            createdAt: number;
            runId: string;
            name: string;
            kind?: string | undefined;
            digest?: string | undefined;
            description?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: Record<string, unknown> | undefined;
        }[] | undefined;
        error?: string | undefined;
        contextReceipts?: {
            schema?: "viewport.context_receipt/v1" | undefined;
            payload?: Record<string, unknown> | undefined;
            digest?: string | undefined;
            package?: string | undefined;
            requested?: string | undefined;
            resolvedVersion?: string | undefined;
            provider?: string | undefined;
            freshness?: string | undefined;
            usedBy?: Record<string, unknown> | undefined;
            resolvedAt?: string | number | undefined;
            packageName?: string | undefined;
        }[] | undefined;
        resourceId?: string | undefined;
        workflowDefinitionId?: string | undefined;
        completedAt?: number | undefined;
        reviewPackets?: {
            status: "failed" | "canceled" | "draft" | "published";
            id: string;
            title: string;
            decision: "blocked" | "approved" | "changes_requested" | "needs_review";
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            artifacts?: Record<string, unknown>[] | undefined;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            findings?: Record<string, unknown>[] | undefined;
            subject?: {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
            readinessTargetId?: string | undefined;
            planId?: string | undefined;
            sourceKey?: string | undefined;
            checks?: Record<string, unknown>[] | undefined;
            proofItems?: Record<string, unknown>[] | undefined;
            sourceSnapshot?: Record<string, unknown> | undefined;
            publishedAt?: number | undefined;
        }[] | undefined;
        evidencePackets?: {
            id: string;
            kind: string;
            title?: string | undefined;
            nodeId?: string | undefined;
            summary?: string | undefined;
            confidence?: string | undefined;
            visibility?: string | undefined;
            createdAt?: number | undefined;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            digest?: string | undefined;
            evidenceKey?: string | undefined;
        }[] | undefined;
        actionProposals?: {
            id: string;
            adapter: string;
            action: string;
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalDigest?: string | undefined;
            evidenceRefs?: string[] | undefined;
            policyEvaluation?: Record<string, unknown> | undefined;
            state?: string | undefined;
            expiresAt?: number | undefined;
            proposalKey?: string | undefined;
            proposedAt?: number | undefined;
        }[] | undefined;
        approvalDecisions?: {
            id: string;
            decision: "unknown" | "deny" | "approve" | "request_changes";
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            subjectDigest?: string | undefined;
            proposalKey?: string | undefined;
            decisionKey?: string | undefined;
            decidedAt?: number | undefined;
            actorUserId?: number | null | undefined;
            actorSnapshot?: Record<string, unknown> | undefined;
        }[] | undefined;
        executionReceipts?: {
            status: string;
            id: string;
            adapter: string;
            action: string;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalKey?: string | undefined;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
            payloadDigest?: string | undefined;
            providerResponseDigest?: string | undefined;
            providerReconciliation?: Record<string, unknown> | undefined;
            executedAt?: number | undefined;
            decisionKey?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
        }[] | undefined;
        auditReceipts?: {
            id: string;
            eventType: string;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            payloadDigest?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
            actorType?: string | undefined;
            actorId?: string | undefined;
            sequence?: number | undefined;
            previousReceiptDigest?: string | undefined;
        }[] | undefined;
        startedAt?: number | undefined;
        workflowTitle?: string | undefined;
        workflowVersionId?: string | undefined;
        rerunOfWorkflowRunId?: string | undefined;
        sourcePath?: string | undefined;
        runtimeTargetId?: string | undefined;
        managedExecutorId?: string | undefined;
        executorTarget?: "local_machine" | "managed_executor" | undefined;
        assignmentStatus?: string | undefined;
        platformRunId?: string | undefined;
        executorAgent?: string | undefined;
        executorModel?: string | undefined;
        executionPolicy?: {
            mode: "current_tree" | "isolated_worktree" | "named_branch";
            branch?: string | undefined;
        } | undefined;
        dataCapturePolicy?: {
            transcripts: "none" | "excerpt";
            logs: "metadata" | "content";
            artifacts: "metadata" | "local_reference";
        } | undefined;
        readinessTargets?: {
            status: "blocked" | "failed" | "running" | "canceled" | "draft" | "ready";
            id: string;
            title: string;
            kind: string;
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            resourceId: string;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            repository?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            planId?: string | undefined;
            ownerUserId?: number | null | undefined;
            workflowDefinitionId?: string | undefined;
            baseBranch?: string | undefined;
            headBranch?: string | undefined;
            headSha?: string | undefined;
            externalUrl?: string | undefined;
            completedAt?: number | undefined;
            updatedAt?: number | undefined;
            reviewPackets?: {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }[] | undefined;
        }[] | undefined;
        authorizationDecisions?: {
            id: string;
            action: string;
            decision: "allow" | "deny" | "require_approval" | "quarantine" | "weak_legacy_allow";
            context?: Record<string, unknown> | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            matchedRules?: string[] | undefined;
            expiresAt?: number | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            resourceId?: string | undefined;
            decisionKey?: string | undefined;
            resourceType?: string | undefined;
            subjectSnapshot?: Record<string, unknown> | undefined;
            resourceSnapshot?: Record<string, unknown> | undefined;
            policySnapshot?: Record<string, unknown> | undefined;
            decidedAt?: number | undefined;
        }[] | undefined;
        contractHealth?: {
            issues: {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }[];
            status: "valid" | "unknown" | "warning" | "invalid" | "not_applicable";
            summary: {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            };
            proposals: Record<string, unknown>[];
            auditChain: {
                status: string;
                checked: boolean;
                receiptCount: number;
            };
            checkedAt?: number | undefined;
        } | undefined;
        resourceManifest?: {
            schema: "viewport.session_resource_manifest/v1";
            manifestDigest: string;
            workingDirectory: string;
            configSources: {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }[];
            resources: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            };
            conflicts: {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }[];
            warnings: {
                code: string;
                message: string;
                path?: string | undefined;
            }[];
            contract?: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            } | undefined;
        } | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "workflow-run-updated";
    run: {
        status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled";
        schema: string;
        id: string;
        createdAt: number;
        digest: string;
        updatedAt: number;
        workflowName: string;
        sourceType: "local_file" | "viewport_snapshot" | "local_modified";
        yamlSnapshot: string;
        directoryId: string;
        directoryPath: string;
        machineId: string;
        initiation: "cli" | "browser" | "agent_skill";
        inputs: Record<string, WorkflowInputValue>;
        preflight: {
            issues: {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }[];
            ok: boolean;
        };
        nodes: Record<string, {
            type: "agent" | "context" | "action" | "approval" | "prompt" | "shell" | "plan" | "gate" | "loop" | "subflow" | "condition" | "artifact";
            status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled" | "skipped";
            id: string;
            title?: string | undefined;
            error?: string | undefined;
            approval?: {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            completedAt?: number | undefined;
            startedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
            exitCode?: number | undefined;
            outputs?: Record<string, unknown> | undefined;
            transcriptExcerpt?: {
                text: string;
                role: "user" | "assistant";
            }[] | undefined;
            iterations?: {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }[] | undefined;
            inlineAgents?: Record<string, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }> | undefined;
        }>;
        events: {
            message: string;
            type: string;
            id: string;
            runId: string;
            timestamp: number;
            nodeId?: string | undefined;
            severity?: "error" | "debug" | "info" | "warning" | undefined;
            data?: Record<string, unknown> | undefined;
        }[];
        artifacts?: {
            path: string;
            id: string;
            nodeId: string;
            createdAt: number;
            runId: string;
            name: string;
            kind?: string | undefined;
            digest?: string | undefined;
            description?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: Record<string, unknown> | undefined;
        }[] | undefined;
        error?: string | undefined;
        contextReceipts?: {
            schema?: "viewport.context_receipt/v1" | undefined;
            payload?: Record<string, unknown> | undefined;
            digest?: string | undefined;
            package?: string | undefined;
            requested?: string | undefined;
            resolvedVersion?: string | undefined;
            provider?: string | undefined;
            freshness?: string | undefined;
            usedBy?: Record<string, unknown> | undefined;
            resolvedAt?: string | number | undefined;
            packageName?: string | undefined;
        }[] | undefined;
        resourceId?: string | undefined;
        workflowDefinitionId?: string | undefined;
        completedAt?: number | undefined;
        reviewPackets?: {
            status: "failed" | "canceled" | "draft" | "published";
            id: string;
            title: string;
            decision: "blocked" | "approved" | "changes_requested" | "needs_review";
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            artifacts?: Record<string, unknown>[] | undefined;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            findings?: Record<string, unknown>[] | undefined;
            subject?: {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
            readinessTargetId?: string | undefined;
            planId?: string | undefined;
            sourceKey?: string | undefined;
            checks?: Record<string, unknown>[] | undefined;
            proofItems?: Record<string, unknown>[] | undefined;
            sourceSnapshot?: Record<string, unknown> | undefined;
            publishedAt?: number | undefined;
        }[] | undefined;
        evidencePackets?: {
            id: string;
            kind: string;
            title?: string | undefined;
            nodeId?: string | undefined;
            summary?: string | undefined;
            confidence?: string | undefined;
            visibility?: string | undefined;
            createdAt?: number | undefined;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            digest?: string | undefined;
            evidenceKey?: string | undefined;
        }[] | undefined;
        actionProposals?: {
            id: string;
            adapter: string;
            action: string;
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalDigest?: string | undefined;
            evidenceRefs?: string[] | undefined;
            policyEvaluation?: Record<string, unknown> | undefined;
            state?: string | undefined;
            expiresAt?: number | undefined;
            proposalKey?: string | undefined;
            proposedAt?: number | undefined;
        }[] | undefined;
        approvalDecisions?: {
            id: string;
            decision: "unknown" | "deny" | "approve" | "request_changes";
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            subjectDigest?: string | undefined;
            proposalKey?: string | undefined;
            decisionKey?: string | undefined;
            decidedAt?: number | undefined;
            actorUserId?: number | null | undefined;
            actorSnapshot?: Record<string, unknown> | undefined;
        }[] | undefined;
        executionReceipts?: {
            status: string;
            id: string;
            adapter: string;
            action: string;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalKey?: string | undefined;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
            payloadDigest?: string | undefined;
            providerResponseDigest?: string | undefined;
            providerReconciliation?: Record<string, unknown> | undefined;
            executedAt?: number | undefined;
            decisionKey?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
        }[] | undefined;
        auditReceipts?: {
            id: string;
            eventType: string;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            payloadDigest?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
            actorType?: string | undefined;
            actorId?: string | undefined;
            sequence?: number | undefined;
            previousReceiptDigest?: string | undefined;
        }[] | undefined;
        startedAt?: number | undefined;
        workflowTitle?: string | undefined;
        workflowVersionId?: string | undefined;
        rerunOfWorkflowRunId?: string | undefined;
        sourcePath?: string | undefined;
        runtimeTargetId?: string | undefined;
        managedExecutorId?: string | undefined;
        executorTarget?: "local_machine" | "managed_executor" | undefined;
        assignmentStatus?: string | undefined;
        platformRunId?: string | undefined;
        executorAgent?: string | undefined;
        executorModel?: string | undefined;
        executionPolicy?: {
            mode: "current_tree" | "isolated_worktree" | "named_branch";
            branch?: string | undefined;
        } | undefined;
        dataCapturePolicy?: {
            transcripts: "none" | "excerpt";
            logs: "metadata" | "content";
            artifacts: "metadata" | "local_reference";
        } | undefined;
        readinessTargets?: {
            status: "blocked" | "failed" | "running" | "canceled" | "draft" | "ready";
            id: string;
            title: string;
            kind: string;
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            resourceId: string;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            repository?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            planId?: string | undefined;
            ownerUserId?: number | null | undefined;
            workflowDefinitionId?: string | undefined;
            baseBranch?: string | undefined;
            headBranch?: string | undefined;
            headSha?: string | undefined;
            externalUrl?: string | undefined;
            completedAt?: number | undefined;
            updatedAt?: number | undefined;
            reviewPackets?: {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }[] | undefined;
        }[] | undefined;
        authorizationDecisions?: {
            id: string;
            action: string;
            decision: "allow" | "deny" | "require_approval" | "quarantine" | "weak_legacy_allow";
            context?: Record<string, unknown> | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            matchedRules?: string[] | undefined;
            expiresAt?: number | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            resourceId?: string | undefined;
            decisionKey?: string | undefined;
            resourceType?: string | undefined;
            subjectSnapshot?: Record<string, unknown> | undefined;
            resourceSnapshot?: Record<string, unknown> | undefined;
            policySnapshot?: Record<string, unknown> | undefined;
            decidedAt?: number | undefined;
        }[] | undefined;
        contractHealth?: {
            issues: {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }[];
            status: "valid" | "unknown" | "warning" | "invalid" | "not_applicable";
            summary: {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            };
            proposals: Record<string, unknown>[];
            auditChain: {
                status: string;
                checked: boolean;
                receiptCount: number;
            };
            checkedAt?: number | undefined;
        } | undefined;
        resourceManifest?: {
            schema: "viewport.session_resource_manifest/v1";
            manifestDigest: string;
            workingDirectory: string;
            configSources: {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }[];
            resources: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            };
            conflicts: {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }[];
            warnings: {
                code: string;
                message: string;
                path?: string | undefined;
            }[];
            contract?: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            } | undefined;
        } | undefined;
    };
}, {
    type: "workflow-run-updated";
    run: {
        status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled";
        schema: string;
        id: string;
        createdAt: number;
        digest: string;
        updatedAt: number;
        workflowName: string;
        sourceType: "local_file" | "viewport_snapshot" | "local_modified";
        yamlSnapshot: string;
        directoryId: string;
        directoryPath: string;
        machineId: string;
        initiation: "cli" | "browser" | "agent_skill";
        inputs: Record<string, WorkflowInputValue>;
        preflight: {
            issues: {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }[];
            ok: boolean;
        };
        nodes: Record<string, {
            type: "agent" | "context" | "action" | "approval" | "prompt" | "shell" | "plan" | "gate" | "loop" | "subflow" | "condition" | "artifact";
            status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled" | "skipped";
            id: string;
            title?: string | undefined;
            error?: string | undefined;
            approval?: {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            completedAt?: number | undefined;
            startedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
            exitCode?: number | undefined;
            outputs?: Record<string, unknown> | undefined;
            transcriptExcerpt?: {
                text: string;
                role: "user" | "assistant";
            }[] | undefined;
            iterations?: {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }[] | undefined;
            inlineAgents?: Record<string, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }> | undefined;
        }>;
        events: {
            message: string;
            type: string;
            id: string;
            runId: string;
            timestamp: number;
            nodeId?: string | undefined;
            severity?: "error" | "debug" | "info" | "warning" | undefined;
            data?: Record<string, unknown> | undefined;
        }[];
        artifacts?: {
            path: string;
            id: string;
            nodeId: string;
            createdAt: number;
            runId: string;
            name: string;
            kind?: string | undefined;
            digest?: string | undefined;
            description?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: Record<string, unknown> | undefined;
        }[] | undefined;
        error?: string | undefined;
        contextReceipts?: {
            schema?: "viewport.context_receipt/v1" | undefined;
            payload?: Record<string, unknown> | undefined;
            digest?: string | undefined;
            package?: string | undefined;
            requested?: string | undefined;
            resolvedVersion?: string | undefined;
            provider?: string | undefined;
            freshness?: string | undefined;
            usedBy?: Record<string, unknown> | undefined;
            resolvedAt?: string | number | undefined;
            packageName?: string | undefined;
        }[] | undefined;
        resourceId?: string | undefined;
        workflowDefinitionId?: string | undefined;
        completedAt?: number | undefined;
        reviewPackets?: {
            status: "failed" | "canceled" | "draft" | "published";
            id: string;
            title: string;
            decision: "blocked" | "approved" | "changes_requested" | "needs_review";
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            artifacts?: Record<string, unknown>[] | undefined;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            findings?: Record<string, unknown>[] | undefined;
            subject?: {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
            readinessTargetId?: string | undefined;
            planId?: string | undefined;
            sourceKey?: string | undefined;
            checks?: Record<string, unknown>[] | undefined;
            proofItems?: Record<string, unknown>[] | undefined;
            sourceSnapshot?: Record<string, unknown> | undefined;
            publishedAt?: number | undefined;
        }[] | undefined;
        evidencePackets?: {
            id: string;
            kind: string;
            title?: string | undefined;
            nodeId?: string | undefined;
            summary?: string | undefined;
            confidence?: string | undefined;
            visibility?: string | undefined;
            createdAt?: number | undefined;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            digest?: string | undefined;
            evidenceKey?: string | undefined;
        }[] | undefined;
        actionProposals?: {
            id: string;
            adapter: string;
            action: string;
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalDigest?: string | undefined;
            evidenceRefs?: string[] | undefined;
            policyEvaluation?: Record<string, unknown> | undefined;
            state?: string | undefined;
            expiresAt?: number | undefined;
            proposalKey?: string | undefined;
            proposedAt?: number | undefined;
        }[] | undefined;
        approvalDecisions?: {
            id: string;
            decision: "unknown" | "deny" | "approve" | "request_changes";
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            subjectDigest?: string | undefined;
            proposalKey?: string | undefined;
            decisionKey?: string | undefined;
            decidedAt?: number | undefined;
            actorUserId?: number | null | undefined;
            actorSnapshot?: Record<string, unknown> | undefined;
        }[] | undefined;
        executionReceipts?: {
            status: string;
            id: string;
            adapter: string;
            action: string;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalKey?: string | undefined;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
            payloadDigest?: string | undefined;
            providerResponseDigest?: string | undefined;
            providerReconciliation?: Record<string, unknown> | undefined;
            executedAt?: number | undefined;
            decisionKey?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
        }[] | undefined;
        auditReceipts?: {
            id: string;
            eventType: string;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            payloadDigest?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
            actorType?: string | undefined;
            actorId?: string | undefined;
            sequence?: number | undefined;
            previousReceiptDigest?: string | undefined;
        }[] | undefined;
        startedAt?: number | undefined;
        workflowTitle?: string | undefined;
        workflowVersionId?: string | undefined;
        rerunOfWorkflowRunId?: string | undefined;
        sourcePath?: string | undefined;
        runtimeTargetId?: string | undefined;
        managedExecutorId?: string | undefined;
        executorTarget?: "local_machine" | "managed_executor" | undefined;
        assignmentStatus?: string | undefined;
        platformRunId?: string | undefined;
        executorAgent?: string | undefined;
        executorModel?: string | undefined;
        executionPolicy?: {
            mode: "current_tree" | "isolated_worktree" | "named_branch";
            branch?: string | undefined;
        } | undefined;
        dataCapturePolicy?: {
            transcripts: "none" | "excerpt";
            logs: "metadata" | "content";
            artifacts: "metadata" | "local_reference";
        } | undefined;
        readinessTargets?: {
            status: "blocked" | "failed" | "running" | "canceled" | "draft" | "ready";
            id: string;
            title: string;
            kind: string;
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            resourceId: string;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            repository?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            planId?: string | undefined;
            ownerUserId?: number | null | undefined;
            workflowDefinitionId?: string | undefined;
            baseBranch?: string | undefined;
            headBranch?: string | undefined;
            headSha?: string | undefined;
            externalUrl?: string | undefined;
            completedAt?: number | undefined;
            updatedAt?: number | undefined;
            reviewPackets?: {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }[] | undefined;
        }[] | undefined;
        authorizationDecisions?: {
            id: string;
            action: string;
            decision: "allow" | "deny" | "require_approval" | "quarantine" | "weak_legacy_allow";
            context?: Record<string, unknown> | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            matchedRules?: string[] | undefined;
            expiresAt?: number | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            resourceId?: string | undefined;
            decisionKey?: string | undefined;
            resourceType?: string | undefined;
            subjectSnapshot?: Record<string, unknown> | undefined;
            resourceSnapshot?: Record<string, unknown> | undefined;
            policySnapshot?: Record<string, unknown> | undefined;
            decidedAt?: number | undefined;
        }[] | undefined;
        contractHealth?: {
            issues: {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }[];
            status: "valid" | "unknown" | "warning" | "invalid" | "not_applicable";
            summary: {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            };
            proposals: Record<string, unknown>[];
            auditChain: {
                status: string;
                checked: boolean;
                receiptCount: number;
            };
            checkedAt?: number | undefined;
        } | undefined;
        resourceManifest?: {
            schema: "viewport.session_resource_manifest/v1";
            manifestDigest: string;
            workingDirectory: string;
            configSources: {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }[];
            resources: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            };
            conflicts: {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }[];
            warnings: {
                code: string;
                message: string;
                path?: string | undefined;
            }[];
            contract?: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            } | undefined;
        } | undefined;
    };
}>;
export declare const WorkflowRunDetailMessageSchema: z.ZodObject<{
    type: z.ZodLiteral<"workflow-run-detail">;
    run: z.ZodObject<{
        id: z.ZodString;
        workflowName: z.ZodString;
        workflowTitle: z.ZodOptional<z.ZodString>;
        workflowDefinitionId: z.ZodOptional<z.ZodString>;
        workflowVersionId: z.ZodOptional<z.ZodString>;
        rerunOfWorkflowRunId: z.ZodOptional<z.ZodString>;
        sourceType: z.ZodEnum<["local_file", "viewport_snapshot", "local_modified"]>;
        sourcePath: z.ZodOptional<z.ZodString>;
        digest: z.ZodString;
        schema: z.ZodString;
        yamlSnapshot: z.ZodString;
        directoryId: z.ZodString;
        directoryPath: z.ZodString;
        resourceId: z.ZodOptional<z.ZodString>;
        runtimeTargetId: z.ZodOptional<z.ZodString>;
        managedExecutorId: z.ZodOptional<z.ZodString>;
        executorTarget: z.ZodOptional<z.ZodEnum<["local_machine", "managed_executor"]>>;
        assignmentStatus: z.ZodOptional<z.ZodString>;
        platformRunId: z.ZodOptional<z.ZodString>;
        machineId: z.ZodString;
        executorAgent: z.ZodOptional<z.ZodString>;
        executorModel: z.ZodOptional<z.ZodString>;
        executionPolicy: z.ZodOptional<z.ZodObject<{
            mode: z.ZodEnum<["current_tree", "isolated_worktree", "named_branch"]>;
            branch: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            mode: "current_tree" | "isolated_worktree" | "named_branch";
            branch?: string | undefined;
        }, {
            mode: "current_tree" | "isolated_worktree" | "named_branch";
            branch?: string | undefined;
        }>>;
        dataCapturePolicy: z.ZodOptional<z.ZodObject<{
            transcripts: z.ZodEnum<["none", "excerpt"]>;
            logs: z.ZodEnum<["metadata", "content"]>;
            artifacts: z.ZodEnum<["metadata", "local_reference"]>;
        }, "strip", z.ZodTypeAny, {
            transcripts: "none" | "excerpt";
            logs: "metadata" | "content";
            artifacts: "metadata" | "local_reference";
        }, {
            transcripts: "none" | "excerpt";
            logs: "metadata" | "content";
            artifacts: "metadata" | "local_reference";
        }>>;
        initiation: z.ZodEnum<["cli", "browser", "agent_skill"]>;
        status: z.ZodEnum<["queued", "running", "blocked", "completed", "failed", "canceled"]>;
        inputs: z.ZodRecord<z.ZodString, z.ZodType<WorkflowInputValue, z.ZodTypeDef, WorkflowInputValue>>;
        preflight: z.ZodObject<{
            ok: z.ZodBoolean;
            issues: z.ZodArray<z.ZodObject<{
                kind: z.ZodEnum<["agent", "tool", "node"]>;
                name: z.ZodString;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }, {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            issues: {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }[];
            ok: boolean;
        }, {
            issues: {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }[];
            ok: boolean;
        }>;
        nodes: z.ZodRecord<z.ZodString, z.ZodObject<{
            id: z.ZodString;
            type: z.ZodEnum<["prompt", "shell", "approval", "plan", "gate", "loop", "subflow", "agent", "context", "condition", "artifact", "action"]>;
            title: z.ZodOptional<z.ZodString>;
            status: z.ZodEnum<["queued", "running", "blocked", "completed", "failed", "skipped", "canceled"]>;
            startedAt: z.ZodOptional<z.ZodNumber>;
            completedAt: z.ZodOptional<z.ZodNumber>;
            sessionId: z.ZodOptional<z.ZodString>;
            nativeSessionId: z.ZodOptional<z.ZodString>;
            worktreePath: z.ZodOptional<z.ZodString>;
            output: z.ZodOptional<z.ZodString>;
            outputs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            transcriptExcerpt: z.ZodOptional<z.ZodArray<z.ZodObject<{
                role: z.ZodEnum<["user", "assistant"]>;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                text: string;
                role: "user" | "assistant";
            }, {
                text: string;
                role: "user" | "assistant";
            }>, "many">>;
            exitCode: z.ZodOptional<z.ZodNumber>;
            error: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            approval: z.ZodOptional<z.ZodObject<{
                prompt: z.ZodString;
                requestedAt: z.ZodNumber;
                resolvedAt: z.ZodOptional<z.ZodNumber>;
                approved: z.ZodOptional<z.ZodBoolean>;
                decision: z.ZodOptional<z.ZodEnum<["approve", "request_changes", "reject"]>>;
                message: z.ZodOptional<z.ZodString>;
                actor: z.ZodOptional<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    name: z.ZodOptional<z.ZodString>;
                    email: z.ZodOptional<z.ZodString>;
                    source: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                }, {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                }>>;
                feedback: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                executionGrant: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            }, "strip", z.ZodTypeAny, {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            }, {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            }>>;
            iterations: z.ZodOptional<z.ZodArray<z.ZodObject<{
                index: z.ZodNumber;
                status: z.ZodEnum<["running", "completed", "failed", "skipped", "canceled"]>;
                startedAt: z.ZodNumber;
                completedAt: z.ZodOptional<z.ZodNumber>;
                sessionId: z.ZodOptional<z.ZodString>;
                nativeSessionId: z.ZodOptional<z.ZodString>;
                worktreePath: z.ZodOptional<z.ZodString>;
                output: z.ZodOptional<z.ZodString>;
                exitCode: z.ZodOptional<z.ZodNumber>;
                error: z.ZodOptional<z.ZodString>;
                item: z.ZodOptional<z.ZodUnknown>;
            }, "strip", z.ZodTypeAny, {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }, {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }>, "many">>;
            inlineAgents: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                id: z.ZodString;
                title: z.ZodOptional<z.ZodString>;
                agent: z.ZodOptional<z.ZodString>;
                model: z.ZodOptional<z.ZodString>;
                status: z.ZodEnum<["queued", "running", "completed", "failed", "canceled"]>;
                startedAt: z.ZodOptional<z.ZodNumber>;
                completedAt: z.ZodOptional<z.ZodNumber>;
                sessionId: z.ZodOptional<z.ZodString>;
                nativeSessionId: z.ZodOptional<z.ZodString>;
                worktreePath: z.ZodOptional<z.ZodString>;
                output: z.ZodOptional<z.ZodString>;
                error: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }>>>;
        }, "strip", z.ZodTypeAny, {
            type: "agent" | "context" | "action" | "approval" | "prompt" | "shell" | "plan" | "gate" | "loop" | "subflow" | "condition" | "artifact";
            status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled" | "skipped";
            id: string;
            title?: string | undefined;
            error?: string | undefined;
            approval?: {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            completedAt?: number | undefined;
            startedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
            exitCode?: number | undefined;
            outputs?: Record<string, unknown> | undefined;
            transcriptExcerpt?: {
                text: string;
                role: "user" | "assistant";
            }[] | undefined;
            iterations?: {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }[] | undefined;
            inlineAgents?: Record<string, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }> | undefined;
        }, {
            type: "agent" | "context" | "action" | "approval" | "prompt" | "shell" | "plan" | "gate" | "loop" | "subflow" | "condition" | "artifact";
            status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled" | "skipped";
            id: string;
            title?: string | undefined;
            error?: string | undefined;
            approval?: {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            completedAt?: number | undefined;
            startedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
            exitCode?: number | undefined;
            outputs?: Record<string, unknown> | undefined;
            transcriptExcerpt?: {
                text: string;
                role: "user" | "assistant";
            }[] | undefined;
            iterations?: {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }[] | undefined;
            inlineAgents?: Record<string, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }> | undefined;
        }>>;
        artifacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            runId: z.ZodString;
            nodeId: z.ZodString;
            name: z.ZodString;
            kind: z.ZodOptional<z.ZodString>;
            path: z.ZodString;
            digest: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            sizeBytes: z.ZodOptional<z.ZodNumber>;
            createdAt: z.ZodNumber;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        }, "strip", z.ZodTypeAny, {
            path: string;
            id: string;
            nodeId: string;
            createdAt: number;
            runId: string;
            name: string;
            kind?: string | undefined;
            digest?: string | undefined;
            description?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: Record<string, unknown> | undefined;
        }, {
            path: string;
            id: string;
            nodeId: string;
            createdAt: number;
            runId: string;
            name: string;
            kind?: string | undefined;
            digest?: string | undefined;
            description?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: Record<string, unknown> | undefined;
        }>, "many">>;
        reviewPackets: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            artifactKind: z.ZodOptional<z.ZodEnum<["plan", "evidence_packet", "action_proposal", "approval_request", "context_candidate", "remediation", "run_summary", "other"]>>;
            subject: z.ZodOptional<z.ZodObject<{
                type: z.ZodString;
                id: z.ZodOptional<z.ZodString>;
                label: z.ZodOptional<z.ZodString>;
                uri: z.ZodOptional<z.ZodString>;
                metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            }, "strip", z.ZodTypeAny, {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            }, {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            }>>;
            readinessTargetId: z.ZodOptional<z.ZodString>;
            workflowRunId: z.ZodOptional<z.ZodString>;
            planId: z.ZodOptional<z.ZodString>;
            sourceKey: z.ZodOptional<z.ZodString>;
            title: z.ZodString;
            status: z.ZodEnum<["draft", "published", "failed", "canceled"]>;
            decision: z.ZodEnum<["approved", "changes_requested", "blocked", "needs_review"]>;
            riskLevel: z.ZodEnum<["unknown", "low", "medium", "high", "critical"]>;
            summary: z.ZodOptional<z.ZodString>;
            checks: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
            findings: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
            proofItems: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
            artifacts: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
            sourceSnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            publishedAt: z.ZodOptional<z.ZodNumber>;
            createdAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            status: "failed" | "canceled" | "draft" | "published";
            id: string;
            title: string;
            decision: "blocked" | "approved" | "changes_requested" | "needs_review";
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            artifacts?: Record<string, unknown>[] | undefined;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            findings?: Record<string, unknown>[] | undefined;
            subject?: {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
            readinessTargetId?: string | undefined;
            planId?: string | undefined;
            sourceKey?: string | undefined;
            checks?: Record<string, unknown>[] | undefined;
            proofItems?: Record<string, unknown>[] | undefined;
            sourceSnapshot?: Record<string, unknown> | undefined;
            publishedAt?: number | undefined;
        }, {
            status: "failed" | "canceled" | "draft" | "published";
            id: string;
            title: string;
            decision: "blocked" | "approved" | "changes_requested" | "needs_review";
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            artifacts?: Record<string, unknown>[] | undefined;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            findings?: Record<string, unknown>[] | undefined;
            subject?: {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
            readinessTargetId?: string | undefined;
            planId?: string | undefined;
            sourceKey?: string | undefined;
            checks?: Record<string, unknown>[] | undefined;
            proofItems?: Record<string, unknown>[] | undefined;
            sourceSnapshot?: Record<string, unknown> | undefined;
            publishedAt?: number | undefined;
        }>, "many">>;
        readinessTargets: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            resourceId: z.ZodString;
            ownerUserId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            workflowDefinitionId: z.ZodOptional<z.ZodString>;
            workflowRunId: z.ZodOptional<z.ZodString>;
            planId: z.ZodOptional<z.ZodString>;
            kind: z.ZodString;
            title: z.ZodString;
            status: z.ZodEnum<["draft", "running", "ready", "blocked", "failed", "canceled"]>;
            riskLevel: z.ZodEnum<["unknown", "low", "medium", "high", "critical"]>;
            repository: z.ZodOptional<z.ZodString>;
            baseBranch: z.ZodOptional<z.ZodString>;
            headBranch: z.ZodOptional<z.ZodString>;
            headSha: z.ZodOptional<z.ZodString>;
            externalUrl: z.ZodOptional<z.ZodString>;
            summary: z.ZodOptional<z.ZodString>;
            metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            completedAt: z.ZodOptional<z.ZodNumber>;
            createdAt: z.ZodOptional<z.ZodNumber>;
            updatedAt: z.ZodOptional<z.ZodNumber>;
            reviewPackets: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                artifactKind: z.ZodOptional<z.ZodEnum<["plan", "evidence_packet", "action_proposal", "approval_request", "context_candidate", "remediation", "run_summary", "other"]>>;
                subject: z.ZodOptional<z.ZodObject<{
                    type: z.ZodString;
                    id: z.ZodOptional<z.ZodString>;
                    label: z.ZodOptional<z.ZodString>;
                    uri: z.ZodOptional<z.ZodString>;
                    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                }, {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                }>>;
                readinessTargetId: z.ZodOptional<z.ZodString>;
                workflowRunId: z.ZodOptional<z.ZodString>;
                planId: z.ZodOptional<z.ZodString>;
                sourceKey: z.ZodOptional<z.ZodString>;
                title: z.ZodString;
                status: z.ZodEnum<["draft", "published", "failed", "canceled"]>;
                decision: z.ZodEnum<["approved", "changes_requested", "blocked", "needs_review"]>;
                riskLevel: z.ZodEnum<["unknown", "low", "medium", "high", "critical"]>;
                summary: z.ZodOptional<z.ZodString>;
                checks: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
                findings: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
                proofItems: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
                artifacts: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
                sourceSnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
                publishedAt: z.ZodOptional<z.ZodNumber>;
                createdAt: z.ZodOptional<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }, {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            status: "blocked" | "failed" | "running" | "canceled" | "draft" | "ready";
            id: string;
            title: string;
            kind: string;
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            resourceId: string;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            repository?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            planId?: string | undefined;
            ownerUserId?: number | null | undefined;
            workflowDefinitionId?: string | undefined;
            baseBranch?: string | undefined;
            headBranch?: string | undefined;
            headSha?: string | undefined;
            externalUrl?: string | undefined;
            completedAt?: number | undefined;
            updatedAt?: number | undefined;
            reviewPackets?: {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }[] | undefined;
        }, {
            status: "blocked" | "failed" | "running" | "canceled" | "draft" | "ready";
            id: string;
            title: string;
            kind: string;
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            resourceId: string;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            repository?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            planId?: string | undefined;
            ownerUserId?: number | null | undefined;
            workflowDefinitionId?: string | undefined;
            baseBranch?: string | undefined;
            headBranch?: string | undefined;
            headSha?: string | undefined;
            externalUrl?: string | undefined;
            completedAt?: number | undefined;
            updatedAt?: number | undefined;
            reviewPackets?: {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }[] | undefined;
        }>, "many">>;
        authorizationDecisions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            decisionKey: z.ZodOptional<z.ZodString>;
            subjectType: z.ZodOptional<z.ZodString>;
            subjectId: z.ZodOptional<z.ZodString>;
            action: z.ZodString;
            resourceType: z.ZodOptional<z.ZodString>;
            resourceId: z.ZodOptional<z.ZodString>;
            decision: z.ZodEnum<["allow", "deny", "require_approval", "quarantine", "weak_legacy_allow"]>;
            reason: z.ZodOptional<z.ZodString>;
            subjectSnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            resourceSnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            context: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            matchedRules: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            policySnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            decidedAt: z.ZodOptional<z.ZodNumber>;
            expiresAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            action: string;
            decision: "allow" | "deny" | "require_approval" | "quarantine" | "weak_legacy_allow";
            context?: Record<string, unknown> | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            matchedRules?: string[] | undefined;
            expiresAt?: number | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            resourceId?: string | undefined;
            decisionKey?: string | undefined;
            resourceType?: string | undefined;
            subjectSnapshot?: Record<string, unknown> | undefined;
            resourceSnapshot?: Record<string, unknown> | undefined;
            policySnapshot?: Record<string, unknown> | undefined;
            decidedAt?: number | undefined;
        }, {
            id: string;
            action: string;
            decision: "allow" | "deny" | "require_approval" | "quarantine" | "weak_legacy_allow";
            context?: Record<string, unknown> | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            matchedRules?: string[] | undefined;
            expiresAt?: number | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            resourceId?: string | undefined;
            decisionKey?: string | undefined;
            resourceType?: string | undefined;
            subjectSnapshot?: Record<string, unknown> | undefined;
            resourceSnapshot?: Record<string, unknown> | undefined;
            policySnapshot?: Record<string, unknown> | undefined;
            decidedAt?: number | undefined;
        }>, "many">>;
        evidencePackets: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            evidenceKey: z.ZodOptional<z.ZodString>;
            nodeId: z.ZodOptional<z.ZodString>;
            kind: z.ZodString;
            title: z.ZodOptional<z.ZodString>;
            summary: z.ZodOptional<z.ZodString>;
            confidence: z.ZodOptional<z.ZodString>;
            visibility: z.ZodOptional<z.ZodString>;
            digest: z.ZodOptional<z.ZodString>;
            payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            occurredAt: z.ZodOptional<z.ZodNumber>;
            createdAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            kind: string;
            title?: string | undefined;
            nodeId?: string | undefined;
            summary?: string | undefined;
            confidence?: string | undefined;
            visibility?: string | undefined;
            createdAt?: number | undefined;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            digest?: string | undefined;
            evidenceKey?: string | undefined;
        }, {
            id: string;
            kind: string;
            title?: string | undefined;
            nodeId?: string | undefined;
            summary?: string | undefined;
            confidence?: string | undefined;
            visibility?: string | undefined;
            createdAt?: number | undefined;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            digest?: string | undefined;
            evidenceKey?: string | undefined;
        }>, "many">>;
        actionProposals: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            proposalKey: z.ZodOptional<z.ZodString>;
            nodeId: z.ZodOptional<z.ZodString>;
            adapter: z.ZodString;
            action: z.ZodString;
            state: z.ZodOptional<z.ZodString>;
            idempotencyKey: z.ZodOptional<z.ZodString>;
            proposalDigest: z.ZodOptional<z.ZodString>;
            evidenceRefs: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            policyEvaluation: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            proposedAt: z.ZodOptional<z.ZodNumber>;
            expiresAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            adapter: string;
            action: string;
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalDigest?: string | undefined;
            evidenceRefs?: string[] | undefined;
            policyEvaluation?: Record<string, unknown> | undefined;
            state?: string | undefined;
            expiresAt?: number | undefined;
            proposalKey?: string | undefined;
            proposedAt?: number | undefined;
        }, {
            id: string;
            adapter: string;
            action: string;
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalDigest?: string | undefined;
            evidenceRefs?: string[] | undefined;
            policyEvaluation?: Record<string, unknown> | undefined;
            state?: string | undefined;
            expiresAt?: number | undefined;
            proposalKey?: string | undefined;
            proposedAt?: number | undefined;
        }>, "many">>;
        approvalDecisions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            proposalKey: z.ZodOptional<z.ZodString>;
            decisionKey: z.ZodOptional<z.ZodString>;
            nodeId: z.ZodOptional<z.ZodString>;
            actorUserId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            subjectType: z.ZodOptional<z.ZodString>;
            subjectId: z.ZodOptional<z.ZodString>;
            subjectDigest: z.ZodOptional<z.ZodString>;
            decision: z.ZodEnum<["approve", "deny", "request_changes", "unknown"]>;
            reason: z.ZodOptional<z.ZodString>;
            actorSnapshot: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            decidedAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            decision: "unknown" | "deny" | "approve" | "request_changes";
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            subjectDigest?: string | undefined;
            proposalKey?: string | undefined;
            decisionKey?: string | undefined;
            decidedAt?: number | undefined;
            actorUserId?: number | null | undefined;
            actorSnapshot?: Record<string, unknown> | undefined;
        }, {
            id: string;
            decision: "unknown" | "deny" | "approve" | "request_changes";
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            subjectDigest?: string | undefined;
            proposalKey?: string | undefined;
            decisionKey?: string | undefined;
            decidedAt?: number | undefined;
            actorUserId?: number | null | undefined;
            actorSnapshot?: Record<string, unknown> | undefined;
        }>, "many">>;
        executionReceipts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            proposalKey: z.ZodOptional<z.ZodString>;
            decisionKey: z.ZodOptional<z.ZodString>;
            receiptKey: z.ZodOptional<z.ZodString>;
            adapter: z.ZodString;
            action: z.ZodString;
            status: z.ZodString;
            providerReference: z.ZodOptional<z.ZodString>;
            providerUrl: z.ZodOptional<z.ZodString>;
            idempotencyKey: z.ZodOptional<z.ZodString>;
            payloadDigest: z.ZodOptional<z.ZodString>;
            providerResponseDigest: z.ZodOptional<z.ZodString>;
            receiptDigest: z.ZodOptional<z.ZodString>;
            providerReconciliation: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            executedAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            status: string;
            id: string;
            adapter: string;
            action: string;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalKey?: string | undefined;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
            payloadDigest?: string | undefined;
            providerResponseDigest?: string | undefined;
            providerReconciliation?: Record<string, unknown> | undefined;
            executedAt?: number | undefined;
            decisionKey?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
        }, {
            status: string;
            id: string;
            adapter: string;
            action: string;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalKey?: string | undefined;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
            payloadDigest?: string | undefined;
            providerResponseDigest?: string | undefined;
            providerReconciliation?: Record<string, unknown> | undefined;
            executedAt?: number | undefined;
            decisionKey?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
        }>, "many">>;
        auditReceipts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            receiptKey: z.ZodOptional<z.ZodString>;
            eventType: z.ZodString;
            actorType: z.ZodOptional<z.ZodString>;
            actorId: z.ZodOptional<z.ZodString>;
            payloadDigest: z.ZodOptional<z.ZodString>;
            payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            occurredAt: z.ZodOptional<z.ZodNumber>;
            sequence: z.ZodOptional<z.ZodNumber>;
            previousReceiptDigest: z.ZodOptional<z.ZodString>;
            receiptDigest: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            eventType: string;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            payloadDigest?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
            actorType?: string | undefined;
            actorId?: string | undefined;
            sequence?: number | undefined;
            previousReceiptDigest?: string | undefined;
        }, {
            id: string;
            eventType: string;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            payloadDigest?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
            actorType?: string | undefined;
            actorId?: string | undefined;
            sequence?: number | undefined;
            previousReceiptDigest?: string | undefined;
        }>, "many">>;
        contextReceipts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            schema: z.ZodOptional<z.ZodLiteral<"viewport.context_receipt/v1">>;
            package: z.ZodOptional<z.ZodString>;
            packageName: z.ZodOptional<z.ZodString>;
            requested: z.ZodOptional<z.ZodString>;
            resolvedVersion: z.ZodOptional<z.ZodString>;
            provider: z.ZodOptional<z.ZodString>;
            digest: z.ZodOptional<z.ZodString>;
            freshness: z.ZodOptional<z.ZodString>;
            usedBy: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            resolvedAt: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodString]>>;
            payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        }, "strip", z.ZodTypeAny, {
            schema?: "viewport.context_receipt/v1" | undefined;
            payload?: Record<string, unknown> | undefined;
            digest?: string | undefined;
            package?: string | undefined;
            requested?: string | undefined;
            resolvedVersion?: string | undefined;
            provider?: string | undefined;
            freshness?: string | undefined;
            usedBy?: Record<string, unknown> | undefined;
            resolvedAt?: string | number | undefined;
            packageName?: string | undefined;
        }, {
            schema?: "viewport.context_receipt/v1" | undefined;
            payload?: Record<string, unknown> | undefined;
            digest?: string | undefined;
            package?: string | undefined;
            requested?: string | undefined;
            resolvedVersion?: string | undefined;
            provider?: string | undefined;
            freshness?: string | undefined;
            usedBy?: Record<string, unknown> | undefined;
            resolvedAt?: string | number | undefined;
            packageName?: string | undefined;
        }>, "many">>;
        contractHealth: z.ZodOptional<z.ZodObject<{
            status: z.ZodEnum<["valid", "warning", "invalid", "unknown", "not_applicable"]>;
            summary: z.ZodObject<{
                evidencePackets: z.ZodNumber;
                actionProposals: z.ZodNumber;
                approvalDecisions: z.ZodNumber;
                executionReceipts: z.ZodNumber;
                auditReceipts: z.ZodNumber;
                issues: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            }, {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            }>;
            issues: z.ZodArray<z.ZodObject<{
                severity: z.ZodEnum<["warning", "error"]>;
                code: z.ZodString;
                message: z.ZodString;
                metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
            }, "strip", z.ZodTypeAny, {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }, {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }>, "many">;
            proposals: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">;
            auditChain: z.ZodObject<{
                status: z.ZodString;
                checked: z.ZodBoolean;
                receiptCount: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                status: string;
                checked: boolean;
                receiptCount: number;
            }, {
                status: string;
                checked: boolean;
                receiptCount: number;
            }>;
            checkedAt: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            issues: {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }[];
            status: "valid" | "unknown" | "warning" | "invalid" | "not_applicable";
            summary: {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            };
            proposals: Record<string, unknown>[];
            auditChain: {
                status: string;
                checked: boolean;
                receiptCount: number;
            };
            checkedAt?: number | undefined;
        }, {
            issues: {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }[];
            status: "valid" | "unknown" | "warning" | "invalid" | "not_applicable";
            summary: {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            };
            proposals: Record<string, unknown>[];
            auditChain: {
                status: string;
                checked: boolean;
                receiptCount: number;
            };
            checkedAt?: number | undefined;
        }>>;
        resourceManifest: z.ZodOptional<z.ZodObject<{
            schema: z.ZodLiteral<"viewport.session_resource_manifest/v1">;
            manifestDigest: z.ZodString;
            workingDirectory: z.ZodString;
            configSources: z.ZodArray<z.ZodObject<{
                path: z.ZodString;
                digest: z.ZodString;
                version: z.ZodLiteral<1>;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }, {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }>, "many">;
            resources: z.ZodObject<{
                contexts: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    required: z.ZodBoolean;
                    sourceConfigPath: z.ZodString;
                    resolution: z.ZodEnum<["requested_unverified"]>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }>, "many">;
                workflows: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    required: z.ZodBoolean;
                    sourceConfigPath: z.ZodString;
                    resolution: z.ZodEnum<["requested_unverified"]>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }>, "many">;
                plans: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    required: z.ZodBoolean;
                    sourceConfigPath: z.ZodString;
                    resolution: z.ZodEnum<["requested_unverified"]>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }>, "many">;
                agentProfiles: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    required: z.ZodBoolean;
                    sourceConfigPath: z.ZodString;
                    resolution: z.ZodEnum<["requested_unverified"]>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            }, {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            }>;
            contract: z.ZodOptional<z.ZodObject<{
                contextProviders: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    provider: z.ZodEnum<["repo-docs", "viewport-vault", "notebooklm", "glean", "custom-cli", "custom-mcp"]>;
                    required: z.ZodBoolean;
                    privacy: z.ZodEnum<["local_only", "control_plane_blind", "third_party_terms", "customer_hosted", "unknown"]>;
                    capabilities: z.ZodArray<z.ZodEnum<["search", "get", "propose", "write_approved"]>, "many">;
                    sourceConfigPath: z.ZodString;
                    vault: z.ZodOptional<z.ZodString>;
                    paths: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    notebook: z.ZodOptional<z.ZodString>;
                    command: z.ZodOptional<z.ZodString>;
                    resolution: z.ZodEnum<["requested_unverified"]>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }, {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }>, "many">;
                contextResolution: z.ZodObject<{
                    order: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                    sizeBudgetBytes: z.ZodOptional<z.ZodNumber>;
                    strategy: z.ZodOptional<z.ZodEnum<["rank_by_recency_then_query", "pinned_then_recent", "provider_order"]>>;
                }, "strip", z.ZodTypeAny, {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                }, {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                }>;
                workflows: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    required: z.ZodBoolean;
                    sourceConfigPath: z.ZodString;
                    path: z.ZodOptional<z.ZodString>;
                    resource: z.ZodOptional<z.ZodString>;
                    version: z.ZodOptional<z.ZodString>;
                    digest: z.ZodOptional<z.ZodString>;
                    resolution: z.ZodEnum<["requested_unverified"]>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }, {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            }, {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            }>>;
            conflicts: z.ZodArray<z.ZodObject<{
                field: z.ZodString;
                values: z.ZodArray<z.ZodObject<{
                    value: z.ZodString;
                    sourceConfigPath: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    sourceConfigPath: string;
                }, {
                    value: string;
                    sourceConfigPath: string;
                }>, "many">;
                resolution: z.ZodLiteral<"requires_user_selection">;
            }, "strip", z.ZodTypeAny, {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }, {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }>, "many">;
            warnings: z.ZodArray<z.ZodObject<{
                code: z.ZodString;
                message: z.ZodString;
                path: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                code: string;
                message: string;
                path?: string | undefined;
            }, {
                code: string;
                message: string;
                path?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            schema: "viewport.session_resource_manifest/v1";
            manifestDigest: string;
            workingDirectory: string;
            configSources: {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }[];
            resources: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            };
            conflicts: {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }[];
            warnings: {
                code: string;
                message: string;
                path?: string | undefined;
            }[];
            contract?: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            } | undefined;
        }, {
            schema: "viewport.session_resource_manifest/v1";
            manifestDigest: string;
            workingDirectory: string;
            configSources: {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }[];
            resources: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            };
            conflicts: {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }[];
            warnings: {
                code: string;
                message: string;
                path?: string | undefined;
            }[];
            contract?: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            } | undefined;
        }>>;
        events: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            runId: z.ZodString;
            timestamp: z.ZodNumber;
            type: z.ZodString;
            severity: z.ZodOptional<z.ZodEnum<["debug", "info", "warning", "error"]>>;
            nodeId: z.ZodOptional<z.ZodString>;
            message: z.ZodString;
            data: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        }, "strip", z.ZodTypeAny, {
            message: string;
            type: string;
            id: string;
            runId: string;
            timestamp: number;
            nodeId?: string | undefined;
            severity?: "error" | "debug" | "info" | "warning" | undefined;
            data?: Record<string, unknown> | undefined;
        }, {
            message: string;
            type: string;
            id: string;
            runId: string;
            timestamp: number;
            nodeId?: string | undefined;
            severity?: "error" | "debug" | "info" | "warning" | undefined;
            data?: Record<string, unknown> | undefined;
        }>, "many">;
        createdAt: z.ZodNumber;
        startedAt: z.ZodOptional<z.ZodNumber>;
        updatedAt: z.ZodNumber;
        completedAt: z.ZodOptional<z.ZodNumber>;
        error: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled";
        schema: string;
        id: string;
        createdAt: number;
        digest: string;
        updatedAt: number;
        workflowName: string;
        sourceType: "local_file" | "viewport_snapshot" | "local_modified";
        yamlSnapshot: string;
        directoryId: string;
        directoryPath: string;
        machineId: string;
        initiation: "cli" | "browser" | "agent_skill";
        inputs: Record<string, WorkflowInputValue>;
        preflight: {
            issues: {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }[];
            ok: boolean;
        };
        nodes: Record<string, {
            type: "agent" | "context" | "action" | "approval" | "prompt" | "shell" | "plan" | "gate" | "loop" | "subflow" | "condition" | "artifact";
            status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled" | "skipped";
            id: string;
            title?: string | undefined;
            error?: string | undefined;
            approval?: {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            completedAt?: number | undefined;
            startedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
            exitCode?: number | undefined;
            outputs?: Record<string, unknown> | undefined;
            transcriptExcerpt?: {
                text: string;
                role: "user" | "assistant";
            }[] | undefined;
            iterations?: {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }[] | undefined;
            inlineAgents?: Record<string, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }> | undefined;
        }>;
        events: {
            message: string;
            type: string;
            id: string;
            runId: string;
            timestamp: number;
            nodeId?: string | undefined;
            severity?: "error" | "debug" | "info" | "warning" | undefined;
            data?: Record<string, unknown> | undefined;
        }[];
        artifacts?: {
            path: string;
            id: string;
            nodeId: string;
            createdAt: number;
            runId: string;
            name: string;
            kind?: string | undefined;
            digest?: string | undefined;
            description?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: Record<string, unknown> | undefined;
        }[] | undefined;
        error?: string | undefined;
        contextReceipts?: {
            schema?: "viewport.context_receipt/v1" | undefined;
            payload?: Record<string, unknown> | undefined;
            digest?: string | undefined;
            package?: string | undefined;
            requested?: string | undefined;
            resolvedVersion?: string | undefined;
            provider?: string | undefined;
            freshness?: string | undefined;
            usedBy?: Record<string, unknown> | undefined;
            resolvedAt?: string | number | undefined;
            packageName?: string | undefined;
        }[] | undefined;
        resourceId?: string | undefined;
        workflowDefinitionId?: string | undefined;
        completedAt?: number | undefined;
        reviewPackets?: {
            status: "failed" | "canceled" | "draft" | "published";
            id: string;
            title: string;
            decision: "blocked" | "approved" | "changes_requested" | "needs_review";
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            artifacts?: Record<string, unknown>[] | undefined;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            findings?: Record<string, unknown>[] | undefined;
            subject?: {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
            readinessTargetId?: string | undefined;
            planId?: string | undefined;
            sourceKey?: string | undefined;
            checks?: Record<string, unknown>[] | undefined;
            proofItems?: Record<string, unknown>[] | undefined;
            sourceSnapshot?: Record<string, unknown> | undefined;
            publishedAt?: number | undefined;
        }[] | undefined;
        evidencePackets?: {
            id: string;
            kind: string;
            title?: string | undefined;
            nodeId?: string | undefined;
            summary?: string | undefined;
            confidence?: string | undefined;
            visibility?: string | undefined;
            createdAt?: number | undefined;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            digest?: string | undefined;
            evidenceKey?: string | undefined;
        }[] | undefined;
        actionProposals?: {
            id: string;
            adapter: string;
            action: string;
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalDigest?: string | undefined;
            evidenceRefs?: string[] | undefined;
            policyEvaluation?: Record<string, unknown> | undefined;
            state?: string | undefined;
            expiresAt?: number | undefined;
            proposalKey?: string | undefined;
            proposedAt?: number | undefined;
        }[] | undefined;
        approvalDecisions?: {
            id: string;
            decision: "unknown" | "deny" | "approve" | "request_changes";
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            subjectDigest?: string | undefined;
            proposalKey?: string | undefined;
            decisionKey?: string | undefined;
            decidedAt?: number | undefined;
            actorUserId?: number | null | undefined;
            actorSnapshot?: Record<string, unknown> | undefined;
        }[] | undefined;
        executionReceipts?: {
            status: string;
            id: string;
            adapter: string;
            action: string;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalKey?: string | undefined;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
            payloadDigest?: string | undefined;
            providerResponseDigest?: string | undefined;
            providerReconciliation?: Record<string, unknown> | undefined;
            executedAt?: number | undefined;
            decisionKey?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
        }[] | undefined;
        auditReceipts?: {
            id: string;
            eventType: string;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            payloadDigest?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
            actorType?: string | undefined;
            actorId?: string | undefined;
            sequence?: number | undefined;
            previousReceiptDigest?: string | undefined;
        }[] | undefined;
        startedAt?: number | undefined;
        workflowTitle?: string | undefined;
        workflowVersionId?: string | undefined;
        rerunOfWorkflowRunId?: string | undefined;
        sourcePath?: string | undefined;
        runtimeTargetId?: string | undefined;
        managedExecutorId?: string | undefined;
        executorTarget?: "local_machine" | "managed_executor" | undefined;
        assignmentStatus?: string | undefined;
        platformRunId?: string | undefined;
        executorAgent?: string | undefined;
        executorModel?: string | undefined;
        executionPolicy?: {
            mode: "current_tree" | "isolated_worktree" | "named_branch";
            branch?: string | undefined;
        } | undefined;
        dataCapturePolicy?: {
            transcripts: "none" | "excerpt";
            logs: "metadata" | "content";
            artifacts: "metadata" | "local_reference";
        } | undefined;
        readinessTargets?: {
            status: "blocked" | "failed" | "running" | "canceled" | "draft" | "ready";
            id: string;
            title: string;
            kind: string;
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            resourceId: string;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            repository?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            planId?: string | undefined;
            ownerUserId?: number | null | undefined;
            workflowDefinitionId?: string | undefined;
            baseBranch?: string | undefined;
            headBranch?: string | undefined;
            headSha?: string | undefined;
            externalUrl?: string | undefined;
            completedAt?: number | undefined;
            updatedAt?: number | undefined;
            reviewPackets?: {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }[] | undefined;
        }[] | undefined;
        authorizationDecisions?: {
            id: string;
            action: string;
            decision: "allow" | "deny" | "require_approval" | "quarantine" | "weak_legacy_allow";
            context?: Record<string, unknown> | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            matchedRules?: string[] | undefined;
            expiresAt?: number | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            resourceId?: string | undefined;
            decisionKey?: string | undefined;
            resourceType?: string | undefined;
            subjectSnapshot?: Record<string, unknown> | undefined;
            resourceSnapshot?: Record<string, unknown> | undefined;
            policySnapshot?: Record<string, unknown> | undefined;
            decidedAt?: number | undefined;
        }[] | undefined;
        contractHealth?: {
            issues: {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }[];
            status: "valid" | "unknown" | "warning" | "invalid" | "not_applicable";
            summary: {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            };
            proposals: Record<string, unknown>[];
            auditChain: {
                status: string;
                checked: boolean;
                receiptCount: number;
            };
            checkedAt?: number | undefined;
        } | undefined;
        resourceManifest?: {
            schema: "viewport.session_resource_manifest/v1";
            manifestDigest: string;
            workingDirectory: string;
            configSources: {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }[];
            resources: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            };
            conflicts: {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }[];
            warnings: {
                code: string;
                message: string;
                path?: string | undefined;
            }[];
            contract?: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            } | undefined;
        } | undefined;
    }, {
        status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled";
        schema: string;
        id: string;
        createdAt: number;
        digest: string;
        updatedAt: number;
        workflowName: string;
        sourceType: "local_file" | "viewport_snapshot" | "local_modified";
        yamlSnapshot: string;
        directoryId: string;
        directoryPath: string;
        machineId: string;
        initiation: "cli" | "browser" | "agent_skill";
        inputs: Record<string, WorkflowInputValue>;
        preflight: {
            issues: {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }[];
            ok: boolean;
        };
        nodes: Record<string, {
            type: "agent" | "context" | "action" | "approval" | "prompt" | "shell" | "plan" | "gate" | "loop" | "subflow" | "condition" | "artifact";
            status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled" | "skipped";
            id: string;
            title?: string | undefined;
            error?: string | undefined;
            approval?: {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            completedAt?: number | undefined;
            startedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
            exitCode?: number | undefined;
            outputs?: Record<string, unknown> | undefined;
            transcriptExcerpt?: {
                text: string;
                role: "user" | "assistant";
            }[] | undefined;
            iterations?: {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }[] | undefined;
            inlineAgents?: Record<string, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }> | undefined;
        }>;
        events: {
            message: string;
            type: string;
            id: string;
            runId: string;
            timestamp: number;
            nodeId?: string | undefined;
            severity?: "error" | "debug" | "info" | "warning" | undefined;
            data?: Record<string, unknown> | undefined;
        }[];
        artifacts?: {
            path: string;
            id: string;
            nodeId: string;
            createdAt: number;
            runId: string;
            name: string;
            kind?: string | undefined;
            digest?: string | undefined;
            description?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: Record<string, unknown> | undefined;
        }[] | undefined;
        error?: string | undefined;
        contextReceipts?: {
            schema?: "viewport.context_receipt/v1" | undefined;
            payload?: Record<string, unknown> | undefined;
            digest?: string | undefined;
            package?: string | undefined;
            requested?: string | undefined;
            resolvedVersion?: string | undefined;
            provider?: string | undefined;
            freshness?: string | undefined;
            usedBy?: Record<string, unknown> | undefined;
            resolvedAt?: string | number | undefined;
            packageName?: string | undefined;
        }[] | undefined;
        resourceId?: string | undefined;
        workflowDefinitionId?: string | undefined;
        completedAt?: number | undefined;
        reviewPackets?: {
            status: "failed" | "canceled" | "draft" | "published";
            id: string;
            title: string;
            decision: "blocked" | "approved" | "changes_requested" | "needs_review";
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            artifacts?: Record<string, unknown>[] | undefined;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            findings?: Record<string, unknown>[] | undefined;
            subject?: {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
            readinessTargetId?: string | undefined;
            planId?: string | undefined;
            sourceKey?: string | undefined;
            checks?: Record<string, unknown>[] | undefined;
            proofItems?: Record<string, unknown>[] | undefined;
            sourceSnapshot?: Record<string, unknown> | undefined;
            publishedAt?: number | undefined;
        }[] | undefined;
        evidencePackets?: {
            id: string;
            kind: string;
            title?: string | undefined;
            nodeId?: string | undefined;
            summary?: string | undefined;
            confidence?: string | undefined;
            visibility?: string | undefined;
            createdAt?: number | undefined;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            digest?: string | undefined;
            evidenceKey?: string | undefined;
        }[] | undefined;
        actionProposals?: {
            id: string;
            adapter: string;
            action: string;
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalDigest?: string | undefined;
            evidenceRefs?: string[] | undefined;
            policyEvaluation?: Record<string, unknown> | undefined;
            state?: string | undefined;
            expiresAt?: number | undefined;
            proposalKey?: string | undefined;
            proposedAt?: number | undefined;
        }[] | undefined;
        approvalDecisions?: {
            id: string;
            decision: "unknown" | "deny" | "approve" | "request_changes";
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            subjectDigest?: string | undefined;
            proposalKey?: string | undefined;
            decisionKey?: string | undefined;
            decidedAt?: number | undefined;
            actorUserId?: number | null | undefined;
            actorSnapshot?: Record<string, unknown> | undefined;
        }[] | undefined;
        executionReceipts?: {
            status: string;
            id: string;
            adapter: string;
            action: string;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalKey?: string | undefined;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
            payloadDigest?: string | undefined;
            providerResponseDigest?: string | undefined;
            providerReconciliation?: Record<string, unknown> | undefined;
            executedAt?: number | undefined;
            decisionKey?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
        }[] | undefined;
        auditReceipts?: {
            id: string;
            eventType: string;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            payloadDigest?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
            actorType?: string | undefined;
            actorId?: string | undefined;
            sequence?: number | undefined;
            previousReceiptDigest?: string | undefined;
        }[] | undefined;
        startedAt?: number | undefined;
        workflowTitle?: string | undefined;
        workflowVersionId?: string | undefined;
        rerunOfWorkflowRunId?: string | undefined;
        sourcePath?: string | undefined;
        runtimeTargetId?: string | undefined;
        managedExecutorId?: string | undefined;
        executorTarget?: "local_machine" | "managed_executor" | undefined;
        assignmentStatus?: string | undefined;
        platformRunId?: string | undefined;
        executorAgent?: string | undefined;
        executorModel?: string | undefined;
        executionPolicy?: {
            mode: "current_tree" | "isolated_worktree" | "named_branch";
            branch?: string | undefined;
        } | undefined;
        dataCapturePolicy?: {
            transcripts: "none" | "excerpt";
            logs: "metadata" | "content";
            artifacts: "metadata" | "local_reference";
        } | undefined;
        readinessTargets?: {
            status: "blocked" | "failed" | "running" | "canceled" | "draft" | "ready";
            id: string;
            title: string;
            kind: string;
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            resourceId: string;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            repository?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            planId?: string | undefined;
            ownerUserId?: number | null | undefined;
            workflowDefinitionId?: string | undefined;
            baseBranch?: string | undefined;
            headBranch?: string | undefined;
            headSha?: string | undefined;
            externalUrl?: string | undefined;
            completedAt?: number | undefined;
            updatedAt?: number | undefined;
            reviewPackets?: {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }[] | undefined;
        }[] | undefined;
        authorizationDecisions?: {
            id: string;
            action: string;
            decision: "allow" | "deny" | "require_approval" | "quarantine" | "weak_legacy_allow";
            context?: Record<string, unknown> | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            matchedRules?: string[] | undefined;
            expiresAt?: number | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            resourceId?: string | undefined;
            decisionKey?: string | undefined;
            resourceType?: string | undefined;
            subjectSnapshot?: Record<string, unknown> | undefined;
            resourceSnapshot?: Record<string, unknown> | undefined;
            policySnapshot?: Record<string, unknown> | undefined;
            decidedAt?: number | undefined;
        }[] | undefined;
        contractHealth?: {
            issues: {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }[];
            status: "valid" | "unknown" | "warning" | "invalid" | "not_applicable";
            summary: {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            };
            proposals: Record<string, unknown>[];
            auditChain: {
                status: string;
                checked: boolean;
                receiptCount: number;
            };
            checkedAt?: number | undefined;
        } | undefined;
        resourceManifest?: {
            schema: "viewport.session_resource_manifest/v1";
            manifestDigest: string;
            workingDirectory: string;
            configSources: {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }[];
            resources: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            };
            conflicts: {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }[];
            warnings: {
                code: string;
                message: string;
                path?: string | undefined;
            }[];
            contract?: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            } | undefined;
        } | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "workflow-run-detail";
    run: {
        status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled";
        schema: string;
        id: string;
        createdAt: number;
        digest: string;
        updatedAt: number;
        workflowName: string;
        sourceType: "local_file" | "viewport_snapshot" | "local_modified";
        yamlSnapshot: string;
        directoryId: string;
        directoryPath: string;
        machineId: string;
        initiation: "cli" | "browser" | "agent_skill";
        inputs: Record<string, WorkflowInputValue>;
        preflight: {
            issues: {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }[];
            ok: boolean;
        };
        nodes: Record<string, {
            type: "agent" | "context" | "action" | "approval" | "prompt" | "shell" | "plan" | "gate" | "loop" | "subflow" | "condition" | "artifact";
            status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled" | "skipped";
            id: string;
            title?: string | undefined;
            error?: string | undefined;
            approval?: {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            completedAt?: number | undefined;
            startedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
            exitCode?: number | undefined;
            outputs?: Record<string, unknown> | undefined;
            transcriptExcerpt?: {
                text: string;
                role: "user" | "assistant";
            }[] | undefined;
            iterations?: {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }[] | undefined;
            inlineAgents?: Record<string, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }> | undefined;
        }>;
        events: {
            message: string;
            type: string;
            id: string;
            runId: string;
            timestamp: number;
            nodeId?: string | undefined;
            severity?: "error" | "debug" | "info" | "warning" | undefined;
            data?: Record<string, unknown> | undefined;
        }[];
        artifacts?: {
            path: string;
            id: string;
            nodeId: string;
            createdAt: number;
            runId: string;
            name: string;
            kind?: string | undefined;
            digest?: string | undefined;
            description?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: Record<string, unknown> | undefined;
        }[] | undefined;
        error?: string | undefined;
        contextReceipts?: {
            schema?: "viewport.context_receipt/v1" | undefined;
            payload?: Record<string, unknown> | undefined;
            digest?: string | undefined;
            package?: string | undefined;
            requested?: string | undefined;
            resolvedVersion?: string | undefined;
            provider?: string | undefined;
            freshness?: string | undefined;
            usedBy?: Record<string, unknown> | undefined;
            resolvedAt?: string | number | undefined;
            packageName?: string | undefined;
        }[] | undefined;
        resourceId?: string | undefined;
        workflowDefinitionId?: string | undefined;
        completedAt?: number | undefined;
        reviewPackets?: {
            status: "failed" | "canceled" | "draft" | "published";
            id: string;
            title: string;
            decision: "blocked" | "approved" | "changes_requested" | "needs_review";
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            artifacts?: Record<string, unknown>[] | undefined;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            findings?: Record<string, unknown>[] | undefined;
            subject?: {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
            readinessTargetId?: string | undefined;
            planId?: string | undefined;
            sourceKey?: string | undefined;
            checks?: Record<string, unknown>[] | undefined;
            proofItems?: Record<string, unknown>[] | undefined;
            sourceSnapshot?: Record<string, unknown> | undefined;
            publishedAt?: number | undefined;
        }[] | undefined;
        evidencePackets?: {
            id: string;
            kind: string;
            title?: string | undefined;
            nodeId?: string | undefined;
            summary?: string | undefined;
            confidence?: string | undefined;
            visibility?: string | undefined;
            createdAt?: number | undefined;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            digest?: string | undefined;
            evidenceKey?: string | undefined;
        }[] | undefined;
        actionProposals?: {
            id: string;
            adapter: string;
            action: string;
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalDigest?: string | undefined;
            evidenceRefs?: string[] | undefined;
            policyEvaluation?: Record<string, unknown> | undefined;
            state?: string | undefined;
            expiresAt?: number | undefined;
            proposalKey?: string | undefined;
            proposedAt?: number | undefined;
        }[] | undefined;
        approvalDecisions?: {
            id: string;
            decision: "unknown" | "deny" | "approve" | "request_changes";
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            subjectDigest?: string | undefined;
            proposalKey?: string | undefined;
            decisionKey?: string | undefined;
            decidedAt?: number | undefined;
            actorUserId?: number | null | undefined;
            actorSnapshot?: Record<string, unknown> | undefined;
        }[] | undefined;
        executionReceipts?: {
            status: string;
            id: string;
            adapter: string;
            action: string;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalKey?: string | undefined;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
            payloadDigest?: string | undefined;
            providerResponseDigest?: string | undefined;
            providerReconciliation?: Record<string, unknown> | undefined;
            executedAt?: number | undefined;
            decisionKey?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
        }[] | undefined;
        auditReceipts?: {
            id: string;
            eventType: string;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            payloadDigest?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
            actorType?: string | undefined;
            actorId?: string | undefined;
            sequence?: number | undefined;
            previousReceiptDigest?: string | undefined;
        }[] | undefined;
        startedAt?: number | undefined;
        workflowTitle?: string | undefined;
        workflowVersionId?: string | undefined;
        rerunOfWorkflowRunId?: string | undefined;
        sourcePath?: string | undefined;
        runtimeTargetId?: string | undefined;
        managedExecutorId?: string | undefined;
        executorTarget?: "local_machine" | "managed_executor" | undefined;
        assignmentStatus?: string | undefined;
        platformRunId?: string | undefined;
        executorAgent?: string | undefined;
        executorModel?: string | undefined;
        executionPolicy?: {
            mode: "current_tree" | "isolated_worktree" | "named_branch";
            branch?: string | undefined;
        } | undefined;
        dataCapturePolicy?: {
            transcripts: "none" | "excerpt";
            logs: "metadata" | "content";
            artifacts: "metadata" | "local_reference";
        } | undefined;
        readinessTargets?: {
            status: "blocked" | "failed" | "running" | "canceled" | "draft" | "ready";
            id: string;
            title: string;
            kind: string;
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            resourceId: string;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            repository?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            planId?: string | undefined;
            ownerUserId?: number | null | undefined;
            workflowDefinitionId?: string | undefined;
            baseBranch?: string | undefined;
            headBranch?: string | undefined;
            headSha?: string | undefined;
            externalUrl?: string | undefined;
            completedAt?: number | undefined;
            updatedAt?: number | undefined;
            reviewPackets?: {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }[] | undefined;
        }[] | undefined;
        authorizationDecisions?: {
            id: string;
            action: string;
            decision: "allow" | "deny" | "require_approval" | "quarantine" | "weak_legacy_allow";
            context?: Record<string, unknown> | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            matchedRules?: string[] | undefined;
            expiresAt?: number | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            resourceId?: string | undefined;
            decisionKey?: string | undefined;
            resourceType?: string | undefined;
            subjectSnapshot?: Record<string, unknown> | undefined;
            resourceSnapshot?: Record<string, unknown> | undefined;
            policySnapshot?: Record<string, unknown> | undefined;
            decidedAt?: number | undefined;
        }[] | undefined;
        contractHealth?: {
            issues: {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }[];
            status: "valid" | "unknown" | "warning" | "invalid" | "not_applicable";
            summary: {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            };
            proposals: Record<string, unknown>[];
            auditChain: {
                status: string;
                checked: boolean;
                receiptCount: number;
            };
            checkedAt?: number | undefined;
        } | undefined;
        resourceManifest?: {
            schema: "viewport.session_resource_manifest/v1";
            manifestDigest: string;
            workingDirectory: string;
            configSources: {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }[];
            resources: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            };
            conflicts: {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }[];
            warnings: {
                code: string;
                message: string;
                path?: string | undefined;
            }[];
            contract?: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            } | undefined;
        } | undefined;
    };
}, {
    type: "workflow-run-detail";
    run: {
        status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled";
        schema: string;
        id: string;
        createdAt: number;
        digest: string;
        updatedAt: number;
        workflowName: string;
        sourceType: "local_file" | "viewport_snapshot" | "local_modified";
        yamlSnapshot: string;
        directoryId: string;
        directoryPath: string;
        machineId: string;
        initiation: "cli" | "browser" | "agent_skill";
        inputs: Record<string, WorkflowInputValue>;
        preflight: {
            issues: {
                message: string;
                kind: "agent" | "tool" | "node";
                name: string;
            }[];
            ok: boolean;
        };
        nodes: Record<string, {
            type: "agent" | "context" | "action" | "approval" | "prompt" | "shell" | "plan" | "gate" | "loop" | "subflow" | "condition" | "artifact";
            status: "blocked" | "failed" | "queued" | "running" | "completed" | "canceled" | "skipped";
            id: string;
            title?: string | undefined;
            error?: string | undefined;
            approval?: {
                prompt: string;
                requestedAt: number;
                executionGrant?: Record<string, unknown> | undefined;
                message?: string | undefined;
                decision?: "approve" | "request_changes" | "reject" | undefined;
                actor?: {
                    source?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    email?: string | undefined;
                } | undefined;
                resolvedAt?: number | undefined;
                approved?: boolean | undefined;
                feedback?: Record<string, unknown> | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            completedAt?: number | undefined;
            startedAt?: number | undefined;
            sessionId?: string | undefined;
            nativeSessionId?: string | undefined;
            worktreePath?: string | undefined;
            output?: string | undefined;
            exitCode?: number | undefined;
            outputs?: Record<string, unknown> | undefined;
            transcriptExcerpt?: {
                text: string;
                role: "user" | "assistant";
            }[] | undefined;
            iterations?: {
                status: "failed" | "running" | "completed" | "canceled" | "skipped";
                startedAt: number;
                index: number;
                error?: string | undefined;
                completedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
                exitCode?: number | undefined;
                item?: unknown;
            }[] | undefined;
            inlineAgents?: Record<string, {
                status: "failed" | "queued" | "running" | "completed" | "canceled";
                id: string;
                title?: string | undefined;
                agent?: string | undefined;
                error?: string | undefined;
                completedAt?: number | undefined;
                model?: string | undefined;
                startedAt?: number | undefined;
                sessionId?: string | undefined;
                nativeSessionId?: string | undefined;
                worktreePath?: string | undefined;
                output?: string | undefined;
            }> | undefined;
        }>;
        events: {
            message: string;
            type: string;
            id: string;
            runId: string;
            timestamp: number;
            nodeId?: string | undefined;
            severity?: "error" | "debug" | "info" | "warning" | undefined;
            data?: Record<string, unknown> | undefined;
        }[];
        artifacts?: {
            path: string;
            id: string;
            nodeId: string;
            createdAt: number;
            runId: string;
            name: string;
            kind?: string | undefined;
            digest?: string | undefined;
            description?: string | undefined;
            sizeBytes?: number | undefined;
            metadata?: Record<string, unknown> | undefined;
        }[] | undefined;
        error?: string | undefined;
        contextReceipts?: {
            schema?: "viewport.context_receipt/v1" | undefined;
            payload?: Record<string, unknown> | undefined;
            digest?: string | undefined;
            package?: string | undefined;
            requested?: string | undefined;
            resolvedVersion?: string | undefined;
            provider?: string | undefined;
            freshness?: string | undefined;
            usedBy?: Record<string, unknown> | undefined;
            resolvedAt?: string | number | undefined;
            packageName?: string | undefined;
        }[] | undefined;
        resourceId?: string | undefined;
        workflowDefinitionId?: string | undefined;
        completedAt?: number | undefined;
        reviewPackets?: {
            status: "failed" | "canceled" | "draft" | "published";
            id: string;
            title: string;
            decision: "blocked" | "approved" | "changes_requested" | "needs_review";
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            artifacts?: Record<string, unknown>[] | undefined;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            findings?: Record<string, unknown>[] | undefined;
            subject?: {
                type: string;
                id?: string | undefined;
                metadata?: Record<string, unknown> | undefined;
                label?: string | undefined;
                uri?: string | undefined;
            } | undefined;
            metadata?: Record<string, unknown> | undefined;
            artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
            readinessTargetId?: string | undefined;
            planId?: string | undefined;
            sourceKey?: string | undefined;
            checks?: Record<string, unknown>[] | undefined;
            proofItems?: Record<string, unknown>[] | undefined;
            sourceSnapshot?: Record<string, unknown> | undefined;
            publishedAt?: number | undefined;
        }[] | undefined;
        evidencePackets?: {
            id: string;
            kind: string;
            title?: string | undefined;
            nodeId?: string | undefined;
            summary?: string | undefined;
            confidence?: string | undefined;
            visibility?: string | undefined;
            createdAt?: number | undefined;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            digest?: string | undefined;
            evidenceKey?: string | undefined;
        }[] | undefined;
        actionProposals?: {
            id: string;
            adapter: string;
            action: string;
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalDigest?: string | undefined;
            evidenceRefs?: string[] | undefined;
            policyEvaluation?: Record<string, unknown> | undefined;
            state?: string | undefined;
            expiresAt?: number | undefined;
            proposalKey?: string | undefined;
            proposedAt?: number | undefined;
        }[] | undefined;
        approvalDecisions?: {
            id: string;
            decision: "unknown" | "deny" | "approve" | "request_changes";
            nodeId?: string | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            subjectDigest?: string | undefined;
            proposalKey?: string | undefined;
            decisionKey?: string | undefined;
            decidedAt?: number | undefined;
            actorUserId?: number | null | undefined;
            actorSnapshot?: Record<string, unknown> | undefined;
        }[] | undefined;
        executionReceipts?: {
            status: string;
            id: string;
            adapter: string;
            action: string;
            payload?: Record<string, unknown> | undefined;
            idempotencyKey?: string | undefined;
            proposalKey?: string | undefined;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
            payloadDigest?: string | undefined;
            providerResponseDigest?: string | undefined;
            providerReconciliation?: Record<string, unknown> | undefined;
            executedAt?: number | undefined;
            decisionKey?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
        }[] | undefined;
        auditReceipts?: {
            id: string;
            eventType: string;
            payload?: Record<string, unknown> | undefined;
            occurredAt?: number | undefined;
            payloadDigest?: string | undefined;
            receiptKey?: string | undefined;
            receiptDigest?: string | undefined;
            actorType?: string | undefined;
            actorId?: string | undefined;
            sequence?: number | undefined;
            previousReceiptDigest?: string | undefined;
        }[] | undefined;
        startedAt?: number | undefined;
        workflowTitle?: string | undefined;
        workflowVersionId?: string | undefined;
        rerunOfWorkflowRunId?: string | undefined;
        sourcePath?: string | undefined;
        runtimeTargetId?: string | undefined;
        managedExecutorId?: string | undefined;
        executorTarget?: "local_machine" | "managed_executor" | undefined;
        assignmentStatus?: string | undefined;
        platformRunId?: string | undefined;
        executorAgent?: string | undefined;
        executorModel?: string | undefined;
        executionPolicy?: {
            mode: "current_tree" | "isolated_worktree" | "named_branch";
            branch?: string | undefined;
        } | undefined;
        dataCapturePolicy?: {
            transcripts: "none" | "excerpt";
            logs: "metadata" | "content";
            artifacts: "metadata" | "local_reference";
        } | undefined;
        readinessTargets?: {
            status: "blocked" | "failed" | "running" | "canceled" | "draft" | "ready";
            id: string;
            title: string;
            kind: string;
            riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
            resourceId: string;
            workflowRunId?: string | undefined;
            summary?: string | undefined;
            createdAt?: number | undefined;
            repository?: string | undefined;
            metadata?: Record<string, unknown> | undefined;
            planId?: string | undefined;
            ownerUserId?: number | null | undefined;
            workflowDefinitionId?: string | undefined;
            baseBranch?: string | undefined;
            headBranch?: string | undefined;
            headSha?: string | undefined;
            externalUrl?: string | undefined;
            completedAt?: number | undefined;
            updatedAt?: number | undefined;
            reviewPackets?: {
                status: "failed" | "canceled" | "draft" | "published";
                id: string;
                title: string;
                decision: "blocked" | "approved" | "changes_requested" | "needs_review";
                riskLevel: "unknown" | "low" | "medium" | "high" | "critical";
                artifacts?: Record<string, unknown>[] | undefined;
                workflowRunId?: string | undefined;
                summary?: string | undefined;
                createdAt?: number | undefined;
                findings?: Record<string, unknown>[] | undefined;
                subject?: {
                    type: string;
                    id?: string | undefined;
                    metadata?: Record<string, unknown> | undefined;
                    label?: string | undefined;
                    uri?: string | undefined;
                } | undefined;
                metadata?: Record<string, unknown> | undefined;
                artifactKind?: "plan" | "evidence_packet" | "action_proposal" | "approval_request" | "context_candidate" | "remediation" | "run_summary" | "other" | undefined;
                readinessTargetId?: string | undefined;
                planId?: string | undefined;
                sourceKey?: string | undefined;
                checks?: Record<string, unknown>[] | undefined;
                proofItems?: Record<string, unknown>[] | undefined;
                sourceSnapshot?: Record<string, unknown> | undefined;
                publishedAt?: number | undefined;
            }[] | undefined;
        }[] | undefined;
        authorizationDecisions?: {
            id: string;
            action: string;
            decision: "allow" | "deny" | "require_approval" | "quarantine" | "weak_legacy_allow";
            context?: Record<string, unknown> | undefined;
            payload?: Record<string, unknown> | undefined;
            reason?: string | undefined;
            matchedRules?: string[] | undefined;
            expiresAt?: number | undefined;
            subjectType?: string | undefined;
            subjectId?: string | undefined;
            resourceId?: string | undefined;
            decisionKey?: string | undefined;
            resourceType?: string | undefined;
            subjectSnapshot?: Record<string, unknown> | undefined;
            resourceSnapshot?: Record<string, unknown> | undefined;
            policySnapshot?: Record<string, unknown> | undefined;
            decidedAt?: number | undefined;
        }[] | undefined;
        contractHealth?: {
            issues: {
                code: string;
                message: string;
                severity: "error" | "warning";
                metadata?: Record<string, unknown> | undefined;
            }[];
            status: "valid" | "unknown" | "warning" | "invalid" | "not_applicable";
            summary: {
                issues: number;
                evidencePackets: number;
                actionProposals: number;
                approvalDecisions: number;
                executionReceipts: number;
                auditReceipts: number;
            };
            proposals: Record<string, unknown>[];
            auditChain: {
                status: string;
                checked: boolean;
                receiptCount: number;
            };
            checkedAt?: number | undefined;
        } | undefined;
        resourceManifest?: {
            schema: "viewport.session_resource_manifest/v1";
            manifestDigest: string;
            workingDirectory: string;
            configSources: {
                path: string;
                version: 1;
                digest: string;
                name?: string | undefined;
            }[];
            resources: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                contexts: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                plans: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
                agentProfiles: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                }[];
            };
            conflicts: {
                values: {
                    value: string;
                    sourceConfigPath: string;
                }[];
                resolution: "requires_user_selection";
                field: string;
            }[];
            warnings: {
                code: string;
                message: string;
                path?: string | undefined;
            }[];
            contract?: {
                workflows: {
                    id: string;
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    path?: string | undefined;
                    resource?: string | undefined;
                    version?: string | undefined;
                    digest?: string | undefined;
                }[];
                contextProviders: {
                    id: string;
                    provider: "repo-docs" | "viewport-vault" | "notebooklm" | "glean" | "custom-cli" | "custom-mcp";
                    required: boolean;
                    sourceConfigPath: string;
                    resolution: "requested_unverified";
                    privacy: "unknown" | "local_only" | "control_plane_blind" | "third_party_terms" | "customer_hosted";
                    capabilities: ("search" | "get" | "propose" | "write_approved")[];
                    vault?: string | undefined;
                    paths?: string[] | undefined;
                    notebook?: string | undefined;
                    command?: string | undefined;
                }[];
                contextResolution: {
                    order?: string[] | undefined;
                    sizeBudgetBytes?: number | undefined;
                    strategy?: "rank_by_recency_then_query" | "pinned_then_recent" | "provider_order" | undefined;
                };
            } | undefined;
        } | undefined;
    };
}>;
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
//# sourceMappingURL=workflow-run.d.ts.map