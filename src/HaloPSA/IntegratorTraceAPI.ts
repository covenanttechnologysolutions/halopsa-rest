/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module IntegratorTraceAPI
 */

/**
 * IntegratorTrace module
 * @public
 */
export class IntegratorTraceAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getIntegratorTrace(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegratorTrace',
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getIntegratorTraceById(id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: `/IntegratorTrace/${id}`,
    })
  }
}
