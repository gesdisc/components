import Component from '../../components/menu/menu.component.js';
import { type EventName } from '@lit/react';
import type { TerraSelectEvent } from '../../events/events.js';
export type { TerraSelectEvent } from '../../events/events.js';
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
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onTerraSelect: EventName<TerraSelectEvent>;
}>;
export default reactWrapper;
