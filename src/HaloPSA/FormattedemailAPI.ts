/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class FormattedemailAPI extends BaseAPI {
  getFormattedemail(): Promise<unknown> {
    return this.request({ method: 'get', path: '/formattedemail' })
  }

  postFormattedemail({
    formattedEmailList,
  }: {
    formattedEmailList: Array<FormattedEmail>
  }): Promise<unknown> {
    return this.request({ method: 'post', data: formattedEmailList, path: '/formattedemail' })
  }

  /**
   * @summary Get one formattedemail
   * @description Use this to return a single instance of formattedemail. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getFormattedemailById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: `/formattedemail/${id}`,
      params: { includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteFormattedemailById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/formattedemail/${id}` })
  }
}
