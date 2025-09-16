import { Task } from '@lit/task';
import type { HostWithMaybeProperties } from './types.js';
export declare function getFetchVariableTask(host: HostWithMaybeProperties, autoRun?: boolean): Task<(string | undefined)[], void>;
