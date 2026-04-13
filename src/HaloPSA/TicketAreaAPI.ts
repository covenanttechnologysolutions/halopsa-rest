/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class TicketAreaAPI extends BaseAPI {
  getTicketArea(): Promise<unknown> {
    return this.request({ method: 'get', path: '/TicketArea' })
  }

  postTicketArea({ ticketAreaList }: { ticketAreaList: Array<TicketArea> }): Promise<TicketArea> {
    return this.request({ method: 'post', data: ticketAreaList, path: '/TicketArea' })
  }

  /**
   * @summary Get one TicketArea
   * @description Use this to return a single instance of TicketArea. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getTicketAreaById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<TicketArea> {
    return this.request({ method: 'get', path: `/TicketArea/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteTicketAreaById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/TicketArea/${id}` })
  }
}
