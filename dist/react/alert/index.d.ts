import Component from '../../components/alert/alert.component.js';
import { type EventName } from '@lit/react';
import type { TerraShowEvent } from '../../events/events.js';
import type { TerraAfterShowEvent } from '../../events/events.js';
import type { TerraHideEvent } from '../../events/events.js';
import type { TerraAfterHideEvent } from '../../events/events.js';
export type { TerraShowEvent } from '../../events/events.js';
export type { TerraAfterShowEvent } from '../../events/events.js';
export type { TerraHideEvent } from '../../events/events.js';
export type { TerraAfterHideEvent } from '../../events/events.js';
/**
 * @summary Alerts are used to display important messages inline or as toast notifications.
 * @documentation https://shoelace.style/components/alert
 * @status stable
 * @since 2.0
 *
 * @slot - The alert's main content.
 *
 * @event terra-show - Emitted when the alert opens.
 * @event terra-after-show - Emitted after the alert opens and all animations are complete.
 * @event terra-hide - Emitted when the alert closes.
 * @event terra-after-hide - Emitted after the alert closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper.
 * @csspart icon - The container that wraps the optional icon.
 * @csspart message - The container that wraps the alert's main content.
 *
 * @animation alert.show - The animation to use when showing the alert.
 * @animation alert.hide - The animation to use when hiding the alert.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onTerraShow: EventName<TerraShowEvent>;
    onTerraAfterShow: EventName<TerraAfterShowEvent>;
    onTerraHide: EventName<TerraHideEvent>;
    onTerraAfterHide: EventName<TerraAfterHideEvent>;
}>;
export default reactWrapper;
