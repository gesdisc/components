import Component from '../../components/data-subsetter/data-subsetter.component.js';
import { type EventName } from '@lit/react';
import type { TerraSubsetJobCompleteEvent } from '../../events/events.js';
export type { TerraSubsetJobCompleteEvent } from '../../events/events.js';
/**
 * @summary Easily allow users to select, subset, and download NASA Earth science data collections with spatial, temporal, and variable filters.
 * @documentation https://disc.gsfc.nasa.gov/components/data-subsetter
 * @status stable
 * @since 1.0
 *
 * @dependency terra-accordion
 * @dependency terra-date-picker
 * @dependency terra-icon
 * @dependency terra-spatial-picker
 *
 * @event terra-subset-job-complete - called when a subset job enters a final state (e.g. successful, failed, completed_with_errors)
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onTerraSubsetJobComplete: EventName<TerraSubsetJobCompleteEvent>;
}>;
export default reactWrapper;
