import type { CSSResultGroup, HTMLTemplateResult } from 'lit';
import TerraElement from '../../internal/terra-element.js';
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
export default class TerraIcon extends TerraElement {
    #private;
    static styles: CSSResultGroup;
    svg: SVGElement | HTMLTemplateResult | null;
    /** The name of the icon to draw. Available names depend on the icon library being used. */
    name?: string;
    /**
     * An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and
     * can result in XSS attacks.
     */
    src?: string;
    /**
     * An alternate description to use for assistive devices. If omitted, the icon will be considered presentational and
     * ignored by assistive devices.
     */
    label: string;
    /** The name of a registered custom icon library. */
    library: 'default' | 'heroicons' | string;
    /** The CSS color to assign to the SVG. */
    color: string | null;
    /** The CSS font-size to assign to the SVG. */
    fontSize: string | null;
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    handleLabelChange(): void;
    setIcon(): Promise<void>;
    render(): SVGElement | HTMLTemplateResult | null;
}
