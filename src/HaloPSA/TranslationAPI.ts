/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class TranslationAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getTranslation({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Translation',
    })
  }

  /**
   * 
   * 
   
   */
  postTranslation({
    languagePackTranslationsCustom,
  }: {
    languagePackTranslationsCustom: Array<LanguagePackTranslationsCustom>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Translation',
      data: languagePackTranslationsCustom,
    })
  }
}
