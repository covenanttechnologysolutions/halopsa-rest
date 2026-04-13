/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class WordpressOrgDetailsAPI extends BaseAPI {
  getWordpressOrgDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/WordpressOrgDetails' })
  }

  postWordpressOrgDetails({
    wordpressOrgDetailsList,
  }: {
    wordpressOrgDetailsList: Array<WordpressOrgDetails>
  }): Promise<WordpressOrgDetails> {
    return this.request({
      method: 'post',
      data: wordpressOrgDetailsList,
      path: '/WordpressOrgDetails',
    })
  }

  /**
   * @param {number} id
   */
  getWordpressOrgDetailsById({ id }: { id: number }): Promise<WordpressOrgDetails> {
    return this.request({ method: 'get', path: `/WordpressOrgDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteWordpressOrgDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/WordpressOrgDetails/${id}` })
  }
}
