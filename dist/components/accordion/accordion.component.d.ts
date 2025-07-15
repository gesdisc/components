import TerraElement from '../../internal/terra-element.js';
import type { CSSResultGroup } from 'lit';
import TerraIcon from '../icon/icon.component.js';
/**
 * @summary A collapsible content panel for showing and hiding content.
 * @documentation https://disc.gsfc.nasa.gov/components/accordion
 * @status experimental
 * @since 1.0
 *
 * The TerraAccordion component provides a simple, accessible way to show and hide content. It uses native <details> and <summary> elements for built-in accessibility and keyboard support. The summary/header can be set via the `summary` property for simple text, or via a named `summary` slot for custom content (such as icons or rich HTML). The open state can be controlled with the `open` property, which is reflected as an attribute.
 *
 * @slot - The default slot for accordion content.
 * @slot summary - The summary/header for the accordion (optional, overrides summary property)
 *
 * @property {string} summary - The summary/header for the accordion. Use the property for simple text, or the slot for custom content.
 * @property {boolean} open - Whether the accordion is open or not. This property is reflected as an attribute and can be controlled programmatically or by user interaction.
 *
 * @dependency terra-icon
 */
export default class TerraAccordion extends TerraElement {
    static styles: CSSResultGroup;
    static dependencies: {
        'terra-icon': typeof TerraIcon;
    };
    /**
     * The summary/header for the accordion. You can either set this property for a simple string summary,
     * or provide a <span slot="summary">...</span> for more advanced content (e.g., rich HTML, icons).
     */
    summary?: string;
    /** whether the accordion is open or not */
    open: boolean;
    showArrow: boolean;
    render(): import("lit-html").TemplateResult<1>;
    private handleToggle;
}
