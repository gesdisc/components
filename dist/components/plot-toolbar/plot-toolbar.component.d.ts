import TerraElement from '../../internal/terra-element.js';
import type { CSSResultGroup } from 'lit';
import type { DataType, MenuNames } from './plot-toolbar.types.js';
import type { Variable } from '../browse-variables/browse-variables.types.js';
import * as Plotly from 'plotly.js-dist-min';
import type TerraPlot from '../plot/plot.component.js';
import TerraButton from '../button/button.component.js';
import TerraIcon from '../icon/icon.component.js';
import TerraMap from '../map/map.component.js';
import { AuthController } from '../../auth/auth.controller.js';
/**
 * @summary Short summary of the component's intended use.
 * @documentation https://terra-ui.netlify.app/components/plot-toolbar
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
        'terra-map': typeof TerraMap;
    };
    catalogVariable: Variable;
    variableEntryId: string;
    plot?: TerraPlot;
    timeSeriesData?: Partial<Plotly.Data>[] | Blob;
    location: string;
    startDate: string;
    endDate: string;
    cacheKey: string;
    dataType: DataType;
    showLocation: boolean;
    colormap: string;
    opacity: number;
    showCitation: boolean;
    /**
     * if you include an application citation, it will be displayed in the citation panel alongside the dataset citation
     */
    applicationCitation?: string;
    activeMenuItem: MenuNames;
    showLocationTooltip: boolean;
    locationMapValue: any;
    colormaps: string[];
    colorMapName: string;
    menu: HTMLMenuElement;
    _authController: AuthController<this>;
    handleFocus(_oldValue: MenuNames, newValue: MenuNames): void;
    closeMenu(): void;
    render(): import("lit-html/directive.js").DirectiveResult<typeof import("lit-html/directives/cache.js").CacheDirective>;
}
