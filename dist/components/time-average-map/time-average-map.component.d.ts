import { Map } from 'ol';
import WebGLTileLayer from 'ol/layer/WebGLTile.js';
import GeoTIFF from 'ol/source/GeoTIFF.js';
import TerraElement from '../../internal/terra-element.js';
import type { CSSResultGroup } from 'lit';
import TerraButton from '../button/button.component.js';
import TerraIcon from '../icon/icon.component.js';
import TerraPlotToolbar from '../plot-toolbar/plot-toolbar.component.js';
import type { Variable } from '../browse-variables/browse-variables.types.js';
import { AuthController } from '../../auth/auth.controller.js';
import TerraLoader from '../loader/loader.component.js';
export default class TerraTimeAverageMap extends TerraElement {
    #private;
    static styles: CSSResultGroup;
    static dependencies: {
        'terra-button': typeof TerraButton;
        'terra-icon': typeof TerraIcon;
        'terra-plot-toolbar': typeof TerraPlotToolbar;
        'terra-loader': typeof TerraLoader;
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
    long_name: string;
    activeMenuItem: any;
    catalogVariable: Variable;
    colormaps: string[];
    colorMapName: string;
    _authController: AuthController<this>;
    /**
     * anytime the collection or variable changes, we'll fetch the variable from the catalog to get all of it's metadata
     */
    _fetchVariableTask: import("@lit/task").Task<(string | undefined)[], void>;
    handlePropertyChange(): void;
    firstUpdated(): Promise<void>;
    updateGeoTIFFLayer(blob: Blob): Promise<void>;
    intializeMap(): void;
    fetchGeotiffMetadata(gtSource: GeoTIFF): Promise<{
        [key: string]: string;
    }>;
    renderPixelValues(map: Map, gtLayer: WebGLTileLayer): void;
    getMinMax(gtSource: any): Promise<{
        min: number;
        max: number;
    }>;
    getColorStops(name: any, min: any, max: any, steps: any, reverse: any): any[];
    applyColorToLayer(gtSource: any, color: String): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
