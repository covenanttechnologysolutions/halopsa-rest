/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link SnipeITDetails} */
export type SnipeITDetails = schemas['SnipeITDetails']

/**
 * @module SnipeITDetailsAPI
 */

/**
 * SnipeITDetails module
 * @public
 */
export class SnipeITDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getSnipeITDetails({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/SnipeITDetails',
    })
  }

  /**
   * 
   * 
   
   */
  postSnipeITDetails({ snipeITDetails }: { snipeITDetails: Array<SnipeITDetails> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/SnipeITDetails',
      data: snipeITDetails,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getSnipeITDetailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/SnipeITDetails/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteSnipeITDetailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/SnipeITDetails/${id}`,
    })
  }
}
