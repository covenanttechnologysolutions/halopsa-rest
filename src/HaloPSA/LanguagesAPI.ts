/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class LanguagesAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of LanguagePack
   * @description Use this to return multiple LanguagePack.<br>
				Requires authentication.
   * @param {boolean} showall 
   */
  getLanguages(showall: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Languages',
      params: {
        showall,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postLanguages(languagePack: Array<LanguagePack>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Languages',
      data: languagePack,
    })
  }

  /**
   * @summary Get one LanguagePack
   * @description Use this to return a single instance of LanguagePack.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getLanguagesById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Languages/${id}`,
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
  deleteLanguagesById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Languages/${id}`,
    })
  }
}
