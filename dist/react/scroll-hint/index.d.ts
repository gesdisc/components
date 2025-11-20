import Component from '../../components/scroll-hint/scroll-hint.component.js';
import { type EventName } from '@lit/react';
import type { TerraScrollEvent } from '../../events/events.js';
export type { TerraScrollEvent } from '../../events/events.js';
/**
 * @summary Scroll hint is an animated button that prompts visitors to scroll.
 * @documentation https://terra-ui.netlify.app/components/scroll-hint
 * @status stable
 * @since 1.0
 *
 * @dependency terra-icon
 *
 * @event terra-scroll - Emitted when the scroll hint is clicked and scrolling begins.
 *
 * @csspart base - The component's base wrapper.
 * @csspart button - The clickable button element.
 * @csspart icon-container - The container for the icon and pulsing ring.
 * @csspart icon - The chevron icon.
 * @csspart ring - The pulsing ring around the icon.
 * @csspart text - The "SCROLL TO CONTINUE" text.
 *
 * @cssproperty --terra-scroll-hint-icon-background-color - The background color of the icon circle.
 * @cssproperty --terra-scroll-hint-icon-color - The color of the chevron icon.
 * @cssproperty --terra-scroll-hint-text-color - The color of the text.
 * @cssproperty --terra-scroll-hint-ring-color - The color of the pulsing ring.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onTerraScroll: EventName<TerraScrollEvent>;
}>;
export default reactWrapper;
