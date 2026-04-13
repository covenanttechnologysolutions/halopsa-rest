/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link UnameNotification} */
export type UnameNotification = schemas['UnameNotification']

/**
 * @module NotificationAPI
 */

/**
 * Notification module
 * @public
 */
export class NotificationAPI extends BaseAPI {
  /**
   * @summary List of UnameNotification
   * @description Use this to return multiple UnameNotification. Requires authentication.
   * @param {number} [agent_id]
   * @param {number} [restrictto_agent_id]
   * @param {string} [role_id]
   * @param {boolean} [showall]
   * @param {number} [type]
   * @param {string} [webhook_id]
   */
  getNotification({
    agent_id,
    restrictto_agent_id,
    role_id,
    showall,
    type,
    webhook_id,
  }: {
    agent_id?: number
    restrictto_agent_id?: number
    role_id?: string
    showall?: boolean
    type?: number
    webhook_id?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/Notification',
      params: { agent_id, restrictto_agent_id, role_id, showall, type, webhook_id },
    })
  }

  postNotification({
    unameNotificationList,
  }: {
    unameNotificationList: Array<UnameNotification>
  }): Promise<unknown> {
    return this.request({ method: 'post', data: unameNotificationList, path: '/Notification' })
  }

  /**
   * @summary Get one UnameNotification
   * @description Use this to return a single instance of UnameNotification. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getNotificationById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({ method: 'get', path: `/Notification/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteNotificationById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Notification/${id}` })
  }
}
