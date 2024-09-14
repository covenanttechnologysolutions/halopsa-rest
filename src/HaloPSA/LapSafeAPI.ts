/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module LapSafeAPI
 */

/**
 * LapSafe module
 * @public
 */
export class LapSafeAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getLapSafeGet({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/LapSafe/Get',
    })
  }

  /**
   * 
   * 
   
   */
  getLapSafeCancel({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/LapSafe/Cancel',
    })
  }

  /**
   * 
   * 
   
   */
  getLapSafeComplete({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/LapSafe/Complete',
    })
  }
}
