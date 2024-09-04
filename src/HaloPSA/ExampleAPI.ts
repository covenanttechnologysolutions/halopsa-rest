/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module ExampleAPI
 */

/**
 * Example module
 * @public
 */
export class ExampleAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getExampleGet(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Example/Get',
    })
  }
}
