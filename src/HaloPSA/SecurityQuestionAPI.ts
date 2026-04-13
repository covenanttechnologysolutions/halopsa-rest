/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link SecurityQuestion} */
export type SecurityQuestion = schemas['SecurityQuestion']

/**
 * @module SecurityQuestionAPI
 */

/**
 * SecurityQuestion module
 * @public
 */
export class SecurityQuestionAPI extends BaseAPI {
  getSecurityQuestion(): Promise<unknown> {
    return this.request({ method: 'get', path: '/SecurityQuestion' })
  }

  postSecurityQuestion({
    securityQuestionList,
  }: {
    securityQuestionList: Array<SecurityQuestion>
  }): Promise<SecurityQuestion> {
    return this.request({ method: 'post', data: securityQuestionList, path: '/SecurityQuestion' })
  }

  /**
   * @summary Get one SecurityQuestion
   * @description Use this to return a single instance of SecurityQuestion. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getSecurityQuestionById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<SecurityQuestion> {
    return this.request({
      method: 'get',
      path: `/SecurityQuestion/${id}`,
      params: { includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteSecurityQuestionById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/SecurityQuestion/${id}` })
  }
}
