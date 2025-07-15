import TerraElement from '../../internal/terra-element.js';
import type { CSSResultGroup } from 'lit';
import { type API } from 'nouislider';
export type TimeScale = 'half-hourly' | 'hourly' | 'daily';
/**
 * @summary Short summary of the component's intended use.
 * @documentation https://disc.gsfc.nasa.gov/components/date-range-slider
 * @status experimental
 * @since 1.0
 *
 * @slot - The default slot.
 * @slot example - An example slot.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
export default class TerraDateRangeSlider extends TerraElement {
    static styles: CSSResultGroup;
    slider: HTMLElement & {
        noUiSlider: API;
    };
    timeScale: TimeScale;
    minDate: string;
    maxDate: string;
    /**
     * The start date for the time series plot.
     * @example 2021-01-01
     */
    startDate: string;
    endDate: string;
    disabled: boolean;
    hasPips: boolean;
    updateSlider(): void;
    disabledChanged(): void;
    firstUpdated(): void;
    renderSlider(): void;
    renderEmptySlider(): void;
    private _getStep;
    private _getSliderFormatter;
    private _formatDate;
    render(): import("lit-html").TemplateResult<1>;
}
