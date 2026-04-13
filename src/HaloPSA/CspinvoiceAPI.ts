/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link CSPInvoice} */
export type CSPInvoice = schemas['CSPInvoice']

/**
 * @module CspinvoiceAPI
 */

/**
 * Cspinvoice module
 * @public
 */
export class CspinvoiceAPI extends BaseAPI {
  getCspinvoice(): Promise<unknown> {
    return this.request({ method: 'get', path: '/cspinvoice' })
  }

  postCspinvoice({ cSPInvoiceList }: { cSPInvoiceList: Array<CSPInvoice> }): Promise<unknown> {
    return this.request({ method: 'post', data: cSPInvoiceList, path: '/cspinvoice' })
  }

  /**
   * @param {number} id
   */
  getCspinvoiceById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'get', path: `/cspinvoice/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteCspinvoiceById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/cspinvoice/${id}` })
  }
}
