import type { CSSResultGroup } from 'lit';
import TerraElement, { type TerraFormControl } from '../../internal/terra-element.js';
/**
 * @summary Radio buttons are a form field used when only a single selection can be made from a list.
 * @documentation https://terra-ui.netlify.app/components/radio
 * @status stable
 * @since 2.0
 *
 * @slot - The radio's label.
 *
 * @event terra-blur - Emitted when the radio loses focus.
 * @event terra-change - Emitted when the checked state changes.
 * @event terra-focus - Emitted when the radio gains focus.
 * @event terra-input - Emitted when the radio receives input.
 * @event terra-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart base - The component's base wrapper.
 * @csspart control - The circular container that wraps the radio's checked state.
 * @csspart control--checked - The radio control when the radio is checked.
 * @csspart checked-icon - The checked icon, an SVG element.
 * @csspart label - The container that wraps the radio's label.
 *
 * @cssproperty --terra-radio-* - All radio design tokens from horizon.css are supported.
 */
export default class TerraRadio extends TerraElement implements TerraFormControl {
    static styles: CSSResultGroup;
    private readonly formControlController;
    input: HTMLInputElement;
    private hasFocus;
    title: string;
    /** The name of the radio, submitted as a name/value pair with form data. */
    name: string;
    /** The radio's value. When selected, the radio group will receive this value. */
    value: string;
    /**
     * The radio's size. When used inside a radio group, the size will be determined by the radio group's size so this
     * attribute can typically be omitted.
     */
    size: 'small' | 'medium' | 'large';
    /** Disables the radio. */
    disabled: boolean;
    /** Draws the radio in a checked state. */
    checked: boolean;
    /** The default value of the form control. Primarily used for resetting the form control. */
    defaultChecked: boolean;
    /**
     * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
     * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
     * the same document or shadow root for this to work.
     */
    form: string;
    /** Makes the radio a required field. */
    required: boolean;
    /** Gets the validity state object */
    get validity(): ValidityState;
    /** Gets the validation message */
    get validationMessage(): string;
    firstUpdated(): void;
    private handleBlur;
    private handleClick;
    private handleFocus;
    private handleInput;
    private handleChange;
    private handleInvalid;
    handleDisabledChange(): void;
    handleCheckedChange(): void;
    /** Simulates a click on the radio. */
    click(): void;
    /** Sets focus on the radio. */
    focus(options?: FocusOptions): void;
    /** Removes focus from the radio. */
    blur(): void;
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
    render(): import("lit-html").TemplateResult<1>;
}
