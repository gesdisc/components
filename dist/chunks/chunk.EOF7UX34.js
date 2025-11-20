import {
  GET_CMR_COLLECTION_CITATIONS_BY_ENTRY_ID,
  GET_CMR_GRANULES_BY_ENTRY_ID,
  GET_CMR_SEARCH_RESULTS_ALL,
  GET_CMR_SEARCH_RESULTS_COLLECTIONS,
  GET_CMR_SEARCH_RESULTS_VARIABLES
} from "./chunk.EF5LM7CJ.js";
import {
  getGraphQLClient,
  gql
} from "./chunk.JW7QSDAF.js";
import {
  __privateAdd,
  __privateMethod,
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.HBV76IJU.js";

// src/metadata-catalog/cmr-catalog.ts
init_dirname();
init_buffer();
init_process();

// src/metadata-catalog/types.ts
init_dirname();
init_buffer();
init_process();

// src/metadata-catalog/cmr-catalog.ts
var _getGranuleSortKey, getGranuleSortKey_fn;
var CmrCatalog = class {
  constructor() {
    /**
     * the GraphQL properties and the sort keys differ (https://cmr.earthdata.nasa.gov/search/site/docs/search/api.html#sorting-granule-results)
     * this function returns the correct sort key for the GraphQL query
     */
    __privateAdd(this, _getGranuleSortKey);
  }
  async searchCmr(keyword, type, options) {
    var _a, _b, _c, _d, _e, _f;
    const client = await getGraphQLClient("cmr");
    const response = await client.query({
      query: type === "collection" ? GET_CMR_SEARCH_RESULTS_COLLECTIONS : type === "variable" ? GET_CMR_SEARCH_RESULTS_VARIABLES : GET_CMR_SEARCH_RESULTS_ALL,
      variables: {
        keyword
      },
      context: {
        fetchOptions: {
          signal: options == null ? void 0 : options.signal
        }
      },
      fetchPolicy: "network-only"
    });
    if (response.errors) {
      throw new Error(`Failed to search CMR: ${response.errors[0].message}`);
    }
    const collections = (_c = (_b = (_a = response.data.collections) == null ? void 0 : _a.items) == null ? void 0 : _b.map((collection) => ({
      type: "collection",
      collectionConceptId: collection.conceptId,
      collectionEntryId: collection.nativeId,
      summary: collection.title,
      conceptId: collection.conceptId,
      entryId: collection.nativeId,
      provider: collection.provider,
      title: collection.title
    }))) != null ? _c : [];
    const variables = (_f = (_e = (_d = response.data.variables) == null ? void 0 : _d.items) == null ? void 0 : _e.map((variable) => {
      var _a2, _b2, _c2, _d2, _e2, _f2, _g;
      return {
        type: "variable",
        collectionConceptId: (_b2 = (_a2 = variable.collections.items) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.conceptId,
        collectionEntryId: (_d2 = (_c2 = variable.collections.items) == null ? void 0 : _c2[0]) == null ? void 0 : _d2.nativeId,
        summary: (_g = (_f2 = (_e2 = variable.collections.items) == null ? void 0 : _e2[0]) == null ? void 0 : _f2.title) != null ? _g : "",
        conceptId: variable.conceptId,
        entryId: variable.name,
        provider: variable.providerId,
        title: variable.longName
      };
    })) != null ? _f : [];
    return [...collections, ...variables];
  }
  async getGranules(collectionEntryId, options) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const client = await getGraphQLClient("cmr");
    const response = await client.query({
      query: GET_CMR_GRANULES_BY_ENTRY_ID,
      variables: {
        collectionEntryId,
        limit: (_a = options == null ? void 0 : options.limit) != null ? _a : 50,
        offset: (_b = options == null ? void 0 : options.offset) != null ? _b : 0,
        sortKey: __privateMethod(this, _getGranuleSortKey, getGranuleSortKey_fn).call(this, (_c = options == null ? void 0 : options.sortBy) != null ? _c : "title", (_d = options == null ? void 0 : options.sortDirection) != null ? _d : "asc"),
        search: (options == null ? void 0 : options.search) ? [`*${options.search}*`] : void 0,
        temporal: (options == null ? void 0 : options.startDate) && (options == null ? void 0 : options.endDate) ? `${options.startDate},${options.endDate}` : void 0,
        boundingBox: ((_e = options == null ? void 0 : options.location) == null ? void 0 : _e.type) === "bbox" ? options.location.bounds.toBBoxString() : void 0,
        cloudCover: ((_f = options == null ? void 0 : options.cloudCover) == null ? void 0 : _f.min) && ((_g = options == null ? void 0 : options.cloudCover) == null ? void 0 : _g.max) ? `${(_h = options.cloudCover.min) != null ? _h : ""},${(_i = options.cloudCover.max) != null ? _i : ""}` : void 0
      },
      context: {
        fetchOptions: {
          signal: options == null ? void 0 : options.signal
        }
      },
      fetchPolicy: "network-only"
    });
    if (response.errors) {
      throw new Error(`Failed to fetch granules: ${response.errors[0].message}`);
    }
    return response.data;
  }
  async getSamplingOfGranules(collectionEntryId, options) {
    const client = await getGraphQLClient("cmr");
    const response = await client.query({
      query: gql`
                query Collections($collectionEntryId: String!) {
                    collections(params: { entryId: [$collectionEntryId] }) {
                        items {
                            conceptId
                            firstGranules: granules(
                                params: { limit: 2, sortKey: "startDate" }
                            ) {
                                count
                                items {
                                    dataGranule
                                }
                            }
                            lastGranules: granules(
                                params: { limit: 2, sortKey: "-endDate" }
                            ) {
                                count
                                items {
                                    dataGranule
                                }
                            }
                        }
                    }
                }
            `,
      variables: {
        collectionEntryId
      },
      context: {
        fetchOptions: {
          signal: options == null ? void 0 : options.signal
        }
      },
      fetchPolicy: "network-only"
    });
    if (response.errors) {
      throw new Error(`Failed to fetch granules: ${response.errors[0].message}`);
    }
    return response.data;
  }
  async getCloudCoverRange(collectionEntryId, options) {
    const client = await getGraphQLClient("cmr");
    const response = await client.query({
      query: gql`
                query Collections($collectionEntryId: String!) {
                    collections(params: { entryId: [$collectionEntryId] }) {
                        items {
                            lowestCloudCover: granules(
                                params: { sortKey: "cloudCover", limit: 1 }
                            ) {
                                items {
                                    cloudCover
                                }
                            }
                            highestCloudCover: granules(
                                params: { sortKey: "-cloudCover", limit: 1 }
                            ) {
                                items {
                                    cloudCover
                                }
                            }
                        }
                    }
                }
            `,
      variables: {
        collectionEntryId
      },
      context: {
        fetchOptions: {
          signal: options == null ? void 0 : options.signal
        }
      },
      fetchPolicy: "network-only"
    });
    if (response.errors) {
      throw new Error(`Failed to fetch granules: ${response.errors[0].message}`);
    }
    console.log(
      "Response data: ",
      response.data,
      response.data.collections.items[0].lowestCloudCover.items[0].cloudCover,
      response.data.collections.items[0].highestCloudCover.items[0].cloudCover
    );
    if (typeof response.data.collections.items[0].lowestCloudCover.items[0].cloudCover === "number" && typeof response.data.collections.items[0].highestCloudCover.items[0].cloudCover === "number") {
      console.log("Returning cloud cover range: ", {
        min: response.data.collections.items[0].lowestCloudCover.items[0].cloudCover,
        max: response.data.collections.items[0].highestCloudCover.items[0].cloudCover
      });
      return {
        min: response.data.collections.items[0].lowestCloudCover.items[0].cloudCover,
        max: response.data.collections.items[0].highestCloudCover.items[0].cloudCover
      };
    }
    return null;
  }
  async getCollectionCitation(collectionEntryId, options) {
    var _a, _b;
    const client = await getGraphQLClient("cmr");
    const response = await client.query({
      query: GET_CMR_COLLECTION_CITATIONS_BY_ENTRY_ID,
      variables: {
        entryId: collectionEntryId
      },
      context: {
        fetchOptions: {
          signal: options == null ? void 0 : options.signal
        }
      },
      fetchPolicy: "network-only"
    });
    if (response.errors || response.data.collections.items.length === 0 || response.data.collections.items[0].collectionCitations.length === 0) {
      throw new Error(
        `Failed to retrieve collection citations from CMR: ${(_b = (_a = response.errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.message}`
      );
    }
    return response.data.collections.items[0];
  }
};
_getGranuleSortKey = new WeakSet();
getGranuleSortKey_fn = function(sortBy, sortDirection) {
  let sortKey = sortBy;
  switch (sortBy) {
    case "title":
      sortKey = "granuleUr";
      break;
    case "size":
      sortKey = "dataSize";
      break;
    case "timeStart":
      sortKey = "startDate";
      break;
    case "timeEnd":
      sortKey = "endDate";
      break;
  }
  return sortDirection === "asc" ? sortKey : `-${sortKey}`;
};

export {
  CmrCatalog
};
