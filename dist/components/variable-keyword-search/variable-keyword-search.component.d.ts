import { type CSSResultGroup } from 'lit';
import TerraElement from '../../internal/terra-element.js';
import TerraButton from '../button/button.js';
import TerraIcon from '../icon/icon.js';
import type { ListItem } from './variable-keyword-search.types.js';
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
export default class TerraVariableKeywordSearch extends TerraElement {
    #private;
    static dependencies: {
        'terra-button': typeof TerraButton;
        'terra-icon': typeof TerraIcon;
    };
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
     * @example Search All Variables
     */
    label: string;
    /**
     * Set a placeholder for the combobox with this.
     * Defaults to the label's value.
     */
    placeholder: string;
    /**
     * Hide the combobox's label text.
     * When hidden, still presents to screen readers.
     */
    hideLabel: boolean;
    /** type can be `Boolean`, `String`, `Number`, `Object`, or `Array` */
    searchConfig: {
        keys: string[];
        useExtendedSearch: boolean;
    };
    value: string;
    isExpanded: boolean;
    query: string;
    searchResults: ListItem[];
    valueChanged(_oldValue: string, newValue: string): Promise<void>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    clear(): void;
    close(): void;
    toggle(): void;
    render(): import("lit-html").TemplateResult<1>;
}
