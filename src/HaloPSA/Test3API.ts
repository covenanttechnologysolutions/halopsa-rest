/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module Test3API
 */

/**
 * Test3 module
 * @public
 */
export class Test3API extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getTest3(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Test3',
    })
  }
}
