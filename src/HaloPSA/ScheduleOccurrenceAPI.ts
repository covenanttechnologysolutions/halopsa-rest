/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module ScheduleOccurrenceAPI
 */

/**
 * ScheduleOccurrence module
 * @public
 */
export class ScheduleOccurrenceAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getScheduleOccurrence({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ScheduleOccurrence',
    })
  }

  /**
   * 
   * 
   
   */
  postScheduleOccurrence({ listNumber }: { listNumber: number }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ScheduleOccurrence',
      data: listNumber,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getScheduleOccurrenceById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ScheduleOccurrence/${id}`,
    })
  }
}
