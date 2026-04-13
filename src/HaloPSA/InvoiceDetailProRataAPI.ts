/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module InvoiceDetailProRataAPI
 */

/**
 * InvoiceDetailProRata module
 * @public
 */
export class InvoiceDetailProRataAPI extends BaseAPI {
  getInvoiceDetailProRata(): Promise<unknown> {
    return this.request({ method: 'get', path: '/InvoiceDetailProRata' })
  }
}
