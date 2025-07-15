import { Task } from '@lit/task';
import type { StatusRenderer } from '@lit/task';
import type { ReactiveControllerHost } from 'lit';
import type { FacetsByCategory, SearchResponse, Variable } from './browse-variables.types.js';
import type TerraBrowseVariables from './browse-variables.component.js';
export declare class BrowseVariablesController {
    #private;
    task: Task<[string | undefined], SearchResponse>;
    constructor(host: ReactiveControllerHost & TerraBrowseVariables);
    get facetsByCategory(): FacetsByCategory | undefined;
    get variables(): Variable[];
    get total(): number;
    render(renderFunctions: StatusRenderer<any>): unknown;
}
