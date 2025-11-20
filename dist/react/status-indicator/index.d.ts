import Component from '../../components/status-indicator/status-indicator.component.js';
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
declare const reactWrapper: import("@lit/react").ReactWebComponent<Component, {}>;
export default reactWrapper;
