/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module TaskMonitorEventAPI
 */

/**
 * TaskMonitorEvent module
 * @public
 */
export class TaskMonitorEventAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getTaskMonitorEvent({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/TaskMonitorEvent',
    })
  }
}
