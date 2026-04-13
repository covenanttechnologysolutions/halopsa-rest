/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module IngramMicroResellerAPI
 */

/**
 * IngramMicroReseller module
 * @public
 */
export class IngramMicroResellerAPI extends BaseAPI {
  getIngramMicroResellerGet(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IngramMicroReseller/Get' })
  }

  getIngramMicroResellerGetQuote(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IngramMicroReseller/GetQuote' })
  }
}
