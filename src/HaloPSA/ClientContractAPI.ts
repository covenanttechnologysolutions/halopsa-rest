/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ContractApproval} */
export type ContractApproval = schemas['ContractApproval']
/** {@link ContractHeader} */
export type ContractHeader = schemas['ContractHeader']
/** {@link ContractHeader_View} */
export type ContractHeader_View = schemas['ContractHeader_View']

/**
 * @module ClientContractAPI
 */

/**
 * ClientContract module
 * @public
 */
export class ClientContractAPI extends BaseAPI {
  /**
   * @summary List of ContractHeader
   * @description Use this to return multiple ContractHeader. Requires authentication.
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
   * @param {number} [contract_type] Use this to return only Contracts with the specified Contract Type
   * @param {number} [contract_sub_type] Use this to return only Contracts with the specified Contract Sub-Type
   * @param {number} [labour_type] Use this to return only Contracts with the specified Labour Type - 0=Fixed and 1=Pre-Pay
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
    contract_type,
    contract_sub_type,
    labour_type,
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
    contract_type?: number
    contract_sub_type?: number
    labour_type?: number
  }): Promise<ContractHeader_View> {
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
        contract_type,
        contract_sub_type,
        labour_type,
      },
    })
  }

  postClientContract({
    contractHeaderList,
  }: {
    contractHeaderList: Array<ContractHeader>
  }): Promise<ContractHeader> {
    return this.request({ method: 'post', data: contractHeaderList, path: '/ClientContract' })
  }

  /**
   * @summary Get one ContractHeader
   * @description Use this to return a single instance of ContractHeader. Requires authentication.
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
  }): Promise<ContractHeader> {
    return this.request({
      method: 'get',
      path: `/ClientContract/${id}`,
      params: { includedetails, includeperiods },
    })
  }

  /**
   * @param {number} id
   */
  deleteClientContractById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/ClientContract/${id}` })
  }

  postClientContractNextRef({
    contractHeaderList,
  }: {
    contractHeaderList: Array<ContractHeader>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: contractHeaderList,
      path: '/ClientContract/NextRef',
    })
  }

  postClientContractApproval({
    contractApprovalList,
  }: {
    contractApprovalList: Array<ContractApproval>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: contractApprovalList,
      path: '/ClientContract/Approval',
    })
  }
}
