import TerraElement from '../../internal/terra-element.js';
import type { CSSResultGroup } from 'lit';
import * as Plotly from 'plotly.js-dist-min';
/**
 * @summary A web component for interactive graphs using Plotly.js.
 * @documentation https://terra-ui.netlify.app/components/plot
 * @status experimental
 * @since 1.0
 *
 * @csspart base - The component's base wrapper.
 */
export default class TerraPlot extends TerraElement {
    #private;
    static styles: CSSResultGroup;
    base: Plotly.PlotlyHTMLElement;
    plotTitle?: string;
    layout?: Partial<Plotly.Layout>;
    config?: Partial<Plotly.Config>;
    data: Array<Partial<Plotly.Data>>;
    /**
     * Optional: Colors to assign to each time series line
     */
    colors: string[];
    handleDataChange(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    updatePlotWithData(): void;
    render(): import("lit-html").TemplateResult<1>;
    updated(): void;
}
