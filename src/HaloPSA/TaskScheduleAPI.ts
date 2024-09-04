/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module TaskScheduleAPI
 */

/**
 * TaskSchedule module
 * @public
 */
export class TaskScheduleAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getTaskSchedule(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/TaskSchedule',
    })
  }

  /**
   * 
   * 
   
   */
  postTaskSchedule(): Promise<any> {
    return this.request({
      method: 'post',
      path: '/TaskSchedule',
    })
  }
}
