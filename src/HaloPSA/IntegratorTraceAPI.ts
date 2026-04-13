/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module IntegratorTraceAPI
 */

/**
 * IntegratorTrace module
 * @public
 */
export class IntegratorTraceAPI extends BaseAPI {
  getIntegratorTrace(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegratorTrace' })
  }

  /**
   * @param {number} id
   */
  getIntegratorTraceById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'get', path: `/IntegratorTrace/${id}` })
  }
}
