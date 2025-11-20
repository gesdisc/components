import { type CmrSearchResult, type MetadataCatalogInterface, type SearchOptions, type CmrGranulesResponse, type CmrSamplingOfGranulesResponse, type CloudCoverRange, type CmrCollectionCitationItem } from './types.js';
export declare class CmrCatalog implements MetadataCatalogInterface {
    #private;
    searchCmr(keyword: string, type: 'collection' | 'variable' | 'all', options?: SearchOptions): Promise<Array<CmrSearchResult>>;
    getGranules(collectionEntryId: string, options?: SearchOptions): Promise<CmrGranulesResponse>;
    getSamplingOfGranules(collectionEntryId: string, options?: SearchOptions): Promise<CmrSamplingOfGranulesResponse>;
    getCloudCoverRange(collectionEntryId: string, options?: SearchOptions): Promise<CloudCoverRange | null>;
    getCollectionCitation(collectionEntryId: string, options?: SearchOptions): Promise<CmrCollectionCitationItem>;
}
