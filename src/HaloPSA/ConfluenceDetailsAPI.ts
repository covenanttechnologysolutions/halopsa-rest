/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link ConfluenceDetails} */
export type ConfluenceDetails = schemas['ConfluenceDetails']

/**
 * @module ConfluenceDetailsAPI
 */

/**
 * ConfluenceDetails module
 * @public
 */
export class ConfluenceDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getConfluenceDetails({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ConfluenceDetails',
    })
  }

  /**
   * 
   * 
   
   */
  postConfluenceDetails({
    confluenceDetails,
  }: {
    confluenceDetails: Array<ConfluenceDetails>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ConfluenceDetails',
      data: confluenceDetails,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getConfluenceDetailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ConfluenceDetails/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteConfluenceDetailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/ConfluenceDetails/${id}`,
    })
  }
}
