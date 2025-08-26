import { Task } from '@lit/task';
import type { StatusRenderer } from '@lit/task';
import type { ReactiveControllerHost } from 'lit';
import type { Data, PlotData } from 'plotly.js-dist-min';
import type TerraTimeSeries from './time-series.component.js';
export declare const plotlyDefaultData: Partial<PlotData>;
export declare class TimeSeriesController {
    #private;
    host: ReactiveControllerHost & TerraTimeSeries;
    emptyPlotData: Partial<Data>[];
    task: Task<any, Partial<Data>[]>;
    lastTaskValue: Partial<Data>[] | undefined;
    constructor(host: ReactiveControllerHost & TerraTimeSeries);
    render(renderFunctions: StatusRenderer<Partial<Data>[]>): unknown;
    /**
     * Gets the cache key for the current time series data
     */
    getCacheKey(): string;
    /**
     * Called when the user confirms the data point warning
     */
    confirmDataPointWarning(): void;
    /**
     * Clears expired cache entries for the current cache key
     */
    clearExpiredCache(): Promise<void>;
}
