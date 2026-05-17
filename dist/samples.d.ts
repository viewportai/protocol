import { type ContractDefinition } from './contracts.js';
export interface ProtocolSample {
    readonly contract: ContractDefinition;
    readonly fileName: string;
    readonly path: string;
    readonly text: string;
    readonly document: unknown;
}
export declare function samplesDirectory(): string;
export declare function sampleFiles(): string[];
export declare function readSample(fileName: string): Promise<ProtocolSample>;
export declare function readAllSamples(): Promise<ProtocolSample[]>;
//# sourceMappingURL=samples.d.ts.map