import { type CSSResultGroup } from 'lit';
import TerraElement from '../../internal/terra-element.js';
import TerraButton from '../button/button.js';
import TerraIcon from '../icon/icon.js';
import type { ListItem } from './variable-combobox.types.js';
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
export default class TerraVariableCombobox extends TerraElement {
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
     * Determines if the variable combobox uses tags or plain text to display the query.
     */
    useTags: boolean;
    /**
     * Represents the EntryID (<collection-name>_<variable-name>) of the selected variable.
     * Other components (like the time-series graphing component) will use this.
     */
    value: string;
    /**
     * The token to be used for authentication with remote servers.
     * The component provides the header "Authorization: Bearer" (the request header and authentication scheme).
     * The property's value will be inserted after "Bearer" (the authentication scheme).
     */
    bearerToken: string;
    isExpanded: boolean;
    query: string;
    searchResults: ListItem[];
    tags: string[];
    tagContainerWidth: number;
    /**
     * This component's value is read by other components.
     * Internally, the variable metdata has slight differences that require adapting.
     */
    valueChanged(oldValue: string, newValue: string): Promise<void>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    clear(): void;
    close(): void;
    toggle(): void;
    render(): import("lit-html").TemplateResult<1>;
}
