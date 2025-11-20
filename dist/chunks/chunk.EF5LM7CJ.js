import {
  gql
} from "./chunk.JW7QSDAF.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/metadata-catalog/queries.ts
init_dirname();
init_buffer();
init_process();
var GET_CMR_COLLECTION_CITATIONS_BY_ENTRY_ID = gql`
    query GetCMRCollectionByEntryId($entryId: String!) {
        collections(params: { entryId: [$entryId] }) {
            items {
                doi
                collectionCitations
            }
        }
    }
`;
var GET_CMR_SEARCH_RESULTS_ALL = gql`
    query GetCMRSearchResultsAll($keyword: String!) {
        collections(params: { keyword: $keyword }) {
            items {
                conceptId
                nativeId
                provider
                title
            }
        }
        variables(params: { keyword: $keyword }) {
            items {
                conceptId
                name
                providerId
                longName
                collections {
                    items {
                        conceptId
                        nativeId
                        title
                    }
                }
            }
        }
    }
`;
var GET_CMR_SEARCH_RESULTS_COLLECTIONS = gql`
    query GetCMRSearchResultsCollections($keyword: String!) {
        collections(params: { keyword: $keyword }) {
            items {
                conceptId
                nativeId
                provider
                title
            }
        }
    }
`;
var GET_CMR_SEARCH_RESULTS_VARIABLES = gql`
    query GetCMRSearchResultsVariables($keyword: String!) {
        variables(params: { keyword: $keyword }) {
            items {
                conceptId
                name
                providerId
                longName
                collections {
                    items {
                        conceptId
                        nativeId
                    }
                }
            }
        }
    }
`;
var GET_CMR_GRANULES_BY_ENTRY_ID = gql`
    query Collections(
        $collectionEntryId: String!
        $search: [String]
        $limit: Int
        $offset: Int
        $sortKey: String
        $temporal: String
        $boundingBox: [String]
        $cloudCover: JSON
    ) {
        collections(params: { entryId: [$collectionEntryId] }) {
            items {
                conceptId
                granules(
                    params: {
                        limit: $limit
                        offset: $offset
                        sortKey: [$sortKey]
                        readableGranuleName: $search
                        options: { readableGranuleName: { pattern: true } }
                        temporal: $temporal
                        boundingBox: $boundingBox
                        cloudCover: $cloudCover
                    }
                ) {
                    count
                    items {
                        conceptId
                        dataGranule
                        title
                        timeEnd
                        timeStart
                        relatedUrls
                        cloudCover
                    }
                }
            }
        }
    }
`;
var GET_SEARCH_KEYWORDS = gql`
    query {
        aesirKeywords {
            id
        }
    }
`;
var GET_VARIABLES = gql`
    query GetVariables(
        $q: String
        $includeFields: String
        $rows: String
        $filter: FilterInput
        $variableEntryIds: [String]
    ) {
        getVariables(
            q: $q
            includeFields: $includeFields
            rows: $rows
            filter: $filter
            variableEntryIds: $variableEntryIds
        ) {
            count
            total
            variables {
                dataFieldId
                dataProductShortName
                dataProductVersion
                dataFieldShortName
                dataFieldAccessName
                dataFieldLongName
                dataProductLongName
                dataProductTimeInterval
                dataProductWest
                dataProductSouth
                dataProductEast
                dataProductNorth
                dataProductSpatialResolution
                dataProductBeginDateTime
                dataProductEndDateTime
                dataFieldKeywords
                dataFieldUnits
                dataProductDescriptionUrl
                dataFieldDescriptionUrl
                dataProductInstrumentShortName
            }
            facets {
                category
                values {
                    name
                    count
                }
            }
        }
    }
`;

export {
  GET_CMR_COLLECTION_CITATIONS_BY_ENTRY_ID,
  GET_CMR_SEARCH_RESULTS_ALL,
  GET_CMR_SEARCH_RESULTS_COLLECTIONS,
  GET_CMR_SEARCH_RESULTS_VARIABLES,
  GET_CMR_GRANULES_BY_ENTRY_ID,
  GET_SEARCH_KEYWORDS,
  GET_VARIABLES
};
