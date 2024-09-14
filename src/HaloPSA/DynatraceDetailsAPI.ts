/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link DynatraceDetails} */
export type DynatraceDetails = schemas['DynatraceDetails']

/**
 * @module DynatraceDetailsAPI
 */

/**
 * DynatraceDetails module
 * @public
 */
export class DynatraceDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getDynatraceDetails({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/DynatraceDetails',
    })
  }

  /**
   * 
   * 
   
   */
  postDynatraceDetails({
    dynatraceDetails,
  }: {
    dynatraceDetails: Array<DynatraceDetails>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/DynatraceDetails',
      data: dynatraceDetails,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getDynatraceDetailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/DynatraceDetails/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteDynatraceDetailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/DynatraceDetails/${id}`,
    })
  }
}
