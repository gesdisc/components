import TerraElement from '../../internal/terra-element.js';
import TerraMap from '../map/map.component.js';
import TerraInput from '../input/input.component.js';
import type { CSSResultGroup } from 'lit';
/**
 * @summary A component that allows input of coordinates and rendering of map.
 * @documentation https://terra-ui.netlify.app/components/spatial-picker
 * @status experimental
 * @since 1.0
 *
 */
export default class TerraSpatialPicker extends TerraElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'terra-map': typeof TerraMap;
        'terra-input': typeof TerraInput;
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
    private _popoverFlipped;
    private ignoreClickOutside;
    private boundHandleClickOutside;
    terraInput: TerraInput;
    map: TerraMap;
    spatialPicker: HTMLElement;
    setValue(value: string): void;
    private _input;
    private _blur;
    private handleClickOutside;
    private _focus;
    private _click;
    /**
     * The spatial picker will either be positioned above or below the input depending on the space available
     * @returns
     */
    private _checkPopoverPosition;
    private _emitMapChange;
    open(): void;
    close(): void;
    setOpen(open: boolean): void;
    private _updateURLParam;
    private _handleMapChange;
    firstUpdated(): void;
    private _handleResize;
    disconnectedCallback(): void;
    renderMap(): import("lit-html").TemplateResult<1>;
    render(): import("lit-html").TemplateResult<1>;
    invalidateSize(): void;
}
