/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module EventAPI
 */

/**
 * Event module
 * @public
 */
export class EventAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getEvent(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Event',
    })
  }

  /**
   * 
   * 
   
   */
  postEvent(listNumber: number): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Event',
      data: listNumber,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getEventById(id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Event/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteEventById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Event/${id}`,
    })
  }
}
