import { type SchemaId } from './schema-ids.js';
export type ContractStatus = 'implemented' | 'target-only';
export type CompatibilityState = 'validated' | 'stubbed' | 'pending' | 'not-applicable';
export interface ContractDefinition {
    readonly key: string;
    readonly schemaId: SchemaId;
    readonly sampleFile: string;
    readonly status: ContractStatus;
    readonly daemonCompatibility: CompatibilityState;
    readonly platformCompatibility: CompatibilityState;
    readonly webCompatibility: CompatibilityState;
    readonly notes: string;
}
export declare const CONTRACTS: readonly [{
    readonly key: "workflow";
    readonly schemaId: "viewport.workflow/v1";
    readonly sampleFile: "workflow.bug-to-pr.yaml";
    readonly status: "implemented";
    readonly daemonCompatibility: "validated";
    readonly platformCompatibility: "validated";
    readonly webCompatibility: "pending";
    readonly notes: "Implemented by daemon workflow parser and platform workflow-core/PHP validation family. Web projection fixture is still pending.";
}, {
    readonly key: "repoConfig";
    readonly schemaId: "viewport.repo_config/v1";
    readonly sampleFile: "repo-config.sample.yaml";
    readonly status: "implemented";
    readonly daemonCompatibility: "validated";
    readonly platformCompatibility: "not-applicable";
    readonly webCompatibility: "not-applicable";
    readonly notes: "Validated against daemon ViewportConfigSchema with version: 1. The schema: viewport.repo_config/v1 field is a Batch A protocol overlay accepted by the daemon passthrough parser.";
}, {
    readonly key: "route";
    readonly schemaId: "viewport.route/v1";
    readonly sampleFile: "route.payments-bugs.yaml";
    readonly status: "implemented";
    readonly daemonCompatibility: "pending";
    readonly platformCompatibility: "validated";
    readonly webCompatibility: "pending";
    readonly notes: "Protocol package validates route shape. Platform stores route versions, validates ready resolve targets, projects latest-ready versions, and proves disabled routes fail closed during route-table matching.";
}, {
    readonly key: "executionProfile";
    readonly schemaId: "viewport.execution_profile/v1";
    readonly sampleFile: "execution-profile.payments.yaml";
    readonly status: "implemented";
    readonly daemonCompatibility: "pending";
    readonly platformCompatibility: "validated";
    readonly webCompatibility: "pending";
    readonly notes: "Protocol package validates execution profile shape. Platform stores execution profile versions, validates runner pool targets, snapshots profile identity into runs, and proves disabled profiles fail closed after route matching.";
}, {
    readonly key: "runnerWorkspace";
    readonly schemaId: "viewport.runner_workspace/v1";
    readonly sampleFile: "runner-workspace.payments-vps.yaml";
    readonly status: "target-only";
    readonly daemonCompatibility: "pending";
    readonly platformCompatibility: "pending";
    readonly webCompatibility: "pending";
    readonly notes: "Runner capabilities exist, but workspace templates are not implemented.";
}, {
    readonly key: "contextPackage";
    readonly schemaId: "viewport.context_package/v1";
    readonly sampleFile: "context-package.payments-domain-rules.yaml";
    readonly status: "target-only";
    readonly daemonCompatibility: "pending";
    readonly platformCompatibility: "pending";
    readonly webCompatibility: "pending";
    readonly notes: "Context engine exists, but package registry semantics are not implemented.";
}, {
    readonly key: "agentEvent";
    readonly schemaId: "viewport.agent_event/v1";
    readonly sampleFile: "agent-event.evidence.yaml";
    readonly status: "target-only";
    readonly daemonCompatibility: "pending";
    readonly platformCompatibility: "pending";
    readonly webCompatibility: "pending";
    readonly notes: "Current provider/workflow events need a mapper before this is implemented.";
}, {
    readonly key: "evidence";
    readonly schemaId: "viewport.evidence/v1";
    readonly sampleFile: "evidence.packet.yaml";
    readonly status: "implemented";
    readonly daemonCompatibility: "pending";
    readonly platformCompatibility: "validated";
    readonly webCompatibility: "pending";
    readonly notes: "Protocol package validates evidence packet shape. Platform stores evidence packets and daemon emits first-pass node-output evidence; provider-normalized evidence quality remains pending.";
}, {
    readonly key: "actionProposal";
    readonly schemaId: "viewport.action_proposal/v1";
    readonly sampleFile: "action-proposal.github-pr.yaml";
    readonly status: "implemented";
    readonly daemonCompatibility: "validated";
    readonly platformCompatibility: "validated";
    readonly webCompatibility: "pending";
    readonly notes: "Protocol package validates action proposal shape. Platform stores first-class action proposals, daemon emits proposals from local runs, and approvals are digest-bound.";
}, {
    readonly key: "authorizationDecision";
    readonly schemaId: "viewport.authorization_decision/v1";
    readonly sampleFile: "authorization-decision.workflow-run.yaml";
    readonly status: "implemented";
    readonly daemonCompatibility: "pending";
    readonly platformCompatibility: "validated";
    readonly webCompatibility: "pending";
    readonly notes: "Protocol package validates authorization decision shape. Platform stores and replays authorization decisions as first-class workflow run records; daemon/runtime emission and policy-engine decision recording remain pending.";
}, {
    readonly key: "approvalDecision";
    readonly schemaId: "viewport.approval_decision/v1";
    readonly sampleFile: "approval-decision.github-pr.yaml";
    readonly status: "implemented";
    readonly daemonCompatibility: "validated";
    readonly platformCompatibility: "validated";
    readonly webCompatibility: "pending";
    readonly notes: "Protocol package validates approval decision shape. Platform stores approval decisions, daemon receives approved digests on resume, and stale digest approvals fail closed.";
}, {
    readonly key: "executionGrant";
    readonly schemaId: "viewport.execution_grant/v1";
    readonly sampleFile: "execution-grant.github-pr.yaml";
    readonly status: "implemented";
    readonly daemonCompatibility: "validated";
    readonly platformCompatibility: "validated";
    readonly webCompatibility: "pending";
    readonly notes: "Protocol package validates approval-bound execution grant shape. Platform mints grants for approved proposal-backed side effects and daemon carries them into execution receipts.";
}, {
    readonly key: "executionReceipt";
    readonly schemaId: "viewport.execution_receipt/v1";
    readonly sampleFile: "execution-receipt.github-pr.yaml";
    readonly status: "implemented";
    readonly daemonCompatibility: "validated";
    readonly platformCompatibility: "validated";
    readonly webCompatibility: "pending";
    readonly notes: "Protocol package validates execution receipt shape. Platform stores execution receipts, daemon emits success/failure/dead-letter receipts, and managed action replay completion creates execution receipts.";
}, {
    readonly key: "contextReceipt";
    readonly schemaId: "viewport.context_receipt/v1";
    readonly sampleFile: "context-receipt.payments-domain-rules.yaml";
    readonly status: "target-only";
    readonly daemonCompatibility: "pending";
    readonly platformCompatibility: "pending";
    readonly webCompatibility: "pending";
    readonly notes: "Protocol package validates sample shape, but context usage receipts are not emitted as this contract yet.";
}, {
    readonly key: "auditReceipt";
    readonly schemaId: "viewport.audit_receipt/v1";
    readonly sampleFile: "audit-receipt.bug-to-pr.yaml";
    readonly status: "implemented";
    readonly daemonCompatibility: "validated";
    readonly platformCompatibility: "validated";
    readonly webCompatibility: "pending";
    readonly notes: "Protocol package validates audit receipt shape. Platform stores audit receipts and daemon emits first-pass audit receipts; tamper-evident receipt linkage remains pending.";
}];
export type ContractKey = (typeof CONTRACTS)[number]['key'];
export declare function contractBySampleFile(sampleFile: string): ContractDefinition | undefined;
export declare function implementedContracts(): ContractDefinition[];
export declare function targetOnlyContracts(): ContractDefinition[];
//# sourceMappingURL=contracts.d.ts.map