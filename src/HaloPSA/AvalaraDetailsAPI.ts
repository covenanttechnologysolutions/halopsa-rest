/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link AvalaraDetails} */
export type AvalaraDetails = schemas['AvalaraDetails']

/**
 * @module AvalaraDetailsAPI
 */

/**
 * AvalaraDetails module
 * @public
 */
export class AvalaraDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getAvalaraDetails({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/AvalaraDetails',
    })
  }

  /**
   * 
   * 
   
   */
  postAvalaraDetails({ avalaraDetails }: { avalaraDetails: Array<AvalaraDetails> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/AvalaraDetails',
      data: avalaraDetails,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getAvalaraDetailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/AvalaraDetails/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteAvalaraDetailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/AvalaraDetails/${id}`,
    })
  }
}
