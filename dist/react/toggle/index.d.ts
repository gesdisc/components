import Component from '../../components/toggle/toggle.component.js';
import { type EventName } from '@lit/react';
import type { TerraBlurEvent } from '../../events/events.js';
import type { TerraChangeEvent } from '../../events/events.js';
import type { TerraInputEvent } from '../../events/events.js';
import type { TerraFocusEvent } from '../../events/events.js';
import type { TerraInvalidEvent } from '../../events/events.js';
export type { TerraBlurEvent } from '../../events/events.js';
export type { TerraChangeEvent } from '../../events/events.js';
export type { TerraInputEvent } from '../../events/events.js';
export type { TerraFocusEvent } from '../../events/events.js';
export type { TerraInvalidEvent } from '../../events/events.js';
/**
 * @summary Switches allow the user to toggle an option on or off.
 * @documentation https://terra-ui.netlify.app/components/toggle
 * @status stable
 * @since 1.0
 *
 * @slot - The switch's label.
 * @slot help-text - Text that describes how to use the switch. Alternatively, you can use the `help-text` attribute.
 *
 * @event terra-blur - Emitted when the control loses focus.
 * @event terra-change - Emitted when the control's checked state changes.
 * @event terra-input - Emitted when the control receives input.
 * @event terra-focus - Emitted when the control gains focus.
 * @event terra-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart base - The component's base wrapper.
 * @csspart control - The control that houses the switch's thumb.
 * @csspart thumb - The switch's thumb.
 * @csspart label - The switch's label.
 * @csspart form-control-help-text - The help text's wrapper.
 *
 * @cssproperty --width - The width of the switch.
 * @cssproperty --height - The height of the switch.
 * @cssproperty --thumb-size - The size of the thumb.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onTerraBlur: EventName<TerraBlurEvent>;
    onTerraChange: EventName<TerraChangeEvent>;
    onTerraInput: EventName<TerraInputEvent>;
    onTerraFocus: EventName<TerraFocusEvent>;
    onTerraInvalid: EventName<TerraInvalidEvent>;
}>;
export default reactWrapper;
