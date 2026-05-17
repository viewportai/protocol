import type { z } from 'zod';
export declare const WireSchemaIds: {
    readonly workflowRunRecord: "viewport.workflow_run_record/v1";
    readonly workflowRunsMessage: "viewport.workflow_runs_message/v1";
    readonly workflowRunStartedMessage: "viewport.workflow_run_started_message/v1";
    readonly workflowRunUpdatedMessage: "viewport.workflow_run_updated_message/v1";
    readonly workflowRunDetailMessage: "viewport.workflow_run_detail_message/v1";
};
export type WireSchemaId = (typeof WireSchemaIds)[keyof typeof WireSchemaIds];
export interface WireSchemaDefinition {
    readonly key: string;
    readonly schemaId: WireSchemaId;
    readonly status: 'implemented';
    readonly zodSchema: z.ZodTypeAny;
    readonly notes: string;
}
export declare const WIRE_SCHEMAS: readonly WireSchemaDefinition[];
//# sourceMappingURL=wire-schemas.d.ts.map