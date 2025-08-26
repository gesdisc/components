import TerraButton from '../button/button.component.js';
import TerraAlert from '../alert/alert.component.js';
import TerraElement from '../../internal/terra-element.js';
import TerraIcon from '../icon/icon.component.js';
import TerraLoader from '../loader/loader.component.js';
import TerraPlot from '../plot/plot.component.js';
import type { CSSResultGroup } from 'lit';
import type { MenuNames } from './time-series.types.js';
import type { Variable } from '../browse-variables/browse-variables.types.js';
import { AuthController } from '../../auth/auth.controller.js';
/**
 * @summary A component for visualizing time series data using the GES DISC Giovanni API.
 * @documentation https://disc.gsfc.nasa.gov/components/time-series
 * @status mvp
 * @since 1.0
 *
 * @dependency terra-plot
 *
 * @event terra-date-range-change - Emitted whenever the date range is modified
 * @event terra-time-series-data-change - Emitted whenever time series data has been fetched from Giovanni
 */
export default class TerraTimeSeries extends TerraElement {
    #private;
    static styles: CSSResultGroup;
    static dependencies: {
        'terra-plot': typeof TerraPlot;
        'terra-loader': typeof TerraLoader;
        'terra-icon': typeof TerraIcon;
        'terra-button': typeof TerraButton;
        'terra-alert': typeof TerraAlert;
    };
    /**
     * a variable entry ID (ex: GPM_3IMERGHH_06_precipitationCal)
     */
    variableEntryId?: string;
    /**
     * a collection entry id (ex: GPM_3IMERGHH_06)
     * only required if you don't include a variableEntryId
     */
    collection?: string;
    /**
     * a variable short name to plot (ex: precipitationCal)
     * only required if you don't include a variableEntryId
     */
    variable?: string;
    /**
     * The start date for the time series plot. (ex: 2021-01-01)
     */
    startDate?: string;
    /**
     * The end date for the time series plot. (ex: 2021-01-01)
     */
    endDate?: string;
    /**
     * The point location in "lat,lon" format.
     * Or the bounding box in "west,south,east,north" format.
     */
    location?: string;
    /**
     * The token to be used for authentication with remote servers.
     * The component provides the header "Authorization: Bearer" (the request header and authentication scheme).
     * The property's value will be inserted after "Bearer" (the authentication scheme).
     */
    bearerToken?: string;
    plot: TerraPlot;
    menu: HTMLMenuElement;
    catalogVariable: Variable;
    /**
     * user quota reached maximum request
     */
    private quotaExceededOpen;
    /**
     * if true, we'll show a warning to the user about them requesting a large number of data points
     */
    showDataPointWarning: boolean;
    /**
     * stores the estimated
     */
    estimatedDataPoints: number;
    /**
     *
     */
    activeMenuItem: MenuNames;
    handleFocus(_oldValue: MenuNames, newValue: MenuNames): void;
    _authController: AuthController<this>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    getVariableEntryId(): string | undefined;
}
