/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class FaultsForecastingAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary Get one FaultsForecasting
   * @description Use this to return a single instance of FaultsForecasting.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getFaultsForecastingById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/FaultsForecasting/${id}`,
      params: {
        includedetails,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postFaultsForecasting(faultsForecasting: Array<FaultsForecasting>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/FaultsForecasting',
      data: faultsForecasting,
    })
  }
}
