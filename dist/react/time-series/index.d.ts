import Component from '../../components/time-series/time-series.component.js';
import { type EventName } from '@lit/react';
import type { TerraDateRangeChangeEvent } from '../../events/events.js';
import type { TerraTimeSeriesDataChangeEvent } from '../../events/events.js';
export type { TerraDateRangeChangeEvent } from '../../events/events.js';
export type { TerraTimeSeriesDataChangeEvent } from '../../events/events.js';
/**
 * @summary A component for visualizing time series data using the GES DISC Giovanni API.
 * @documentation https://disc.gsfc.nasa.gov/components/time-series
 * @status mvp
 * @since 1.0
 *
 * @dependency terra-plot
 *
 * @event terra-date-range-change - Emitted whenever the date range is modified
 * @event terra-time-series-data-change - Emitted whenever time series data has been fetched from Giovanni
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onTerraDateRangeChange: EventName<TerraDateRangeChangeEvent>;
    onTerraTimeSeriesDataChange: EventName<TerraTimeSeriesDataChangeEvent>;
}>;
export default reactWrapper;
