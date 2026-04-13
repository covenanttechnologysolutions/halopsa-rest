/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module NotificationLogAPI
 */

/**
 * NotificationLog module
 * @public
 */
export class NotificationLogAPI extends BaseAPI {
  getNotificationLog(): Promise<unknown> {
    return this.request({ method: 'get', path: '/NotificationLog' })
  }
}
