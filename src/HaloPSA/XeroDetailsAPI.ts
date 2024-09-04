/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link XeroDetails} */
export type XeroDetails = schemas['XeroDetails']

/**
 * @module XeroDetailsAPI
 */

/**
 * XeroDetails module
 * @public
 */
export class XeroDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of XeroDetails
   * @description Use this to return multiple XeroDetails.<br>
				Requires authentication.
   * @param {boolean} connectedonly 
   * @param {string} tenantid 
   */
  getXeroDetails(connectedonly: boolean, tenantid: string): Promise<any> {
    return this.request({
      method: 'get',
      path: '/XeroDetails',
      params: {
        connectedonly,
        tenantid,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postXeroDetails(xeroDetails: Array<XeroDetails>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/XeroDetails',
      data: xeroDetails,
    })
  }

  /**
   * @summary Get one XeroDetails
   * @description Use this to return a single instance of XeroDetails.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getXeroDetailsById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/XeroDetails/${id}`,
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
  deleteXeroDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/XeroDetails/${id}`,
    })
  }
}
