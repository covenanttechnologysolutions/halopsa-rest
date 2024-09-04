/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module HealthAPI
 */

/**
 * Health module
 * @public
 */
export class HealthAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getHealth(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Health',
    })
  }
}
