import type { StatusRenderer } from '@lit/task';
import type { ReactiveControllerHost } from 'lit';
import type { ReadableTaskStatus } from './variable-keyword-search.types.js';
import type { SearchKeywordsResponse } from '../../variable-catalog/types.js';
export declare class FetchController {
    #private;
    constructor(host: ReactiveControllerHost);
    get taskComplete(): Promise<SearchKeywordsResponse>;
    get value(): SearchKeywordsResponse | undefined;
    get taskStatus(): ReadableTaskStatus;
    render(renderFunctions: StatusRenderer<SearchKeywordsResponse>): unknown;
}
