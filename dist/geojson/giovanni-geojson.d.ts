import type { ShapeFilesResponse, GeoJsonShapeResponse, GeoJsonShapesInterface } from './types.js';
export declare class GiovanniGeoJsonShapes implements GeoJsonShapesInterface {
    getShapeFiles(): Promise<ShapeFilesResponse>;
    getGeoJson(query: string): Promise<GeoJsonShapeResponse>;
}
