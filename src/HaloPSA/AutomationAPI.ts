/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module AutomationAPI
 */

/**
 * Automation module
 * @public
 */
export class AutomationAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getAutomation(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Automation',
    })
  }

  /**
   * 
   * 
   
   */
  postAutomation(listNumber: number): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Automation',
      data: listNumber,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getAutomationById(id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Automation/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteAutomationById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Automation/${id}`,
    })
  }

  /**
   *
   *
   * @param {string} runbookId
   */
  postAutomationrunbookId(runbookId: string): Promise<any> {
    return this.request({
      method: 'post',
      path: `/Automation/${runbookId}`,
    })
  }
}
