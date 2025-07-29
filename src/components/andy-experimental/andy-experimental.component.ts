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


  firstUpdated() {

    this.callHarmony()
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
    // Fetch Metadata once view has been created
    gtSource.getView().then((view) => {
      console.log(view)

    })

  }

  async callHarmony() {
    var geotiff_url = 'https://lpo4uv7f0h.execute-api.us-east-1.amazonaws.com/default/harmony-link-proxy?url=https://harmony.uat.earthdata.nasa.gov/service-results/harmony-uat-staging/public/a2762914-4e10-402c-b0ee-504ca508c8b4/7696240/GIOVANNI-timeAvgMap.M2T1NXAER_5_12_4_BCCMASS.20090101-20090105.62E_5N_95E_40N.tif'
      const token = 'redacted'
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
