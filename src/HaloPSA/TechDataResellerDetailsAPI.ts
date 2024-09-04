/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link TechDataResellerDetails} */
export type TechDataResellerDetails = schemas['TechDataResellerDetails']

/**
 * @module TechDataResellerDetailsAPI
 */

/**
 * TechDataResellerDetails module
 * @public
 */
export class TechDataResellerDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getTechDataResellerDetails(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/TechDataResellerDetails',
    })
  }

  /**
   * 
   * 
   
   */
  postTechDataResellerDetails(
    techDataResellerDetails: Array<TechDataResellerDetails>,
  ): Promise<any> {
    return this.request({
      method: 'post',
      path: '/TechDataResellerDetails',
      data: techDataResellerDetails,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getTechDataResellerDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: `/TechDataResellerDetails/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteTechDataResellerDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/TechDataResellerDetails/${id}`,
    })
  }
}
