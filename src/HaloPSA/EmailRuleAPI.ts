/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link EmailRule} */
export type EmailRule = schemas['EmailRule']

/**
 * @module EmailRuleAPI
 */

/**
 * EmailRule module
 * @public
 */
export class EmailRuleAPI extends BaseAPI {
  /**
   * @summary List of EmailRule
   * @description Use this to return multiple EmailRule. Requires authentication.
   * @param {string} [fromaddress]
   * @param {number} [type]
   */
  getEmailRule({ fromaddress, type }: { fromaddress?: string; type?: number }): Promise<unknown> {
    return this.request({ method: 'get', path: '/EmailRule', params: { fromaddress, type } })
  }

  postEmailRule({ emailRuleList }: { emailRuleList: Array<EmailRule> }): Promise<EmailRule> {
    return this.request({ method: 'post', data: emailRuleList, path: '/EmailRule' })
  }

  /**
   * @summary Get one EmailRule
   * @description Use this to return a single instance of EmailRule. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getEmailRuleById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<EmailRule> {
    return this.request({ method: 'get', path: `/EmailRule/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteEmailRuleById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/EmailRule/${id}` })
  }
}
