/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link IntegrationError} */
export type IntegrationError = schemas['IntegrationError']

/**
 * @module IntegrationErrorAPI
 */

/**
 * IntegrationError module
 * @public
 */
export class IntegrationErrorAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of IntegrationError
   * @description Use this to return multiple IntegrationError.<br>
				Requires authentication.
   * @param {number} count 
   * @param {number} detail_id 
   * @param {number} module_id 
   * @param {string} order 
   * @param {string} order2 
   * @param {string} order3 
   * @param {string} order4 
   * @param {string} order5 
   * @param {boolean} orderdesc 
   * @param {boolean} orderdesc2 
   * @param {boolean} orderdesc3 
   * @param {boolean} orderdesc4 
   * @param {boolean} orderdesc5 
   * @param {number} page_no 
   * @param {number} page_size 
   * @param {boolean} pageinate 
   */
  getIntegrationError(
    count: number,
    detail_id: number,
    module_id: number,
    order: string,
    order2: string,
    order3: string,
    order4: string,
    order5: string,
    orderdesc: boolean,
    orderdesc2: boolean,
    orderdesc3: boolean,
    orderdesc4: boolean,
    orderdesc5: boolean,
    page_no: number,
    page_size: number,
    pageinate: boolean,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationError',
      params: {
        count,
        detail_id,
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
  postIntegrationError(integrationError: Array<IntegrationError>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IntegrationError',
      data: integrationError,
    })
  }

  /**
   * @summary Get one IntegrationError
   * @description Use this to return a single instance of IntegrationError.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getIntegrationErrorById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/IntegrationError/${id}`,
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
  deleteIntegrationErrorById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/IntegrationError/${id}`,
    })
  }
}
