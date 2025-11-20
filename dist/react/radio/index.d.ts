import Component from '../../components/radio/radio.component.js';
import { type EventName } from '@lit/react';
import type { TerraBlurEvent } from '../../events/events.js';
import type { TerraChangeEvent } from '../../events/events.js';
import type { TerraFocusEvent } from '../../events/events.js';
import type { TerraInputEvent } from '../../events/events.js';
import type { TerraInvalidEvent } from '../../events/events.js';
export type { TerraBlurEvent } from '../../events/events.js';
export type { TerraChangeEvent } from '../../events/events.js';
export type { TerraFocusEvent } from '../../events/events.js';
export type { TerraInputEvent } from '../../events/events.js';
export type { TerraInvalidEvent } from '../../events/events.js';
/**
 * @summary Radio buttons are a form field used when only a single selection can be made from a list.
 * @documentation https://terra-ui.netlify.app/components/radio
 * @status stable
 * @since 2.0
 *
 * @slot - The radio's label.
 *
 * @event terra-blur - Emitted when the radio loses focus.
 * @event terra-change - Emitted when the checked state changes.
 * @event terra-focus - Emitted when the radio gains focus.
 * @event terra-input - Emitted when the radio receives input.
 * @event terra-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart base - The component's base wrapper.
 * @csspart control - The circular container that wraps the radio's checked state.
 * @csspart control--checked - The radio control when the radio is checked.
 * @csspart checked-icon - The checked icon, an SVG element.
 * @csspart label - The container that wraps the radio's label.
 *
 * @cssproperty --terra-radio-* - All radio design tokens from horizon.css are supported.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onTerraBlur: EventName<TerraBlurEvent>;
    onTerraChange: EventName<TerraChangeEvent>;
    onTerraFocus: EventName<TerraFocusEvent>;
    onTerraInput: EventName<TerraInputEvent>;
    onTerraInvalid: EventName<TerraInvalidEvent>;
}>;
export default reactWrapper;
