/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module SingleSignOnAttemptAPI
 */

/**
 * SingleSignOnAttempt module
 * @public
 */
export class SingleSignOnAttemptAPI extends BaseAPI {
  getSingleSignOnAttempt(): Promise<unknown> {
    return this.request({ method: 'get', path: '/SingleSignOnAttempt' })
  }

  /**
   * @param {number} id
   */
  getSingleSignOnAttemptById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'get', path: `/SingleSignOnAttempt/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteSingleSignOnAttemptById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/SingleSignOnAttempt/${id}` })
  }
}
