/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module RecurringItemAPI
 */

/**
 * RecurringItem module
 * @public
 */
export class RecurringItemAPI extends BaseAPI {
  /**
   * @summary List of AreaItem
   * @description Use this to return multiple AreaItem. Requires authentication.
   * @param {number} [client_id]
   * @param {boolean} [pending_recurring_invoice]
   */
  getRecurringItem({
    client_id,
    pending_recurring_invoice,
  }: {
    client_id?: number
    pending_recurring_invoice?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/RecurringItem',
      params: { client_id, pending_recurring_invoice },
    })
  }
}
