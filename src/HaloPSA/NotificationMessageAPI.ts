/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link NotificationContent} */
export type NotificationContent = schemas['NotificationContent']

/**
 * @module NotificationMessageAPI
 */

/**
 * NotificationMessage module
 * @public
 */
export class NotificationMessageAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getNotificationMessage({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/NotificationMessage',
    })
  }

  /**
   * 
   * 
   
   */
  postNotificationMessage({
    notificationContent,
  }: {
    notificationContent: Array<NotificationContent>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/NotificationMessage',
      data: notificationContent,
    })
  }

  /**
   * @summary Get one NotificationContent
   * @description Use this to return a single instance of NotificationContent.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getNotificationMessageById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/NotificationMessage/${id}`,
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
  deleteNotificationMessageById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/NotificationMessage/${id}`,
    })
  }
}
