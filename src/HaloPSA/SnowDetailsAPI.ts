/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link SnowDetails} */
export type SnowDetails = schemas['SnowDetails']

/**
 * @module SnowDetailsAPI
 */

/**
 * SnowDetails module
 * @public
 */
export class SnowDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of SnowDetails
   * @description Use this to return multiple SnowDetails.<br>
				Requires authentication.
   * @param {boolean} includedetails 
   */
  getSnowDetails(includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: '/SnowDetails',
      params: {
        includedetails,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postSnowDetails(snowDetails: Array<SnowDetails>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/SnowDetails',
      data: snowDetails,
    })
  }

  /**
   * @summary Get one SnowDetails
   * @description Use this to return a single instance of SnowDetails.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} doDecrypt 
   * @param {boolean} includedetails 
   */
  getSnowDetailsById(id: number, doDecrypt: boolean, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/SnowDetails/${id}`,
      params: {
        doDecrypt,
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteSnowDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/SnowDetails/${id}`,
    })
  }
}
