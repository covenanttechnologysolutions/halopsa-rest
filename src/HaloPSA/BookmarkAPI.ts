/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Bookmark} */
export type Bookmark = schemas['Bookmark']

/**
 * @module BookmarkAPI
 */

/**
 * Bookmark module
 * @public
 */
export class BookmarkAPI extends BaseAPI {
  /**
   * @param {number} id
   */
  getBookmarkById({ id }: { id: number }): Promise<Bookmark> {
    return this.request({ method: 'get', path: `/Bookmark/${id}` })
  }

  postBookmark({ bookmark }: { bookmark: Bookmark }): Promise<Bookmark> {
    return this.request({ method: 'post', data: bookmark, path: '/Bookmark' })
  }
}
