/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link AddToTicket} */
export type AddToTicket = schemas['AddToTicket']
/** {@link IncomingEmail} */
export type IncomingEmail = schemas['IncomingEmail']

/**
 * @module IncomingemailAPI
 */

/**
 * Incomingemail module
 * @public
 */
export class IncomingemailAPI extends BaseAPI {
  /**
   * @summary List of IncomingEmail
   * @description Use this to return multiple IncomingEmail. Requires authentication.
   * @param {string} [order]
   * @param {string} [order2]
   * @param {string} [order3]
   * @param {string} [order4]
   * @param {string} [order5]
   * @param {boolean} [orderdesc]
   * @param {boolean} [orderdesc2]
   * @param {boolean} [orderdesc3]
   * @param {boolean} [orderdesc4]
   * @param {boolean} [orderdesc5]
   * @param {number} [page_no]
   * @param {number} [page_size]
   * @param {boolean} [pageinate]
   * @param {boolean} [showcurrentagentonly]
   */
  getIncomingemail({
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
    showcurrentagentonly,
  }: {
    order?: string
    order2?: string
    order3?: string
    order4?: string
    order5?: string
    orderdesc?: boolean
    orderdesc2?: boolean
    orderdesc3?: boolean
    orderdesc4?: boolean
    orderdesc5?: boolean
    page_no?: number
    page_size?: number
    pageinate?: boolean
    showcurrentagentonly?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/incomingemail',
      params: {
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
        showcurrentagentonly,
      },
    })
  }

  postIncomingemail({
    incomingEmailList,
  }: {
    incomingEmailList: Array<IncomingEmail>
  }): Promise<unknown> {
    return this.request({ method: 'post', data: incomingEmailList, path: '/incomingemail' })
  }

  /**
   * @summary Get one IncomingEmail
   * @description Use this to return a single instance of IncomingEmail. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   * @param {boolean} [showcurrentagentonly]
   */
  getIncomingemailById({
    id,
    includedetails,
    showcurrentagentonly,
  }: {
    id: number
    includedetails?: boolean
    showcurrentagentonly?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: `/incomingemail/${id}`,
      params: { includedetails, showcurrentagentonly },
    })
  }

  /**
   * @param {number} id
   */
  deleteIncomingemailById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/incomingemail/${id}` })
  }

  postIncomingemailAddToTicket({
    addToTicketList,
  }: {
    addToTicketList: Array<AddToTicket>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: addToTicketList,
      path: '/incomingemail/AddToTicket',
    })
  }
}
