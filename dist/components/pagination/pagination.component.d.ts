import TerraElement from '../../internal/terra-element.js';
import TerraIcon from '../icon/icon.component.js';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Pagination is a navigational element that allows users to navigate between content or pages.
 * @documentation https://terra-ui.netlify.app/components/pagination
 * @status stable
 * @since 1.0
 *
 * @dependency terra-icon
 *
 * @slot - Content to display on the right side (e.g., rows per page dropdown). Only visible when variant is "left".
 *
 * @event terra-page-change - Emitted when the page changes.
 * @eventDetail { page: number } - The new page number.
 *
 * @csspart base - The component's base wrapper.
 * @csspart nav - The navigation container.
 * @csspart button - The page button elements.
 * @csspart button-current - The current page button.
 * @csspart ellipsis - The ellipsis element.
 * @csspart prev - The previous button.
 * @csspart next - The next button.
 * @csspart slot - The right-side slot container.
 *
 * @cssproperty --terra-pagination-button-color - The text color of page buttons.
 * @cssproperty --terra-pagination-button-background-color - The background color of page buttons.
 * @cssproperty --terra-pagination-button-color-hover - The text color of page buttons on hover.
 * @cssproperty --terra-pagination-button-background-color-hover - The background color of page buttons on hover.
 * @cssproperty --terra-pagination-button-color-current - The text color of the current page button.
 * @cssproperty --terra-pagination-button-background-color-current - The background color of the current page button.
 */
export default class TerraPagination extends TerraElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'terra-icon': typeof TerraIcon;
    };
    /** The current page number (1-indexed). */
    current: number;
    /** The total number of pages. */
    total: number;
    /** The pagination variant. */
    variant: 'full' | 'simple';
    /** Whether the pagination is centered. */
    centered: boolean;
    private _visiblePages;
    handlePropsChange(): void;
    connectedCallback(): void;
    private _updateVisiblePages;
    private _handlePageClick;
    private _handlePrevClick;
    private _handleNextClick;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'terra-pagination': TerraPagination;
    }
}
