import type TerraDataAccess from '../data-access.component.js';
export declare function getDataAccessNotebook(host: TerraDataAccess): ({
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
