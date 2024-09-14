/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link ServSite} */
export type ServSite = schemas['ServSite']
/** {@link UnsubscribeService} */
export type UnsubscribeService = schemas['UnsubscribeService']

/**
 * @module ServiceAPI
 */

/**
 * Service module
 * @public
 */
export class ServiceAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of ServSite
   * @description Use this to return multiple ServSite.<br>
				Requires authentication.
   * @param {number} [access_control_level] 
   * @param {string} [asset_ids] 
   * @param {number} [count] 
   * @param {boolean} [includechildservices] 
   * @param {boolean} [includestatusinfo] 
   * @param {number} [itil_ticket_type] 
   * @param {boolean} [monitoredonly] 
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
   * @param {number} [parent_service_category_id] 
   * @param {boolean} [relatedservicesonly] 
   * @param {string} [search] 
   * @param {number} [service_category_id] 
   * @param {string} [service_category_ids] 
   * @param {string} [service_status_ids] 
   * @param {boolean} [subscribedonly] 
   * @param {number} [template_id] 
   * @param {number} [ticket_id] 
   * @param {number} [tickettype_id] 
   * @param {number} [user_id] 
   */
  getService({
    access_control_level,
    asset_ids,
    count,
    includechildservices,
    includestatusinfo,
    itil_ticket_type,
    monitoredonly,
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
    parent_service_category_id,
    relatedservicesonly,
    search,
    service_category_id,
    service_category_ids,
    service_status_ids,
    subscribedonly,
    template_id,
    ticket_id,
    tickettype_id,
    user_id,
  }: {
    access_control_level?: number
    asset_ids?: string
    count?: number
    includechildservices?: boolean
    includestatusinfo?: boolean
    itil_ticket_type?: number
    monitoredonly?: boolean
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
    parent_service_category_id?: number
    relatedservicesonly?: boolean
    search?: string
    service_category_id?: number
    service_category_ids?: string
    service_status_ids?: string
    subscribedonly?: boolean
    template_id?: number
    ticket_id?: number
    tickettype_id?: number
    user_id?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Service',
      params: {
        access_control_level,
        asset_ids,
        count,
        includechildservices,
        includestatusinfo,
        itil_ticket_type,
        monitoredonly,
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
        parent_service_category_id,
        relatedservicesonly,
        search,
        service_category_id,
        service_category_ids,
        service_status_ids,
        subscribedonly,
        template_id,
        ticket_id,
        tickettype_id,
        user_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postService({ servSite }: { servSite: Array<ServSite> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Service',
      data: servSite,
    })
  }

  /**
   * @summary Get one ServSite
   * @description Use this to return a single instance of ServSite.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   * @param {number} [user_id] 
   */
  getServiceById({
    id,
    includedetails,
    user_id,
  }: {
    id: number
    includedetails?: boolean
    user_id?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Service/${id}`,
      params: {
        includedetails,
        user_id,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteServiceById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Service/${id}`,
    })
  }

  /**
   * 
   * 
   
   */
  postServiceUnsubscribe({
    unsubscribeService,
  }: {
    unsubscribeService: Array<UnsubscribeService>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Service/unsubscribe',
      data: unsubscribeService,
    })
  }
}
