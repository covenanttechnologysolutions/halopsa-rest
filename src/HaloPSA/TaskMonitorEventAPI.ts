/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module TaskMonitorEventAPI
 */

/**
 * TaskMonitorEvent module
 * @public
 */
export class TaskMonitorEventAPI extends BaseAPI {
  getTaskMonitorEvent(): Promise<unknown> {
    return this.request({ method: 'get', path: '/TaskMonitorEvent' })
  }
}
