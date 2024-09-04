/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module BackgroundTaskAPI
 */

/**
 * BackgroundTask module
 * @public
 */
export class BackgroundTaskAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   *
   *
   * @param {number} id
   */
  getBackgroundTaskById(id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: `/BackgroundTask/${id}`,
    })
  }
}
