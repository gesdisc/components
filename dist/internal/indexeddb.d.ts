import { type IDBPDatabase } from 'idb';
export declare const DB_NAME = "terra";
export declare enum IndexedDbStores {
    TIME_SERIES = "time-series"
}
/**
 * Get the indexedDB database
 */
export declare function getDb(): Promise<IDBPDatabase<unknown>>;
/**
 * a helper for wrapping code that depends on an active database connection
 * this function will open the database, run the callback, and then cleanly close the database
 */
export declare function withDb<T>(callback: (db: IDBPDatabase) => Promise<T>): Promise<T>;
export declare function getDataByKey<T>(store: IndexedDbStores, key: string): Promise<T>;
export declare function storeDataByKey<T>(store: IndexedDbStores, key: string, data: T): Promise<void>;
