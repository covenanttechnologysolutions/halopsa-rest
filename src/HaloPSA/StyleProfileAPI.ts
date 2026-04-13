/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link StyleProfile} */
export type StyleProfile = schemas['StyleProfile']

/**
 * @module StyleProfileAPI
 */

/**
 * StyleProfile module
 * @public
 */
export class StyleProfileAPI extends BaseAPI {
  getStyleProfile(): Promise<unknown> {
    return this.request({ method: 'get', path: '/StyleProfile' })
  }

  postStyleProfile({
    styleProfileList,
  }: {
    styleProfileList: Array<StyleProfile>
  }): Promise<StyleProfile> {
    return this.request({ method: 'post', data: styleProfileList, path: '/StyleProfile' })
  }

  /**
   * @param {number} id
   */
  getStyleProfileById({ id }: { id: number }): Promise<StyleProfile> {
    return this.request({ method: 'get', path: `/StyleProfile/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteStyleProfileById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/StyleProfile/${id}` })
  }
}
