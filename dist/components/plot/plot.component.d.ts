import TerraElement from '../../internal/terra-element.js';
import type { CSSResultGroup } from 'lit';
import { type Data, type Layout, type Config, type PlotlyHTMLElement } from 'plotly.js-dist-min';
/**
 * @summary A web component for interactive graphs using Plotly.js.
 * @documentation https://disc.gsfc.nasa.gov/components/plot
 * @status experimental
 * @since 1.0
 *
 * @csspart base - The component's base wrapper.
 */
export default class TerraPlot extends TerraElement {
    #private;
    static styles: CSSResultGroup;
    base: PlotlyHTMLElement;
    plotTitle?: string;
    layout?: Partial<Layout>;
    config?: Partial<Config>;
    data: Array<Partial<Data>>;
    handleDataChange(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    updatePlotWithData(): void;
    render(): import("lit-html").TemplateResult<1>;
    updated(): void;
}
