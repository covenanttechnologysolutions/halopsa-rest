/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link FacebookDetails} */
export type FacebookDetails = schemas['FacebookDetails']

/**
 * @module FacebookDetailsAPI
 */

/**
 * FacebookDetails module
 * @public
 */
export class FacebookDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of FacebookDetails
   * @description Use this to return multiple FacebookDetails.<br>
				Requires authentication.
   * @param {string} page_id 
   */
  getFacebookDetails(page_id: string): Promise<any> {
    return this.request({
      method: 'get',
      path: '/FacebookDetails',
      params: {
        page_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postFacebookDetails(facebookDetails: Array<FacebookDetails>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/FacebookDetails',
      data: facebookDetails,
    })
  }

  /**
   * @summary Get one FacebookDetails
   * @description Use this to return a single instance of FacebookDetails.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getFacebookDetailsById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/FacebookDetails/${id}`,
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
  deleteFacebookDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/FacebookDetails/${id}`,
    })
  }
}
