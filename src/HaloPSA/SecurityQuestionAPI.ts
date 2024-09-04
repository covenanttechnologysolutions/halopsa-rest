/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class SecurityQuestionAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getSecurityQuestion(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/SecurityQuestion',
    })
  }

  /**
   * 
   * 
   
   */
  postSecurityQuestion(securityQuestion: Array<SecurityQuestion>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/SecurityQuestion',
      data: securityQuestion,
    })
  }

  /**
   * @summary Get one SecurityQuestion
   * @description Use this to return a single instance of SecurityQuestion.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getSecurityQuestionById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/SecurityQuestion/${id}`,
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
  deleteSecurityQuestionById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/SecurityQuestion/${id}`,
    })
  }
}
