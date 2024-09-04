/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class CurrencyAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getCurrency(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Currency',
    })
  }

  /**
   * 
   * 
   
   */
  postCurrency(currency: Array<Currency>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Currency',
      data: currency,
    })
  }

  /**
   * @summary Get one Currency
   * @description Use this to return a single instance of Currency.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getCurrencyById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Currency/${id}`,
      params: {
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteCurrencyById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Currency/${id}`,
    })
  }
}
