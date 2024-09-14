/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class NotificationAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of UnameNotification
   * @description Use this to return multiple UnameNotification.<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Notification',
      params: {
        agent_id,
        restrictto_agent_id,
        role_id,
        showall,
        type,
        webhook_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postNotification({
    unameNotification,
  }: {
    unameNotification: Array<UnameNotification>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Notification',
      data: unameNotification,
    })
  }

  /**
   * @summary Get one UnameNotification
   * @description Use this to return a single instance of UnameNotification.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getNotificationById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Notification/${id}`,
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
  deleteNotificationById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Notification/${id}`,
    })
  }
}
