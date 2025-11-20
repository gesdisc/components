import Component from '../../components/dropdown/dropdown.component.js';
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
 * @summary Dropdowns expose additional content that "drops down" in a panel.
 * @documentation https://terra-ui.netlify.app/components/dropdown
 * @status stable
 * @since 2.0
 *
 * @dependency terra-popup
 *
 * @slot - The dropdown's main content, typically a `<terra-menu>` element.
 * @slot trigger - The dropdown's trigger, usually a `<terra-button>` element.
 *
 * @event terra-show - Emitted when the dropdown opens.
 * @event terra-after-show - Emitted after the dropdown opens and all animations are complete.
 * @event terra-hide - Emitted when the dropdown closes.
 * @event terra-after-hide - Emitted after the dropdown closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper, an `<terra-popup>` element.
 * @csspart base__popup - The popup's exported `popup` part. Use this to target the dropdown's popup container.
 * @csspart trigger - The container that wraps the trigger.
 * @csspart panel - The panel that gets shown when the dropdown is open.
 *
 * @animation dropdown.show - The animation to use when showing the dropdown.
 * @animation dropdown.hide - The animation to use when hiding the dropdown.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onTerraShow: EventName<TerraShowEvent>;
    onTerraAfterShow: EventName<TerraAfterShowEvent>;
    onTerraHide: EventName<TerraHideEvent>;
    onTerraAfterHide: EventName<TerraAfterHideEvent>;
}>;
export default reactWrapper;
