import type { z } from 'zod';
import {
  WorkflowRunDetailMessageSchema,
  WorkflowRunRecordSchema,
  WorkflowRunStartedMessageSchema,
  WorkflowRunUpdatedMessageSchema,
  WorkflowRunsMessageSchema,
} from './workflow-run.js';

export const WireSchemaIds = {
  workflowRunRecord: 'viewport.workflow_run_record/v1',
  workflowRunsMessage: 'viewport.workflow_runs_message/v1',
  workflowRunStartedMessage: 'viewport.workflow_run_started_message/v1',
  workflowRunUpdatedMessage: 'viewport.workflow_run_updated_message/v1',
  workflowRunDetailMessage: 'viewport.workflow_run_detail_message/v1',
} as const;

export type WireSchemaId = (typeof WireSchemaIds)[keyof typeof WireSchemaIds];

export interface WireSchemaDefinition {
  readonly key: string;
  readonly schemaId: WireSchemaId;
  readonly status: 'implemented';
  readonly zodSchema: z.ZodTypeAny;
  readonly notes: string;
}

export const WIRE_SCHEMAS: readonly WireSchemaDefinition[] = [
  {
    key: 'workflowRunRecord',
    schemaId: WireSchemaIds.workflowRunRecord,
    status: 'implemented',
    zodSchema: WorkflowRunRecordSchema,
    notes: 'Canonical daemon/platform/web workflow run record projection.',
  },
  {
    key: 'workflowRunsMessage',
    schemaId: WireSchemaIds.workflowRunsMessage,
    status: 'implemented',
    zodSchema: WorkflowRunsMessageSchema,
    notes: 'Daemon WebSocket list response envelope for workflow runs.',
  },
  {
    key: 'workflowRunStartedMessage',
    schemaId: WireSchemaIds.workflowRunStartedMessage,
    status: 'implemented',
    zodSchema: WorkflowRunStartedMessageSchema,
    notes: 'Daemon WebSocket push envelope emitted when a workflow run starts.',
  },
  {
    key: 'workflowRunUpdatedMessage',
    schemaId: WireSchemaIds.workflowRunUpdatedMessage,
    status: 'implemented',
    zodSchema: WorkflowRunUpdatedMessageSchema,
    notes: 'Daemon WebSocket push envelope emitted when a workflow run changes.',
  },
  {
    key: 'workflowRunDetailMessage',
    schemaId: WireSchemaIds.workflowRunDetailMessage,
    status: 'implemented',
    zodSchema: WorkflowRunDetailMessageSchema,
    notes: 'Daemon WebSocket detail response envelope for a workflow run.',
  },
];
