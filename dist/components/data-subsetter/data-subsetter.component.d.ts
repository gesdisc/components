import TerraElement from '../../internal/terra-element.js';
import type { CSSResultGroup } from 'lit';
import { type BoundingBox, type CollectionWithAvailableServices, type Variable } from '../../data-services/types.js';
import TerraSpatialPicker from '../spatial-picker/spatial-picker.component.js';
import type { CmrSearchResult } from '../../metadata-catalog/types.js';
import type { LatLng } from 'leaflet';
/**
 * @summary Easily allow users to select, subset, and download NASA Earth science data collections with spatial, temporal, and variable filters.
 * @documentation https://disc.gsfc.nasa.gov/components/data-subsetter
 * @status stable
 * @since 1.0
 *
 * @dependency terra-accordion
 * @dependency terra-date-picker
 * @dependency terra-icon
 * @dependency terra-spatial-picker
 *
 * @event terra-subset-job-complete - called when a subset job enters a final state (e.g. successful, failed, completed_with_errors)
 */
export default class TerraDataSubsetter extends TerraElement {
    #private;
    static styles: CSSResultGroup;
    static dependencies: Record<string, typeof TerraElement>;
    collectionEntryId?: string;
    showCollectionSearch?: boolean;
    showHistoryPanel?: boolean;
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
    collectionSearchType: 'collection' | 'variable' | 'all';
    collectionSearchQuery?: string;
    collectionSearchLoading: boolean;
    collectionSearchResults?: Array<CmrSearchResult>;
    collectionLoading: boolean;
    collectionAccordionOpen: boolean;
    spatialPicker: TerraSpatialPicker;
    jobIdChanged(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    collectionChanged(): void;
    render(): import("lit-html").TemplateResult<1>;
    minimizeDialog(): void;
    handleCollectionSearch(searchTerm: string): void;
    renderHistoryPanel(): void;
}
