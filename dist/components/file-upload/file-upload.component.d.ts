import TerraElement from '../../internal/terra-element.js';
import type { CSSResultGroup } from 'lit';
/**
 * @summary File upload fields allow visitors to attach one or multiple files to be submitted with a form.
 * @documentation https://terra-ui.netlify.app/components/file-upload
 * @status stable
 * @since 2.0
 *
 * @slot - Custom content to display inside the drop zone.
 *
 * @event terra-change - Emitted when files are selected or removed.
 * @event terra-focus - Emitted when the control gains focus.
 * @event terra-blur - Emitted when the control loses focus.
 *
 * @csspart base - The component's base wrapper.
 * @csspart dropzone - The drop zone area.
 * @csspart file-input - The hidden file input element.
 * @csspart file-list - The container for file previews.
 * @csspart file-item - Individual file preview item.
 * @csspart file-thumbnail - The file thumbnail image.
 * @csspart file-name - The file name text.
 * @csspart change-link - The "Change files" link.
 *
 * @cssproperty --terra-file-upload-* - All file upload design tokens from horizon.css are supported.
 */
export default class TerraFileUpload extends TerraElement {
    static styles: CSSResultGroup;
    fileInput: HTMLInputElement;
    dropzone: HTMLElement;
    private files;
    private isDragging;
    private hasFocus;
    /** The file upload's label. */
    label: string;
    /** The file upload's help text. */
    helpText: string;
    /** The name of the file input, submitted as a name/value pair with form data. */
    name: string;
    /** Allows multiple files to be selected. */
    multiple: boolean;
    /** Disables the file upload. */
    disabled: boolean;
    /** Makes the file upload a required field. */
    required: boolean;
    /** Accepted file types (e.g., "image/*", ".pdf", "image/png,image/jpeg"). */
    accept: string;
    /** Maximum file size in bytes. */
    maxFileSize?: number;
    /** Maximum number of files allowed when multiple is enabled. */
    maxFiles?: number;
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    private setupDragAndDrop;
    private cleanupDragAndDrop;
    private handleDragOver;
    private handleDragLeave;
    private handleDrop;
    private handleFileInputChange;
    private handleFiles;
    private handleClick;
    private handleChangeFiles;
    private handleFocus;
    private handleBlur;
    /** Gets the current files. */
    getFiles(): File[];
    /** Clears all selected files. */
    clearFiles(): void;
    render(): import("lit-html").TemplateResult<1>;
}
