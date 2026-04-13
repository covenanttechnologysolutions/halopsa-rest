/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ForecastDetails} */
export type ForecastDetails = schemas['ForecastDetails']

/**
 * @module ForecastDetailsAPI
 */

/**
 * ForecastDetails module
 * @public
 */
export class ForecastDetailsAPI extends BaseAPI {
  getForecastDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/ForecastDetails' })
  }

  postForecastDetails({
    forecastDetailsList,
  }: {
    forecastDetailsList: Array<ForecastDetails>
  }): Promise<ForecastDetails> {
    return this.request({ method: 'post', data: forecastDetailsList, path: '/ForecastDetails' })
  }

  /**
   * @param {number} id
   */
  getForecastDetailsById({ id }: { id: number }): Promise<ForecastDetails> {
    return this.request({ method: 'get', path: `/ForecastDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteForecastDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/ForecastDetails/${id}` })
  }
}
