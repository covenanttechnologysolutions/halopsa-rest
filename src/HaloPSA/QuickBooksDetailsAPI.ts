/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link QuickBooksDetails} */
export type QuickBooksDetails = schemas['QuickBooksDetails']

/**
 * @module QuickBooksDetailsAPI
 */

/**
 * QuickBooksDetails module
 * @public
 */
export class QuickBooksDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of QuickBooksDetails
   * @description Use this to return multiple QuickBooksDetails.<br>
				Requires authentication.
   * @param {string} companyid 
   * @param {boolean} connectedonly 
   */
  getQuickBooksDetails(companyid: string, connectedonly: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: '/QuickBooksDetails',
      params: {
        companyid,
        connectedonly,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postQuickBooksDetails(quickBooksDetails: Array<QuickBooksDetails>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/QuickBooksDetails',
      data: quickBooksDetails,
    })
  }

  /**
   * @summary Get one QuickBooksDetails
   * @description Use this to return a single instance of QuickBooksDetails.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getQuickBooksDetailsById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/QuickBooksDetails/${id}`,
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
  deleteQuickBooksDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/QuickBooksDetails/${id}`,
    })
  }
}
