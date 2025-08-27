import TerraElement from '../../internal/terra-element.js';
import type { CSSResultGroup } from 'lit';
import type { DataType, MenuNames } from './plot-toolbar.types.js';
import type { Variable } from '../browse-variables/browse-variables.types.js';
import { type Data } from 'plotly.js-dist-min';
import type TerraPlot from '../plot/plot.component.js';
import TerraButton from '../button/button.component.js';
import TerraIcon from '../icon/icon.component.js';
/**
 * @summary Short summary of the component's intended use.
 * @documentation https://disc.gsfc.nasa.gov/components/plot-toolbar
 * @status experimental
 * @since 1.0
 *
 * @dependency terra-example
 *
 * @slot - The default slot.
 * @slot example - An example slot.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
export default class TerraPlotToolbar extends TerraElement {
    #private;
    static styles: CSSResultGroup;
    static dependencies: {
        'terra-icon': typeof TerraIcon;
        'terra-button': typeof TerraButton;
    };
    catalogVariable: Variable;
    variableEntryId: string;
    plot?: TerraPlot;
    timeSeriesData?: Partial<Data>[] | undefined;
    location: string;
    startDate: string;
    endDate: string;
    cacheKey: string;
    dataType: DataType;
    activeMenuItem: MenuNames;
    menu: HTMLMenuElement;
    handleFocus(_oldValue: MenuNames, newValue: MenuNames): void;
    render(): import("lit-html/directive.js").DirectiveResult<typeof import("lit-html/directives/cache.js").CacheDirective>;
}
