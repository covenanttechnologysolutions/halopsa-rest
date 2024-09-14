/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module RecurringItemAPI
 */

/**
 * RecurringItem module
 * @public
 */
export class RecurringItemAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of AreaItem
   * @description Use this to return multiple AreaItem.<br>
				Requires authentication.
   * @param {number} [client_id] 
   * @param {boolean} [pending_recurring_invoice] 
   */
  getRecurringItem({
    client_id,
    pending_recurring_invoice,
  }: {
    client_id?: number
    pending_recurring_invoice?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/RecurringItem',
      params: {
        client_id,
        pending_recurring_invoice,
      },
    })
  }
}
