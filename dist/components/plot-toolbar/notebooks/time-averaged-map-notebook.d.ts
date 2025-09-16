import type TerraPlotToolbar from '../plot-toolbar.component.js';
export declare function getTimeAveragedMapNotebook(host: TerraPlotToolbar): ({
    cell_type: string;
    id: string;
    metadata: {
        trusted?: undefined;
    };
    source: string[];
    outputs?: undefined;
    execution_count?: undefined;
} | {
    id: string;
    cell_type: string;
    source: string;
    metadata: {
        trusted: boolean;
    };
    outputs: never[];
    execution_count: null;
} | {
    cell_type: string;
    execution_count: null;
    id: string;
    metadata: {
        trusted?: undefined;
    };
    outputs: never[];
    source: string[];
})[];
