/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module InstanceInfoAPI
 */

/**
 * InstanceInfo module
 * @public
 */
export class InstanceInfoAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getInstanceInfo({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/InstanceInfo',
    })
  }
}
