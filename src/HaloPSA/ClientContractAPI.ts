/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link ContractHeader} */
export type ContractHeader = schemas['ContractHeader']

/**
 * @module ClientContractAPI
 */

/**
 * ClientContract module
 * @public
 */
export class ClientContractAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of ContractHeader
   * @description Use this to return multiple ContractHeader.<br>
				Requires authentication.
   * @param {number} [client_id] 
   * @param {number} [count] 
   * @param {number} [device_id] 
   * @param {boolean} [excluderenewed] 
   * @param {boolean} [includeinactive] 
   * @param {boolean} [includelastrenewed] 
   * @param {boolean} [isbillingplansetup] 
   * @param {boolean} [isoracle] 
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
   * @param {boolean} [pending_recurring_invoice] 
   * @param {string} [search] 
   * @param {number} [site_id] 
   */
  getClientContract({
    client_id,
    count,
    device_id,
    excluderenewed,
    includeinactive,
    includelastrenewed,
    isbillingplansetup,
    isoracle,
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
    pending_recurring_invoice,
    search,
    site_id,
  }: {
    client_id?: number
    count?: number
    device_id?: number
    excluderenewed?: boolean
    includeinactive?: boolean
    includelastrenewed?: boolean
    isbillingplansetup?: boolean
    isoracle?: boolean
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
    pending_recurring_invoice?: boolean
    search?: string
    site_id?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ClientContract',
      params: {
        client_id,
        count,
        device_id,
        excluderenewed,
        includeinactive,
        includelastrenewed,
        isbillingplansetup,
        isoracle,
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
        pending_recurring_invoice,
        search,
        site_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postClientContract({ contractHeader }: { contractHeader: Array<ContractHeader> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ClientContract',
      data: contractHeader,
    })
  }

  /**
   * @summary Get one ContractHeader
   * @description Use this to return a single instance of ContractHeader.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   * @param {boolean} [includeperiods] 
   */
  getClientContractById({
    id,
    includedetails,
    includeperiods,
  }: {
    id: number
    includedetails?: boolean
    includeperiods?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ClientContract/${id}`,
      params: {
        includedetails,
        includeperiods,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteClientContractById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/ClientContract/${id}`,
    })
  }

  /**
   * 
   * 
   
   */
  postClientContractNextRef({
    contractHeader,
  }: {
    contractHeader: Array<ContractHeader>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ClientContract/NextRef',
      data: contractHeader,
    })
  }
}
