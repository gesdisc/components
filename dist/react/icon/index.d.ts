import Component from '../../components/icon/icon.component.js';
import { type EventName } from '@lit/react';
import type { TerraLoadEvent } from '../../events/events.js';
import type { TerraErrorEvent } from '../../events/events.js';
export type { TerraLoadEvent } from '../../events/events.js';
export type { TerraErrorEvent } from '../../events/events.js';
/**
 * @summary Icons are symbols that can be used to represent various options within an application.
 * @documentation https://disc.gsfc.nasa.gov/components/icon
 * @status experimental
 * @since 1.0
 *
 * @event terra-load - Emitted when the icon has loaded.
 * @event terra-error - Emitted when the icon fails to load due to an error.
 *
 * @csspart svg - The internal SVG element.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onTerraLoad: EventName<TerraLoadEvent>;
    onTerraError: EventName<TerraErrorEvent>;
}>;
export default reactWrapper;
