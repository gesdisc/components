import Component from '../../components/file-upload/file-upload.component.js';
import { type EventName } from '@lit/react';
import type { TerraChangeEvent } from '../../events/events.js';
import type { TerraFocusEvent } from '../../events/events.js';
import type { TerraBlurEvent } from '../../events/events.js';
export type { TerraChangeEvent } from '../../events/events.js';
export type { TerraFocusEvent } from '../../events/events.js';
export type { TerraBlurEvent } from '../../events/events.js';
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
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {
    onTerraChange: EventName<TerraChangeEvent>;
    onTerraFocus: EventName<TerraFocusEvent>;
    onTerraBlur: EventName<TerraBlurEvent>;
}>;
export default reactWrapper;
