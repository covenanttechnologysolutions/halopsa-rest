/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Tag} */
export type Tag = schemas['Tag']

/**
 * @module TagsAPI
 */

/**
 * Tags module
 * @public
 */
export class TagsAPI extends BaseAPI {
  getTags(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Tags' })
  }

  postTags({ tagList }: { tagList: Array<Tag> }): Promise<unknown> {
    return this.request({ method: 'post', data: tagList, path: '/Tags' })
  }

  /**
   * @summary Get one Tag
   * @description Use this to return a single instance of Tag. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getTagsById({ id, includedetails }: { id: number; includedetails?: boolean }): Promise<unknown> {
    return this.request({ method: 'get', path: `/Tags/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteTagsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Tags/${id}` })
  }
}
