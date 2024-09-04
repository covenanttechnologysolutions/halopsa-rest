/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module TestErrorAPI
 */

/**
 * TestError module
 * @public
 */
export class TestErrorAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getTestError(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/TestError',
    })
  }
}
