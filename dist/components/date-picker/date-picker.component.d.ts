import TerraElement from '../../internal/terra-element.js';
import type { CSSResultGroup } from 'lit';
import TerraButton from '../button/button.component.js';
import TerraInput from '../input/input.component.js';
interface DateRange {
    startDate: Date | null;
    endDate: Date | null;
}
interface PresetRange {
    label: string;
    getValue: () => DateRange;
}
/**
 * @summary A date picker component that implements the Horizon Design System (HDS) Date Picker patterns. Supports single date selection or date range selection with calendar popup.
 * @documentation https://terra-ui.netlify.app/components/date-picker
 * @status experimental
 * @since 2.0
 *
 * @dependency terra-input
 * @dependency terra-button
 *
 * @slot - The default slot.
 *
 * @event terra-date-range-change - Emitted when a date selection is made or changed.
 * @eventDetail { startDate: string, endDate: string } - ISO date strings or YYYY-MM-DD format.
 *
 * @csspart base - The component's base wrapper.
 * @csspart input - The date input element (terra-input).
 * @csspart calendar - The calendar dropdown.
 * @csspart sidebar - The preset ranges sidebar.
 *
 * @cssproperty --terra-date-picker-* - All date picker design tokens from horizon.css are supported.
 */
export default class TerraDatePicker extends TerraElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'terra-button': typeof TerraButton;
        'terra-input': typeof TerraInput;
    };
    id: string;
    range: boolean;
    minDate?: string;
    maxDate?: string;
    startDate?: string;
    endDate?: string;
    hideLabel: boolean;
    label: string;
    helpText: string;
    startLabel?: string;
    endLabel?: string;
    showPresets: boolean;
    presets: PresetRange[];
    enableTime: boolean;
    displayFormat?: string;
    inline: boolean;
    splitInputs: boolean;
    isOpen: boolean;
    leftMonth: Date;
    rightMonth: Date;
    selectedStart: Date | null;
    selectedEnd: Date | null;
    hoverDate: Date | null;
    isSelectingRange: boolean;
    showLeftMonthDropdown: boolean;
    showRightMonthDropdown: boolean;
    startHour: number;
    startMinute: number;
    endHour: number;
    endMinute: number;
    timePeriod: 'AM' | 'PM';
    endTimePeriod: 'AM' | 'PM';
    selectedDates: {
        startDate: string;
        endDate: string;
    };
    dropdown: HTMLElement;
    private readonly DAYS;
    private readonly MONTHS;
    private ignoreClickOutside;
    private boundHandleClickOutside;
    constructor();
    private getBounds;
    private doesRangeOverlapBounds;
    private isPresetWithinBounds;
    private get filteredPresets();
    open(): void;
    close(): void;
    setOpen(open: boolean): void;
    handleInlineChange(): void;
    handleStartEndDateChange(): void;
    private initializePresets;
    firstUpdated(): void;
    disconnectedCallback(): void;
    private handleClickOutside;
    private toggleDropdown;
    private formatDisplayDate;
    private getDisplayValue;
    private getStartDateDisplayValue;
    private getEndDateDisplayValue;
    private previousMonth;
    private nextMonth;
    private toggleMonthDropdown;
    private selectMonth;
    private changeYear;
    private handleYearInput;
    private getDaysInMonth;
    private isSameDay;
    private isInRange;
    private isInHoverRange;
    private isDisabled;
    private selectDate;
    private handleDateHover;
    private selectPreset;
    private emitChange;
    private initializeTimeFromDate;
    private changeTime;
    private handleTimeInput;
    private togglePeriod;
    private renderCalendar;
    private renderTimePicker;
    private renderCalendarIcon;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'terra-date-picker': TerraDatePicker;
    }
}
export {};
