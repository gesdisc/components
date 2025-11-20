import Component from '../../components/checkbox/checkbox.component.js';
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
 * @summary Checkboxes are a form field used when there are multiple options to select from a list.
 * @documentation https://terra-ui.netlify.app/components/checkbox
 * @status stable
 * @since 2.0
 *
 * @dependency terra-icon
 *
 * @slot - The checkbox's label.
 * @slot help-text - Text that describes how to use the checkbox. Alternatively, you can use the `help-text` attribute.
 *
 * @event terra-blur - Emitted when the checkbox loses focus.
 * @event terra-change - Emitted when the checked state changes.
 * @event terra-focus - Emitted when the checkbox gains focus.
 * @event terra-input - Emitted when the checkbox receives input.
 * @event terra-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart base - The component's base wrapper.
 * @csspart control - The square container that wraps the checkbox's checked state.
 * @csspart control--checked - Matches the control part when the checkbox is checked.
 * @csspart control--indeterminate - Matches the control part when the checkbox is indeterminate.
 * @csspart checked-icon - The checked icon, an `<terra-icon>` element.
 * @csspart indeterminate-icon - The indeterminate icon, an `<terra-icon>` element.
 * @csspart label - The container that wraps the checkbox's label.
 * @csspart form-control-help-text - The help text's wrapper.
 *
 * @cssproperty --terra-checkbox-* - All checkbox design tokens from horizon.css are supported.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onTerraBlur: EventName<TerraBlurEvent>;
    onTerraChange: EventName<TerraChangeEvent>;
    onTerraFocus: EventName<TerraFocusEvent>;
    onTerraInput: EventName<TerraInputEvent>;
    onTerraInvalid: EventName<TerraInvalidEvent>;
}>;
export default reactWrapper;
