import {
  getGraphQLClient,
  gql
} from "./chunk.LLQADAZV.js";
import {
  init_buffer,
  init_dirname,
  init_process
} from "./chunk.ES5U5CWG.js";

// src/geojson/giovanni-geojson.ts
init_dirname();
init_buffer();
init_process();

// src/geojson/queries.ts
init_dirname();
init_buffer();
init_process();
var GET_SHAPE_FILES = gql`
    query {
        shapeFiles {
            categories {
                shapefileID
                title
                sourceName
                sourceURL
                shapes {
                    name
                    shapeID
                    shapefileID
                }
            }
        }
    }
`;
var GET_GEOJSON_SHAPE = gql`
    query GetGeoJsonShape($shape: String!) {
        getGeoJsonShape(shape: $shape) {
            type
            features {
                type
                geometry {
                    type
                    coordinates
                }
                properties {
                    TYPE
                    RIVER
                    USE_1
                    USE_2
                    USE_3
                    ELEV_M
                    COUNTRY
                    GLWD_ID
                    LAT_DEG
                    VOL_SRC
                    AREA_SKM
                    DAM_NAME
                    DAM_YEAR
                    LONG_DEG
                    LRS_AREA
                    PERIM_KM
                    POLY_SRC
                    gShapeID
                    LAKE_NAME
                    LRS_CATCH
                    MGLD_AREA
                    MGLD_TYPE
                    NEAR_CITY
                    SEC_CNTRY
                    CATCH_TSKM
                    DAM_HEIGHT
                    INFLOW_CMS
                    LRS_AR_SRC
                    VOLUME_CKM
                }
            }
        }
    }
`;

// src/geojson/giovanni-geojson.ts
var GiovanniGeoJsonShapes = class {
  async getShapeFiles() {
    const client = await getGraphQLClient();
    const response = await client.query({
      query: GET_SHAPE_FILES,
      fetchPolicy: "cache-first"
    });
    if (response.errors) {
      throw new Error(
        `Failed to fetch shape files: ${response.errors[0].message}`
      );
    }
    return response.data.shapeFiles;
  }
  async getGeoJson(query) {
    const client = await getGraphQLClient();
    const shapeId = query.replace("shape=", "");
    const response = await client.query({
      query: GET_GEOJSON_SHAPE,
      variables: {
        shape: shapeId
      },
      fetchPolicy: "cache-first"
    });
    if (response.errors) {
      throw new Error(`Failed to fetch GeoJSON: ${response.errors[0].message}`);
    }
    return response.data.getGeoJsonShape;
  }
};

export {
  GiovanniGeoJsonShapes
};
