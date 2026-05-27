import { z } from 'zod';
export declare const RouteContractSchema: z.ZodObject<{
    schema: z.ZodLiteral<"viewport.route/v1">;
    id: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
    enabled: z.ZodOptional<z.ZodBoolean>;
    matches: z.ZodObject<{
        any: z.ZodArray<z.ZodObject<{
            source: z.ZodString;
            eventTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            event_types: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            project: z.ZodOptional<z.ZodString>;
            issueTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            labelsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            channels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            mentionsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            repositories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            source: z.ZodString;
            eventTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            event_types: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            project: z.ZodOptional<z.ZodString>;
            issueTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            labelsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            channels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            mentionsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            repositories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            source: z.ZodString;
            eventTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            event_types: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            project: z.ZodOptional<z.ZodString>;
            issueTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            labelsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            channels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            mentionsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            repositories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">>, "many">;
    }, "strip", z.ZodTypeAny, {
        any: z.objectOutputType<{
            source: z.ZodString;
            eventTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            event_types: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            project: z.ZodOptional<z.ZodString>;
            issueTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            labelsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            channels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            mentionsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            repositories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">[];
    }, {
        any: z.objectInputType<{
            source: z.ZodString;
            eventTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            event_types: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            project: z.ZodOptional<z.ZodString>;
            issueTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            labelsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            channels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            mentionsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            repositories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">[];
    }>;
    resolve: z.ZodObject<{
        executionProfile: z.ZodString;
        workflow: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        workflow: string;
        executionProfile: string;
    }, {
        workflow: string;
        executionProfile: string;
    }>;
    ambiguity: z.ZodOptional<z.ZodObject<{
        behavior: z.ZodLiteral<"fail_closed">;
        message: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        behavior: z.ZodLiteral<"fail_closed">;
        message: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        behavior: z.ZodLiteral<"fail_closed">;
        message: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>>;
    audit: z.ZodOptional<z.ZodObject<{
        recordPayloadSummary: z.ZodOptional<z.ZodBoolean>;
        retainRawPayload: z.ZodOptional<z.ZodBoolean>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        recordPayloadSummary: z.ZodOptional<z.ZodBoolean>;
        retainRawPayload: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        recordPayloadSummary: z.ZodOptional<z.ZodBoolean>;
        retainRawPayload: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    schema: z.ZodLiteral<"viewport.route/v1">;
    id: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
    enabled: z.ZodOptional<z.ZodBoolean>;
    matches: z.ZodObject<{
        any: z.ZodArray<z.ZodObject<{
            source: z.ZodString;
            eventTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            event_types: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            project: z.ZodOptional<z.ZodString>;
            issueTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            labelsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            channels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            mentionsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            repositories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            source: z.ZodString;
            eventTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            event_types: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            project: z.ZodOptional<z.ZodString>;
            issueTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            labelsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            channels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            mentionsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            repositories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            source: z.ZodString;
            eventTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            event_types: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            project: z.ZodOptional<z.ZodString>;
            issueTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            labelsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            channels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            mentionsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            repositories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">>, "many">;
    }, "strip", z.ZodTypeAny, {
        any: z.objectOutputType<{
            source: z.ZodString;
            eventTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            event_types: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            project: z.ZodOptional<z.ZodString>;
            issueTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            labelsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            channels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            mentionsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            repositories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">[];
    }, {
        any: z.objectInputType<{
            source: z.ZodString;
            eventTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            event_types: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            project: z.ZodOptional<z.ZodString>;
            issueTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            labelsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            channels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            mentionsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            repositories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">[];
    }>;
    resolve: z.ZodObject<{
        executionProfile: z.ZodString;
        workflow: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        workflow: string;
        executionProfile: string;
    }, {
        workflow: string;
        executionProfile: string;
    }>;
    ambiguity: z.ZodOptional<z.ZodObject<{
        behavior: z.ZodLiteral<"fail_closed">;
        message: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        behavior: z.ZodLiteral<"fail_closed">;
        message: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        behavior: z.ZodLiteral<"fail_closed">;
        message: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>>;
    audit: z.ZodOptional<z.ZodObject<{
        recordPayloadSummary: z.ZodOptional<z.ZodBoolean>;
        retainRawPayload: z.ZodOptional<z.ZodBoolean>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        recordPayloadSummary: z.ZodOptional<z.ZodBoolean>;
        retainRawPayload: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        recordPayloadSummary: z.ZodOptional<z.ZodBoolean>;
        retainRawPayload: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    schema: z.ZodLiteral<"viewport.route/v1">;
    id: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
    enabled: z.ZodOptional<z.ZodBoolean>;
    matches: z.ZodObject<{
        any: z.ZodArray<z.ZodObject<{
            source: z.ZodString;
            eventTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            event_types: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            project: z.ZodOptional<z.ZodString>;
            issueTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            labelsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            channels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            mentionsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            repositories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            source: z.ZodString;
            eventTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            event_types: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            project: z.ZodOptional<z.ZodString>;
            issueTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            labelsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            channels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            mentionsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            repositories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            source: z.ZodString;
            eventTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            event_types: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            project: z.ZodOptional<z.ZodString>;
            issueTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            labelsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            channels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            mentionsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            repositories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">>, "many">;
    }, "strip", z.ZodTypeAny, {
        any: z.objectOutputType<{
            source: z.ZodString;
            eventTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            event_types: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            project: z.ZodOptional<z.ZodString>;
            issueTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            labelsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            channels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            mentionsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            repositories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">[];
    }, {
        any: z.objectInputType<{
            source: z.ZodString;
            eventTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            event_types: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            project: z.ZodOptional<z.ZodString>;
            issueTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            labelsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            channels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            mentionsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            repositories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">[];
    }>;
    resolve: z.ZodObject<{
        executionProfile: z.ZodString;
        workflow: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        workflow: string;
        executionProfile: string;
    }, {
        workflow: string;
        executionProfile: string;
    }>;
    ambiguity: z.ZodOptional<z.ZodObject<{
        behavior: z.ZodLiteral<"fail_closed">;
        message: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        behavior: z.ZodLiteral<"fail_closed">;
        message: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        behavior: z.ZodLiteral<"fail_closed">;
        message: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>>;
    audit: z.ZodOptional<z.ZodObject<{
        recordPayloadSummary: z.ZodOptional<z.ZodBoolean>;
        retainRawPayload: z.ZodOptional<z.ZodBoolean>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        recordPayloadSummary: z.ZodOptional<z.ZodBoolean>;
        retainRawPayload: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        recordPayloadSummary: z.ZodOptional<z.ZodBoolean>;
        retainRawPayload: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodTypeAny, "passthrough">>>;
}, z.ZodTypeAny, "passthrough">>;
export declare const ExecutionProfileContractSchema: z.ZodObject<{
    schema: z.ZodLiteral<"viewport.execution_profile/v1">;
    id: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
    ownedBy: z.ZodOptional<z.ZodObject<{
        team: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        team: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        team: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>>;
    repos: z.ZodOptional<z.ZodObject<{
        primary: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        related: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        primary: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        related: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        primary: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        related: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, z.ZodTypeAny, "passthrough">>>;
    runner: z.ZodObject<{
        pool: z.ZodString;
        workspaceTemplate: z.ZodOptional<z.ZodString>;
        isolation: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pool: z.ZodString;
        workspaceTemplate: z.ZodOptional<z.ZodString>;
        isolation: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pool: z.ZodString;
        workspaceTemplate: z.ZodOptional<z.ZodString>;
        isolation: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>;
    agent: z.ZodOptional<z.ZodObject<{
        default: z.ZodString;
        allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        default: z.ZodString;
        allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        default: z.ZodString;
        allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, z.ZodTypeAny, "passthrough">>>;
    context: z.ZodOptional<z.ZodObject<{
        packages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        refresh: z.ZodOptional<z.ZodString>;
        cacheTtlSeconds: z.ZodOptional<z.ZodNumber>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        packages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        refresh: z.ZodOptional<z.ZodString>;
        cacheTtlSeconds: z.ZodOptional<z.ZodNumber>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        packages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        refresh: z.ZodOptional<z.ZodString>;
        cacheTtlSeconds: z.ZodOptional<z.ZodNumber>;
    }, z.ZodTypeAny, "passthrough">>>;
    approvals: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    actions: z.ZodOptional<z.ZodObject<{
        allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        blocked: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        blocked: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        blocked: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, z.ZodTypeAny, "passthrough">>>;
    dataCapture: z.ZodOptional<z.ZodObject<{
        transcripts: z.ZodOptional<z.ZodString>;
        logs: z.ZodOptional<z.ZodString>;
        artifacts: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        transcripts: z.ZodOptional<z.ZodString>;
        logs: z.ZodOptional<z.ZodString>;
        artifacts: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        transcripts: z.ZodOptional<z.ZodString>;
        logs: z.ZodOptional<z.ZodString>;
        artifacts: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    schema: z.ZodLiteral<"viewport.execution_profile/v1">;
    id: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
    ownedBy: z.ZodOptional<z.ZodObject<{
        team: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        team: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        team: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>>;
    repos: z.ZodOptional<z.ZodObject<{
        primary: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        related: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        primary: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        related: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        primary: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        related: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, z.ZodTypeAny, "passthrough">>>;
    runner: z.ZodObject<{
        pool: z.ZodString;
        workspaceTemplate: z.ZodOptional<z.ZodString>;
        isolation: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pool: z.ZodString;
        workspaceTemplate: z.ZodOptional<z.ZodString>;
        isolation: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pool: z.ZodString;
        workspaceTemplate: z.ZodOptional<z.ZodString>;
        isolation: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>;
    agent: z.ZodOptional<z.ZodObject<{
        default: z.ZodString;
        allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        default: z.ZodString;
        allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        default: z.ZodString;
        allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, z.ZodTypeAny, "passthrough">>>;
    context: z.ZodOptional<z.ZodObject<{
        packages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        refresh: z.ZodOptional<z.ZodString>;
        cacheTtlSeconds: z.ZodOptional<z.ZodNumber>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        packages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        refresh: z.ZodOptional<z.ZodString>;
        cacheTtlSeconds: z.ZodOptional<z.ZodNumber>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        packages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        refresh: z.ZodOptional<z.ZodString>;
        cacheTtlSeconds: z.ZodOptional<z.ZodNumber>;
    }, z.ZodTypeAny, "passthrough">>>;
    approvals: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    actions: z.ZodOptional<z.ZodObject<{
        allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        blocked: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        blocked: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        blocked: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, z.ZodTypeAny, "passthrough">>>;
    dataCapture: z.ZodOptional<z.ZodObject<{
        transcripts: z.ZodOptional<z.ZodString>;
        logs: z.ZodOptional<z.ZodString>;
        artifacts: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        transcripts: z.ZodOptional<z.ZodString>;
        logs: z.ZodOptional<z.ZodString>;
        artifacts: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        transcripts: z.ZodOptional<z.ZodString>;
        logs: z.ZodOptional<z.ZodString>;
        artifacts: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    schema: z.ZodLiteral<"viewport.execution_profile/v1">;
    id: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
    ownedBy: z.ZodOptional<z.ZodObject<{
        team: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        team: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        team: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>>;
    repos: z.ZodOptional<z.ZodObject<{
        primary: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        related: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        primary: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        related: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        primary: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        related: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, z.ZodTypeAny, "passthrough">>>;
    runner: z.ZodObject<{
        pool: z.ZodString;
        workspaceTemplate: z.ZodOptional<z.ZodString>;
        isolation: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        pool: z.ZodString;
        workspaceTemplate: z.ZodOptional<z.ZodString>;
        isolation: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        pool: z.ZodString;
        workspaceTemplate: z.ZodOptional<z.ZodString>;
        isolation: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>;
    agent: z.ZodOptional<z.ZodObject<{
        default: z.ZodString;
        allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        default: z.ZodString;
        allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        default: z.ZodString;
        allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, z.ZodTypeAny, "passthrough">>>;
    context: z.ZodOptional<z.ZodObject<{
        packages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        refresh: z.ZodOptional<z.ZodString>;
        cacheTtlSeconds: z.ZodOptional<z.ZodNumber>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        packages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        refresh: z.ZodOptional<z.ZodString>;
        cacheTtlSeconds: z.ZodOptional<z.ZodNumber>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        packages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        refresh: z.ZodOptional<z.ZodString>;
        cacheTtlSeconds: z.ZodOptional<z.ZodNumber>;
    }, z.ZodTypeAny, "passthrough">>>;
    approvals: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    actions: z.ZodOptional<z.ZodObject<{
        allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        blocked: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        blocked: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        blocked: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, z.ZodTypeAny, "passthrough">>>;
    dataCapture: z.ZodOptional<z.ZodObject<{
        transcripts: z.ZodOptional<z.ZodString>;
        logs: z.ZodOptional<z.ZodString>;
        artifacts: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        transcripts: z.ZodOptional<z.ZodString>;
        logs: z.ZodOptional<z.ZodString>;
        artifacts: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        transcripts: z.ZodOptional<z.ZodString>;
        logs: z.ZodOptional<z.ZodString>;
        artifacts: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>>;
}, z.ZodTypeAny, "passthrough">>;
export declare const EvidenceContractSchema: z.ZodObject<{
    schema: z.ZodLiteral<"viewport.evidence/v1">;
    id: z.ZodString;
    workflowRunId: z.ZodString;
    nodeId: z.ZodOptional<z.ZodString>;
    kind: z.ZodString;
    title: z.ZodString;
    summary: z.ZodString;
    confidence: z.ZodOptional<z.ZodString>;
    visibility: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodString;
    references: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
    findings: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
    tests: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
    risks: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
    proposedActions: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    schema: z.ZodLiteral<"viewport.evidence/v1">;
    id: z.ZodString;
    workflowRunId: z.ZodString;
    nodeId: z.ZodOptional<z.ZodString>;
    kind: z.ZodString;
    title: z.ZodString;
    summary: z.ZodString;
    confidence: z.ZodOptional<z.ZodString>;
    visibility: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodString;
    references: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
    findings: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
    tests: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
    risks: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
    proposedActions: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    schema: z.ZodLiteral<"viewport.evidence/v1">;
    id: z.ZodString;
    workflowRunId: z.ZodString;
    nodeId: z.ZodOptional<z.ZodString>;
    kind: z.ZodString;
    title: z.ZodString;
    summary: z.ZodString;
    confidence: z.ZodOptional<z.ZodString>;
    visibility: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodString;
    references: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
    findings: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
    tests: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
    risks: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
    proposedActions: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
}, z.ZodTypeAny, "passthrough">>;
export declare const ActionProposalContractSchema: z.ZodObject<{
    schema: z.ZodLiteral<"viewport.action_proposal/v1">;
    id: z.ZodString;
    workflowRunId: z.ZodString;
    nodeId: z.ZodOptional<z.ZodString>;
    adapter: z.ZodString;
    action: z.ZodString;
    payload: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    idempotencyKey: z.ZodString;
    proposalDigest: z.ZodString;
    evidenceRefs: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    policyEvaluation: z.ZodOptional<z.ZodObject<{
        decision: z.ZodString;
        reason: z.ZodOptional<z.ZodString>;
        matchedRules: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        evaluatedAt: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        decision: z.ZodString;
        reason: z.ZodOptional<z.ZodString>;
        matchedRules: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        evaluatedAt: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        decision: z.ZodString;
        reason: z.ZodOptional<z.ZodString>;
        matchedRules: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        evaluatedAt: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>>;
    state: z.ZodString;
    createdAt: z.ZodString;
    expiresAt: z.ZodOptional<z.ZodString>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    schema: z.ZodLiteral<"viewport.action_proposal/v1">;
    id: z.ZodString;
    workflowRunId: z.ZodString;
    nodeId: z.ZodOptional<z.ZodString>;
    adapter: z.ZodString;
    action: z.ZodString;
    payload: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    idempotencyKey: z.ZodString;
    proposalDigest: z.ZodString;
    evidenceRefs: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    policyEvaluation: z.ZodOptional<z.ZodObject<{
        decision: z.ZodString;
        reason: z.ZodOptional<z.ZodString>;
        matchedRules: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        evaluatedAt: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        decision: z.ZodString;
        reason: z.ZodOptional<z.ZodString>;
        matchedRules: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        evaluatedAt: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        decision: z.ZodString;
        reason: z.ZodOptional<z.ZodString>;
        matchedRules: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        evaluatedAt: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>>;
    state: z.ZodString;
    createdAt: z.ZodString;
    expiresAt: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    schema: z.ZodLiteral<"viewport.action_proposal/v1">;
    id: z.ZodString;
    workflowRunId: z.ZodString;
    nodeId: z.ZodOptional<z.ZodString>;
    adapter: z.ZodString;
    action: z.ZodString;
    payload: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    idempotencyKey: z.ZodString;
    proposalDigest: z.ZodString;
    evidenceRefs: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    policyEvaluation: z.ZodOptional<z.ZodObject<{
        decision: z.ZodString;
        reason: z.ZodOptional<z.ZodString>;
        matchedRules: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        evaluatedAt: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        decision: z.ZodString;
        reason: z.ZodOptional<z.ZodString>;
        matchedRules: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        evaluatedAt: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        decision: z.ZodString;
        reason: z.ZodOptional<z.ZodString>;
        matchedRules: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        evaluatedAt: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>>;
    state: z.ZodString;
    createdAt: z.ZodString;
    expiresAt: z.ZodOptional<z.ZodString>;
}, z.ZodTypeAny, "passthrough">>;
export declare const AuthorizationDecisionContractSchema: z.ZodObject<{
    schema: z.ZodLiteral<"viewport.authorization_decision/v1">;
    id: z.ZodString;
    workspaceId: z.ZodString;
    occurredAt: z.ZodString;
    subject: z.ZodObject<{
        kind: z.ZodString;
        id: z.ZodString;
        source: z.ZodOptional<z.ZodString>;
        displayName: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        id: string;
        kind: string;
        source?: string | undefined;
        displayName?: string | undefined;
    }, {
        id: string;
        kind: string;
        source?: string | undefined;
        displayName?: string | undefined;
    }>;
    action: z.ZodString;
    resource: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    context: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    decision: z.ZodEnum<["allow", "deny", "require_approval"]>;
    reason: z.ZodString;
    matchedRules: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    policy: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        version: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        id: string;
        version: number;
    }, {
        id: string;
        version: number;
    }>>;
    expiresAt: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    schema: "viewport.authorization_decision/v1";
    id: string;
    action: string;
    decision: "allow" | "deny" | "require_approval";
    reason: string;
    workspaceId: string;
    occurredAt: string;
    subject: {
        id: string;
        kind: string;
        source?: string | undefined;
        displayName?: string | undefined;
    };
    resource: Record<string, unknown>;
    context?: Record<string, unknown> | undefined;
    matchedRules?: string[] | undefined;
    expiresAt?: string | undefined;
    policy?: {
        id: string;
        version: number;
    } | undefined;
}, {
    schema: "viewport.authorization_decision/v1";
    id: string;
    action: string;
    decision: "allow" | "deny" | "require_approval";
    reason: string;
    workspaceId: string;
    occurredAt: string;
    subject: {
        id: string;
        kind: string;
        source?: string | undefined;
        displayName?: string | undefined;
    };
    resource: Record<string, unknown>;
    context?: Record<string, unknown> | undefined;
    matchedRules?: string[] | undefined;
    expiresAt?: string | undefined;
    policy?: {
        id: string;
        version: number;
    } | undefined;
}>;
export declare const ExecutionGrantContractSchema: z.ZodObject<{
    schema: z.ZodLiteral<"viewport.execution_grant/v1">;
    digest: z.ZodString;
    proposalKey: z.ZodString;
    approvalDecisionKey: z.ZodString;
    issuedAt: z.ZodString;
}, "strict", z.ZodTypeAny, {
    schema: "viewport.execution_grant/v1";
    digest: string;
    proposalKey: string;
    approvalDecisionKey: string;
    issuedAt: string;
}, {
    schema: "viewport.execution_grant/v1";
    digest: string;
    proposalKey: string;
    approvalDecisionKey: string;
    issuedAt: string;
}>;
export declare const ApprovalDecisionContractSchema: z.ZodObject<{
    schema: z.ZodLiteral<"viewport.approval_decision/v1">;
    id: z.ZodString;
    subjectType: z.ZodString;
    subjectId: z.ZodString;
    subjectDigest: z.ZodString;
    decision: z.ZodEnum<["approve", "deny", "request_changes"]>;
    actor: z.ZodObject<{
        kind: z.ZodString;
        id: z.ZodString;
        source: z.ZodOptional<z.ZodString>;
        displayName: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        id: string;
        kind: string;
        source?: string | undefined;
        displayName?: string | undefined;
    }, {
        id: string;
        kind: string;
        source?: string | undefined;
        displayName?: string | undefined;
    }>;
    reason: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodString;
    executionGrant: z.ZodOptional<z.ZodObject<{
        schema: z.ZodLiteral<"viewport.execution_grant/v1">;
        digest: z.ZodString;
        proposalKey: z.ZodString;
        approvalDecisionKey: z.ZodString;
        issuedAt: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        schema: "viewport.execution_grant/v1";
        digest: string;
        proposalKey: string;
        approvalDecisionKey: string;
        issuedAt: string;
    }, {
        schema: "viewport.execution_grant/v1";
        digest: string;
        proposalKey: string;
        approvalDecisionKey: string;
        issuedAt: string;
    }>>;
}, "strict", z.ZodTypeAny, {
    schema: "viewport.approval_decision/v1";
    id: string;
    createdAt: string;
    decision: "deny" | "approve" | "request_changes";
    subjectType: string;
    subjectId: string;
    subjectDigest: string;
    actor: {
        id: string;
        kind: string;
        source?: string | undefined;
        displayName?: string | undefined;
    };
    executionGrant?: {
        schema: "viewport.execution_grant/v1";
        digest: string;
        proposalKey: string;
        approvalDecisionKey: string;
        issuedAt: string;
    } | undefined;
    reason?: string | undefined;
}, {
    schema: "viewport.approval_decision/v1";
    id: string;
    createdAt: string;
    decision: "deny" | "approve" | "request_changes";
    subjectType: string;
    subjectId: string;
    subjectDigest: string;
    actor: {
        id: string;
        kind: string;
        source?: string | undefined;
        displayName?: string | undefined;
    };
    executionGrant?: {
        schema: "viewport.execution_grant/v1";
        digest: string;
        proposalKey: string;
        approvalDecisionKey: string;
        issuedAt: string;
    } | undefined;
    reason?: string | undefined;
}>;
export declare const ExecutionReceiptContractSchema: z.ZodObject<{
    schema: z.ZodLiteral<"viewport.execution_receipt/v1">;
    id: z.ZodString;
    workflowRunId: z.ZodString;
    actionProposalId: z.ZodOptional<z.ZodString>;
    approvalDecisionId: z.ZodOptional<z.ZodString>;
    adapter: z.ZodString;
    action: z.ZodString;
    status: z.ZodString;
    providerReference: z.ZodOptional<z.ZodString>;
    providerUrl: z.ZodOptional<z.ZodString>;
    idempotencyKey: z.ZodString;
    payloadDigest: z.ZodOptional<z.ZodString>;
    providerResponseDigest: z.ZodOptional<z.ZodString>;
    proposalDigest: z.ZodOptional<z.ZodString>;
    approvalDecisionDigest: z.ZodOptional<z.ZodString>;
    executionGrant: z.ZodOptional<z.ZodObject<{
        schema: z.ZodLiteral<"viewport.execution_grant/v1">;
        digest: z.ZodString;
        proposalKey: z.ZodString;
        approvalDecisionKey: z.ZodString;
        issuedAt: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        schema: "viewport.execution_grant/v1";
        digest: string;
        proposalKey: string;
        approvalDecisionKey: string;
        issuedAt: string;
    }, {
        schema: "viewport.execution_grant/v1";
        digest: string;
        proposalKey: string;
        approvalDecisionKey: string;
        issuedAt: string;
    }>>;
    providerReconciliation: z.ZodOptional<z.ZodObject<{
        status: z.ZodEnum<["not_checked", "verified", "mismatch", "unavailable", "failed"]>;
        method: z.ZodOptional<z.ZodString>;
        checkedAt: z.ZodOptional<z.ZodString>;
        checkedBy: z.ZodOptional<z.ZodObject<{
            kind: z.ZodString;
            id: z.ZodString;
            source: z.ZodOptional<z.ZodString>;
            displayName: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            id: string;
            kind: string;
            source?: string | undefined;
            displayName?: string | undefined;
        }, {
            id: string;
            kind: string;
            source?: string | undefined;
            displayName?: string | undefined;
        }>>;
        providerReference: z.ZodOptional<z.ZodString>;
        providerUrl: z.ZodOptional<z.ZodString>;
        targetDigest: z.ZodOptional<z.ZodString>;
        payloadDigest: z.ZodOptional<z.ZodString>;
        error: z.ZodOptional<z.ZodString>;
        payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "strict", z.ZodTypeAny, {
        status: "not_checked" | "verified" | "mismatch" | "unavailable" | "failed";
        payload?: Record<string, unknown> | undefined;
        method?: string | undefined;
        checkedAt?: string | undefined;
        checkedBy?: {
            id: string;
            kind: string;
            source?: string | undefined;
            displayName?: string | undefined;
        } | undefined;
        providerReference?: string | undefined;
        providerUrl?: string | undefined;
        targetDigest?: string | undefined;
        payloadDigest?: string | undefined;
        error?: string | undefined;
    }, {
        status: "not_checked" | "verified" | "mismatch" | "unavailable" | "failed";
        payload?: Record<string, unknown> | undefined;
        method?: string | undefined;
        checkedAt?: string | undefined;
        checkedBy?: {
            id: string;
            kind: string;
            source?: string | undefined;
            displayName?: string | undefined;
        } | undefined;
        providerReference?: string | undefined;
        providerUrl?: string | undefined;
        targetDigest?: string | undefined;
        payloadDigest?: string | undefined;
        error?: string | undefined;
    }>>;
    payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    recovery: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    executedAt: z.ZodString;
}, "strict", z.ZodTypeAny, {
    status: string;
    schema: "viewport.execution_receipt/v1";
    id: string;
    workflowRunId: string;
    adapter: string;
    action: string;
    idempotencyKey: string;
    executedAt: string;
    executionGrant?: {
        schema: "viewport.execution_grant/v1";
        digest: string;
        proposalKey: string;
        approvalDecisionKey: string;
        issuedAt: string;
    } | undefined;
    payload?: Record<string, unknown> | undefined;
    proposalDigest?: string | undefined;
    providerReference?: string | undefined;
    providerUrl?: string | undefined;
    payloadDigest?: string | undefined;
    actionProposalId?: string | undefined;
    approvalDecisionId?: string | undefined;
    providerResponseDigest?: string | undefined;
    approvalDecisionDigest?: string | undefined;
    providerReconciliation?: {
        status: "not_checked" | "verified" | "mismatch" | "unavailable" | "failed";
        payload?: Record<string, unknown> | undefined;
        method?: string | undefined;
        checkedAt?: string | undefined;
        checkedBy?: {
            id: string;
            kind: string;
            source?: string | undefined;
            displayName?: string | undefined;
        } | undefined;
        providerReference?: string | undefined;
        providerUrl?: string | undefined;
        targetDigest?: string | undefined;
        payloadDigest?: string | undefined;
        error?: string | undefined;
    } | undefined;
    recovery?: Record<string, unknown> | undefined;
}, {
    status: string;
    schema: "viewport.execution_receipt/v1";
    id: string;
    workflowRunId: string;
    adapter: string;
    action: string;
    idempotencyKey: string;
    executedAt: string;
    executionGrant?: {
        schema: "viewport.execution_grant/v1";
        digest: string;
        proposalKey: string;
        approvalDecisionKey: string;
        issuedAt: string;
    } | undefined;
    payload?: Record<string, unknown> | undefined;
    proposalDigest?: string | undefined;
    providerReference?: string | undefined;
    providerUrl?: string | undefined;
    payloadDigest?: string | undefined;
    actionProposalId?: string | undefined;
    approvalDecisionId?: string | undefined;
    providerResponseDigest?: string | undefined;
    approvalDecisionDigest?: string | undefined;
    providerReconciliation?: {
        status: "not_checked" | "verified" | "mismatch" | "unavailable" | "failed";
        payload?: Record<string, unknown> | undefined;
        method?: string | undefined;
        checkedAt?: string | undefined;
        checkedBy?: {
            id: string;
            kind: string;
            source?: string | undefined;
            displayName?: string | undefined;
        } | undefined;
        providerReference?: string | undefined;
        providerUrl?: string | undefined;
        targetDigest?: string | undefined;
        payloadDigest?: string | undefined;
        error?: string | undefined;
    } | undefined;
    recovery?: Record<string, unknown> | undefined;
}>;
export declare const ContextReceiptContractSchema: z.ZodObject<{
    schema: z.ZodLiteral<"viewport.context_receipt/v1">;
    package: z.ZodString;
    requested: z.ZodString;
    resolvedVersion: z.ZodString;
    provider: z.ZodString;
    digest: z.ZodString;
    freshness: z.ZodString;
    usedBy: z.ZodObject<{
        runId: z.ZodString;
        nodeId: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        runId: string;
        nodeId?: string | undefined;
    }, {
        runId: string;
        nodeId?: string | undefined;
    }>;
    resolvedAt: z.ZodString;
}, "strict", z.ZodTypeAny, {
    schema: "viewport.context_receipt/v1";
    digest: string;
    package: string;
    requested: string;
    resolvedVersion: string;
    provider: string;
    freshness: string;
    usedBy: {
        runId: string;
        nodeId?: string | undefined;
    };
    resolvedAt: string;
}, {
    schema: "viewport.context_receipt/v1";
    digest: string;
    package: string;
    requested: string;
    resolvedVersion: string;
    provider: string;
    freshness: string;
    usedBy: {
        runId: string;
        nodeId?: string | undefined;
    };
    resolvedAt: string;
}>;
export declare const ContextPackageContractSchema: z.ZodObject<{
    schema: z.ZodLiteral<"viewport.context_package/v1">;
    name: z.ZodString;
    version: z.ZodString;
    channel: z.ZodOptional<z.ZodString>;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    owners: z.ZodArray<z.ZodString, "many">;
    sourceOfTruth: z.ZodObject<{
        mode: z.ZodEnum<["viewport_managed", "git_backed", "self_hosted_provider", "local_only"]>;
        provider: z.ZodOptional<z.ZodString>;
        repository: z.ZodOptional<z.ZodString>;
        path: z.ZodOptional<z.ZodString>;
        digest: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        mode: z.ZodEnum<["viewport_managed", "git_backed", "self_hosted_provider", "local_only"]>;
        provider: z.ZodOptional<z.ZodString>;
        repository: z.ZodOptional<z.ZodString>;
        path: z.ZodOptional<z.ZodString>;
        digest: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        mode: z.ZodEnum<["viewport_managed", "git_backed", "self_hosted_provider", "local_only"]>;
        provider: z.ZodOptional<z.ZodString>;
        repository: z.ZodOptional<z.ZodString>;
        path: z.ZodOptional<z.ZodString>;
        digest: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>;
    appliesWhen: z.ZodArray<z.ZodString, "many">;
    useFor: z.ZodArray<z.ZodString, "many">;
    updateWhen: z.ZodArray<z.ZodString, "many">;
    approval: z.ZodObject<{
        required: z.ZodBoolean;
        approvers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        required: z.ZodBoolean;
        approvers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        required: z.ZodBoolean;
        approvers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, z.ZodTypeAny, "passthrough">>;
    sections: z.ZodObject<{
        summary: z.ZodOptional<z.ZodObject<{
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        gotchas: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        workflows: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        facts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        summary: z.ZodOptional<z.ZodObject<{
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        gotchas: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        workflows: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        facts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        summary: z.ZodOptional<z.ZodObject<{
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        gotchas: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        workflows: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        facts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, z.ZodTypeAny, "passthrough">>;
    memoryObjects: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodEnum<["decision", "constraint", "gotcha", "workflow", "fact", "question", "architecture", "synthesis", "source"]>;
        status: z.ZodEnum<["active", "stale", "superseded", "open", "rejected"]>;
        title: z.ZodString;
        body: z.ZodOptional<z.ZodString>;
        appliesTo: z.ZodOptional<z.ZodObject<{
            repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">>>;
        loadModes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        source: z.ZodOptional<z.ZodObject<{
            runId: z.ZodOptional<z.ZodString>;
            agent: z.ZodOptional<z.ZodString>;
            human: z.ZodOptional<z.ZodString>;
            workflowId: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            runId: z.ZodOptional<z.ZodString>;
            agent: z.ZodOptional<z.ZodString>;
            human: z.ZodOptional<z.ZodString>;
            workflowId: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            runId: z.ZodOptional<z.ZodString>;
            agent: z.ZodOptional<z.ZodString>;
            human: z.ZodOptional<z.ZodString>;
            workflowId: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>;
        version: z.ZodOptional<z.ZodNumber>;
        contentHash: z.ZodOptional<z.ZodString>;
        visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        type: z.ZodEnum<["decision", "constraint", "gotcha", "workflow", "fact", "question", "architecture", "synthesis", "source"]>;
        status: z.ZodEnum<["active", "stale", "superseded", "open", "rejected"]>;
        title: z.ZodString;
        body: z.ZodOptional<z.ZodString>;
        appliesTo: z.ZodOptional<z.ZodObject<{
            repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">>>;
        loadModes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        source: z.ZodOptional<z.ZodObject<{
            runId: z.ZodOptional<z.ZodString>;
            agent: z.ZodOptional<z.ZodString>;
            human: z.ZodOptional<z.ZodString>;
            workflowId: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            runId: z.ZodOptional<z.ZodString>;
            agent: z.ZodOptional<z.ZodString>;
            human: z.ZodOptional<z.ZodString>;
            workflowId: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            runId: z.ZodOptional<z.ZodString>;
            agent: z.ZodOptional<z.ZodString>;
            human: z.ZodOptional<z.ZodString>;
            workflowId: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>;
        version: z.ZodOptional<z.ZodNumber>;
        contentHash: z.ZodOptional<z.ZodString>;
        visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        type: z.ZodEnum<["decision", "constraint", "gotcha", "workflow", "fact", "question", "architecture", "synthesis", "source"]>;
        status: z.ZodEnum<["active", "stale", "superseded", "open", "rejected"]>;
        title: z.ZodString;
        body: z.ZodOptional<z.ZodString>;
        appliesTo: z.ZodOptional<z.ZodObject<{
            repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">>>;
        loadModes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        source: z.ZodOptional<z.ZodObject<{
            runId: z.ZodOptional<z.ZodString>;
            agent: z.ZodOptional<z.ZodString>;
            human: z.ZodOptional<z.ZodString>;
            workflowId: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            runId: z.ZodOptional<z.ZodString>;
            agent: z.ZodOptional<z.ZodString>;
            human: z.ZodOptional<z.ZodString>;
            workflowId: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            runId: z.ZodOptional<z.ZodString>;
            agent: z.ZodOptional<z.ZodString>;
            human: z.ZodOptional<z.ZodString>;
            workflowId: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>;
        version: z.ZodOptional<z.ZodNumber>;
        contentHash: z.ZodOptional<z.ZodString>;
        visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
    }, z.ZodTypeAny, "passthrough">>, "many">;
    relations: z.ZodArray<z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
        type: z.ZodEnum<["supersedes", "conflicts_with", "depends_on", "derived_from", "documents", "implements"]>;
        evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        from: z.ZodString;
        to: z.ZodString;
        type: z.ZodEnum<["supersedes", "conflicts_with", "depends_on", "derived_from", "documents", "implements"]>;
        evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        from: z.ZodString;
        to: z.ZodString;
        type: z.ZodEnum<["supersedes", "conflicts_with", "depends_on", "derived_from", "documents", "implements"]>;
        evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
    }, z.ZodTypeAny, "passthrough">>, "many">;
    receipts: z.ZodOptional<z.ZodObject<{
        required: z.ZodBoolean;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        required: z.ZodBoolean;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        required: z.ZodBoolean;
    }, z.ZodTypeAny, "passthrough">>>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    schema: z.ZodLiteral<"viewport.context_package/v1">;
    name: z.ZodString;
    version: z.ZodString;
    channel: z.ZodOptional<z.ZodString>;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    owners: z.ZodArray<z.ZodString, "many">;
    sourceOfTruth: z.ZodObject<{
        mode: z.ZodEnum<["viewport_managed", "git_backed", "self_hosted_provider", "local_only"]>;
        provider: z.ZodOptional<z.ZodString>;
        repository: z.ZodOptional<z.ZodString>;
        path: z.ZodOptional<z.ZodString>;
        digest: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        mode: z.ZodEnum<["viewport_managed", "git_backed", "self_hosted_provider", "local_only"]>;
        provider: z.ZodOptional<z.ZodString>;
        repository: z.ZodOptional<z.ZodString>;
        path: z.ZodOptional<z.ZodString>;
        digest: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        mode: z.ZodEnum<["viewport_managed", "git_backed", "self_hosted_provider", "local_only"]>;
        provider: z.ZodOptional<z.ZodString>;
        repository: z.ZodOptional<z.ZodString>;
        path: z.ZodOptional<z.ZodString>;
        digest: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>;
    appliesWhen: z.ZodArray<z.ZodString, "many">;
    useFor: z.ZodArray<z.ZodString, "many">;
    updateWhen: z.ZodArray<z.ZodString, "many">;
    approval: z.ZodObject<{
        required: z.ZodBoolean;
        approvers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        required: z.ZodBoolean;
        approvers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        required: z.ZodBoolean;
        approvers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, z.ZodTypeAny, "passthrough">>;
    sections: z.ZodObject<{
        summary: z.ZodOptional<z.ZodObject<{
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        gotchas: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        workflows: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        facts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        summary: z.ZodOptional<z.ZodObject<{
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        gotchas: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        workflows: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        facts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        summary: z.ZodOptional<z.ZodObject<{
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        gotchas: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        workflows: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        facts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, z.ZodTypeAny, "passthrough">>;
    memoryObjects: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodEnum<["decision", "constraint", "gotcha", "workflow", "fact", "question", "architecture", "synthesis", "source"]>;
        status: z.ZodEnum<["active", "stale", "superseded", "open", "rejected"]>;
        title: z.ZodString;
        body: z.ZodOptional<z.ZodString>;
        appliesTo: z.ZodOptional<z.ZodObject<{
            repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">>>;
        loadModes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        source: z.ZodOptional<z.ZodObject<{
            runId: z.ZodOptional<z.ZodString>;
            agent: z.ZodOptional<z.ZodString>;
            human: z.ZodOptional<z.ZodString>;
            workflowId: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            runId: z.ZodOptional<z.ZodString>;
            agent: z.ZodOptional<z.ZodString>;
            human: z.ZodOptional<z.ZodString>;
            workflowId: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            runId: z.ZodOptional<z.ZodString>;
            agent: z.ZodOptional<z.ZodString>;
            human: z.ZodOptional<z.ZodString>;
            workflowId: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>;
        version: z.ZodOptional<z.ZodNumber>;
        contentHash: z.ZodOptional<z.ZodString>;
        visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        type: z.ZodEnum<["decision", "constraint", "gotcha", "workflow", "fact", "question", "architecture", "synthesis", "source"]>;
        status: z.ZodEnum<["active", "stale", "superseded", "open", "rejected"]>;
        title: z.ZodString;
        body: z.ZodOptional<z.ZodString>;
        appliesTo: z.ZodOptional<z.ZodObject<{
            repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">>>;
        loadModes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        source: z.ZodOptional<z.ZodObject<{
            runId: z.ZodOptional<z.ZodString>;
            agent: z.ZodOptional<z.ZodString>;
            human: z.ZodOptional<z.ZodString>;
            workflowId: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            runId: z.ZodOptional<z.ZodString>;
            agent: z.ZodOptional<z.ZodString>;
            human: z.ZodOptional<z.ZodString>;
            workflowId: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            runId: z.ZodOptional<z.ZodString>;
            agent: z.ZodOptional<z.ZodString>;
            human: z.ZodOptional<z.ZodString>;
            workflowId: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>;
        version: z.ZodOptional<z.ZodNumber>;
        contentHash: z.ZodOptional<z.ZodString>;
        visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        type: z.ZodEnum<["decision", "constraint", "gotcha", "workflow", "fact", "question", "architecture", "synthesis", "source"]>;
        status: z.ZodEnum<["active", "stale", "superseded", "open", "rejected"]>;
        title: z.ZodString;
        body: z.ZodOptional<z.ZodString>;
        appliesTo: z.ZodOptional<z.ZodObject<{
            repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">>>;
        loadModes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        source: z.ZodOptional<z.ZodObject<{
            runId: z.ZodOptional<z.ZodString>;
            agent: z.ZodOptional<z.ZodString>;
            human: z.ZodOptional<z.ZodString>;
            workflowId: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            runId: z.ZodOptional<z.ZodString>;
            agent: z.ZodOptional<z.ZodString>;
            human: z.ZodOptional<z.ZodString>;
            workflowId: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            runId: z.ZodOptional<z.ZodString>;
            agent: z.ZodOptional<z.ZodString>;
            human: z.ZodOptional<z.ZodString>;
            workflowId: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>;
        version: z.ZodOptional<z.ZodNumber>;
        contentHash: z.ZodOptional<z.ZodString>;
        visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
    }, z.ZodTypeAny, "passthrough">>, "many">;
    relations: z.ZodArray<z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
        type: z.ZodEnum<["supersedes", "conflicts_with", "depends_on", "derived_from", "documents", "implements"]>;
        evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        from: z.ZodString;
        to: z.ZodString;
        type: z.ZodEnum<["supersedes", "conflicts_with", "depends_on", "derived_from", "documents", "implements"]>;
        evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        from: z.ZodString;
        to: z.ZodString;
        type: z.ZodEnum<["supersedes", "conflicts_with", "depends_on", "derived_from", "documents", "implements"]>;
        evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
    }, z.ZodTypeAny, "passthrough">>, "many">;
    receipts: z.ZodOptional<z.ZodObject<{
        required: z.ZodBoolean;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        required: z.ZodBoolean;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        required: z.ZodBoolean;
    }, z.ZodTypeAny, "passthrough">>>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    schema: z.ZodLiteral<"viewport.context_package/v1">;
    name: z.ZodString;
    version: z.ZodString;
    channel: z.ZodOptional<z.ZodString>;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    owners: z.ZodArray<z.ZodString, "many">;
    sourceOfTruth: z.ZodObject<{
        mode: z.ZodEnum<["viewport_managed", "git_backed", "self_hosted_provider", "local_only"]>;
        provider: z.ZodOptional<z.ZodString>;
        repository: z.ZodOptional<z.ZodString>;
        path: z.ZodOptional<z.ZodString>;
        digest: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        mode: z.ZodEnum<["viewport_managed", "git_backed", "self_hosted_provider", "local_only"]>;
        provider: z.ZodOptional<z.ZodString>;
        repository: z.ZodOptional<z.ZodString>;
        path: z.ZodOptional<z.ZodString>;
        digest: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        mode: z.ZodEnum<["viewport_managed", "git_backed", "self_hosted_provider", "local_only"]>;
        provider: z.ZodOptional<z.ZodString>;
        repository: z.ZodOptional<z.ZodString>;
        path: z.ZodOptional<z.ZodString>;
        digest: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>;
    appliesWhen: z.ZodArray<z.ZodString, "many">;
    useFor: z.ZodArray<z.ZodString, "many">;
    updateWhen: z.ZodArray<z.ZodString, "many">;
    approval: z.ZodObject<{
        required: z.ZodBoolean;
        approvers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        required: z.ZodBoolean;
        approvers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        required: z.ZodBoolean;
        approvers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, z.ZodTypeAny, "passthrough">>;
    sections: z.ZodObject<{
        summary: z.ZodOptional<z.ZodObject<{
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        gotchas: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        workflows: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        facts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        summary: z.ZodOptional<z.ZodObject<{
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        gotchas: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        workflows: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        facts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        summary: z.ZodOptional<z.ZodObject<{
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>;
        rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        gotchas: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        workflows: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
        facts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            body: z.ZodString;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>, "many">>;
    }, z.ZodTypeAny, "passthrough">>;
    memoryObjects: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodEnum<["decision", "constraint", "gotcha", "workflow", "fact", "question", "architecture", "synthesis", "source"]>;
        status: z.ZodEnum<["active", "stale", "superseded", "open", "rejected"]>;
        title: z.ZodString;
        body: z.ZodOptional<z.ZodString>;
        appliesTo: z.ZodOptional<z.ZodObject<{
            repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">>>;
        loadModes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        source: z.ZodOptional<z.ZodObject<{
            runId: z.ZodOptional<z.ZodString>;
            agent: z.ZodOptional<z.ZodString>;
            human: z.ZodOptional<z.ZodString>;
            workflowId: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            runId: z.ZodOptional<z.ZodString>;
            agent: z.ZodOptional<z.ZodString>;
            human: z.ZodOptional<z.ZodString>;
            workflowId: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            runId: z.ZodOptional<z.ZodString>;
            agent: z.ZodOptional<z.ZodString>;
            human: z.ZodOptional<z.ZodString>;
            workflowId: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>;
        version: z.ZodOptional<z.ZodNumber>;
        contentHash: z.ZodOptional<z.ZodString>;
        visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        id: z.ZodString;
        type: z.ZodEnum<["decision", "constraint", "gotcha", "workflow", "fact", "question", "architecture", "synthesis", "source"]>;
        status: z.ZodEnum<["active", "stale", "superseded", "open", "rejected"]>;
        title: z.ZodString;
        body: z.ZodOptional<z.ZodString>;
        appliesTo: z.ZodOptional<z.ZodObject<{
            repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">>>;
        loadModes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        source: z.ZodOptional<z.ZodObject<{
            runId: z.ZodOptional<z.ZodString>;
            agent: z.ZodOptional<z.ZodString>;
            human: z.ZodOptional<z.ZodString>;
            workflowId: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            runId: z.ZodOptional<z.ZodString>;
            agent: z.ZodOptional<z.ZodString>;
            human: z.ZodOptional<z.ZodString>;
            workflowId: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            runId: z.ZodOptional<z.ZodString>;
            agent: z.ZodOptional<z.ZodString>;
            human: z.ZodOptional<z.ZodString>;
            workflowId: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>;
        version: z.ZodOptional<z.ZodNumber>;
        contentHash: z.ZodOptional<z.ZodString>;
        visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        id: z.ZodString;
        type: z.ZodEnum<["decision", "constraint", "gotcha", "workflow", "fact", "question", "architecture", "synthesis", "source"]>;
        status: z.ZodEnum<["active", "stale", "superseded", "open", "rejected"]>;
        title: z.ZodString;
        body: z.ZodOptional<z.ZodString>;
        appliesTo: z.ZodOptional<z.ZodObject<{
            repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">>>;
        loadModes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        source: z.ZodOptional<z.ZodObject<{
            runId: z.ZodOptional<z.ZodString>;
            agent: z.ZodOptional<z.ZodString>;
            human: z.ZodOptional<z.ZodString>;
            workflowId: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            runId: z.ZodOptional<z.ZodString>;
            agent: z.ZodOptional<z.ZodString>;
            human: z.ZodOptional<z.ZodString>;
            workflowId: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            runId: z.ZodOptional<z.ZodString>;
            agent: z.ZodOptional<z.ZodString>;
            human: z.ZodOptional<z.ZodString>;
            workflowId: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>;
        version: z.ZodOptional<z.ZodNumber>;
        contentHash: z.ZodOptional<z.ZodString>;
        visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
    }, z.ZodTypeAny, "passthrough">>, "many">;
    relations: z.ZodArray<z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
        type: z.ZodEnum<["supersedes", "conflicts_with", "depends_on", "derived_from", "documents", "implements"]>;
        evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        from: z.ZodString;
        to: z.ZodString;
        type: z.ZodEnum<["supersedes", "conflicts_with", "depends_on", "derived_from", "documents", "implements"]>;
        evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        from: z.ZodString;
        to: z.ZodString;
        type: z.ZodEnum<["supersedes", "conflicts_with", "depends_on", "derived_from", "documents", "implements"]>;
        evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
    }, z.ZodTypeAny, "passthrough">>, "many">;
    receipts: z.ZodOptional<z.ZodObject<{
        required: z.ZodBoolean;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        required: z.ZodBoolean;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        required: z.ZodBoolean;
    }, z.ZodTypeAny, "passthrough">>>;
}, z.ZodTypeAny, "passthrough">>;
export declare const AuditReceiptContractSchema: z.ZodObject<{
    schema: z.ZodLiteral<"viewport.audit_receipt/v1">;
    id: z.ZodString;
    workspaceId: z.ZodString;
    workflowRunId: z.ZodString;
    eventType: z.ZodString;
    occurredAt: z.ZodString;
    actor: z.ZodObject<{
        kind: z.ZodString;
        id: z.ZodString;
        source: z.ZodOptional<z.ZodString>;
        displayName: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        id: string;
        kind: string;
        source?: string | undefined;
        displayName?: string | undefined;
    }, {
        id: string;
        kind: string;
        source?: string | undefined;
        displayName?: string | undefined;
    }>;
    route: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        version: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        id: string;
        version: number;
    }, {
        id: string;
        version: number;
    }>>;
    executionProfile: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        version: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        id: string;
        version: number;
    }, {
        id: string;
        version: number;
    }>>;
    workflow: z.ZodObject<{
        id: z.ZodString;
        schema: z.ZodLiteral<"viewport.workflow/v1">;
        digest: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        schema: "viewport.workflow/v1";
        id: string;
        digest: string;
    }, {
        schema: "viewport.workflow/v1";
        id: string;
        digest: string;
    }>;
    runner: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        workspaceTemplate: z.ZodOptional<z.ZodString>;
        workspaceDigest: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        id: string;
        workspaceTemplate?: string | undefined;
        workspaceDigest?: string | undefined;
    }, {
        id: string;
        workspaceTemplate?: string | undefined;
        workspaceDigest?: string | undefined;
    }>>;
    contextReceipts: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
    evidenceRefs: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    actionProposal: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        digest: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        id: string;
        digest: string;
    }, {
        id: string;
        digest: string;
    }>>;
    approvalDecision: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    sideEffectReceipt: z.ZodOptional<z.ZodObject<{
        adapter: z.ZodString;
        action: z.ZodString;
        status: z.ZodString;
        providerReference: z.ZodOptional<z.ZodString>;
        providerUrl: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        status: string;
        adapter: string;
        action: string;
        providerReference?: string | undefined;
        providerUrl?: string | undefined;
    }, {
        status: string;
        adapter: string;
        action: string;
        providerReference?: string | undefined;
        providerUrl?: string | undefined;
    }>>;
    payloadDigest: z.ZodString;
}, "strict", z.ZodTypeAny, {
    workflow: {
        schema: "viewport.workflow/v1";
        id: string;
        digest: string;
    };
    schema: "viewport.audit_receipt/v1";
    id: string;
    workflowRunId: string;
    workspaceId: string;
    occurredAt: string;
    actor: {
        id: string;
        kind: string;
        source?: string | undefined;
        displayName?: string | undefined;
    };
    payloadDigest: string;
    eventType: string;
    route?: {
        id: string;
        version: number;
    } | undefined;
    executionProfile?: {
        id: string;
        version: number;
    } | undefined;
    actionProposal?: {
        id: string;
        digest: string;
    } | undefined;
    approvalDecision?: Record<string, unknown> | undefined;
    runner?: {
        id: string;
        workspaceTemplate?: string | undefined;
        workspaceDigest?: string | undefined;
    } | undefined;
    evidenceRefs?: string[] | undefined;
    contextReceipts?: Record<string, unknown>[] | undefined;
    sideEffectReceipt?: {
        status: string;
        adapter: string;
        action: string;
        providerReference?: string | undefined;
        providerUrl?: string | undefined;
    } | undefined;
}, {
    workflow: {
        schema: "viewport.workflow/v1";
        id: string;
        digest: string;
    };
    schema: "viewport.audit_receipt/v1";
    id: string;
    workflowRunId: string;
    workspaceId: string;
    occurredAt: string;
    actor: {
        id: string;
        kind: string;
        source?: string | undefined;
        displayName?: string | undefined;
    };
    payloadDigest: string;
    eventType: string;
    route?: {
        id: string;
        version: number;
    } | undefined;
    executionProfile?: {
        id: string;
        version: number;
    } | undefined;
    actionProposal?: {
        id: string;
        digest: string;
    } | undefined;
    approvalDecision?: Record<string, unknown> | undefined;
    runner?: {
        id: string;
        workspaceTemplate?: string | undefined;
        workspaceDigest?: string | undefined;
    } | undefined;
    evidenceRefs?: string[] | undefined;
    contextReceipts?: Record<string, unknown>[] | undefined;
    sideEffectReceipt?: {
        status: string;
        adapter: string;
        action: string;
        providerReference?: string | undefined;
        providerUrl?: string | undefined;
    } | undefined;
}>;
export declare const ProtocolDocumentSchemas: {
    readonly "viewport.route/v1": z.ZodObject<{
        schema: z.ZodLiteral<"viewport.route/v1">;
        id: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
        enabled: z.ZodOptional<z.ZodBoolean>;
        matches: z.ZodObject<{
            any: z.ZodArray<z.ZodObject<{
                source: z.ZodString;
                eventTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                event_types: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                project: z.ZodOptional<z.ZodString>;
                issueTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                labelsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                channels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                mentionsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                repositories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                source: z.ZodString;
                eventTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                event_types: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                project: z.ZodOptional<z.ZodString>;
                issueTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                labelsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                channels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                mentionsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                repositories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                source: z.ZodString;
                eventTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                event_types: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                project: z.ZodOptional<z.ZodString>;
                issueTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                labelsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                channels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                mentionsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                repositories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.ZodTypeAny, "passthrough">>, "many">;
        }, "strip", z.ZodTypeAny, {
            any: z.objectOutputType<{
                source: z.ZodString;
                eventTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                event_types: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                project: z.ZodOptional<z.ZodString>;
                issueTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                labelsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                channels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                mentionsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                repositories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.ZodTypeAny, "passthrough">[];
        }, {
            any: z.objectInputType<{
                source: z.ZodString;
                eventTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                event_types: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                project: z.ZodOptional<z.ZodString>;
                issueTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                labelsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                channels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                mentionsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                repositories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.ZodTypeAny, "passthrough">[];
        }>;
        resolve: z.ZodObject<{
            executionProfile: z.ZodString;
            workflow: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            workflow: string;
            executionProfile: string;
        }, {
            workflow: string;
            executionProfile: string;
        }>;
        ambiguity: z.ZodOptional<z.ZodObject<{
            behavior: z.ZodLiteral<"fail_closed">;
            message: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            behavior: z.ZodLiteral<"fail_closed">;
            message: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            behavior: z.ZodLiteral<"fail_closed">;
            message: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>;
        audit: z.ZodOptional<z.ZodObject<{
            recordPayloadSummary: z.ZodOptional<z.ZodBoolean>;
            retainRawPayload: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            recordPayloadSummary: z.ZodOptional<z.ZodBoolean>;
            retainRawPayload: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            recordPayloadSummary: z.ZodOptional<z.ZodBoolean>;
            retainRawPayload: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        schema: z.ZodLiteral<"viewport.route/v1">;
        id: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
        enabled: z.ZodOptional<z.ZodBoolean>;
        matches: z.ZodObject<{
            any: z.ZodArray<z.ZodObject<{
                source: z.ZodString;
                eventTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                event_types: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                project: z.ZodOptional<z.ZodString>;
                issueTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                labelsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                channels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                mentionsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                repositories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                source: z.ZodString;
                eventTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                event_types: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                project: z.ZodOptional<z.ZodString>;
                issueTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                labelsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                channels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                mentionsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                repositories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                source: z.ZodString;
                eventTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                event_types: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                project: z.ZodOptional<z.ZodString>;
                issueTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                labelsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                channels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                mentionsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                repositories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.ZodTypeAny, "passthrough">>, "many">;
        }, "strip", z.ZodTypeAny, {
            any: z.objectOutputType<{
                source: z.ZodString;
                eventTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                event_types: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                project: z.ZodOptional<z.ZodString>;
                issueTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                labelsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                channels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                mentionsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                repositories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.ZodTypeAny, "passthrough">[];
        }, {
            any: z.objectInputType<{
                source: z.ZodString;
                eventTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                event_types: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                project: z.ZodOptional<z.ZodString>;
                issueTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                labelsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                channels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                mentionsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                repositories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.ZodTypeAny, "passthrough">[];
        }>;
        resolve: z.ZodObject<{
            executionProfile: z.ZodString;
            workflow: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            workflow: string;
            executionProfile: string;
        }, {
            workflow: string;
            executionProfile: string;
        }>;
        ambiguity: z.ZodOptional<z.ZodObject<{
            behavior: z.ZodLiteral<"fail_closed">;
            message: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            behavior: z.ZodLiteral<"fail_closed">;
            message: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            behavior: z.ZodLiteral<"fail_closed">;
            message: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>;
        audit: z.ZodOptional<z.ZodObject<{
            recordPayloadSummary: z.ZodOptional<z.ZodBoolean>;
            retainRawPayload: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            recordPayloadSummary: z.ZodOptional<z.ZodBoolean>;
            retainRawPayload: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            recordPayloadSummary: z.ZodOptional<z.ZodBoolean>;
            retainRawPayload: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        schema: z.ZodLiteral<"viewport.route/v1">;
        id: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
        enabled: z.ZodOptional<z.ZodBoolean>;
        matches: z.ZodObject<{
            any: z.ZodArray<z.ZodObject<{
                source: z.ZodString;
                eventTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                event_types: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                project: z.ZodOptional<z.ZodString>;
                issueTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                labelsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                channels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                mentionsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                repositories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                source: z.ZodString;
                eventTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                event_types: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                project: z.ZodOptional<z.ZodString>;
                issueTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                labelsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                channels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                mentionsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                repositories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                source: z.ZodString;
                eventTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                event_types: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                project: z.ZodOptional<z.ZodString>;
                issueTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                labelsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                channels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                mentionsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                repositories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.ZodTypeAny, "passthrough">>, "many">;
        }, "strip", z.ZodTypeAny, {
            any: z.objectOutputType<{
                source: z.ZodString;
                eventTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                event_types: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                project: z.ZodOptional<z.ZodString>;
                issueTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                labelsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                channels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                mentionsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                repositories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.ZodTypeAny, "passthrough">[];
        }, {
            any: z.objectInputType<{
                source: z.ZodString;
                eventTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                event_types: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                project: z.ZodOptional<z.ZodString>;
                issueTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                labelsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                channels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                mentionsAny: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                repositories: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.ZodTypeAny, "passthrough">[];
        }>;
        resolve: z.ZodObject<{
            executionProfile: z.ZodString;
            workflow: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            workflow: string;
            executionProfile: string;
        }, {
            workflow: string;
            executionProfile: string;
        }>;
        ambiguity: z.ZodOptional<z.ZodObject<{
            behavior: z.ZodLiteral<"fail_closed">;
            message: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            behavior: z.ZodLiteral<"fail_closed">;
            message: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            behavior: z.ZodLiteral<"fail_closed">;
            message: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>;
        audit: z.ZodOptional<z.ZodObject<{
            recordPayloadSummary: z.ZodOptional<z.ZodBoolean>;
            retainRawPayload: z.ZodOptional<z.ZodBoolean>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            recordPayloadSummary: z.ZodOptional<z.ZodBoolean>;
            retainRawPayload: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            recordPayloadSummary: z.ZodOptional<z.ZodBoolean>;
            retainRawPayload: z.ZodOptional<z.ZodBoolean>;
        }, z.ZodTypeAny, "passthrough">>>;
    }, z.ZodTypeAny, "passthrough">>;
    readonly "viewport.execution_profile/v1": z.ZodObject<{
        schema: z.ZodLiteral<"viewport.execution_profile/v1">;
        id: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
        ownedBy: z.ZodOptional<z.ZodObject<{
            team: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            team: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            team: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>>;
        repos: z.ZodOptional<z.ZodObject<{
            primary: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            related: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            primary: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            related: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            primary: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            related: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">>>;
        runner: z.ZodObject<{
            pool: z.ZodString;
            workspaceTemplate: z.ZodOptional<z.ZodString>;
            isolation: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pool: z.ZodString;
            workspaceTemplate: z.ZodOptional<z.ZodString>;
            isolation: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pool: z.ZodString;
            workspaceTemplate: z.ZodOptional<z.ZodString>;
            isolation: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
        agent: z.ZodOptional<z.ZodObject<{
            default: z.ZodString;
            allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            default: z.ZodString;
            allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            default: z.ZodString;
            allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">>>;
        context: z.ZodOptional<z.ZodObject<{
            packages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            refresh: z.ZodOptional<z.ZodString>;
            cacheTtlSeconds: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            packages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            refresh: z.ZodOptional<z.ZodString>;
            cacheTtlSeconds: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            packages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            refresh: z.ZodOptional<z.ZodString>;
            cacheTtlSeconds: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>>;
        approvals: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        actions: z.ZodOptional<z.ZodObject<{
            allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            blocked: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            blocked: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            blocked: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">>>;
        dataCapture: z.ZodOptional<z.ZodObject<{
            transcripts: z.ZodOptional<z.ZodString>;
            logs: z.ZodOptional<z.ZodString>;
            artifacts: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            transcripts: z.ZodOptional<z.ZodString>;
            logs: z.ZodOptional<z.ZodString>;
            artifacts: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            transcripts: z.ZodOptional<z.ZodString>;
            logs: z.ZodOptional<z.ZodString>;
            artifacts: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        schema: z.ZodLiteral<"viewport.execution_profile/v1">;
        id: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
        ownedBy: z.ZodOptional<z.ZodObject<{
            team: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            team: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            team: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>>;
        repos: z.ZodOptional<z.ZodObject<{
            primary: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            related: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            primary: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            related: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            primary: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            related: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">>>;
        runner: z.ZodObject<{
            pool: z.ZodString;
            workspaceTemplate: z.ZodOptional<z.ZodString>;
            isolation: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pool: z.ZodString;
            workspaceTemplate: z.ZodOptional<z.ZodString>;
            isolation: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pool: z.ZodString;
            workspaceTemplate: z.ZodOptional<z.ZodString>;
            isolation: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
        agent: z.ZodOptional<z.ZodObject<{
            default: z.ZodString;
            allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            default: z.ZodString;
            allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            default: z.ZodString;
            allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">>>;
        context: z.ZodOptional<z.ZodObject<{
            packages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            refresh: z.ZodOptional<z.ZodString>;
            cacheTtlSeconds: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            packages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            refresh: z.ZodOptional<z.ZodString>;
            cacheTtlSeconds: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            packages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            refresh: z.ZodOptional<z.ZodString>;
            cacheTtlSeconds: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>>;
        approvals: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        actions: z.ZodOptional<z.ZodObject<{
            allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            blocked: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            blocked: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            blocked: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">>>;
        dataCapture: z.ZodOptional<z.ZodObject<{
            transcripts: z.ZodOptional<z.ZodString>;
            logs: z.ZodOptional<z.ZodString>;
            artifacts: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            transcripts: z.ZodOptional<z.ZodString>;
            logs: z.ZodOptional<z.ZodString>;
            artifacts: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            transcripts: z.ZodOptional<z.ZodString>;
            logs: z.ZodOptional<z.ZodString>;
            artifacts: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        schema: z.ZodLiteral<"viewport.execution_profile/v1">;
        id: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
        ownedBy: z.ZodOptional<z.ZodObject<{
            team: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            team: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            team: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>>;
        repos: z.ZodOptional<z.ZodObject<{
            primary: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            related: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            primary: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            related: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            primary: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            related: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">>>;
        runner: z.ZodObject<{
            pool: z.ZodString;
            workspaceTemplate: z.ZodOptional<z.ZodString>;
            isolation: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            pool: z.ZodString;
            workspaceTemplate: z.ZodOptional<z.ZodString>;
            isolation: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            pool: z.ZodString;
            workspaceTemplate: z.ZodOptional<z.ZodString>;
            isolation: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
        agent: z.ZodOptional<z.ZodObject<{
            default: z.ZodString;
            allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            default: z.ZodString;
            allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            default: z.ZodString;
            allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">>>;
        context: z.ZodOptional<z.ZodObject<{
            packages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            refresh: z.ZodOptional<z.ZodString>;
            cacheTtlSeconds: z.ZodOptional<z.ZodNumber>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            packages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            refresh: z.ZodOptional<z.ZodString>;
            cacheTtlSeconds: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            packages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            refresh: z.ZodOptional<z.ZodString>;
            cacheTtlSeconds: z.ZodOptional<z.ZodNumber>;
        }, z.ZodTypeAny, "passthrough">>>;
        approvals: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        actions: z.ZodOptional<z.ZodObject<{
            allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            blocked: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            blocked: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            allowed: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            blocked: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">>>;
        dataCapture: z.ZodOptional<z.ZodObject<{
            transcripts: z.ZodOptional<z.ZodString>;
            logs: z.ZodOptional<z.ZodString>;
            artifacts: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            transcripts: z.ZodOptional<z.ZodString>;
            logs: z.ZodOptional<z.ZodString>;
            artifacts: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            transcripts: z.ZodOptional<z.ZodString>;
            logs: z.ZodOptional<z.ZodString>;
            artifacts: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>;
    }, z.ZodTypeAny, "passthrough">>;
    readonly "viewport.evidence/v1": z.ZodObject<{
        schema: z.ZodLiteral<"viewport.evidence/v1">;
        id: z.ZodString;
        workflowRunId: z.ZodString;
        nodeId: z.ZodOptional<z.ZodString>;
        kind: z.ZodString;
        title: z.ZodString;
        summary: z.ZodString;
        confidence: z.ZodOptional<z.ZodString>;
        visibility: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodString;
        references: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        findings: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        tests: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        risks: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        proposedActions: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        schema: z.ZodLiteral<"viewport.evidence/v1">;
        id: z.ZodString;
        workflowRunId: z.ZodString;
        nodeId: z.ZodOptional<z.ZodString>;
        kind: z.ZodString;
        title: z.ZodString;
        summary: z.ZodString;
        confidence: z.ZodOptional<z.ZodString>;
        visibility: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodString;
        references: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        findings: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        tests: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        risks: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        proposedActions: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        schema: z.ZodLiteral<"viewport.evidence/v1">;
        id: z.ZodString;
        workflowRunId: z.ZodString;
        nodeId: z.ZodOptional<z.ZodString>;
        kind: z.ZodString;
        title: z.ZodString;
        summary: z.ZodString;
        confidence: z.ZodOptional<z.ZodString>;
        visibility: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodString;
        references: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        findings: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        tests: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        risks: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        proposedActions: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
    }, z.ZodTypeAny, "passthrough">>;
    readonly "viewport.action_proposal/v1": z.ZodObject<{
        schema: z.ZodLiteral<"viewport.action_proposal/v1">;
        id: z.ZodString;
        workflowRunId: z.ZodString;
        nodeId: z.ZodOptional<z.ZodString>;
        adapter: z.ZodString;
        action: z.ZodString;
        payload: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        idempotencyKey: z.ZodString;
        proposalDigest: z.ZodString;
        evidenceRefs: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        policyEvaluation: z.ZodOptional<z.ZodObject<{
            decision: z.ZodString;
            reason: z.ZodOptional<z.ZodString>;
            matchedRules: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            evaluatedAt: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            decision: z.ZodString;
            reason: z.ZodOptional<z.ZodString>;
            matchedRules: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            evaluatedAt: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            decision: z.ZodString;
            reason: z.ZodOptional<z.ZodString>;
            matchedRules: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            evaluatedAt: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>;
        state: z.ZodString;
        createdAt: z.ZodString;
        expiresAt: z.ZodOptional<z.ZodString>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        schema: z.ZodLiteral<"viewport.action_proposal/v1">;
        id: z.ZodString;
        workflowRunId: z.ZodString;
        nodeId: z.ZodOptional<z.ZodString>;
        adapter: z.ZodString;
        action: z.ZodString;
        payload: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        idempotencyKey: z.ZodString;
        proposalDigest: z.ZodString;
        evidenceRefs: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        policyEvaluation: z.ZodOptional<z.ZodObject<{
            decision: z.ZodString;
            reason: z.ZodOptional<z.ZodString>;
            matchedRules: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            evaluatedAt: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            decision: z.ZodString;
            reason: z.ZodOptional<z.ZodString>;
            matchedRules: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            evaluatedAt: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            decision: z.ZodString;
            reason: z.ZodOptional<z.ZodString>;
            matchedRules: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            evaluatedAt: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>;
        state: z.ZodString;
        createdAt: z.ZodString;
        expiresAt: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        schema: z.ZodLiteral<"viewport.action_proposal/v1">;
        id: z.ZodString;
        workflowRunId: z.ZodString;
        nodeId: z.ZodOptional<z.ZodString>;
        adapter: z.ZodString;
        action: z.ZodString;
        payload: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        idempotencyKey: z.ZodString;
        proposalDigest: z.ZodString;
        evidenceRefs: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        policyEvaluation: z.ZodOptional<z.ZodObject<{
            decision: z.ZodString;
            reason: z.ZodOptional<z.ZodString>;
            matchedRules: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            evaluatedAt: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            decision: z.ZodString;
            reason: z.ZodOptional<z.ZodString>;
            matchedRules: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            evaluatedAt: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            decision: z.ZodString;
            reason: z.ZodOptional<z.ZodString>;
            matchedRules: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            evaluatedAt: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>>;
        state: z.ZodString;
        createdAt: z.ZodString;
        expiresAt: z.ZodOptional<z.ZodString>;
    }, z.ZodTypeAny, "passthrough">>;
    readonly "viewport.authorization_decision/v1": z.ZodObject<{
        schema: z.ZodLiteral<"viewport.authorization_decision/v1">;
        id: z.ZodString;
        workspaceId: z.ZodString;
        occurredAt: z.ZodString;
        subject: z.ZodObject<{
            kind: z.ZodString;
            id: z.ZodString;
            source: z.ZodOptional<z.ZodString>;
            displayName: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            id: string;
            kind: string;
            source?: string | undefined;
            displayName?: string | undefined;
        }, {
            id: string;
            kind: string;
            source?: string | undefined;
            displayName?: string | undefined;
        }>;
        action: z.ZodString;
        resource: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        context: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        decision: z.ZodEnum<["allow", "deny", "require_approval"]>;
        reason: z.ZodString;
        matchedRules: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        policy: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            version: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            id: string;
            version: number;
        }, {
            id: string;
            version: number;
        }>>;
        expiresAt: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        schema: "viewport.authorization_decision/v1";
        id: string;
        action: string;
        decision: "allow" | "deny" | "require_approval";
        reason: string;
        workspaceId: string;
        occurredAt: string;
        subject: {
            id: string;
            kind: string;
            source?: string | undefined;
            displayName?: string | undefined;
        };
        resource: Record<string, unknown>;
        context?: Record<string, unknown> | undefined;
        matchedRules?: string[] | undefined;
        expiresAt?: string | undefined;
        policy?: {
            id: string;
            version: number;
        } | undefined;
    }, {
        schema: "viewport.authorization_decision/v1";
        id: string;
        action: string;
        decision: "allow" | "deny" | "require_approval";
        reason: string;
        workspaceId: string;
        occurredAt: string;
        subject: {
            id: string;
            kind: string;
            source?: string | undefined;
            displayName?: string | undefined;
        };
        resource: Record<string, unknown>;
        context?: Record<string, unknown> | undefined;
        matchedRules?: string[] | undefined;
        expiresAt?: string | undefined;
        policy?: {
            id: string;
            version: number;
        } | undefined;
    }>;
    readonly "viewport.approval_decision/v1": z.ZodObject<{
        schema: z.ZodLiteral<"viewport.approval_decision/v1">;
        id: z.ZodString;
        subjectType: z.ZodString;
        subjectId: z.ZodString;
        subjectDigest: z.ZodString;
        decision: z.ZodEnum<["approve", "deny", "request_changes"]>;
        actor: z.ZodObject<{
            kind: z.ZodString;
            id: z.ZodString;
            source: z.ZodOptional<z.ZodString>;
            displayName: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            id: string;
            kind: string;
            source?: string | undefined;
            displayName?: string | undefined;
        }, {
            id: string;
            kind: string;
            source?: string | undefined;
            displayName?: string | undefined;
        }>;
        reason: z.ZodOptional<z.ZodString>;
        createdAt: z.ZodString;
        executionGrant: z.ZodOptional<z.ZodObject<{
            schema: z.ZodLiteral<"viewport.execution_grant/v1">;
            digest: z.ZodString;
            proposalKey: z.ZodString;
            approvalDecisionKey: z.ZodString;
            issuedAt: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            schema: "viewport.execution_grant/v1";
            digest: string;
            proposalKey: string;
            approvalDecisionKey: string;
            issuedAt: string;
        }, {
            schema: "viewport.execution_grant/v1";
            digest: string;
            proposalKey: string;
            approvalDecisionKey: string;
            issuedAt: string;
        }>>;
    }, "strict", z.ZodTypeAny, {
        schema: "viewport.approval_decision/v1";
        id: string;
        createdAt: string;
        decision: "deny" | "approve" | "request_changes";
        subjectType: string;
        subjectId: string;
        subjectDigest: string;
        actor: {
            id: string;
            kind: string;
            source?: string | undefined;
            displayName?: string | undefined;
        };
        executionGrant?: {
            schema: "viewport.execution_grant/v1";
            digest: string;
            proposalKey: string;
            approvalDecisionKey: string;
            issuedAt: string;
        } | undefined;
        reason?: string | undefined;
    }, {
        schema: "viewport.approval_decision/v1";
        id: string;
        createdAt: string;
        decision: "deny" | "approve" | "request_changes";
        subjectType: string;
        subjectId: string;
        subjectDigest: string;
        actor: {
            id: string;
            kind: string;
            source?: string | undefined;
            displayName?: string | undefined;
        };
        executionGrant?: {
            schema: "viewport.execution_grant/v1";
            digest: string;
            proposalKey: string;
            approvalDecisionKey: string;
            issuedAt: string;
        } | undefined;
        reason?: string | undefined;
    }>;
    readonly "viewport.execution_grant/v1": z.ZodObject<{
        schema: z.ZodLiteral<"viewport.execution_grant/v1">;
        digest: z.ZodString;
        proposalKey: z.ZodString;
        approvalDecisionKey: z.ZodString;
        issuedAt: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        schema: "viewport.execution_grant/v1";
        digest: string;
        proposalKey: string;
        approvalDecisionKey: string;
        issuedAt: string;
    }, {
        schema: "viewport.execution_grant/v1";
        digest: string;
        proposalKey: string;
        approvalDecisionKey: string;
        issuedAt: string;
    }>;
    readonly "viewport.execution_receipt/v1": z.ZodObject<{
        schema: z.ZodLiteral<"viewport.execution_receipt/v1">;
        id: z.ZodString;
        workflowRunId: z.ZodString;
        actionProposalId: z.ZodOptional<z.ZodString>;
        approvalDecisionId: z.ZodOptional<z.ZodString>;
        adapter: z.ZodString;
        action: z.ZodString;
        status: z.ZodString;
        providerReference: z.ZodOptional<z.ZodString>;
        providerUrl: z.ZodOptional<z.ZodString>;
        idempotencyKey: z.ZodString;
        payloadDigest: z.ZodOptional<z.ZodString>;
        providerResponseDigest: z.ZodOptional<z.ZodString>;
        proposalDigest: z.ZodOptional<z.ZodString>;
        approvalDecisionDigest: z.ZodOptional<z.ZodString>;
        executionGrant: z.ZodOptional<z.ZodObject<{
            schema: z.ZodLiteral<"viewport.execution_grant/v1">;
            digest: z.ZodString;
            proposalKey: z.ZodString;
            approvalDecisionKey: z.ZodString;
            issuedAt: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            schema: "viewport.execution_grant/v1";
            digest: string;
            proposalKey: string;
            approvalDecisionKey: string;
            issuedAt: string;
        }, {
            schema: "viewport.execution_grant/v1";
            digest: string;
            proposalKey: string;
            approvalDecisionKey: string;
            issuedAt: string;
        }>>;
        providerReconciliation: z.ZodOptional<z.ZodObject<{
            status: z.ZodEnum<["not_checked", "verified", "mismatch", "unavailable", "failed"]>;
            method: z.ZodOptional<z.ZodString>;
            checkedAt: z.ZodOptional<z.ZodString>;
            checkedBy: z.ZodOptional<z.ZodObject<{
                kind: z.ZodString;
                id: z.ZodString;
                source: z.ZodOptional<z.ZodString>;
                displayName: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                id: string;
                kind: string;
                source?: string | undefined;
                displayName?: string | undefined;
            }, {
                id: string;
                kind: string;
                source?: string | undefined;
                displayName?: string | undefined;
            }>>;
            providerReference: z.ZodOptional<z.ZodString>;
            providerUrl: z.ZodOptional<z.ZodString>;
            targetDigest: z.ZodOptional<z.ZodString>;
            payloadDigest: z.ZodOptional<z.ZodString>;
            error: z.ZodOptional<z.ZodString>;
            payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        }, "strict", z.ZodTypeAny, {
            status: "not_checked" | "verified" | "mismatch" | "unavailable" | "failed";
            payload?: Record<string, unknown> | undefined;
            method?: string | undefined;
            checkedAt?: string | undefined;
            checkedBy?: {
                id: string;
                kind: string;
                source?: string | undefined;
                displayName?: string | undefined;
            } | undefined;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
            targetDigest?: string | undefined;
            payloadDigest?: string | undefined;
            error?: string | undefined;
        }, {
            status: "not_checked" | "verified" | "mismatch" | "unavailable" | "failed";
            payload?: Record<string, unknown> | undefined;
            method?: string | undefined;
            checkedAt?: string | undefined;
            checkedBy?: {
                id: string;
                kind: string;
                source?: string | undefined;
                displayName?: string | undefined;
            } | undefined;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
            targetDigest?: string | undefined;
            payloadDigest?: string | undefined;
            error?: string | undefined;
        }>>;
        payload: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        recovery: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        executedAt: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        status: string;
        schema: "viewport.execution_receipt/v1";
        id: string;
        workflowRunId: string;
        adapter: string;
        action: string;
        idempotencyKey: string;
        executedAt: string;
        executionGrant?: {
            schema: "viewport.execution_grant/v1";
            digest: string;
            proposalKey: string;
            approvalDecisionKey: string;
            issuedAt: string;
        } | undefined;
        payload?: Record<string, unknown> | undefined;
        proposalDigest?: string | undefined;
        providerReference?: string | undefined;
        providerUrl?: string | undefined;
        payloadDigest?: string | undefined;
        actionProposalId?: string | undefined;
        approvalDecisionId?: string | undefined;
        providerResponseDigest?: string | undefined;
        approvalDecisionDigest?: string | undefined;
        providerReconciliation?: {
            status: "not_checked" | "verified" | "mismatch" | "unavailable" | "failed";
            payload?: Record<string, unknown> | undefined;
            method?: string | undefined;
            checkedAt?: string | undefined;
            checkedBy?: {
                id: string;
                kind: string;
                source?: string | undefined;
                displayName?: string | undefined;
            } | undefined;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
            targetDigest?: string | undefined;
            payloadDigest?: string | undefined;
            error?: string | undefined;
        } | undefined;
        recovery?: Record<string, unknown> | undefined;
    }, {
        status: string;
        schema: "viewport.execution_receipt/v1";
        id: string;
        workflowRunId: string;
        adapter: string;
        action: string;
        idempotencyKey: string;
        executedAt: string;
        executionGrant?: {
            schema: "viewport.execution_grant/v1";
            digest: string;
            proposalKey: string;
            approvalDecisionKey: string;
            issuedAt: string;
        } | undefined;
        payload?: Record<string, unknown> | undefined;
        proposalDigest?: string | undefined;
        providerReference?: string | undefined;
        providerUrl?: string | undefined;
        payloadDigest?: string | undefined;
        actionProposalId?: string | undefined;
        approvalDecisionId?: string | undefined;
        providerResponseDigest?: string | undefined;
        approvalDecisionDigest?: string | undefined;
        providerReconciliation?: {
            status: "not_checked" | "verified" | "mismatch" | "unavailable" | "failed";
            payload?: Record<string, unknown> | undefined;
            method?: string | undefined;
            checkedAt?: string | undefined;
            checkedBy?: {
                id: string;
                kind: string;
                source?: string | undefined;
                displayName?: string | undefined;
            } | undefined;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
            targetDigest?: string | undefined;
            payloadDigest?: string | undefined;
            error?: string | undefined;
        } | undefined;
        recovery?: Record<string, unknown> | undefined;
    }>;
    readonly "viewport.context_package/v1": z.ZodObject<{
        schema: z.ZodLiteral<"viewport.context_package/v1">;
        name: z.ZodString;
        version: z.ZodString;
        channel: z.ZodOptional<z.ZodString>;
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        owners: z.ZodArray<z.ZodString, "many">;
        sourceOfTruth: z.ZodObject<{
            mode: z.ZodEnum<["viewport_managed", "git_backed", "self_hosted_provider", "local_only"]>;
            provider: z.ZodOptional<z.ZodString>;
            repository: z.ZodOptional<z.ZodString>;
            path: z.ZodOptional<z.ZodString>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            mode: z.ZodEnum<["viewport_managed", "git_backed", "self_hosted_provider", "local_only"]>;
            provider: z.ZodOptional<z.ZodString>;
            repository: z.ZodOptional<z.ZodString>;
            path: z.ZodOptional<z.ZodString>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            mode: z.ZodEnum<["viewport_managed", "git_backed", "self_hosted_provider", "local_only"]>;
            provider: z.ZodOptional<z.ZodString>;
            repository: z.ZodOptional<z.ZodString>;
            path: z.ZodOptional<z.ZodString>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
        appliesWhen: z.ZodArray<z.ZodString, "many">;
        useFor: z.ZodArray<z.ZodString, "many">;
        updateWhen: z.ZodArray<z.ZodString, "many">;
        approval: z.ZodObject<{
            required: z.ZodBoolean;
            approvers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            required: z.ZodBoolean;
            approvers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            required: z.ZodBoolean;
            approvers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">>;
        sections: z.ZodObject<{
            summary: z.ZodOptional<z.ZodObject<{
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>;
            rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
            gotchas: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
            facts: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            summary: z.ZodOptional<z.ZodObject<{
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>;
            rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
            gotchas: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
            facts: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            summary: z.ZodOptional<z.ZodObject<{
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>;
            rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
            gotchas: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
            facts: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">>;
        memoryObjects: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            type: z.ZodEnum<["decision", "constraint", "gotcha", "workflow", "fact", "question", "architecture", "synthesis", "source"]>;
            status: z.ZodEnum<["active", "stale", "superseded", "open", "rejected"]>;
            title: z.ZodString;
            body: z.ZodOptional<z.ZodString>;
            appliesTo: z.ZodOptional<z.ZodObject<{
                repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.ZodTypeAny, "passthrough">>>;
            loadModes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
            source: z.ZodOptional<z.ZodObject<{
                runId: z.ZodOptional<z.ZodString>;
                agent: z.ZodOptional<z.ZodString>;
                human: z.ZodOptional<z.ZodString>;
                workflowId: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                runId: z.ZodOptional<z.ZodString>;
                agent: z.ZodOptional<z.ZodString>;
                human: z.ZodOptional<z.ZodString>;
                workflowId: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                runId: z.ZodOptional<z.ZodString>;
                agent: z.ZodOptional<z.ZodString>;
                human: z.ZodOptional<z.ZodString>;
                workflowId: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>;
            version: z.ZodOptional<z.ZodNumber>;
            contentHash: z.ZodOptional<z.ZodString>;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            type: z.ZodEnum<["decision", "constraint", "gotcha", "workflow", "fact", "question", "architecture", "synthesis", "source"]>;
            status: z.ZodEnum<["active", "stale", "superseded", "open", "rejected"]>;
            title: z.ZodString;
            body: z.ZodOptional<z.ZodString>;
            appliesTo: z.ZodOptional<z.ZodObject<{
                repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.ZodTypeAny, "passthrough">>>;
            loadModes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
            source: z.ZodOptional<z.ZodObject<{
                runId: z.ZodOptional<z.ZodString>;
                agent: z.ZodOptional<z.ZodString>;
                human: z.ZodOptional<z.ZodString>;
                workflowId: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                runId: z.ZodOptional<z.ZodString>;
                agent: z.ZodOptional<z.ZodString>;
                human: z.ZodOptional<z.ZodString>;
                workflowId: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                runId: z.ZodOptional<z.ZodString>;
                agent: z.ZodOptional<z.ZodString>;
                human: z.ZodOptional<z.ZodString>;
                workflowId: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>;
            version: z.ZodOptional<z.ZodNumber>;
            contentHash: z.ZodOptional<z.ZodString>;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            type: z.ZodEnum<["decision", "constraint", "gotcha", "workflow", "fact", "question", "architecture", "synthesis", "source"]>;
            status: z.ZodEnum<["active", "stale", "superseded", "open", "rejected"]>;
            title: z.ZodString;
            body: z.ZodOptional<z.ZodString>;
            appliesTo: z.ZodOptional<z.ZodObject<{
                repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.ZodTypeAny, "passthrough">>>;
            loadModes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
            source: z.ZodOptional<z.ZodObject<{
                runId: z.ZodOptional<z.ZodString>;
                agent: z.ZodOptional<z.ZodString>;
                human: z.ZodOptional<z.ZodString>;
                workflowId: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                runId: z.ZodOptional<z.ZodString>;
                agent: z.ZodOptional<z.ZodString>;
                human: z.ZodOptional<z.ZodString>;
                workflowId: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                runId: z.ZodOptional<z.ZodString>;
                agent: z.ZodOptional<z.ZodString>;
                human: z.ZodOptional<z.ZodString>;
                workflowId: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>;
            version: z.ZodOptional<z.ZodNumber>;
            contentHash: z.ZodOptional<z.ZodString>;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
        }, z.ZodTypeAny, "passthrough">>, "many">;
        relations: z.ZodArray<z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
            type: z.ZodEnum<["supersedes", "conflicts_with", "depends_on", "derived_from", "documents", "implements"]>;
            evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            to: z.ZodString;
            type: z.ZodEnum<["supersedes", "conflicts_with", "depends_on", "derived_from", "documents", "implements"]>;
            evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            to: z.ZodString;
            type: z.ZodEnum<["supersedes", "conflicts_with", "depends_on", "derived_from", "documents", "implements"]>;
            evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        }, z.ZodTypeAny, "passthrough">>, "many">;
        receipts: z.ZodOptional<z.ZodObject<{
            required: z.ZodBoolean;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            required: z.ZodBoolean;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            required: z.ZodBoolean;
        }, z.ZodTypeAny, "passthrough">>>;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        schema: z.ZodLiteral<"viewport.context_package/v1">;
        name: z.ZodString;
        version: z.ZodString;
        channel: z.ZodOptional<z.ZodString>;
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        owners: z.ZodArray<z.ZodString, "many">;
        sourceOfTruth: z.ZodObject<{
            mode: z.ZodEnum<["viewport_managed", "git_backed", "self_hosted_provider", "local_only"]>;
            provider: z.ZodOptional<z.ZodString>;
            repository: z.ZodOptional<z.ZodString>;
            path: z.ZodOptional<z.ZodString>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            mode: z.ZodEnum<["viewport_managed", "git_backed", "self_hosted_provider", "local_only"]>;
            provider: z.ZodOptional<z.ZodString>;
            repository: z.ZodOptional<z.ZodString>;
            path: z.ZodOptional<z.ZodString>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            mode: z.ZodEnum<["viewport_managed", "git_backed", "self_hosted_provider", "local_only"]>;
            provider: z.ZodOptional<z.ZodString>;
            repository: z.ZodOptional<z.ZodString>;
            path: z.ZodOptional<z.ZodString>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
        appliesWhen: z.ZodArray<z.ZodString, "many">;
        useFor: z.ZodArray<z.ZodString, "many">;
        updateWhen: z.ZodArray<z.ZodString, "many">;
        approval: z.ZodObject<{
            required: z.ZodBoolean;
            approvers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            required: z.ZodBoolean;
            approvers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            required: z.ZodBoolean;
            approvers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">>;
        sections: z.ZodObject<{
            summary: z.ZodOptional<z.ZodObject<{
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>;
            rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
            gotchas: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
            facts: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            summary: z.ZodOptional<z.ZodObject<{
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>;
            rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
            gotchas: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
            facts: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            summary: z.ZodOptional<z.ZodObject<{
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>;
            rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
            gotchas: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
            facts: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">>;
        memoryObjects: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            type: z.ZodEnum<["decision", "constraint", "gotcha", "workflow", "fact", "question", "architecture", "synthesis", "source"]>;
            status: z.ZodEnum<["active", "stale", "superseded", "open", "rejected"]>;
            title: z.ZodString;
            body: z.ZodOptional<z.ZodString>;
            appliesTo: z.ZodOptional<z.ZodObject<{
                repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.ZodTypeAny, "passthrough">>>;
            loadModes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
            source: z.ZodOptional<z.ZodObject<{
                runId: z.ZodOptional<z.ZodString>;
                agent: z.ZodOptional<z.ZodString>;
                human: z.ZodOptional<z.ZodString>;
                workflowId: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                runId: z.ZodOptional<z.ZodString>;
                agent: z.ZodOptional<z.ZodString>;
                human: z.ZodOptional<z.ZodString>;
                workflowId: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                runId: z.ZodOptional<z.ZodString>;
                agent: z.ZodOptional<z.ZodString>;
                human: z.ZodOptional<z.ZodString>;
                workflowId: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>;
            version: z.ZodOptional<z.ZodNumber>;
            contentHash: z.ZodOptional<z.ZodString>;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            type: z.ZodEnum<["decision", "constraint", "gotcha", "workflow", "fact", "question", "architecture", "synthesis", "source"]>;
            status: z.ZodEnum<["active", "stale", "superseded", "open", "rejected"]>;
            title: z.ZodString;
            body: z.ZodOptional<z.ZodString>;
            appliesTo: z.ZodOptional<z.ZodObject<{
                repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.ZodTypeAny, "passthrough">>>;
            loadModes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
            source: z.ZodOptional<z.ZodObject<{
                runId: z.ZodOptional<z.ZodString>;
                agent: z.ZodOptional<z.ZodString>;
                human: z.ZodOptional<z.ZodString>;
                workflowId: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                runId: z.ZodOptional<z.ZodString>;
                agent: z.ZodOptional<z.ZodString>;
                human: z.ZodOptional<z.ZodString>;
                workflowId: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                runId: z.ZodOptional<z.ZodString>;
                agent: z.ZodOptional<z.ZodString>;
                human: z.ZodOptional<z.ZodString>;
                workflowId: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>;
            version: z.ZodOptional<z.ZodNumber>;
            contentHash: z.ZodOptional<z.ZodString>;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            type: z.ZodEnum<["decision", "constraint", "gotcha", "workflow", "fact", "question", "architecture", "synthesis", "source"]>;
            status: z.ZodEnum<["active", "stale", "superseded", "open", "rejected"]>;
            title: z.ZodString;
            body: z.ZodOptional<z.ZodString>;
            appliesTo: z.ZodOptional<z.ZodObject<{
                repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.ZodTypeAny, "passthrough">>>;
            loadModes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
            source: z.ZodOptional<z.ZodObject<{
                runId: z.ZodOptional<z.ZodString>;
                agent: z.ZodOptional<z.ZodString>;
                human: z.ZodOptional<z.ZodString>;
                workflowId: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                runId: z.ZodOptional<z.ZodString>;
                agent: z.ZodOptional<z.ZodString>;
                human: z.ZodOptional<z.ZodString>;
                workflowId: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                runId: z.ZodOptional<z.ZodString>;
                agent: z.ZodOptional<z.ZodString>;
                human: z.ZodOptional<z.ZodString>;
                workflowId: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>;
            version: z.ZodOptional<z.ZodNumber>;
            contentHash: z.ZodOptional<z.ZodString>;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
        }, z.ZodTypeAny, "passthrough">>, "many">;
        relations: z.ZodArray<z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
            type: z.ZodEnum<["supersedes", "conflicts_with", "depends_on", "derived_from", "documents", "implements"]>;
            evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            to: z.ZodString;
            type: z.ZodEnum<["supersedes", "conflicts_with", "depends_on", "derived_from", "documents", "implements"]>;
            evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            to: z.ZodString;
            type: z.ZodEnum<["supersedes", "conflicts_with", "depends_on", "derived_from", "documents", "implements"]>;
            evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        }, z.ZodTypeAny, "passthrough">>, "many">;
        receipts: z.ZodOptional<z.ZodObject<{
            required: z.ZodBoolean;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            required: z.ZodBoolean;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            required: z.ZodBoolean;
        }, z.ZodTypeAny, "passthrough">>>;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        schema: z.ZodLiteral<"viewport.context_package/v1">;
        name: z.ZodString;
        version: z.ZodString;
        channel: z.ZodOptional<z.ZodString>;
        title: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        owners: z.ZodArray<z.ZodString, "many">;
        sourceOfTruth: z.ZodObject<{
            mode: z.ZodEnum<["viewport_managed", "git_backed", "self_hosted_provider", "local_only"]>;
            provider: z.ZodOptional<z.ZodString>;
            repository: z.ZodOptional<z.ZodString>;
            path: z.ZodOptional<z.ZodString>;
            digest: z.ZodOptional<z.ZodString>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            mode: z.ZodEnum<["viewport_managed", "git_backed", "self_hosted_provider", "local_only"]>;
            provider: z.ZodOptional<z.ZodString>;
            repository: z.ZodOptional<z.ZodString>;
            path: z.ZodOptional<z.ZodString>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            mode: z.ZodEnum<["viewport_managed", "git_backed", "self_hosted_provider", "local_only"]>;
            provider: z.ZodOptional<z.ZodString>;
            repository: z.ZodOptional<z.ZodString>;
            path: z.ZodOptional<z.ZodString>;
            digest: z.ZodOptional<z.ZodString>;
        }, z.ZodTypeAny, "passthrough">>;
        appliesWhen: z.ZodArray<z.ZodString, "many">;
        useFor: z.ZodArray<z.ZodString, "many">;
        updateWhen: z.ZodArray<z.ZodString, "many">;
        approval: z.ZodObject<{
            required: z.ZodBoolean;
            approvers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            required: z.ZodBoolean;
            approvers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            required: z.ZodBoolean;
            approvers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, z.ZodTypeAny, "passthrough">>;
        sections: z.ZodObject<{
            summary: z.ZodOptional<z.ZodObject<{
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>;
            rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
            gotchas: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
            facts: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            summary: z.ZodOptional<z.ZodObject<{
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>;
            rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
            gotchas: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
            facts: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            summary: z.ZodOptional<z.ZodObject<{
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>;
            rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
            gotchas: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
            workflows: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
            facts: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                id: z.ZodString;
                body: z.ZodString;
                visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
                digest: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>, "many">>;
        }, z.ZodTypeAny, "passthrough">>;
        memoryObjects: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            type: z.ZodEnum<["decision", "constraint", "gotcha", "workflow", "fact", "question", "architecture", "synthesis", "source"]>;
            status: z.ZodEnum<["active", "stale", "superseded", "open", "rejected"]>;
            title: z.ZodString;
            body: z.ZodOptional<z.ZodString>;
            appliesTo: z.ZodOptional<z.ZodObject<{
                repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.ZodTypeAny, "passthrough">>>;
            loadModes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
            source: z.ZodOptional<z.ZodObject<{
                runId: z.ZodOptional<z.ZodString>;
                agent: z.ZodOptional<z.ZodString>;
                human: z.ZodOptional<z.ZodString>;
                workflowId: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                runId: z.ZodOptional<z.ZodString>;
                agent: z.ZodOptional<z.ZodString>;
                human: z.ZodOptional<z.ZodString>;
                workflowId: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                runId: z.ZodOptional<z.ZodString>;
                agent: z.ZodOptional<z.ZodString>;
                human: z.ZodOptional<z.ZodString>;
                workflowId: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>;
            version: z.ZodOptional<z.ZodNumber>;
            contentHash: z.ZodOptional<z.ZodString>;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            id: z.ZodString;
            type: z.ZodEnum<["decision", "constraint", "gotcha", "workflow", "fact", "question", "architecture", "synthesis", "source"]>;
            status: z.ZodEnum<["active", "stale", "superseded", "open", "rejected"]>;
            title: z.ZodString;
            body: z.ZodOptional<z.ZodString>;
            appliesTo: z.ZodOptional<z.ZodObject<{
                repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.ZodTypeAny, "passthrough">>>;
            loadModes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
            source: z.ZodOptional<z.ZodObject<{
                runId: z.ZodOptional<z.ZodString>;
                agent: z.ZodOptional<z.ZodString>;
                human: z.ZodOptional<z.ZodString>;
                workflowId: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                runId: z.ZodOptional<z.ZodString>;
                agent: z.ZodOptional<z.ZodString>;
                human: z.ZodOptional<z.ZodString>;
                workflowId: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                runId: z.ZodOptional<z.ZodString>;
                agent: z.ZodOptional<z.ZodString>;
                human: z.ZodOptional<z.ZodString>;
                workflowId: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>;
            version: z.ZodOptional<z.ZodNumber>;
            contentHash: z.ZodOptional<z.ZodString>;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            id: z.ZodString;
            type: z.ZodEnum<["decision", "constraint", "gotcha", "workflow", "fact", "question", "architecture", "synthesis", "source"]>;
            status: z.ZodEnum<["active", "stale", "superseded", "open", "rejected"]>;
            title: z.ZodString;
            body: z.ZodOptional<z.ZodString>;
            appliesTo: z.ZodOptional<z.ZodObject<{
                repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                repos: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                services: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                jiraProjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                linearTeams: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                workflows: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, z.ZodTypeAny, "passthrough">>>;
            loadModes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
            source: z.ZodOptional<z.ZodObject<{
                runId: z.ZodOptional<z.ZodString>;
                agent: z.ZodOptional<z.ZodString>;
                human: z.ZodOptional<z.ZodString>;
                workflowId: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                runId: z.ZodOptional<z.ZodString>;
                agent: z.ZodOptional<z.ZodString>;
                human: z.ZodOptional<z.ZodString>;
                workflowId: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                runId: z.ZodOptional<z.ZodString>;
                agent: z.ZodOptional<z.ZodString>;
                human: z.ZodOptional<z.ZodString>;
                workflowId: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>;
            version: z.ZodOptional<z.ZodNumber>;
            contentHash: z.ZodOptional<z.ZodString>;
            visibility: z.ZodOptional<z.ZodEnum<["platform_visible", "provider_visible", "trusted_edge_only", "encrypted_body"]>>;
        }, z.ZodTypeAny, "passthrough">>, "many">;
        relations: z.ZodArray<z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
            type: z.ZodEnum<["supersedes", "conflicts_with", "depends_on", "derived_from", "documents", "implements"]>;
            evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            from: z.ZodString;
            to: z.ZodString;
            type: z.ZodEnum<["supersedes", "conflicts_with", "depends_on", "derived_from", "documents", "implements"]>;
            evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            from: z.ZodString;
            to: z.ZodString;
            type: z.ZodEnum<["supersedes", "conflicts_with", "depends_on", "derived_from", "documents", "implements"]>;
            evidence: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        }, z.ZodTypeAny, "passthrough">>, "many">;
        receipts: z.ZodOptional<z.ZodObject<{
            required: z.ZodBoolean;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            required: z.ZodBoolean;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            required: z.ZodBoolean;
        }, z.ZodTypeAny, "passthrough">>>;
    }, z.ZodTypeAny, "passthrough">>;
    readonly "viewport.context_receipt/v1": z.ZodObject<{
        schema: z.ZodLiteral<"viewport.context_receipt/v1">;
        package: z.ZodString;
        requested: z.ZodString;
        resolvedVersion: z.ZodString;
        provider: z.ZodString;
        digest: z.ZodString;
        freshness: z.ZodString;
        usedBy: z.ZodObject<{
            runId: z.ZodString;
            nodeId: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            runId: string;
            nodeId?: string | undefined;
        }, {
            runId: string;
            nodeId?: string | undefined;
        }>;
        resolvedAt: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        schema: "viewport.context_receipt/v1";
        digest: string;
        package: string;
        requested: string;
        resolvedVersion: string;
        provider: string;
        freshness: string;
        usedBy: {
            runId: string;
            nodeId?: string | undefined;
        };
        resolvedAt: string;
    }, {
        schema: "viewport.context_receipt/v1";
        digest: string;
        package: string;
        requested: string;
        resolvedVersion: string;
        provider: string;
        freshness: string;
        usedBy: {
            runId: string;
            nodeId?: string | undefined;
        };
        resolvedAt: string;
    }>;
    readonly "viewport.audit_receipt/v1": z.ZodObject<{
        schema: z.ZodLiteral<"viewport.audit_receipt/v1">;
        id: z.ZodString;
        workspaceId: z.ZodString;
        workflowRunId: z.ZodString;
        eventType: z.ZodString;
        occurredAt: z.ZodString;
        actor: z.ZodObject<{
            kind: z.ZodString;
            id: z.ZodString;
            source: z.ZodOptional<z.ZodString>;
            displayName: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            id: string;
            kind: string;
            source?: string | undefined;
            displayName?: string | undefined;
        }, {
            id: string;
            kind: string;
            source?: string | undefined;
            displayName?: string | undefined;
        }>;
        route: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            version: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            id: string;
            version: number;
        }, {
            id: string;
            version: number;
        }>>;
        executionProfile: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            version: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            id: string;
            version: number;
        }, {
            id: string;
            version: number;
        }>>;
        workflow: z.ZodObject<{
            id: z.ZodString;
            schema: z.ZodLiteral<"viewport.workflow/v1">;
            digest: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            schema: "viewport.workflow/v1";
            id: string;
            digest: string;
        }, {
            schema: "viewport.workflow/v1";
            id: string;
            digest: string;
        }>;
        runner: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            workspaceTemplate: z.ZodOptional<z.ZodString>;
            workspaceDigest: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            id: string;
            workspaceTemplate?: string | undefined;
            workspaceDigest?: string | undefined;
        }, {
            id: string;
            workspaceTemplate?: string | undefined;
            workspaceDigest?: string | undefined;
        }>>;
        contextReceipts: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">>;
        evidenceRefs: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        actionProposal: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            digest: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            id: string;
            digest: string;
        }, {
            id: string;
            digest: string;
        }>>;
        approvalDecision: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        sideEffectReceipt: z.ZodOptional<z.ZodObject<{
            adapter: z.ZodString;
            action: z.ZodString;
            status: z.ZodString;
            providerReference: z.ZodOptional<z.ZodString>;
            providerUrl: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            status: string;
            adapter: string;
            action: string;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
        }, {
            status: string;
            adapter: string;
            action: string;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
        }>>;
        payloadDigest: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        workflow: {
            schema: "viewport.workflow/v1";
            id: string;
            digest: string;
        };
        schema: "viewport.audit_receipt/v1";
        id: string;
        workflowRunId: string;
        workspaceId: string;
        occurredAt: string;
        actor: {
            id: string;
            kind: string;
            source?: string | undefined;
            displayName?: string | undefined;
        };
        payloadDigest: string;
        eventType: string;
        route?: {
            id: string;
            version: number;
        } | undefined;
        executionProfile?: {
            id: string;
            version: number;
        } | undefined;
        actionProposal?: {
            id: string;
            digest: string;
        } | undefined;
        approvalDecision?: Record<string, unknown> | undefined;
        runner?: {
            id: string;
            workspaceTemplate?: string | undefined;
            workspaceDigest?: string | undefined;
        } | undefined;
        evidenceRefs?: string[] | undefined;
        contextReceipts?: Record<string, unknown>[] | undefined;
        sideEffectReceipt?: {
            status: string;
            adapter: string;
            action: string;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
        } | undefined;
    }, {
        workflow: {
            schema: "viewport.workflow/v1";
            id: string;
            digest: string;
        };
        schema: "viewport.audit_receipt/v1";
        id: string;
        workflowRunId: string;
        workspaceId: string;
        occurredAt: string;
        actor: {
            id: string;
            kind: string;
            source?: string | undefined;
            displayName?: string | undefined;
        };
        payloadDigest: string;
        eventType: string;
        route?: {
            id: string;
            version: number;
        } | undefined;
        executionProfile?: {
            id: string;
            version: number;
        } | undefined;
        actionProposal?: {
            id: string;
            digest: string;
        } | undefined;
        approvalDecision?: Record<string, unknown> | undefined;
        runner?: {
            id: string;
            workspaceTemplate?: string | undefined;
            workspaceDigest?: string | undefined;
        } | undefined;
        evidenceRefs?: string[] | undefined;
        contextReceipts?: Record<string, unknown>[] | undefined;
        sideEffectReceipt?: {
            status: string;
            adapter: string;
            action: string;
            providerReference?: string | undefined;
            providerUrl?: string | undefined;
        } | undefined;
    }>;
};
//# sourceMappingURL=schemas.d.ts.map