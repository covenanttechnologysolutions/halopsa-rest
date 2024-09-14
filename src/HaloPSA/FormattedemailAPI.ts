/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link FormattedEmail} */
export type FormattedEmail = schemas['FormattedEmail']

/**
 * @module FormattedemailAPI
 */

/**
 * Formattedemail module
 * @public
 */
export class FormattedemailAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getFormattedemail({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/formattedemail',
    })
  }

  /**
   * 
   * 
   
   */
  postFormattedemail({ formattedEmail }: { formattedEmail: Array<FormattedEmail> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/formattedemail',
      data: formattedEmail,
    })
  }

  /**
   * @summary Get one formattedemail
   * @description Use this to return a single instance of formattedemail.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getFormattedemailById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/formattedemail/${id}`,
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
  deleteFormattedemailById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/formattedemail/${id}`,
    })
  }
}
