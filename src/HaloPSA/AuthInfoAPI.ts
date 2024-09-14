/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module AuthInfoAPI
 */

/**
 * AuthInfo module
 * @public
 */
export class AuthInfoAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getAuthInfo({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/AuthInfo',
    })
  }
}
