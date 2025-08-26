import GeoTIFF from 'ol/source/GeoTIFF.js';
import TerraElement from '../../internal/terra-element.js';
import type { CSSResultGroup } from 'lit';
import TerraButton from '../button/button.component.js';
export default class TerraTimeAverageMap extends TerraElement {
    #private;
    static styles: CSSResultGroup;
    static dependencies: {
        'terra-button': typeof TerraButton;
    };
    /**
        * a collection entry id (ex: GPM_3IMERGHH_06)
        */
    collection?: string;
    variable?: string;
    startDate?: string;
    endDate?: string;
    /**
     * The point location in "lat,lon" format.
     * Or the bounding box in "west,south,east,north" format.
     */
    location?: string;
    activeMenuItem: any;
    handleFocus(_oldValue: any, newValue: any): void;
    /**
   * The token to be used for authentication with remote servers.
   * The component provides the header "Authorization: Bearer" (the request header and authentication scheme).
   * The property's value will be inserted after "Bearer" (the authentication scheme).
   */
    bearerToken: string;
    long_name: string;
    menu: HTMLMenuElement;
    firstUpdated(): Promise<void>;
    updateGeoTIFFLayer(): Promise<void>;
    intializeMap(): void;
    fetchGeotiffMetadata(gtSource: GeoTIFF): Promise<{
        [key: string]: string;
    }>;
    render(): import("lit-html").TemplateResult<1>;
}
