/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link AuditPasswordField} */
export type AuditPasswordField = schemas['AuditPasswordField']

/**
 * @module PasswordFieldAPI
 */

/**
 * PasswordField module
 * @public
 */
export class PasswordFieldAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getPasswordField({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/PasswordField',
    })
  }

  /**
   * 
   * 
   
   */
  postPasswordField({
    auditPasswordField,
  }: {
    auditPasswordField: Array<AuditPasswordField>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/PasswordField',
      data: auditPasswordField,
    })
  }

  /**
   * @summary Get one AuditPasswordField
   * @description Use this to return a single instance of AuditPasswordField.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getPasswordFieldById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/PasswordField/${id}`,
      params: {
        includedetails,
      },
    })
  }
}
