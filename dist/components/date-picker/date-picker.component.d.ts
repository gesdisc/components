import TerraElement from '../../internal/terra-element.js';
import type { CSSResultGroup } from 'lit';
import 'lit-flatpickr';
import TerraButton from '../button/button.component.js';
/**
 * @summary A date picker component that supports single date selection or date range selection.
 * @documentation https://disc.gsfc.nasa.gov/components/date-picker
 * @status experimental
 * @since 1.0
 *
 * @slot - The default slot.
 *
 * @csspart base - The component's base wrapper.
 * @csspart input - The date input element.
 */
export default class TerraDatePicker extends TerraElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'terra-button': typeof TerraButton;
    };
    selectedDates: {
        startDate: string | null;
        endDate: string | null;
    };
    id: string;
    range: boolean;
    minDate?: string;
    maxDate?: string;
    startDate?: string;
    endDate?: string;
    defaultDate?: string;
    allowInput: boolean;
    altFormat: string;
    altInput: boolean;
    altInputClass: string;
    dateFormat: string;
    enableTime: boolean;
    time24hr: boolean;
    weekNumbers: boolean;
    static: boolean;
    position: 'auto' | 'above' | 'below';
    showMonths: number;
    hideLabel: boolean;
    label: string;
    private flatpickrElement;
    firstUpdated(): void;
    private handleChange;
    private handleBlur;
    render(): import("lit-html").TemplateResult<1>;
}
