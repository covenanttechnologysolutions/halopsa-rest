/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link FortnoxDetails} */
export type FortnoxDetails = schemas['FortnoxDetails']

/**
 * @module FortnoxDetailsAPI
 */

/**
 * FortnoxDetails module
 * @public
 */
export class FortnoxDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getFortnoxDetails({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/FortnoxDetails',
    })
  }

  /**
   * 
   * 
   
   */
  postFortnoxDetails({ fortnoxDetails }: { fortnoxDetails: Array<FortnoxDetails> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/FortnoxDetails',
      data: fortnoxDetails,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getFortnoxDetailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/FortnoxDetails/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteFortnoxDetailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/FortnoxDetails/${id}`,
    })
  }
}
