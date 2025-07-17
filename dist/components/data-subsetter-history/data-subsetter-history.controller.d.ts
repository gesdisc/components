import { Task } from '@lit/task';
import type { StatusRenderer } from '@lit/task';
import type { ReactiveControllerHost } from 'lit';
import type TerraDataSubsetterHistory from './data-subsetter-history.component.js';
import { type SubsetJobs } from '../../data-services/types.js';
export declare class DataSubsetterHistoryController {
    #private;
    jobs?: SubsetJobs;
    task: Task<[], SubsetJobs>;
    constructor(host: ReactiveControllerHost & TerraDataSubsetterHistory);
    hostConnected(): void;
    hostDisconnected(): void;
    render(renderFunctions: StatusRenderer<any>): unknown;
}
