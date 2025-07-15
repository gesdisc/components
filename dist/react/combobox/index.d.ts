import Component from '../../components/combobox/combobox.component.js';
/**
 * @summary Fuzzy-search for combobox with list autocomplete.
 * @documentation https://disc.gsfc.nasa.gov/components/combobox
 * @status experimental
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
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {}>;
export default reactWrapper;
