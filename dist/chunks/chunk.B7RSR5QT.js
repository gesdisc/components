import {
  gql
} from "./chunk.IVOVCCTS.js";

// src/metadata-catalog/queries.ts
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
  GET_CMR_SEARCH_RESULTS_ALL,
  GET_CMR_SEARCH_RESULTS_COLLECTIONS,
  GET_CMR_SEARCH_RESULTS_VARIABLES,
  GET_SEARCH_KEYWORDS,
  GET_VARIABLES
};
