import TerraElement, { type TerraFormControl } from '../../internal/terra-element.js';
import type { CSSResultGroup } from 'lit';
/**
 * @summary A textarea component with consistent styling across the design system.
 * @documentation https://terra-ui.netlify.app/components/textarea
 * @status stable
 * @since 2.0
 *
 * @slot help-text - Text that describes how to use the textarea. Alternatively, you can use the `help-text` attribute.
 *
 * @event terra-input - Emitted when the textarea receives input.
 * @event terra-change - Emitted when an alteration to the control's value is committed by the user.
 * @event terra-focus - Emitted when the textarea gains focus.
 * @event terra-blur - Emitted when the textarea loses focus.
 * @event terra-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart base - The component's base wrapper.
 * @csspart textarea - The internal textarea control.
 * @csspart form-control-help-text - The help text's wrapper.
 */
export default class TerraTextarea extends TerraElement implements TerraFormControl {
    static styles: CSSResultGroup;
    private readonly formControlController;
    private readonly hasSlotController;
    textarea: HTMLTextAreaElement;
    hasFocus: boolean;
    name: string;
    value: string;
    placeholder: string;
    disabled: boolean;
    readonly: boolean;
    required: boolean;
    autocomplete?: string;
    minlength?: number;
    maxlength?: number;
    rows?: number;
    cols?: number;
    label: string;
    hideLabel: boolean;
    helpText: string;
    resize: 'none' | 'both' | 'horizontal' | 'vertical';
    /** The default value of the form control. Primarily used for resetting the form control. */
    defaultValue: string;
    /**
     * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
     * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
     * the same document or shadow root for this to work.
     */
    form: string;
    /** Gets the validity state object */
    get validity(): ValidityState;
    /** Gets the validation message */
    get validationMessage(): string;
    firstUpdated(): void;
    handleInput(): void;
    handleChange(): void;
    private handleInvalid;
    handleFocus(): void;
    handleBlur(): void;
    handleDisabledChange(): void;
    /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
    checkValidity(): boolean;
    /** Gets the associated form, if one exists. */
    getForm(): HTMLFormElement | null;
    /** Checks for validity and shows the browser's validation message if the control is invalid. */
    reportValidity(): boolean;
    /**
     * Sets a custom validation message. The value provided will be shown to the user when the form is submitted. To clear
     * the custom validation message, call this method with an empty string.
     */
    setCustomValidity(message: string): void;
    focus(options?: FocusOptions): void;
    blur(): void;
    select(): void;
    setSelectionRange(selectionStart: number, selectionEnd: number, selectionDirection?: 'forward' | 'backward' | 'none'): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'terra-textarea': TerraTextarea;
    }
}
