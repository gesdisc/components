import TerraElement from '../../internal/terra-element.js';
import type { CSSResultGroup } from 'lit';
import TerraVariableCombobox from '../variable-combobox/variable-combobox.component.js';
import TerraSpatialPicker from '../spatial-picker/spatial-picker.component.js';
import TerraDateRangeSlider from '../date-range-slider/date-range-slider.component.js';
import type { Variable } from '../browse-variables/browse-variables.types.js';
import TerraTimeSeries from '../time-series/time-series.component.js';
/**
 * @summary A component for visualizing Hydrology Data Rods time series using the GES DISC Giovanni API
 * @documentation https://disc.gsfc.nasa.gov/components/data-rods
 * @status mvp
 * @since 1.0
 *
 * @event terra-date-range-change - Emitted whenever the date range of the date slider is updated
 */
export default class TerraDataRods extends TerraElement {
    #private;
    static styles: CSSResultGroup;
    static dependencies: {
        'terra-time-series': typeof TerraTimeSeries;
        'terra-date-range-slider': typeof TerraDateRangeSlider;
        'terra-spatial-picker': typeof TerraSpatialPicker;
        'terra-variable-combobox': typeof TerraVariableCombobox;
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
     */
    location?: string;
    /**
     * The token to be used for authentication with remote servers.
     * The component provides the header "Authorization: Bearer" (the request header and authentication scheme).
     * The property's value will be inserted after "Bearer" (the authentication scheme).
     */
    bearerToken: string;
    catalogVariable: Variable;
    render(): import("lit-html").TemplateResult<1>;
}
