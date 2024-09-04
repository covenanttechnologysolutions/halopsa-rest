/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link RequestTypeGroup} */
export type RequestTypeGroup = schemas['RequestTypeGroup']

/**
 * @module TicketTypeGroupAPI
 */

/**
 * TicketTypeGroup module
 * @public
 */
export class TicketTypeGroupAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getTicketTypeGroup(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/TicketTypeGroup',
    })
  }

  /**
   * 
   * 
   
   */
  postTicketTypeGroup(requestTypeGroup: Array<RequestTypeGroup>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/TicketTypeGroup',
      data: requestTypeGroup,
    })
  }

  /**
   * @summary Get one RequestTypeGroup
   * @description Use this to return a single instance of RequestTypeGroup.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} getfields 
   * @param {boolean} includedetails 
   */
  getTicketTypeGroupById(id: number, getfields: boolean, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/TicketTypeGroup/${id}`,
      params: {
        getfields,
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteTicketTypeGroupById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/TicketTypeGroup/${id}`,
    })
  }
}
