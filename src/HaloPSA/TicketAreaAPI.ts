/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link TicketArea} */
export type TicketArea = schemas['TicketArea']

/**
 * @module TicketAreaAPI
 */

/**
 * TicketArea module
 * @public
 */
export class TicketAreaAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getTicketArea({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/TicketArea',
    })
  }

  /**
   * 
   * 
   
   */
  postTicketArea({ ticketArea }: { ticketArea: Array<TicketArea> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/TicketArea',
      data: ticketArea,
    })
  }

  /**
   * @summary Get one TicketArea
   * @description Use this to return a single instance of TicketArea.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getTicketAreaById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/TicketArea/${id}`,
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
  deleteTicketAreaById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/TicketArea/${id}`,
    })
  }
}
