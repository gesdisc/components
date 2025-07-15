import Component from '../../components/variable-keyword-search/variable-keyword-search.component.js';
import { type EventName } from '@lit/react';
import type { TerraVariableKeywordSearchChangeEvent } from '../../events/events.js';
import type { TerraSearchEvent } from '../../events/events.js';
export type { TerraVariableKeywordSearchChangeEvent } from '../../events/events.js';
export type { TerraSearchEvent } from '../../events/events.js';
/**
 * @summary Fuzzy-search for dataset keywords in combobox with list autocomplete.
 * @documentation https://disc.gsfc.nasa.gov/components/giovanni-serch
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
 * @cssproperty --label-height - The height of the input's label element.
 *
 * @event terra-variable-keyword-search-change - Emitted when an option is selected.
 * @event terra-search - Emitted when the component is triggering a search (like a form triggering submit).
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onTerraVariableKeywordSearchChange: EventName<TerraVariableKeywordSearchChangeEvent>;
    onTerraSearch: EventName<TerraSearchEvent>;
}>;
export default reactWrapper;
