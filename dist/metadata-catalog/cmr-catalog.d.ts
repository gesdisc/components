import { type CmrSearchResult, type MetadataCatalogInterface, type SearchOptions } from './types.js';
export declare class CmrCatalog implements MetadataCatalogInterface {
    searchCmr(keyword: string, type: 'collection' | 'variable' | 'all', options?: SearchOptions): Promise<Array<CmrSearchResult>>;
}
