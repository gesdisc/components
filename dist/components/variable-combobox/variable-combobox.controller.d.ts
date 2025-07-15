import type { StatusRenderer } from '@lit/task';
import type { ReactiveControllerHost } from 'lit';
import type { ListItem, MaybeBearerToken, ReadableTaskStatus } from './variable-combobox.types.js';
export declare class FetchController {
    #private;
    constructor(host: ReactiveControllerHost, bearerToken: MaybeBearerToken);
    get taskComplete(): Promise<ListItem[]>;
    get value(): ListItem[] | undefined;
    get taskStatus(): ReadableTaskStatus;
    render(renderFunctions: StatusRenderer<ListItem[]>): unknown;
}
