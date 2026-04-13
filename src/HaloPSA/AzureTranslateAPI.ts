/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link LanguagePack} */
export type LanguagePack = schemas['LanguagePack']

/**
 * @module AzureTranslateAPI
 */

/**
 * AzureTranslate module
 * @public
 */
export class AzureTranslateAPI extends BaseAPI {
  getAzureTranslateCustomTranslate(): Promise<unknown> {
    return this.request({ method: 'get', path: '/AzureTranslate/CustomTranslate' })
  }

  postAzureTranslateLanguagePackTranslate({
    languagePack,
  }: {
    languagePack: LanguagePack
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: languagePack,
      path: '/AzureTranslate/LanguagePackTranslate',
    })
  }
}
