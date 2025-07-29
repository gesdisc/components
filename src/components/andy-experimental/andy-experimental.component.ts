import { html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { Map, View } from 'ol';
import WebGLTileLayer from 'ol/layer/WebGLTile.js';
import OSM from 'ol/source/OSM.js';
import GeoTIFF from 'ol/source/GeoTIFF.js';
import TerraElement from '../../internal/terra-element.js';

export default class TerraAndyExperimental extends TerraElement {
  static styles = css`
    :host {
      display: block;
      height: 600px;
    }

    #map {
      width: 100%;
      height: 100%;
    }
  `;

  @property() attr = 'example';


  async firstUpdated() {

    // var harmony_resp = await this.callHarmony()
    // console.log("Harmony resp: ",harmony_resp)
    
    const url =
      'https://localhost:4000/dist/GIOVANNI-timeAvgMap.M2T1NXAER_5_12_4_BCCMASS.20090101-20090105.62E_5N_95E_40N.tif';

    const baseLayer =  new WebGLTileLayer({
      source: new OSM() as any 
    })

    var gtSource = new GeoTIFF({
      sources: [
        {
          url,
          bands: [1],
          nodata: NaN,
        },
      ],
      interpolate: false,
      normalize: false,
    })
    const gtLayer = new WebGLTileLayer({
      source: gtSource,
    });

    new Map({
      target: this.shadowRoot?.getElementById('map') ?? undefined,
      layers: [baseLayer, gtLayer], // base first, then overlay
      view: new View({
        center: [0, 0],
        zoom: 2,
        projection: 'EPSG:3857', // match OSM (Web Mercator)
      }),
    });

    // Fetch Metadata once view has been created. These attributes are private and not public to the API but are needed for metadata retrieval
    this.fetchGeotiffMetadata(gtSource)

  }

  fetchGeotiffMetadata(gtSource: GeoTIFF) {
    gtSource.getView().then(() => {
      const internal = gtSource as any;
      console.log('sourceImagery_:', internal.sourceImagery_);
      const gtImage = internal.sourceImagery_[0][0];
      const gtMetadata = gtImage.fileDirectory?.GDAL_METADATA;
      console.log(typeof (gtMetadata))
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(gtMetadata, "application/xml");
      // Get all <Item> elements
      const items = xmlDoc.querySelectorAll("Item");
      console.log("items: ",items)

      const dataObj: { [key: string]: string } = {};

      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const name = item.getAttribute("name");
        const value = item.textContent ? item.textContent.trim() : "";
        if(name) {
        dataObj[name] = value
        }
      }
      // const description = dataObj["DESCRIPTION"]
      // const conventions = dataObj["Conventions"]
      // const DOI = dataObj["DOI"]
      // const cell_methods = dataObj["cell_methods"]
      // const latitude_resolution = dataObj["latitude_resolution"]
      // const long_name = dataObj["long_name"]
      // const product_short_name = dataObj["product_short_name"]
      // const product_version = dataObj["product_version"]
      // const units = dataObj["units"]
      // const userenddate = dataObj["userenddate"]
      // const userstartdate = dataObj['userstartdate']
      console.log("Data obj: ",dataObj)
      return dataObj
    })
  }

  async callHarmony() {
    var geotiff_url = 'https://lpo4uv7f0h.execute-api.us-east-1.amazonaws.com/default/harmony-link-proxy?url=https://harmony.uat.earthdata.nasa.gov/service-results/harmony-uat-staging/public/a2762914-4e10-402c-b0ee-504ca508c8b4/7696240/GIOVANNI-timeAvgMap.M2T1NXAER_5_12_4_BCCMASS.20090101-20090105.62E_5N_95E_40N.tif'
     const token = ''
      var response = await fetch(geotiff_url, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      console.log("Response: ")
      console.log(response)
  }

  render() {
    return html` <div id="map"></div> `;
  }
}
