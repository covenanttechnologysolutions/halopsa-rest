/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module OutgoingAttemptAPI
 */

/**
 * OutgoingAttempt module
 * @public
 */
export class OutgoingAttemptAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of OutgoingAttempt
   * @description Use this to return multiple OutgoingAttempt.<br>
				Requires authentication.
   * @param {number} count 
   * @param {string} order 
   * @param {string} order2 
   * @param {string} order3 
   * @param {string} order4 
   * @param {string} order5 
   * @param {boolean} orderdesc 
   * @param {boolean} orderdesc2 
   * @param {boolean} orderdesc3 
   * @param {boolean} orderdesc4 
   * @param {boolean} orderdesc5 
   * @param {number} outgoing_id 
   * @param {number} page_no 
   * @param {number} page_size 
   * @param {boolean} pageinate 
   */
  getOutgoingAttempt(
    count: number,
    order: string,
    order2: string,
    order3: string,
    order4: string,
    order5: string,
    orderdesc: boolean,
    orderdesc2: boolean,
    orderdesc3: boolean,
    orderdesc4: boolean,
    orderdesc5: boolean,
    outgoing_id: number,
    page_no: number,
    page_size: number,
    pageinate: boolean,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/OutgoingAttempt',
      params: {
        count,
        order,
        order2,
        order3,
        order4,
        order5,
        orderdesc,
        orderdesc2,
        orderdesc3,
        orderdesc4,
        orderdesc5,
        outgoing_id,
        page_no,
        page_size,
        pageinate,
      },
    })
  }

  /**
   * @summary Get one OutgoingAttempt
   * @description Use this to return a single instance of OutgoingAttempt.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includeattachments 
   * @param {boolean} includedetails 
   */
  getOutgoingAttemptById(
    id: number,
    includeattachments: boolean,
    includedetails: boolean,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: `/OutgoingAttempt/${id}`,
      params: {
        includeattachments,
        includedetails,
      },
    })
  }
}
