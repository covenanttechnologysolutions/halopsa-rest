/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link KandjiDetails} */
export type KandjiDetails = schemas['KandjiDetails']

/**
 * @module KandjiDetailsAPI
 */

/**
 * KandjiDetails module
 * @public
 */
export class KandjiDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getKandjiDetails(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/KandjiDetails',
    })
  }

  /**
   * 
   * 
   
   */
  postKandjiDetails(kandjiDetails: Array<KandjiDetails>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/KandjiDetails',
      data: kandjiDetails,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getKandjiDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: `/KandjiDetails/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteKandjiDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/KandjiDetails/${id}`,
    })
  }
}
