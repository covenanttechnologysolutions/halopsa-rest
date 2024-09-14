/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module TaskTraceAPI
 */

/**
 * TaskTrace module
 * @public
 */
export class TaskTraceAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getTaskTrace({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/TaskTrace',
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getTaskTraceById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/TaskTrace/${id}`,
    })
  }
}
