/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class BookmarkAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   *
   *
   * @param {number} id
   */
  getBookmarkById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Bookmark/${id}`,
    })
  }

  /**
   * 
   * 
   
   */
  postBookmark({ bookmark }: { bookmark: Bookmark }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Bookmark',
      data: bookmark,
    })
  }
}
