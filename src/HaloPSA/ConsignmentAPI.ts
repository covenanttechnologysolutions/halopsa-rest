/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ConsignmentHeader} */
export type ConsignmentHeader = schemas['ConsignmentHeader']

/**
 * @module ConsignmentAPI
 */

/**
 * Consignment module
 * @public
 */
export class ConsignmentAPI extends BaseAPI {
  /**
   * @summary List of ConsignmentHeader
   * @description Use this to return multiple ConsignmentHeader. Requires authentication.
   * @param {number} [count]
   * @param {boolean} [idonly]
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
   */
  getConsignment({
    count,
    idonly,
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
  }: {
    count?: number
    idonly?: boolean
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
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/Consignment',
      params: {
        count,
        idonly,
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
      },
    })
  }

  postConsignment({
    consignmentHeaderList,
  }: {
    consignmentHeaderList: Array<ConsignmentHeader>
  }): Promise<unknown> {
    return this.request({ method: 'post', data: consignmentHeaderList, path: '/Consignment' })
  }

  /**
   * @summary Get one ConsignmentHeader
   * @description Use this to return a single instance of ConsignmentHeader. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getConsignmentById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({ method: 'get', path: `/Consignment/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   * @param {boolean} [deleteOrder]
   */
  deleteConsignmentById({
    id,
    deleteOrder,
  }: {
    id: number
    deleteOrder?: boolean
  }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Consignment/${id}`, params: { deleteOrder } })
  }
}
