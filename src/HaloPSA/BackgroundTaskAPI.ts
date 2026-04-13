/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module BackgroundTaskAPI
 */

/**
 * BackgroundTask module
 * @public
 */
export class BackgroundTaskAPI extends BaseAPI {
  /**
   * @param {number} id
   */
  getBackgroundTaskById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'get', path: `/BackgroundTask/${id}` })
  }
}
