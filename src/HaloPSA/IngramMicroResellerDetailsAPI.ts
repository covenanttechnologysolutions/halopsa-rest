/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link IngramMicroResellerDetails} */
export type IngramMicroResellerDetails = schemas['IngramMicroResellerDetails']

/**
 * @module IngramMicroResellerDetailsAPI
 */

/**
 * IngramMicroResellerDetails module
 * @public
 */
export class IngramMicroResellerDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getIngramMicroResellerDetails({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IngramMicroResellerDetails',
    })
  }

  /**
   * 
   * 
   
   */
  postIngramMicroResellerDetails({
    ingramMicroResellerDetails,
  }: {
    ingramMicroResellerDetails: Array<IngramMicroResellerDetails>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/IngramMicroResellerDetails',
      data: ingramMicroResellerDetails,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getIngramMicroResellerDetailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/IngramMicroResellerDetails/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteIngramMicroResellerDetailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/IngramMicroResellerDetails/${id}`,
    })
  }
}
