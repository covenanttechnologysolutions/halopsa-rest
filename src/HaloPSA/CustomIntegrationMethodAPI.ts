/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link OutboundIntegrationMethod} */
export type OutboundIntegrationMethod = schemas['OutboundIntegrationMethod']

/**
 * @module CustomIntegrationMethodAPI
 */

/**
 * CustomIntegrationMethod module
 * @public
 */
export class CustomIntegrationMethodAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of OutboundIntegrationMethod
   * @description Use this to return multiple OutboundIntegrationMethod.<br>
				Requires authentication.
   * @param {number} [count] 
   * @param {number} [integration_id] 
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
  getCustomIntegrationMethod({
    count,
    integration_id,
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
    integration_id?: number
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/CustomIntegrationMethod',
      params: {
        count,
        integration_id,
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

  /**
   * 
   * 
   
   */
  postCustomIntegrationMethod({
    outboundIntegrationMethod,
  }: {
    outboundIntegrationMethod: Array<OutboundIntegrationMethod>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/CustomIntegrationMethod',
      data: outboundIntegrationMethod,
    })
  }

  /**
   * @summary Get one OutboundIntegrationMethod
   * @description Use this to return a single instance of OutboundIntegrationMethod.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getCustomIntegrationMethodById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/CustomIntegrationMethod/${id}`,
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
  deleteCustomIntegrationMethodById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/CustomIntegrationMethod/${id}`,
    })
  }
}
