import type { CSSResultGroup } from 'lit';
import TerraElement from '../../internal/terra-element.js';
import { Leaflet } from './leaflet-utils.js';
import { MapController } from './map.controller.js';
import type { ShapeFilesResponse } from '../../geojson/types.js';
/**
 * @summary A map component for visualizing and selecting coordinates.
 * @documentation https://disc.gsfc.nasa.gov/components/map
 * @status mvp
 * @since 1.0
 *
 */
export default class TerraMap extends TerraElement {
    #private;
    static styles: CSSResultGroup;
    /**
     * Minimum zoom level of the map.
     */
    minZoom: number;
    /**
     * Maximum zoom level of the map.
     */
    maxZoom: number;
    /**
     * Initial map zoom level
     */
    zoom: number;
    /**
     * has map navigation toolbar
     */
    hasNavigation: boolean;
    /**
     * has coordinate tracker
     */
    hasCoordTracker: boolean;
    /**
     * has shape selector
     */
    hasShapeSelector: boolean;
    hideBoundingBoxSelection?: boolean;
    hidePointSelection?: boolean;
    value: any;
    mapElement: HTMLDivElement;
    valueChanged(_oldValue: any, newValue: any): void;
    map: Leaflet;
    /**
     * List of geojson shapes
     */
    shapes: ShapeFilesResponse;
    _mapController: MapController;
    connectedCallback(): Promise<void>;
    firstUpdated(): Promise<void>;
    getDrawLayer(): any;
    selectTemplate(): import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1>;
    invalidateSize(): void;
}
