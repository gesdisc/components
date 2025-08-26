import type { StatusRenderer } from '@lit/task';
import type { ReactiveControllerHost } from 'lit';
import { type SubsetJobStatus } from '../../data-services/types.js';
import type TerraTimeAvgMap from './time-average-map.component.js';
export declare class TimeAvgMapController {
    #private;
    jobStatusTask: any;
    currentJob: SubsetJobStatus | null;
    blobUrl: Blob;
    constructor(host: ReactiveControllerHost & TerraTimeAvgMap);
    render(renderFunctions: StatusRenderer<any>): any;
    fetchJobByID(jobID: string): void;
}
