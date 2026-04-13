/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module TaskTraceAPI
 */

/**
 * TaskTrace module
 * @public
 */
export class TaskTraceAPI extends BaseAPI {
  getTaskTrace(): Promise<unknown> {
    return this.request({ method: 'get', path: '/TaskTrace' })
  }

  /**
   * @param {number} id
   */
  getTaskTraceById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'get', path: `/TaskTrace/${id}` })
  }
}
