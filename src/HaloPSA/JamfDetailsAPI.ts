/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link JamfDetails} */
export type JamfDetails = schemas['JamfDetails']

/**
 * @module JamfDetailsAPI
 */

/**
 * JamfDetails module
 * @public
 */
export class JamfDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getJamfDetails(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/JamfDetails',
    })
  }

  /**
   * 
   * 
   
   */
  postJamfDetails(jamfDetails: Array<JamfDetails>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/JamfDetails',
      data: jamfDetails,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getJamfDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: `/JamfDetails/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteJamfDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/JamfDetails/${id}`,
    })
  }
}
