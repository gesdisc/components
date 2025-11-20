import TerraElement from '../../internal/terra-element.js';
import type { CSSResultGroup } from 'lit';
import { type API } from 'nouislider';
/**
 * @summary A flexible slider component for selecting single values or ranges with optional input fields.
 * @documentation https://terra-ui.netlify.app/components/slider
 * @status experimental
 * @since 1.0
 *
 * @slot - Additional content below the slider.
 *
 * @csspart slider - The slider container element.
 * @csspart inputs - The input fields container (when show-inputs is enabled).
 *
 * @cssproperty --terra-slider-track-color - Color of the slider track.
 * @cssproperty --terra-slider-handle-color - Color of the slider handles.
 * @cssproperty --terra-slider-connect-color - Color of the connected range.
 * @cssproperty --terra-input-border-color - Border color for input fields.
 * @cssproperty --terra-input-background-color - Background color for input fields.
 * @cssproperty --terra-input-color - Text color for input fields.
 *
 * @event terra-slider-change - Emitted when the slider value changes.
 * @eventDetail { value: number } - For single mode sliders.
 * @eventDetail { startValue: number, endValue: number } - For range mode sliders.
 */
export type SliderMode = 'single' | 'range';
export default class TerraSlider extends TerraElement {
    static styles: CSSResultGroup;
    slider: HTMLElement & {
        noUiSlider: API;
    };
    /**
     * The slider mode - either 'single' for one value or 'range' for selecting a range.
     * @default 'single'
     */
    mode: SliderMode;
    /**
     * The minimum value of the slider.
     * @default 0
     */
    min: number;
    /**
     * The maximum value of the slider.
     * @default 100
     */
    max: number;
    /**
     * The step size for the slider. Use integers (1, 2, 5) for whole numbers or decimals (0.1, 0.2, 0.5) for fractional steps.
     * @default 1
     */
    step: number;
    /**
     * Disables the slider.
     * @default false
     */
    disabled: boolean;
    /**
     * Shows tick marks and labels on the slider.
     * @default false
     */
    hasPips: boolean;
    /**
     * Shows tooltips on the slider handles.
     * When false (default), selected values are shown in the top right instead.
     * @default false
     */
    hasTooltips: boolean;
    /**
     * Shows input fields below the slider for precise value entry.
     * @default false
     */
    showInputs: boolean;
    /**
     * The current value for single mode sliders.
     */
    value?: number;
    /**
     * The start value for range mode sliders.
     */
    startValue?: number;
    /**
     * The end value for range mode sliders.
     */
    endValue?: number;
    /**
     * The label text for the slider.
     * @default 'Slider'
     */
    label: string;
    /**
     * Hide the slider's label text.
     * When hidden, still presents to screen readers.
     * @default false
     */
    hideLabel: boolean;
    private currentStartValue?;
    private currentEndValue?;
    private currentValue?;
    private hasBeenManipulated;
    updateSlider(): void;
    disabledChanged(): void;
    firstUpdated(): void;
    private _getStartValues;
    renderSlider(): void;
    private _updateInputFields;
    private _getFormatter;
    private _formatValue;
    private handleClear;
    render(): import("lit-html").TemplateResult<1>;
    private _renderInputFields;
    private _handleInputChange;
    private _handleInputKeydown;
}
