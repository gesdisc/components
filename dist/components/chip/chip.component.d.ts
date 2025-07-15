import TerraElement from '../../internal/terra-element.js';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Used for contacts and tags
 * @documentation https://disc.gsfc.nasa.gov/components/chip
 * @status stable
 * @since 1.0
 *
 * @slot - The chip's label.
 */
export default class TerraChip extends TerraElement {
    #private;
    static styles: CSSResultGroup;
    size: 'small' | 'medium' | 'large';
    render(): import("lit-html").TemplateResult<1>;
}
