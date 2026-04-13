/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module OrderLineAPI
 */

/**
 * OrderLine module
 * @public
 */
export class OrderLineAPI extends BaseAPI {
  getOrderLine(): Promise<unknown> {
    return this.request({ method: 'get', path: '/OrderLine' })
  }
}
