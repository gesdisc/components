import { type CSSResultGroup } from 'lit';
import TerraElement from '../../internal/terra-element.js';
import { type Content, type GroupedListItem, type ListItem } from './type.js';
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
export default class TerraCombobox extends TerraElement {
    #private;
    static styles: CSSResultGroup;
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        slotAssignment?: SlotAssignmentMode | undefined;
    };
    static tagName: string;
    static initialQuery: string;
    /**
     * Label the combobox with this.
     * @example Search All Items
     */
    label: string;
    /**
     * name the combobox with this.
     * @example Shapes
     */
    name: string;
    /**
     * Set a placeholder for the combobox with this.
     * Defaults to the label's value.
     */
    placeholder: string;
    /**
     * Hide the combobox's help text.
     * When hidden, not rendered at all.
     */
    hideHelp: boolean;
    /**
     * Hide the combobox's label text.
     * When hidden, still presents to screen readers.
     */
    hideLabel: boolean;
    /**
     * status of the content
     */
    status: 'INITIAL' | 'PENDING' | 'COMPLETE' | 'ERROR';
    /**
     * content or data of the combobox. This could be of type string | GroupedListItem[] | ListItem[] | undefined
     */
    content: Content;
    isExpanded: boolean;
    query: string;
    searchResults: GroupedListItem[] | ListItem[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    contentChanged(_oldValue: any, newValue: any): void;
    render(): import("lit-html").TemplateResult<1>;
}
