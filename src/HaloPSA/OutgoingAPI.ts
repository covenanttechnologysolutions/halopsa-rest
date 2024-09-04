/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module OutgoingAPI
 */

/**
 * Outgoing module
 * @public
 */
export class OutgoingAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  postOutgoing(listNumber: number): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Outgoing',
      data: listNumber,
    })
  }

  /**
   * @summary List of Outgoing
   * @description Use this to return multiple Outgoing.<br>
				Requires authentication.
   * @param {number} count 
   * @param {boolean} idonly 
   * @param {number} mailbox_id 
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
   * @param {number} page_no 
   * @param {number} page_size 
   * @param {boolean} pageinate 
   * @param {number} status_id 
   */
  getOutgoing(
    count: number,
    idonly: boolean,
    mailbox_id: number,
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
    page_no: number,
    page_size: number,
    pageinate: boolean,
    status_id: number,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Outgoing',
      params: {
        count,
        idonly,
        mailbox_id,
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
        page_no,
        page_size,
        pageinate,
        status_id,
      },
    })
  }

  /**
   * @summary Get one Outgoing
   * @description Use this to return a single instance of Outgoing.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includeattachments 
   * @param {boolean} includedetails 
   */
  getOutgoingById(id: number, includeattachments: boolean, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Outgoing/${id}`,
      params: {
        includeattachments,
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteOutgoingById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Outgoing/${id}`,
    })
  }
}
