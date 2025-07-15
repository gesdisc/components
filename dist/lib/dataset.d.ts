import { TimeInterval } from '../types.js';
export declare function calculateDataPoints(timeInterval: TimeInterval, startDate: Date, endDate: Date): number;
/**
 * Calculates date chunks for multiple API requests based on the maximum allowed data points
 */
export declare function calculateDateChunks(timeInterval: TimeInterval, startDate: Date, endDate: Date): Array<{
    start: Date;
    end: Date;
}>;
