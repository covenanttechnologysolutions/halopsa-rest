/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module Test1API
 */

/**
 * Test1 module
 * @public
 */
export class Test1API extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getTest1(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Test1',
    })
  }
}
