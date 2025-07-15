import Component from '../../components/login/login.component.js';
import { type EventName } from '@lit/react';
import type { TerraLoginEvent } from '../../events/events.js';
export type { TerraLoginEvent } from '../../events/events.js';
/**
 * @summary A form that logs in to Earthdata Login (EDL) and returns a bearer token.
 * @documentation https://disc.gsfc.nasa.gov/components/login
 * @status stable
 * @since 1.0
 *
 * @event terra-login - Emitted when a bearer token has been received from EDL.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onTerraLogin: EventName<TerraLoginEvent>;
}>;
export default reactWrapper;
