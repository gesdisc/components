import Component from '../../components/tag/tag.component.js';
import { type EventName } from '@lit/react';
import type { TerraClickEvent } from '../../events/events.js';
export type { TerraClickEvent } from '../../events/events.js';
/**
 * @summary Tags are simple labels that help categorize items.
 * @documentation https://terra-ui.netlify.app/components/tag
 * @status stable
 * @since 1.0
 *
 * @dependency terra-icon
 *
 * @event terra-click - Emitted when a topic tag is clicked (unless href is provided).
 *
 * @slot - The tag label text.
 * @slot icon - Optional icon slot for content tags (overrides icon prop).
 *
 * @csspart base - The component's base wrapper.
 * @csspart icon - The icon element (content tags only).
 * @csspart label - The text label.
 *
 * @cssproperty --terra-tag-font-family - The font family for the tag.
 * @cssproperty --terra-tag-font-size-small - The font size for small tags.
 * @cssproperty --terra-tag-font-size-medium - The font size for medium tags.
 * @cssproperty --terra-tag-font-size-large - The font size for large tags.
 * @cssproperty --terra-tag-font-weight - The font weight for the tag.
 * @cssproperty --terra-tag-font-weight-urgent - The font weight for urgent tags.
 * @cssproperty --terra-tag-color - The text color of the tag.
 * @cssproperty --terra-tag-background-color - The background color of the tag.
 * @cssproperty --terra-tag-border-color - The border color for topic tags.
 * @cssproperty --terra-tag-border-color-hover - The border color for topic tags on hover.
 * @cssproperty --terra-tag-background-color-hover - The background color for topic tags on hover.
 * @cssproperty --terra-tag-icon-border-color - The border color for content tag icons.
 * @cssproperty --terra-tag-icon-size-small - The size of small content tag icons.
 * @cssproperty --terra-tag-icon-size-medium - The size of medium content tag icons.
 * @cssproperty --terra-tag-icon-size-large - The size of large content tag icons.
 * @cssproperty --terra-tag-icon-inner-size-small - The inner icon size for small content tags.
 * @cssproperty --terra-tag-icon-inner-size-medium - The inner icon size for medium content tags.
 * @cssproperty --terra-tag-icon-inner-size-large - The inner icon size for large content tags.
 * @cssproperty --terra-tag-urgent-color - The text color for urgent tags.
 * @cssproperty --terra-tag-urgent-background-color - The background color for urgent tags.
 * @cssproperty --terra-tag-padding-small - The padding for small topic/urgent tags.
 * @cssproperty --terra-tag-padding-medium - The padding for medium topic/urgent tags.
 * @cssproperty --terra-tag-padding-large - The padding for large topic/urgent tags.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onTerraClick: EventName<TerraClickEvent>;
}>;
export default reactWrapper;
