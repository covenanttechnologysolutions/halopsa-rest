/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link LanguagePackTranslationsCustom} */
export type LanguagePackTranslationsCustom = schemas['LanguagePackTranslationsCustom']

/**
 * @module TranslationAPI
 */

/**
 * Translation module
 * @public
 */
export class TranslationAPI extends BaseAPI {
  getTranslation(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Translation' })
  }

  postTranslation({
    languagePackTranslationsCustomList,
  }: {
    languagePackTranslationsCustomList: Array<LanguagePackTranslationsCustom>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: languagePackTranslationsCustomList,
      path: '/Translation',
    })
  }
}
