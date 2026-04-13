/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link FaultsForecasting} */
export type FaultsForecasting = schemas['FaultsForecasting']

/**
 * @module FaultsForecastingAPI
 */

/**
 * FaultsForecasting module
 * @public
 */
export class FaultsForecastingAPI extends BaseAPI {
  /**
   * @summary Get one FaultsForecasting
   * @description Use this to return a single instance of FaultsForecasting. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getFaultsForecastingById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<FaultsForecasting> {
    return this.request({
      method: 'get',
      path: `/FaultsForecasting/${id}`,
      params: { includedetails },
    })
  }

  postFaultsForecasting({
    faultsForecastingList,
  }: {
    faultsForecastingList: Array<FaultsForecasting>
  }): Promise<FaultsForecasting> {
    return this.request({ method: 'post', data: faultsForecastingList, path: '/FaultsForecasting' })
  }
}
