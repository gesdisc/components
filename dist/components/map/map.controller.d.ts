import type { ReactiveController, ReactiveControllerHost } from 'lit';
import type TerraMap from './map.js';
export declare class MapController implements ReactiveController {
    private host;
    private readonly geoJsonShapes;
    constructor(host: ReactiveControllerHost & TerraMap);
    hostConnected(): Promise<void>;
}
