import Component from '../../components/date-picker/date-picker.component.js';
import { type EventName } from '@lit/react';
import type { TerraDateRangeChangeEvent } from '../../events/events.js';
export type { TerraDateRangeChangeEvent } from '../../events/events.js';
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
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onTerraDateRangeChange: EventName<TerraDateRangeChangeEvent>;
}>;
export default reactWrapper;
