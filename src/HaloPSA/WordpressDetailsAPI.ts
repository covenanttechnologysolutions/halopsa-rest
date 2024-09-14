/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link WordpressDetails} */
export type WordpressDetails = schemas['WordpressDetails']

/**
 * @module WordpressDetailsAPI
 */

/**
 * WordpressDetails module
 * @public
 */
export class WordpressDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getWordpressDetails({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/WordpressDetails',
    })
  }

  /**
   * 
   * 
   
   */
  postWordpressDetails({
    wordpressDetails,
  }: {
    wordpressDetails: Array<WordpressDetails>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/WordpressDetails',
      data: wordpressDetails,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getWordpressDetailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/WordpressDetails/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteWordpressDetailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/WordpressDetails/${id}`,
    })
  }
}
