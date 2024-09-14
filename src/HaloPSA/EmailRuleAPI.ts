/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class EmailRuleAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of EmailRule
   * @description Use this to return multiple EmailRule.<br>
				Requires authentication.
   * @param {string} [fromaddress] 
   * @param {number} [type] 
   */
  getEmailRule({ fromaddress, type }: { fromaddress?: string; type?: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/EmailRule',
      params: {
        fromaddress,
        type,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postEmailRule({ emailRule }: { emailRule: Array<EmailRule> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/EmailRule',
      data: emailRule,
    })
  }

  /**
   * @summary Get one EmailRule
   * @description Use this to return a single instance of EmailRule.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getEmailRuleById({ id, includedetails }: { id: number; includedetails?: boolean }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/EmailRule/${id}`,
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
  deleteEmailRuleById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/EmailRule/${id}`,
    })
  }
}
