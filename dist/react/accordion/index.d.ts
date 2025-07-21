import Component from '../../components/accordion/accordion.component.js';
import { type EventName } from '@lit/react';
import type { TerraAccordionToggleEvent } from '../../events/events.js';
export type { TerraAccordionToggleEvent } from '../../events/events.js';
/**
 * @summary A collapsible content panel for showing and hiding content.
 * @documentation https://disc.gsfc.nasa.gov/components/accordion
 * @status experimental
 * @since 1.0
 *
 * The TerraAccordion component provides a simple, accessible way to show and hide content. It uses native <details> and <summary> elements for built-in accessibility and keyboard support. The summary/header can be set via the `summary` property for simple text, or via a named `summary` slot for custom content (such as icons or rich HTML). The open state can be controlled with the `open` property, which is reflected as an attribute.
 *
 * @slot - The default slot for accordion content.
 * @slot summary - The summary/header for the accordion (optional, overrides summary property)
 *
 * @property {string} summary - The summary/header for the accordion. Use the property for simple text, or the slot for custom content.
 * @property {boolean} open - Whether the accordion is open or not. This property is reflected as an attribute and can be controlled programmatically or by user interaction.
 *
 * @event terra-accordion-toggle - emitted when the accordion opens or closes
 *
 * @dependency terra-icon
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onTerraAccordionToggle: EventName<TerraAccordionToggleEvent>;
}>;
export default reactWrapper;
