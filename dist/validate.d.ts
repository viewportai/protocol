import type { ProtocolSample } from './samples.js';
export interface ProtocolValidationIssue {
    readonly path: string;
    readonly message: string;
}
export interface ProtocolValidationResult {
    readonly ok: boolean;
    readonly issues: ProtocolValidationIssue[];
}
export declare function validateSampleEnvelope(sample: ProtocolSample): ProtocolValidationResult;
//# sourceMappingURL=validate.d.ts.map