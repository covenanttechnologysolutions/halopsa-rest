/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link EscMsg} */
export type EscMsg = schemas['EscMsg']

/**
 * @module NotificationsAPI
 */

/**
 * Notifications module
 * @public
 */
export class NotificationsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of EscMsg
   * @description Use this to return multiple EscMsg.<br>
				Requires authentication.
   * @param {boolean} [checkhalointegrator] 
   * @param {boolean} [checknhserver] 
   * @param {string} [clientversion] 
   * @param {number} [count] 
   * @param {number} [newer_than_id] 
   * @param {number} [older_than_id] 
   * @param {number} [page_no] 
   * @param {number} [page_size] 
   * @param {boolean} [pageinate] 
   * @param {boolean} [update_shown] 
   * @param {number} [utc_offset] 
   */
  getNotifications({
    checkhalointegrator,
    checknhserver,
    clientversion,
    count,
    newer_than_id,
    older_than_id,
    page_no,
    page_size,
    pageinate,
    update_shown,
    utc_offset,
  }: {
    checkhalointegrator?: boolean
    checknhserver?: boolean
    clientversion?: string
    count?: number
    newer_than_id?: number
    older_than_id?: number
    page_no?: number
    page_size?: number
    pageinate?: boolean
    update_shown?: boolean
    utc_offset?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Notifications',
      params: {
        checkhalointegrator,
        checknhserver,
        clientversion,
        count,
        newer_than_id,
        older_than_id,
        page_no,
        page_size,
        pageinate,
        update_shown,
        utc_offset,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postNotifications({ escMsg }: { escMsg: Array<EscMsg> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notifications',
      data: escMsg,
    })
  }

  /**
   * @summary Get one EscMsg
   * @description Use this to return a single instance of EscMsg.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getNotificationsById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Notifications/${id}`,
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
  deleteNotificationsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Notifications/${id}`,
    })
  }

  /**
   * 
   * 
   
   */
  postNotificationsProcess({ listString }: { listString: string }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notifications/process',
      data: listString,
    })
  }
}
