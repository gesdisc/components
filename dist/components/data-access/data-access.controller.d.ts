import type { CloudCoverRange, CmrGranule, CmrSamplingOfGranules } from '../../metadata-catalog/types.js';
import { Task, type StatusRenderer } from '@lit/task';
import type { ReactiveControllerHost } from 'lit';
import type TerraDataAccess from './data-access.component.js';
export type FetchGranulesOptions = {
    collectionEntryId: string;
    startRow: number;
    endRow: number;
    sortBy?: string;
    sortDirection?: string;
    search?: string;
    cloudCover?: {
        min?: number;
        max?: number;
    };
};
export declare class DataAccessController {
    #private;
    fetchGranulesTask: Task<[
        string,
        number,
        number,
        string,
        string,
        string,
        {
            min?: number;
            max?: number;
        }
    ], CmrGranule[] | undefined>;
    constructor(host: ReactiveControllerHost & TerraDataAccess);
    get granules(): CmrGranule[];
    get totalGranules(): number;
    get sampling(): CmrSamplingOfGranules | undefined;
    get granuleMinDate(): string | null;
    get granuleMaxDate(): string | null;
    get estimatedSize(): string | null;
    get cloudCoverRange(): CloudCoverRange | null;
    fetchGranules({ collectionEntryId, startRow, endRow, sortBy, sortDirection, search, cloudCover, }: FetchGranulesOptions): Promise<void>;
    render(renderFunctions: StatusRenderer<Partial<CmrGranule[] | undefined>>): unknown;
}
