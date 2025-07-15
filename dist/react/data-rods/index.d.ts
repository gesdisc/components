import Component from '../../components/data-rods/data-rods.component.js';
import { type EventName } from '@lit/react';
import type { TerraDateRangeChangeEvent } from '../../events/events.js';
export type { TerraDateRangeChangeEvent } from '../../events/events.js';
/**
 * @summary A component for visualizing Hydrology Data Rods time series using the GES DISC Giovanni API
 * @documentation https://disc.gsfc.nasa.gov/components/data-rods
 * @status mvp
 * @since 1.0
 *
 * @event terra-date-range-change - Emitted whenever the date range of the date slider is updated
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onTerraDateRangeChange: EventName<TerraDateRangeChangeEvent>;
}>;
export default reactWrapper;
