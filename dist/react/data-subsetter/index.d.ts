import Component from '../../components/data-subsetter/data-subsetter.component.js';
import { type EventName } from '@lit/react';
import type { TerraSubsetJobCompleteEvent } from '../../events/events.js';
export type { TerraSubsetJobCompleteEvent } from '../../events/events.js';
/**
 * @summary Short summary of the component's intended use.
 * @documentation https://disc.gsfc.nasa.gov/components/data-subsetter
 * @status experimental
 * @since 1.0
 *
 * @dependency terra-example
 *
 * @slot - The default slot.
 * @slot example - An example slot.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 *
 * @event terra-subset-job-complete - called when a subset job enters a final state (e.g. successful, failed, completed_with_errors)
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onTerraSubsetJobComplete: EventName<TerraSubsetJobCompleteEvent>;
}>;
export default reactWrapper;
