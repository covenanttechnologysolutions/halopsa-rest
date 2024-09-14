/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module KandjiAPI
 */

/**
 * Kandji module
 * @public
 */
export class KandjiAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getKandjiGet({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Kandji/Get',
    })
  }
}
