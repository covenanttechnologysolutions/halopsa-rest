/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link WordpressOrgDetails} */
export type WordpressOrgDetails = schemas['WordpressOrgDetails']

/**
 * @module WordpressOrgDetailsAPI
 */

/**
 * WordpressOrgDetails module
 * @public
 */
export class WordpressOrgDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getWordpressOrgDetails({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/WordpressOrgDetails',
    })
  }

  /**
   * 
   * 
   
   */
  postWordpressOrgDetails({
    wordpressOrgDetails,
  }: {
    wordpressOrgDetails: Array<WordpressOrgDetails>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/WordpressOrgDetails',
      data: wordpressOrgDetails,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getWordpressOrgDetailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/WordpressOrgDetails/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteWordpressOrgDetailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/WordpressOrgDetails/${id}`,
    })
  }
}
