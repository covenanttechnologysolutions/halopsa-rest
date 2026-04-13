/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module KBArticleAnonAPI
 */

/**
 * KBArticleAnon module
 * @public
 */
export class KBArticleAnonAPI extends BaseAPI {
  getKBArticleAnon(): Promise<unknown> {
    return this.request({ method: 'get', path: '/KBArticleAnon' })
  }

  /**
   * @param {string} slug
   */
  getKBArticleAnonSlug({ slug }: { slug: string }): Promise<unknown> {
    return this.request({ method: 'get', path: `/KBArticleAnon/${slug}` })
  }
}
