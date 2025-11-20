import TerraElement from '../../internal/terra-element.js';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Used for contacts and tags
 * @documentation https://terra-ui.netlify.app/components/chip
 * @status stable
 * @since 1.0
 *
 * @slot - The chip's label.
 *
 * @cssproperty --terra-chip-background-color - The background color of the chip.
 * @cssproperty --terra-chip-color - The text color of the chip.
 */
export default class TerraChip extends TerraElement {
    #private;
    static styles: CSSResultGroup;
    /** The size of the chip. */
    size: 'small' | 'medium' | 'large';
    /** When true, the chip will have a close button that can be used to remove the chip. */
    closeable: boolean;
    /** When true, chips will stack vertically instead of sitting side by side. */
    stack: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
