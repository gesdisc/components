import { Status, type CollectionWithAvailableServices, type DataServiceInterface, type SubsetJobStatus, type SearchOptions, type SubsetJobs, type CreateSubsetJobInput } from './types.js';
export declare const HARMONY_CONFIG: {
    baseUrl: string;
    cmrUrl: string;
    proxyUrl: string;
};
export declare const FINAL_STATUSES: Set<Status>;
export declare class HarmonyDataService implements DataServiceInterface {
    getCollectionWithAvailableServices(collectionEntryId: string, options?: SearchOptions): Promise<CollectionWithAvailableServices>;
    createSubsetJob(input: CreateSubsetJobInput, options?: SearchOptions): Promise<SubsetJobStatus | undefined>;
    getSubsetJobs(searchOptions?: SearchOptions): Promise<SubsetJobs>;
    getSubsetJobStatus(jobId: string, searchOptions?: SearchOptions): Promise<SubsetJobStatus>;
    cancelSubsetJob(jobId: string, options?: SearchOptions): Promise<SubsetJobStatus>;
    getSubsetJobData(job: SubsetJobStatus, options?: SearchOptions): Promise<{
        blob: Blob;
        text: string;
    }>;
}
