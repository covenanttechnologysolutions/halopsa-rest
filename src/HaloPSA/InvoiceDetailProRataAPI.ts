/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module InvoiceDetailProRataAPI
 */

/**
 * InvoiceDetailProRata module
 * @public
 */
export class InvoiceDetailProRataAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getInvoiceDetailProRata(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/InvoiceDetailProRata',
    })
  }
}
