/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module ClientCacheAPI
 */

/**
 * ClientCache module
 * @public
 */
export class ClientCacheAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getClientCache(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ClientCache',
    })
  }
}
