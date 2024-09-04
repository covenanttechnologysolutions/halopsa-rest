/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link SlaHead} */
export type SlaHead = schemas['SlaHead']

/**
 * @module SLAAPI
 */

/**
 * SLA module
 * @public
 */
export class SLAAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of SlaHead
   * @description Use this to return multiple SlaHead.<br>
				Requires authentication.
   * @param {number} access_control_level 
   * @param {boolean} isconfig 
   * @param {boolean} showpriorities 
   * @param {boolean} showworkdays 
   */
  getSLA(
    access_control_level: number,
    isconfig: boolean,
    showpriorities: boolean,
    showworkdays: boolean,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/SLA',
      params: {
        access_control_level,
        isconfig,
        showpriorities,
        showworkdays,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postSLA(slaHead: Array<SlaHead>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/SLA',
      data: slaHead,
    })
  }

  /**
   * @summary Get one SlaHead
   * @description Use this to return a single instance of SlaHead.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getSLAById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/SLA/${id}`,
      params: {
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteSLAById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/SLA/${id}`,
    })
  }
}
