import type { CmrGranule, CmrGranuleDataGranule, HostWithMaybeProperties } from './types.js';
export declare function getGranuleUrl(granule: CmrGranule): string | undefined;
export declare function getVariableEntryId(host: HostWithMaybeProperties): string | undefined;
export declare function formatGranuleSize(sizeInMB: number): string;
export declare function calculateMeanGranuleSize(granules: {
    dataGranule: CmrGranuleDataGranule;
}[]): number;
export declare function calculateGranuleSize(granule: {
    dataGranule: CmrGranuleDataGranule;
}, unit: 'MB' | 'GB' | 'TB' | 'PB'): number;
