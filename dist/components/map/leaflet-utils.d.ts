import 'leaflet-draw';
import type { LatLngBoundsExpression } from 'leaflet';
import type { BoundingBox, LatLng } from './type.js';
export declare function parseBoundingBox(inputString: string): number[][] | {
    lat: number;
    lng: number;
};
export declare function StringifyBoundingBox(input: LatLng | BoundingBox): string;
export interface MapViewOptions {
    latitude?: number;
    longitude?: number;
    zoom: number;
    minZoom: number;
    maxZoom: number;
    hasCoordTracker?: boolean;
    hasNavigation?: boolean;
    hideBoundingBoxDrawTool?: boolean;
    hidePointSelectionDrawTool?: boolean;
    initialValue?: LatLngBoundsExpression;
}
export declare class Leaflet {
    private readonly geoJsonRepository;
    constructor();
    map: any;
    editableLayers: any;
    listeners: any;
    selectedGeoJson: any;
    isMapReady: boolean;
    initializeMap(container: HTMLElement, options: MapViewOptions): void;
    addCoordTracker(): void;
    addDrawControl(options: MapViewOptions): void;
    on(eventName: any, callback: any): void;
    dispatch(eventName: any, detail?: any): void;
    transformShapeData(data: any): {
        [x: number]: string;
        name: any;
        shapefileID: any;
    }[];
    handleShapeSelect(event: any): Promise<void>;
    drawRectangle(bounds: LatLngBoundsExpression): void;
    setValue(value: LatLngBoundsExpression): void;
    clearLayers(): void;
}
