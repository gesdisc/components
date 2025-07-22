import {
  GET_SEARCH_KEYWORDS,
  GET_VARIABLES
} from "./chunk.ZZEU3QDK.js";
import {
  getGraphQLClient
} from "./chunk.2M3INLAP.js";
import {
  getUTCDate
} from "./chunk.EZMKGB3F.js";
import {
  __privateAdd,
  __privateMethod,
  __spreadProps,
  __spreadValues
} from "./chunk.6JHIJHTB.js";

// src/metadata-catalog/giovanni-variable-catalog.ts
var _adaptVariablesForResponse, adaptVariablesForResponse_fn, _getReasonableInitialStartAndEndDateTime, getReasonableInitialStartAndEndDateTime_fn;
var GiovanniVariableCatalog = class {
  constructor() {
    __privateAdd(this, _adaptVariablesForResponse);
    /**
     * Get reasonable initial start and end date
     *
     * When we load a variable into a plot, we may want to show the user some initial data while they change the date
     * This function returns a reasonable slice of time that components can choose to use
     */
    __privateAdd(this, _getReasonableInitialStartAndEndDateTime);
  }
  async getSearchKeywords() {
    const client = await getGraphQLClient();
    const response = await client.query({
      query: GET_SEARCH_KEYWORDS,
      fetchPolicy: "cache-first"
    });
    if (response.errors) {
      throw new Error(
        `Failed to fetch search keywords: ${response.errors[0].message}`
      );
    }
    return response.data.aesirKeywords;
  }
  async searchVariablesAndFacets(query, selectedFacets, options) {
    const client = await getGraphQLClient();
    const response = await client.query({
      query: GET_VARIABLES,
      variables: {
        q: query,
        filter: selectedFacets
      },
      context: {
        fetchOptions: {
          signal: options == null ? void 0 : options.signal
        }
      }
    });
    if (response.errors) {
      throw new Error(
        `Failed to fetch variables: ${response.errors[0].message}`
      );
    }
    const { variables, facets, total } = response.data.getVariables;
    const facetsByCategory = {
      depths: [],
      disciplines: [],
      measurements: [],
      observations: [],
      platformInstruments: [],
      portals: [],
      spatialResolutions: [],
      specialFeatures: [],
      temporalResolutions: [],
      wavelengths: []
    };
    facets.forEach((facet) => {
      const category = facet.category;
      if (category in facetsByCategory) {
        facetsByCategory[category] = facet.values;
      }
    });
    return {
      variables: __privateMethod(this, _adaptVariablesForResponse, adaptVariablesForResponse_fn).call(this, variables),
      facetsByCategory,
      total
    };
  }
  async getVariable(variableEntryId, options) {
    const client = await getGraphQLClient();
    const response = await client.query({
      query: GET_VARIABLES,
      variables: {
        variableEntryIds: [variableEntryId]
      },
      context: {
        fetchOptions: {
          signal: options == null ? void 0 : options.signal
        }
      }
    });
    if (response.errors) {
      throw new Error(`Failed to fetch variable: ${response.errors[0].message}`);
    }
    const { variables } = response.data.getVariables;
    return variables.length ? __privateMethod(this, _adaptVariablesForResponse, adaptVariablesForResponse_fn).call(this, variables)[0] : null;
  }
};
_adaptVariablesForResponse = new WeakSet();
adaptVariablesForResponse_fn = function(variables) {
  return variables.map((variable) => {
    const exampleInitialDates = __privateMethod(this, _getReasonableInitialStartAndEndDateTime, getReasonableInitialStartAndEndDateTime_fn).call(this, variable);
    return __spreadProps(__spreadValues({}, variable), {
      exampleInitialStartDate: exampleInitialDates == null ? void 0 : exampleInitialDates.exampleInitialStartDate,
      exampleInitialEndDate: exampleInitialDates == null ? void 0 : exampleInitialDates.exampleInitialEndDate,
      dataFieldShortName: !variable.dataFieldShortName || variable.dataFieldShortName == "" ? variable.dataFieldAccessName : variable.dataFieldShortName
    });
  });
};
_getReasonableInitialStartAndEndDateTime = new WeakSet();
getReasonableInitialStartAndEndDateTime_fn = function(variable) {
  if (!(variable == null ? void 0 : variable.dataProductBeginDateTime) || !(variable == null ? void 0 : variable.dataProductEndDateTime)) {
    return;
  }
  const diff = Math.abs(
    new Date(variable.dataProductEndDateTime).getTime() - new Date(variable.dataProductBeginDateTime).getTime()
  );
  const threeQuarterRange = Math.floor(diff * 0.75);
  const startDate = Math.abs(
    new Date(variable.dataProductBeginDateTime).getTime() + threeQuarterRange
  );
  return {
    exampleInitialStartDate: getUTCDate(startDate),
    exampleInitialEndDate: getUTCDate(variable.dataProductEndDateTime)
  };
};

export {
  GiovanniVariableCatalog
};
