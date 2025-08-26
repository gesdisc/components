import dayjs from 'dayjs';
type MaybeDate = string | number | Date;
export declare function isValidDate(date: any): boolean;
export declare function getUTCDate(date: MaybeDate, endOfDay?: boolean): Date;
/**
 * formats a date, see https://day.js.org/docs/en/display/format for available formatting options
 */
export declare function formatDate(date: dayjs.Dayjs | MaybeDate, format?: string): string;
/**
 * Helper to check if a date range is contained within another date range.
 * This is useful for determining if existing data covers the requested range.
 */
export declare function isDateRangeContained(start1: Date, end1: Date, start2: Date, end2: Date): boolean;
export {};
