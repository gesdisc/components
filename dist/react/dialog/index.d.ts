import Component from '../../components/dialog/dialog.component.js';
import { type EventName } from '@lit/react';
import type { TerraDialogShowEvent } from '../../events/events.js';
import type { TerraDialogHideEvent } from '../../events/events.js';
export type { TerraDialogShowEvent } from '../../events/events.js';
export type { TerraDialogHideEvent } from '../../events/events.js';
/**
 * @summary Used to create both modal and non-modal dialog boxes.
 * @documentation https://disc.gsfc.nasa.gov/components/dialog
 * @status stable
 * @since 1.0
 *
 * @slot - The dialog's main content
 *
 * @event terra-dialog-show - Emitted when the dialog opens.
 * @event terra-dialog-hide - Emitted when the dialog closes.
 */
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onTerraDialogShow: EventName<TerraDialogShowEvent>;
    onTerraDialogHide: EventName<TerraDialogHideEvent>;
}>;
export default reactWrapper;
