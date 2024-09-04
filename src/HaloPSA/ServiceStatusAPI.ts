/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link ServStatus} */
export type ServStatus = schemas['ServStatus']
/** {@link ServStatusSubscribe} */
export type ServStatusSubscribe = schemas['ServStatusSubscribe']

/**
 * @module ServiceStatusAPI
 */

/**
 * ServiceStatus module
 * @public
 */
export class ServiceStatusAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of ServStatus
   * @description Use this to return multiple ServStatus.<br>
				Requires authentication.
   * @param {number} count 
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
   * @param {number} service_id 
   */
  getServiceStatus(
    count: number,
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
    service_id: number,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ServiceStatus',
      params: {
        count,
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
        service_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postServiceStatus(servStatus: Array<ServStatus>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ServiceStatus',
      data: servStatus,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getServiceStatusSubscribeById(id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ServiceStatus/Subscribe/${id}`,
    })
  }

  /**
   * @summary Get one ServStatus
   * @description Use this to return a single instance of ServStatus.<br>
				Requires authentication.
   * @param {string} id 
   * @param {boolean} includedetails 
   */
  getServiceStatusById(id: string, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ServiceStatus/${id}`,
      params: {
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {string} id
   */
  deleteServiceStatusById(id: string): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/ServiceStatus/${id}`,
    })
  }

  /**
   * 
   * 
   
   */
  postServiceStatusSubscribe(servStatusSubscribe: Array<ServStatusSubscribe>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ServiceStatus/Subscribe',
      data: servStatusSubscribe,
    })
  }
}
