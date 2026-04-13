/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class TicketTypeGroupAPI extends BaseAPI {
  getTicketTypeGroup(): Promise<unknown> {
    return this.request({ method: 'get', path: '/TicketTypeGroup' })
  }

  postTicketTypeGroup({
    requestTypeGroupList,
  }: {
    requestTypeGroupList: Array<RequestTypeGroup>
  }): Promise<unknown> {
    return this.request({ method: 'post', data: requestTypeGroupList, path: '/TicketTypeGroup' })
  }

  /**
   * @summary Get one RequestTypeGroup
   * @description Use this to return a single instance of RequestTypeGroup. Requires authentication.
   * @param {number} id
   * @param {boolean} [getfields]
   * @param {boolean} [includedetails]
   */
  getTicketTypeGroupById({
    id,
    getfields,
    includedetails,
  }: {
    id: number
    getfields?: boolean
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: `/TicketTypeGroup/${id}`,
      params: { getfields, includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteTicketTypeGroupById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/TicketTypeGroup/${id}` })
  }
}
