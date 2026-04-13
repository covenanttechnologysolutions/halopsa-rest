/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class ConfluenceDetailsAPI extends BaseAPI {
  getConfluenceDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/ConfluenceDetails' })
  }

  postConfluenceDetails({
    confluenceDetailsList,
  }: {
    confluenceDetailsList: Array<ConfluenceDetails>
  }): Promise<ConfluenceDetails> {
    return this.request({ method: 'post', data: confluenceDetailsList, path: '/ConfluenceDetails' })
  }

  /**
   * @param {number} id
   */
  getConfluenceDetailsById({ id }: { id: number }): Promise<ConfluenceDetails> {
    return this.request({ method: 'get', path: `/ConfluenceDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteConfluenceDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/ConfluenceDetails/${id}` })
  }
}
