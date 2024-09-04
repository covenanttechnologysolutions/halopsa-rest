/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module FaultViewLogAPI
 */

/**
 * FaultViewLog module
 * @public
 */
export class FaultViewLogAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getFaultViewLog(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/FaultViewLog',
    })
  }
}
