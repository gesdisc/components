import TerraElement from '../../internal/terra-element.js';
import type { CSSResultGroup } from 'lit';
import TerraLoader from '../loader/loader.component.js';
import TerraIcon from '../icon/icon.component.js';
import TerraDatePicker from '../date-picker/date-picker.component.js';
import TerraSpatialPicker from '../spatial-picker/spatial-picker.component.js';
import type { MapEventDetail } from '../map/type.js';
import TerraSlider from '../slider/slider.component.js';
/**
 * @summary Discover and export collection granules with search, temporal, spatial, and cloud cover filters.
 * @documentation https://terra-ui.netlify.app/components/data-access
 * @status stable
 * @since 1.0
 *
 * @dependency terra-loader
 * @dependency terra-icon
 * @dependency terra-date-picker
 * @dependency terra-spatial-picker
 * @dependency terra-slider
 *
 * @attr short-name - Collection short name used to build the Collection Entry ID.
 * @attr version - Collection version used to build the Collection Entry ID.
 */
export default class TerraDataAccess extends TerraElement {
    #private;
    static styles: CSSResultGroup;
    static dependencies: {
        'terra-loader': typeof TerraLoader;
        'terra-icon': typeof TerraIcon;
        'terra-date-picker': typeof TerraDatePicker;
        'terra-spatial-picker': typeof TerraSpatialPicker;
        'terra-slider': typeof TerraSlider;
    };
    shortName?: string;
    version?: string;
    limit: number;
    page: number;
    search: string;
    startDate: string;
    endDate: string;
    location: MapEventDetail | null;
    cloudCover: {
        min?: number;
        max?: number;
    };
    showDownloadMenu: boolean;
    cloudCoverPickerOpen: boolean;
    datePickerOpen: boolean;
    spatialPickerOpen: boolean;
    datePickerRef: import("lit-html/directives/ref.js").Ref<TerraDatePicker>;
    spatialPickerRef: import("lit-html/directives/ref.js").Ref<TerraSpatialPicker>;
    cloudCoverSliderRef: import("lit-html/directives/ref.js").Ref<TerraSlider>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstVisible(): void;
    handleSearch(search: string): void;
    render(): import("lit-html").TemplateResult<1>;
}
