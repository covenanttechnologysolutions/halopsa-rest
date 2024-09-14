/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class TagsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getTags({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Tags',
    })
  }

  /**
   * 
   * 
   
   */
  postTags({ tag }: { tag: Array<Tag> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Tags',
      data: tag,
    })
  }

  /**
   * @summary Get one Tag
   * @description Use this to return a single instance of Tag.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getTagsById({ id, includedetails }: { id: number; includedetails?: boolean }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Tags/${id}`,
      params: {
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteTagsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Tags/${id}`,
    })
  }
}
