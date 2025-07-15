import TerraButton from '../button/button.component.js';
import TerraElement from '../../internal/terra-element.js';
import TerraIcon from '../icon/icon.component.js';
import TerraLoader from '../loader/loader.component.js';
import TerraSkeleton from '../skeleton/skeleton.component.js';
import TerraVariableKeywordSearch from '../variable-keyword-search/variable-keyword-search.component.js';
import type { TerraVariableKeywordSearchChangeEvent } from '../../events/terra-variable-keyword-search-change.js';
import type { CSSResultGroup } from 'lit';
import type { SelectedFacets, Variable } from './browse-variables.types.js';
/**
 * @summary Browse through the NASA CMR or Giovanni catalogs.
 * @documentation https://disc.gsfc.nasa.gov/components/browse-variables
 * @status MVP
 * @since 1.0
 *
 * @emits terra-variables-change - emitted when the user selects or unselects variables
 *
 * @dependency terra-variable-keyword-search
 * @dependency terra-button
 * @dependency terra-skeleton
 * @dependency terra-icon
 * @dependency terra-loader
 */
export default class TerraBrowseVariables extends TerraElement {
    #private;
    static styles: CSSResultGroup;
    static dependencies: {
        'terra-variable-keyword-search': typeof TerraVariableKeywordSearch;
        'terra-button': typeof TerraButton;
        'terra-skeleton': typeof TerraSkeleton;
        'terra-icon': typeof TerraIcon;
        'terra-loader': typeof TerraLoader;
    };
    /**
     * Allows the user to switch the catalog between different providers
     * TODO: add support for CMR catalog and make it the default
     */
    catalog: 'giovanni';
    searchQuery: string;
    selectedFacets: SelectedFacets;
    selectedVariables: Variable[];
    showVariablesBrowse: boolean;
    handleSelectedVariablesChange(): void;
    reset(): void;
    handleObservationChange(): void;
    toggleFacetSelect(event: Event): void;
    handleSearch(e: TerraVariableKeywordSearchChangeEvent): void;
    render(): import("lit-html").TemplateResult<1>;
}
