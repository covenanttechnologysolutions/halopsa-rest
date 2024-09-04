/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module HaloFieldAPI
 */

/**
 * HaloField module
 * @public
 */
export class HaloFieldAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getHaloField(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/HaloField',
    })
  }
}
