/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link IntegrationRequest} */
export type IntegrationRequest = schemas['IntegrationRequest']

/**
 * @module IntegrationRequestAPI
 */

/**
 * IntegrationRequest module
 * @public
 */
export class IntegrationRequestAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of IntegrationRequest
   * @description Use this to return multiple IntegrationRequest.<br>
				Requires authentication.
   * @param {number} [count] 
   * @param {number} [detail_id] 
   * @param {boolean} [inbound_only] 
   * @param {number} [module_id] 
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
   * @param {boolean} [outbound_only] 
   * @param {number} [page_no] 
   * @param {number} [page_size] 
   * @param {boolean} [pageinate] 
   */
  getIntegrationRequest({
    count,
    detail_id,
    inbound_only,
    module_id,
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
    outbound_only,
    page_no,
    page_size,
    pageinate,
  }: {
    count?: number
    detail_id?: number
    inbound_only?: boolean
    module_id?: number
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
    outbound_only?: boolean
    page_no?: number
    page_size?: number
    pageinate?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationRequest',
      params: {
        count,
        detail_id,
        inbound_only,
        module_id,
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
        outbound_only,
        page_no,
        page_size,
        pageinate,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postIntegrationRequest({
    integrationRequest,
  }: {
    integrationRequest: Array<IntegrationRequest>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationRequest',
      data: integrationRequest,
    })
  }

  /**
   * @summary Get one IntegrationRequest
   * @description Use this to return a single instance of IntegrationRequest.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getIntegrationRequestById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/IntegrationRequest/${id}`,
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
  deleteIntegrationRequestById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/IntegrationRequest/${id}`,
    })
  }
}
