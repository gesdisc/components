import type { CmrCollectionCitationItem } from '../../metadata-catalog/types.js';
import type TerraPlotToolbar from './plot-toolbar.component.js';
import type { ReactiveControllerHost } from 'lit';
export declare class PlotToolbarController {
    #private;
    constructor(host: ReactiveControllerHost & TerraPlotToolbar);
    get collectionCitation(): CmrCollectionCitationItem | undefined;
}
