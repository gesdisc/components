import type TerraDataSubsetter from '../data-subsetter.component.js';
export declare function getNotebook(host: TerraDataSubsetter): ({
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
})[];
