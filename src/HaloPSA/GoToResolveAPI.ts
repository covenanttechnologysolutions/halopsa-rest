/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module GoToResolveAPI
 */

/**
 * GoToResolve module
 * @public
 */
export class GoToResolveAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getGoToResolveComplete(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/GoToResolve/Complete',
    })
  }

  /**
   * 
   * 
   
   */
  getGoToResolveDownload(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/GoToResolve/Download',
    })
  }
}
