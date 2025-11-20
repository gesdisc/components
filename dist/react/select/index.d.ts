import Component from '../../components/select/select.component.js';
import { type EventName } from '@lit/react';
import type { TerraChangeEvent } from '../../events/events.js';
import type { TerraClearEvent } from '../../events/events.js';
import type { TerraInputEvent } from '../../events/events.js';
import type { TerraFocusEvent } from '../../events/events.js';
import type { TerraBlurEvent } from '../../events/events.js';
import type { TerraShowEvent } from '../../events/events.js';
import type { TerraAfterShowEvent } from '../../events/events.js';
import type { TerraHideEvent } from '../../events/events.js';
import type { TerraAfterHideEvent } from '../../events/events.js';
import type { TerraInvalidEvent } from '../../events/events.js';
export type { TerraChangeEvent } from '../../events/events.js';
export type { TerraClearEvent } from '../../events/events.js';
export type { TerraInputEvent } from '../../events/events.js';
export type { TerraFocusEvent } from '../../events/events.js';
export type { TerraBlurEvent } from '../../events/events.js';
export type { TerraShowEvent } from '../../events/events.js';
export type { TerraAfterShowEvent } from '../../events/events.js';
export type { TerraHideEvent } from '../../events/events.js';
export type { TerraAfterHideEvent } from '../../events/events.js';
export type { TerraInvalidEvent } from '../../events/events.js';
/**
 * @summary Select fields are a form field used to select one option from a list.
 * @documentation https://terra-ui.netlify.app/components/select
 * @status stable
 * @since 2.0
 *
 * @dependency terra-icon
 * @dependency terra-popup
 * @dependency terra-tag
 *
 * @slot - The listbox options. Must be `<terra-option>` elements.
 * @slot label - The input's label. Alternatively, you can use the `label` attribute.
 * @slot prefix - Used to prepend a presentational icon or similar element to the combobox.
 * @slot suffix - Used to append a presentational icon or similar element to the combobox.
 * @slot clear-icon - An icon to use in lieu of the default clear icon.
 * @slot expand-icon - The icon to show when the control is expanded and collapsed. Rotates on open and close.
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
 *
 * @event terra-change - Emitted when the control's value changes.
 * @event terra-clear - Emitted when the control's value is cleared.
 * @event terra-input - Emitted when the control receives input.
 * @event terra-focus - Emitted when the control gains focus.
 * @event terra-blur - Emitted when the control loses focus.
 * @event terra-show - Emitted when the select's menu opens.
 * @event terra-after-show - Emitted after the select's menu opens and all animations are complete.
 * @event terra-hide - Emitted when the select's menu closes.
 * @event terra-after-hide - Emitted after the select's menu closes and all animations are complete.
 * @event terra-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart form-control - The form control that wraps the label, input, and help text.
 * @csspart form-control-label - The label's wrapper.
 * @csspart form-control-input - The select's wrapper.
 * @csspart form-control-help-text - The help text's wrapper.
 * @csspart combobox - The container the wraps the prefix, suffix, combobox, clear icon, and expand button.
 * @csspart prefix - The container that wraps the prefix slot.
 * @csspart suffix - The container that wraps the suffix slot.
 * @csspart display-input - The element that displays the selected option's label, an `<input>` element.
 * @csspart listbox - The listbox container where options are slotted.
 * @csspart tags - The container that houses option tags when `multiple` is used.
 * @csspart tag - The individual tags that represent each multiselect option.
 * @csspart clear-button - The clear button.
 * @csspart expand-icon - The container that wraps the expand icon.
 *
 * @cssproperty --terra-select-* - All select design tokens from horizon.css are supported.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onTerraChange: EventName<TerraChangeEvent>;
    onTerraClear: EventName<TerraClearEvent>;
    onTerraInput: EventName<TerraInputEvent>;
    onTerraFocus: EventName<TerraFocusEvent>;
    onTerraBlur: EventName<TerraBlurEvent>;
    onTerraShow: EventName<TerraShowEvent>;
    onTerraAfterShow: EventName<TerraAfterShowEvent>;
    onTerraHide: EventName<TerraHideEvent>;
    onTerraAfterHide: EventName<TerraAfterHideEvent>;
    onTerraInvalid: EventName<TerraInvalidEvent>;
}>;
export default reactWrapper;
