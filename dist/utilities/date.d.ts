import dayjs from 'dayjs';
type MaybeDate = string | number | Date;
export declare function isValidDate(date: any): boolean;
export declare function getUTCDate(date: MaybeDate, endOfDay?: boolean): Date;
/**
 * formats a date, see https://day.js.org/docs/en/display/format for available formatting options
 */
export declare function formatDate(date: dayjs.Dayjs | MaybeDate, format?: string): string;
export {};
