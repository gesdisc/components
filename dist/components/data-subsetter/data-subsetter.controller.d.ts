import { Task } from '@lit/task';
import type { StatusRenderer } from '@lit/task';
import type { ReactiveControllerHost } from 'lit';
import type TerraDataSubsetter from './data-subsetter.component.js';
import { type SubsetJobStatus } from '../../data-services/types.js';
export declare class DataSubsetterController {
    #private;
    jobStatusTask: Task<[], SubsetJobStatus | undefined>;
    fetchCollectionTask: Task<[string], any | undefined>;
    currentJob: SubsetJobStatus | null;
    constructor(host: ReactiveControllerHost & TerraDataSubsetter);
    render(renderFunctions: StatusRenderer<any>): unknown;
    fetchJobByID(jobID: string): void;
    cancelCurrentJob(): void;
}
