import Component from '../../components/avatar/avatar.component.js';
import { type EventName } from '@lit/react';
import type { TerraErrorEvent } from '../../events/events.js';
export type { TerraErrorEvent } from '../../events/events.js';
/**
 * @summary Avatars are used to represent a person or object.
 * @documentation https://terra-ui.netlify.app/components/avatar
 * @status stable
 * @since 1.0
 *
 * @dependency terra-icon
 *
 * @event terra-error - The image could not be loaded. This may because of an invalid URL, a temporary network condition, or some
 * unknown cause.
 *
 * @slot icon - The default icon to use when no image or initials are present. Works best with `<terra-icon>`.
 *
 * @csspart base - The component's base wrapper.
 * @csspart icon - The container that wraps the avatar's icon.
 * @csspart initials - The container that wraps the avatar's initials.
 * @csspart image - The avatar image. Only shown when the `image` attribute is set.
 *
 * @cssproperty --size - The size of the avatar.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onTerraError: EventName<TerraErrorEvent>;
}>;
export default reactWrapper;
