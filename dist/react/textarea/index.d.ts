import Component from '../../components/textarea/textarea.component.js';
import { type EventName } from '@lit/react';
import type { TerraInputEvent } from '../../events/events.js';
import type { TerraChangeEvent } from '../../events/events.js';
import type { TerraFocusEvent } from '../../events/events.js';
import type { TerraBlurEvent } from '../../events/events.js';
import type { TerraInvalidEvent } from '../../events/events.js';
export type { TerraInputEvent } from '../../events/events.js';
export type { TerraChangeEvent } from '../../events/events.js';
export type { TerraFocusEvent } from '../../events/events.js';
export type { TerraBlurEvent } from '../../events/events.js';
export type { TerraInvalidEvent } from '../../events/events.js';
/**
 * @summary A textarea component with consistent styling across the design system.
 * @documentation https://terra-ui.netlify.app/components/textarea
 * @status stable
 * @since 2.0
 *
 * @slot help-text - Text that describes how to use the textarea. Alternatively, you can use the `help-text` attribute.
 *
 * @event terra-input - Emitted when the textarea receives input.
 * @event terra-change - Emitted when an alteration to the control's value is committed by the user.
 * @event terra-focus - Emitted when the textarea gains focus.
 * @event terra-blur - Emitted when the textarea loses focus.
 * @event terra-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart base - The component's base wrapper.
 * @csspart textarea - The internal textarea control.
 * @csspart form-control-help-text - The help text's wrapper.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onTerraInput: EventName<TerraInputEvent>;
    onTerraChange: EventName<TerraChangeEvent>;
    onTerraFocus: EventName<TerraFocusEvent>;
    onTerraBlur: EventName<TerraBlurEvent>;
    onTerraInvalid: EventName<TerraInvalidEvent>;
}>;
export default reactWrapper;
