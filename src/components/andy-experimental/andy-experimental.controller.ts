/*
import { Task, initialState } from '@lit/task'
import type { StatusRenderer } from '@lit/task'
import type { ReactiveControllerHost } from 'lit'
import type { Data } from 'plotly.js-dist-min'

import type { MaybeBearerToken } from './time-series.types.js'
import type { TimeInterval } from '../../types.js'
import type TerraTimeSeries from './time-series.component.js'

export class SkeletonTimeSeriesController {
  // -- Private fields
  #bearerToken: MaybeBearerToken = null
  #userConfirmedWarning = false

  // -- Public properties
  host: ReactiveControllerHost & TerraTimeSeries
  task: Task<any, Partial<Data>[]>
  lastTaskValue: Partial<Data>[] | undefined

  emptyPlotData: Partial<Data>[] = [
    {
      type: 'scatter',
      mode: 'lines',
      line: { color: 'rgb(28, 103, 227)' },
      x: [],
      y: [],
    },
  ]

  constructor(host: ReactiveControllerHost & TerraTimeSeries, bearerToken: MaybeBearerToken) {
    this.#bearerToken = bearerToken
    this.host = host

    this.task = new Task(host, {
      task: async (_args, { signal }) => {
        // Placeholder: Validation
        if (
          !this.host.catalogVariable ||
          !this.host.startDate ||
          !this.host.endDate ||
          !this.host.location
        ) {
          return initialState
        }

        // Placeholder: Fetch time series
        const data = await this.#loadTimeSeries(signal)

        this.lastTaskValue = this.#mapToPlotlyData(data)

        // Placeholder: Emit event
        this.host.emit('terra-time-series-data-change', {
          detail: {
            data,
            variable: this.host.catalogVariable,
            startDate: this.host.startDate,
            endDate: this.host.endDate,
            location: this.host.location,
          },
        })

        return this.lastTaskValue
      },
      args: () => [
        this.host.catalogVariable,
        this.host.startDate,
        this.host.endDate,
        this.host.location,
      ],
    })
  }

  render(renderFunctions: StatusRenderer<Partial<Data>[]>) {
    return this.task.render(renderFunctions)
  }

  // ============ Placeholder private methods ============

  async #loadTimeSeries(signal: AbortSignal): Promise<any> {
    // Placeholder: implement logic to fetch or load time series
    return {
      metadata: {},
      data: [],
    }
  }

  #mapToPlotlyData(data: any): Partial<Data>[] {
    // Placeholder: convert raw data to Plotly format
    return [
      {
        ...this.emptyPlotData[0],
        x: data.data.map((d: any) => d.timestamp),
        y: data.data.map((d: any) => d.value),
      },
    ]
  }

  #checkDataPointLimits(): boolean {
    // Placeholder: implement data limit check
    return true
  }

  confirmDataPointWarning() {
    this.#userConfirmedWarning = true
    this.host.showDataPointWarning = false
  }

  getCacheKey(): string {
    // Placeholder: create cache key based on location/variable
    return 'mock_cache_key'
  }

  #normalizeCoordinates(lat: string, lon: string) {
    return {
      lat: Number(lat).toFixed(2),
      lon: Number(lon).toFixed(2),
    }
  }
}


*/