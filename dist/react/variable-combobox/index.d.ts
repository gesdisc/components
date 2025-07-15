import Component from '../../components/variable-combobox/variable-combobox.component.js';
import { type EventName } from '@lit/react';
import type { TerraComboboxChangeEvent } from '../../events/events.js';
export type { TerraComboboxChangeEvent } from '../../events/events.js';
/**
 * @summary Fuzzy-search for dataset variables in combobox with list autocomplete.
 * @documentation https://disc.gsfc.nasa.gov/components/variable-combobox
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list/
 * @status MVP
 * @since 1.0
 *
 * @csspart base - A `search` element, the component's base.
 * @csspart combobox - An `input` element used for searching.
 * @csspart button - A `button` used for toggling the listbox's visibility.
 * @csspart listbox - A `ul` that holds the clickable options.
 *
 * @cssproperty --host-height - The height of the host element.
 * @cssproperty --help-height - The height of the search help element.
 * @cssproperty --label-height - The height of the input's label element.
 *
 * @event terra-combobox-change - Emitted when an option is selected.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onTerraComboboxChange: EventName<TerraComboboxChangeEvent>;
}>;
export default reactWrapper;
