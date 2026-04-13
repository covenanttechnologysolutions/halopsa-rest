/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link StockBin} */
export type StockBin = schemas['StockBin']

/**
 * @module StockBinAPI
 */

/**
 * StockBin module
 * @public
 */
export class StockBinAPI extends BaseAPI {
  getStockBin(): Promise<unknown> {
    return this.request({ method: 'get', path: '/StockBin' })
  }

  postStockBin({ stockBinList }: { stockBinList: Array<StockBin> }): Promise<StockBin> {
    return this.request({ method: 'post', data: stockBinList, path: '/StockBin' })
  }

  /**
   * @param {number} id
   */
  getStockBinById({ id }: { id: number }): Promise<StockBin> {
    return this.request({ method: 'get', path: `/StockBin/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteStockBinById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/StockBin/${id}` })
  }
}
