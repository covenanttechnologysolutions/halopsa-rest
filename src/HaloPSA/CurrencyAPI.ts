/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Currency} */
export type Currency = schemas['Currency']

/**
 * @module CurrencyAPI
 */

/**
 * Currency module
 * @public
 */
export class CurrencyAPI extends BaseAPI {
  getCurrency(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Currency' })
  }

  postCurrency({ currencyList }: { currencyList: Array<Currency> }): Promise<Currency> {
    return this.request({ method: 'post', data: currencyList, path: '/Currency' })
  }

  /**
   * @summary Get one Currency
   * @description Use this to return a single instance of Currency. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getCurrencyById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<Currency> {
    return this.request({ method: 'get', path: `/Currency/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteCurrencyById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Currency/${id}` })
  }
}
