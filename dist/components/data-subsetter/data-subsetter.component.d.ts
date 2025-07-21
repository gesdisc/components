import TerraElement from '../../internal/terra-element.js';
import type { CSSResultGroup } from 'lit';
import { type BoundingBox, type CollectionWithAvailableServices, type Variable } from '../../data-services/types.js';
import TerraSpatialPicker from '../spatial-picker/spatial-picker.component.js';
import type { LatLng } from '../map/type.js';
/**
 * @summary Short summary of the component's intended use.
 * @documentation https://disc.gsfc.nasa.gov/components/data-subsetter
 * @status experimental
 * @since 1.0
 *
 * @dependency terra-example
 *
 * @slot - The default slot.
 * @slot example - An example slot.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 *
 * @event terra-subset-job-complete - called when a subset job enters a final state (e.g. successful, failed, completed_with_errors)
 */
export default class TerraDataSubsetter extends TerraElement {
    #private;
    static styles: CSSResultGroup;
    static dependencies: Record<string, typeof TerraElement>;
    collectionEntryId?: string;
    showCollectionSearch?: boolean;
    jobId?: string;
    bearerToken?: string;
    collectionWithServices?: CollectionWithAvailableServices;
    selectedVariables: Variable[];
    expandedVariableGroups: Set<string>;
    touchedFields: Set<string>;
    spatialSelection: BoundingBox | LatLng | null;
    selectedDateRange: {
        startDate: string | null;
        endDate: string | null;
    };
    selectedFormat: string;
    cancelingGetData: boolean;
    selectedTab: 'web-links' | 'selected-params';
    refineParameters: boolean;
    showDownloadMenu: boolean;
    renderedInDialog: boolean;
    spatialPicker: TerraSpatialPicker;
    jobIdChanged(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    collectionChanged(): void;
    render(): import("lit-html").TemplateResult<1>;
    minimizeDialog(): void;
    renderHistoryPanel(): void;
}
