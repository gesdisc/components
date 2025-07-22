import type { SearchKeywordsResponse, VariableCatalogInterface } from './types.js';
import type { SearchOptions, SearchResponse, SelectedFacets, Variable } from '../components/browse-variables/browse-variables.types.js';
export declare class GiovanniVariableCatalog implements VariableCatalogInterface {
    #private;
    getSearchKeywords(): Promise<SearchKeywordsResponse>;
    searchVariablesAndFacets(query?: string, selectedFacets?: SelectedFacets, options?: SearchOptions): Promise<SearchResponse>;
    getVariable(variableEntryId: string, options?: SearchOptions): Promise<Variable | null>;
}
