/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class WordpressDetailsAPI extends BaseAPI {
  getWordpressDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/WordpressDetails' })
  }

  postWordpressDetails({
    wordpressDetailsList,
  }: {
    wordpressDetailsList: Array<WordpressDetails>
  }): Promise<WordpressDetails> {
    return this.request({ method: 'post', data: wordpressDetailsList, path: '/WordpressDetails' })
  }

  /**
   * @param {number} id
   */
  getWordpressDetailsById({ id }: { id: number }): Promise<WordpressDetails> {
    return this.request({ method: 'get', path: `/WordpressDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteWordpressDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/WordpressDetails/${id}` })
  }
}
