/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module AWSAPI
 */

/**
 * AWS module
 * @public
 */
export class AWSAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getAWSGet({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/AWS/Get',
    })
  }
}
