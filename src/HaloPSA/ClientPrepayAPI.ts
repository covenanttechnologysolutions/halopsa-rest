/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link PrepayHistory} */
export type PrepayHistory = schemas['PrepayHistory']

/**
 * @module ClientPrepayAPI
 */

/**
 * ClientPrepay module
 * @public
 */
export class ClientPrepayAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of PrepayHistory
   * @description Use this to return multiple PrepayHistory.<br>
				Requires authentication.
   * @param {string} [advanced_search] 
   * @param {string} [billing_date] 
   * @param {number} [client_id] 
   * @param {string} [client_ids] 
   * @param {number} [contract_id] 
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
   * @param {boolean} [ready_for_invoicing] 
   * @param {string} [search] 
   */
  getClientPrepay({
    advanced_search,
    billing_date,
    client_id,
    client_ids,
    contract_id,
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
    ready_for_invoicing,
    search,
  }: {
    advanced_search?: string
    billing_date?: string
    client_id?: number
    client_ids?: string
    contract_id?: number
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
    ready_for_invoicing?: boolean
    search?: string
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ClientPrepay',
      params: {
        advanced_search,
        billing_date,
        client_id,
        client_ids,
        contract_id,
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
        ready_for_invoicing,
        search,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postClientPrepay({ prepayHistory }: { prepayHistory: Array<PrepayHistory> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ClientPrepay',
      data: prepayHistory,
    })
  }

  /**
   * @summary Get one PrepayHistory
   * @description Use this to return a single instance of PrepayHistory.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getClientPrepayById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ClientPrepay/${id}`,
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
  deleteClientPrepayById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/ClientPrepay/${id}`,
    })
  }
}
