type MaybeDate = string | number | Date;
export declare function isValidDate(date: any): boolean;
export declare function getUTCDate(date: MaybeDate, endOfDay?: boolean): Date;
/**
 * formats a date using date-fns format patterns
 * See https://date-fns.org/v3.6.0/docs/format for available formatting options
 */
export declare function formatDate(date: MaybeDate, formatString?: string): string;
/**
 * Helper to check if a date range is contained within another date range.
 * This is useful for determining if existing data covers the requested range.
 */
export declare function isDateRangeContained(start1: Date, end1: Date, start2: Date, end2: Date): boolean;
export {};
