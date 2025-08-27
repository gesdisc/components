import TerraElement from '../../internal/terra-element.js';
import TerraMap from '../map/map.component.js';
import type { CSSResultGroup } from 'lit';
/**
 * @summary A component that allows input of coordinates and rendering of map.
 * @documentation https://disc.gsfc.nasa.gov/components/spatial-picker
 * @status experimental
 * @since 1.0
 *
 */
export default class TerraSpatialPicker extends TerraElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'terra-map': typeof TerraMap;
    };
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
    /**
     * initialValue of spatial picker
     */
    initialValue: string;
    /**
     * Hide the combobox's label text.
     * When hidden, still presents to screen readers.
     */
    hideLabel: boolean;
    /**
     *  spatial picker label
     */
    label: string;
    /**
     * Spatial constraints for the map (default: '-180, -90, 180, 90')
     */
    spatialConstraints: string;
    isExpanded: boolean;
    /**
     * Whether the map should be shown inline, or as part of the normal content flow
     * the default is false, the map is positioned absolute under the input
     */
    inline: boolean;
    /**
     * Whether the map should show automatically when the input is focused
     */
    showMapOnFocus: boolean;
    mapValue: any;
    error: string;
    spatialInput: HTMLInputElement;
    map: TerraMap;
    private _blur;
    private _focus;
    private _click;
    private _emitMapChange;
    open(): void;
    close(): void;
    private _handleMapChange;
    firstUpdated(): void;
    renderMap(): import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1>;
    invalidateSize(): void;
}
