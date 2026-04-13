/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module StockTraceAPI
 */

/**
 * StockTrace module
 * @public
 */
export class StockTraceAPI extends BaseAPI {
  getStockTrace(): Promise<unknown> {
    return this.request({ method: 'get', path: '/StockTrace' })
  }

  /**
   * @param {number} id
   */
  getStockTraceById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'get', path: `/StockTrace/${id}` })
  }
}
