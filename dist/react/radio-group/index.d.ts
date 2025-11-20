import Component from '../../components/radio-group/radio-group.component.js';
import { type EventName } from '@lit/react';
import type { TerraChangeEvent } from '../../events/events.js';
import type { TerraInputEvent } from '../../events/events.js';
import type { TerraInvalidEvent } from '../../events/events.js';
export type { TerraChangeEvent } from '../../events/events.js';
export type { TerraInputEvent } from '../../events/events.js';
export type { TerraInvalidEvent } from '../../events/events.js';
/**
 * @summary Radio groups are used to group multiple radio buttons so they function as a single form control.
 * @documentation https://terra-ui.netlify.app/components/radio-group
 * @status stable
 * @since 2.0
 *
 * @slot - The default slot where `<terra-radio>` elements are placed.
 * @slot label - The radio group's label. Required for proper accessibility. Alternatively, you can use the `label`
 *  attribute.
 * @slot help-text - Text that describes how to use the radio group. Alternatively, you can use the `help-text` attribute.
 *
 * @event terra-change - Emitted when the radio group's selected value changes.
 * @event terra-input - Emitted when the radio group receives user input.
 * @event terra-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The input's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 *
 * @cssproperty --terra-radio-group-* - All radio group design tokens from horizon.css are supported.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onTerraChange: EventName<TerraChangeEvent>;
    onTerraInput: EventName<TerraInputEvent>;
    onTerraInvalid: EventName<TerraInvalidEvent>;
}>;
export default reactWrapper;
