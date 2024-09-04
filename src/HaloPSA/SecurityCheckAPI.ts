/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module SecurityCheckAPI
 */

/**
 * SecurityCheck module
 * @public
 */
export class SecurityCheckAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getSecurityCheck(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/SecurityCheck',
    })
  }
}
