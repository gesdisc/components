import TerraElement from '../../internal/terra-element.js';
import type { CSSResultGroup } from 'lit';
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
export default class TerraDialog extends TerraElement {
    #private;
    static styles: CSSResultGroup;
    dialogEl: HTMLDialogElement;
    /** the ID to be used for accessibility associations */
    id: string;
    /** the width of the dialog */
    width: string;
    /** used to set the dialog's open state */
    open: boolean;
    /** allow closing the dialog when clicking outside of it */
    clickOutsideToClose: boolean;
    /** Show a backdrop behind the dialog */
    showBackdrop: boolean;
    toggle(): void;
    show(): void;
    hide(): void;
    render(): import("lit-html").TemplateResult<1>;
}
