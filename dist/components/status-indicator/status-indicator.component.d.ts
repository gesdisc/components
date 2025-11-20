import TerraElement from '../../internal/terra-element.js';
import type { CSSResultGroup } from 'lit';
/**
 * @summary Status indicators are dynamic labels that indicate the current state of a mission or project.
 * @documentation https://terra-ui.netlify.app/components/status-indicator
 * @status stable
 * @since 1.0
 *
 * @slot - The status label text.
 *
 * @csspart base - The component's base wrapper.
 * @csspart dot - The colored status dot.
 * @csspart label - The text label.
 *
 * @cssproperty --terra-status-indicator-dot-color - The color of the status dot.
 * @cssproperty --terra-status-indicator-label-color - The color of the label text.
 * @cssproperty --terra-status-indicator-font-family - The font family for the label.
 * @cssproperty --terra-status-indicator-font-size - The font size for the label.
 * @cssproperty --terra-status-indicator-font-weight - The font weight for the label.
 */
export default class TerraStatusIndicator extends TerraElement {
    static styles: CSSResultGroup;
    /** The status variant. Determines the color of the indicator dot. */
    variant: 'active' | 'completed' | 'testing' | 'future';
    /** When true, forces dark mode styles regardless of system preference. Useful when placing the component on a dark background. */
    dark: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
