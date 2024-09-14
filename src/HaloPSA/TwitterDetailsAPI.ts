/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link TwitterDetails} */
export type TwitterDetails = schemas['TwitterDetails']

/**
 * @module TwitterDetailsAPI
 */

/**
 * TwitterDetails module
 * @public
 */
export class TwitterDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of TwitterDetails
   * @description Use this to return multiple TwitterDetails.<br>
				Requires authentication.
   * @param {string} [account_id] 
   */
  getTwitterDetails({ account_id }: { account_id?: string }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/TwitterDetails',
      params: {
        account_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postTwitterDetails({ twitterDetails }: { twitterDetails: Array<TwitterDetails> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/TwitterDetails',
      data: twitterDetails,
    })
  }

  /**
   * @summary Get one TwitterDetails
   * @description Use this to return a single instance of TwitterDetails.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getTwitterDetailsById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/TwitterDetails/${id}`,
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
  deleteTwitterDetailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/TwitterDetails/${id}`,
    })
  }
}
