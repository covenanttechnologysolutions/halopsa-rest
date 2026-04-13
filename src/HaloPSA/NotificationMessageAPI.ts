/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class NotificationMessageAPI extends BaseAPI {
  getNotificationMessage(): Promise<unknown> {
    return this.request({ method: 'get', path: '/NotificationMessage' })
  }

  postNotificationMessage({
    notificationContentList,
  }: {
    notificationContentList: Array<NotificationContent>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: notificationContentList,
      path: '/NotificationMessage',
    })
  }

  /**
   * @summary Get one NotificationContent
   * @description Use this to return a single instance of NotificationContent. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getNotificationMessageById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: `/NotificationMessage/${id}`,
      params: { includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteNotificationMessageById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/NotificationMessage/${id}` })
  }
}
