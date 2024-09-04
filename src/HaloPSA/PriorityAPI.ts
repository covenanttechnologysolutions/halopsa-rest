/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link Policy} */
export type Policy = schemas['Policy']

/**
 * @module PriorityAPI
 */

/**
 * Priority module
 * @public
 */
export class PriorityAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of Policy
   * @description Use this to return multiple Policy.<br>
				Requires authentication.
   * @param {boolean} includedistinct 
   * @param {number} slaid 
   */
  getPriority(includedistinct: boolean, slaid: number): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Priority',
      params: {
        includedistinct,
        slaid,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postPriority(policy: Array<Policy>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Priority',
      data: policy,
    })
  }

  /**
   * @summary Get one Policy
   * @description Use this to return a single instance of Policy.<br>
				Requires authentication.
   * @param {string} id 
   * @param {boolean} includedetails 
   */
  getPriorityById(id: string, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Priority/${id}`,
      params: {
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {string} id
   */
  deletePriorityById(id: string): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Priority/${id}`,
    })
  }
}
