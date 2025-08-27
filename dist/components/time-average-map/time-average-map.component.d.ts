import GeoTIFF from 'ol/source/GeoTIFF.js';
import TerraElement from '../../internal/terra-element.js';
import type { CSSResultGroup } from 'lit';
import TerraButton from '../button/button.component.js';
import TerraIcon from '../icon/icon.component.js';
import TerraPlotToolbar from '../plot-toolbar/plot-toolbar.component.js';
import { Task } from '@lit/task';
import type { Variable } from '../browse-variables/browse-variables.types.js';
import { AuthController } from '../../auth/auth.controller.js';
export default class TerraTimeAverageMap extends TerraElement {
    #private;
    static styles: CSSResultGroup;
    static dependencies: {
        'terra-button': typeof TerraButton;
        'terra-icon': typeof TerraIcon;
        'terra-plot-toolbar': typeof TerraPlotToolbar;
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
    catalogVariable: Variable;
    _authController: AuthController<this>;
    /**
     * anytime the collection or variable changes, we'll fetch the variable from the catalog to get all of it's metadata
     */
    _fetchVariableTask: Task<(string | undefined)[], void>;
    firstUpdated(): Promise<void>;
    updateGeoTIFFLayer(): Promise<void>;
    intializeMap(): void;
    fetchGeotiffMetadata(gtSource: GeoTIFF): Promise<{
        [key: string]: string;
    }>;
    getVariableEntryId(): string | undefined;
    render(): import("lit-html").TemplateResult<1>;
}
