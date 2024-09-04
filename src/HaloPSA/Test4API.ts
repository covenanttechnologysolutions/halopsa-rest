/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module Test4API
 */

/**
 * Test4 module
 * @public
 */
export class Test4API extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getTest4(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Test4',
    })
  }
}
