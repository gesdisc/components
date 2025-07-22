import { Status, type CollectionWithAvailableServices, type DataServiceInterface, type SubsetJobOptions, type SubsetJobStatus, type SearchOptions, type SubsetJobs } from './types.js';
export declare const HARMONY_CONFIG: {
    baseUrl: string;
    cmrUrl: string;
};
export declare const FINAL_STATUSES: Set<Status>;
export declare class HarmonyDataService implements DataServiceInterface {
    getCollectionWithAvailableServices(collectionEntryId: string, options?: SearchOptions): Promise<CollectionWithAvailableServices>;
    createSubsetJob(collectionConceptId: string, subsetOptions?: SubsetJobOptions): Promise<SubsetJobStatus | undefined>;
    getSubsetJobs(searchOptions?: SearchOptions): Promise<SubsetJobs>;
    getSubsetJobStatus(jobId: string, searchOptions?: SearchOptions): Promise<SubsetJobStatus>;
    cancelSubsetJob(jobId: string, options?: SearchOptions): Promise<SubsetJobStatus>;
}
