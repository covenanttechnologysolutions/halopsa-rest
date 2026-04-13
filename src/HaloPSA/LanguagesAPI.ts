/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link LanguagePack} */
export type LanguagePack = schemas['LanguagePack']

/**
 * @module LanguagesAPI
 */

/**
 * Languages module
 * @public
 */
export class LanguagesAPI extends BaseAPI {
  /**
   * @summary List of LanguagePack
   * @description Use this to return multiple LanguagePack. Requires authentication.
   * @param {boolean} [showall]
   */
  getLanguages({ showall }: { showall?: boolean }): Promise<unknown> {
    return this.request({ method: 'get', path: '/Languages', params: { showall } })
  }

  postLanguages({ languagePackList }: { languagePackList: Array<LanguagePack> }): Promise<unknown> {
    return this.request({ method: 'post', data: languagePackList, path: '/Languages' })
  }

  /**
   * @summary Get one LanguagePack
   * @description Use this to return a single instance of LanguagePack. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getLanguagesById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({ method: 'get', path: `/Languages/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteLanguagesById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Languages/${id}` })
  }
}
