import type { CSSResultGroup } from 'lit';
import type TerraMenuItem from '../menu-item/menu-item.component.js';
import TerraElement from '../../internal/terra-element.js';
export interface MenuSelectEventDetail {
    item: TerraMenuItem;
}
/**
 * @summary Menus provide a list of options for the user to choose from.
 * @documentation https://terra-ui.netlify.app/components/menu
 * @status stable
 * @since 2.0
 *
 * @slot - The menu's content, typically `<terra-menu-item>` elements.
 *
 * @event terra-select - Emitted when a menu item is selected. The event detail contains the selected menu item.
 */
export default class TerraMenu extends TerraElement {
    static styles: CSSResultGroup;
    defaultSlot: HTMLSlotElement;
    connectedCallback(): void;
    private handleClick;
    private handleKeyDown;
    private handleMouseDown;
    private handleSlotChange;
    private isMenuItem;
    /** @internal Gets all slotted menu items, ignoring dividers, headers, and other elements. */
    getAllItems(): TerraMenuItem[];
    /**
     * @internal Gets the current menu item, which is the menu item that has `tabindex="0"` within the roving tab index.
     * The menu item may or may not have focus, but for keyboard interaction purposes it's considered the "active" item.
     */
    getCurrentItem(): TerraMenuItem | undefined;
    /**
     * @internal Sets the current menu item to the specified element. This sets `tabindex="0"` on the target element and
     * `tabindex="-1"` to all other items. This method must be called prior to setting focus on a menu item.
     */
    setCurrentItem(item: TerraMenuItem): void;
    render(): import("lit-html").TemplateResult<1>;
}
