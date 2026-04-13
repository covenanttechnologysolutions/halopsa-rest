/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class PasswordFieldAPI extends BaseAPI {
  getPasswordField(): Promise<unknown> {
    return this.request({ method: 'get', path: '/PasswordField' })
  }

  postPasswordField({
    auditPasswordFieldList,
  }: {
    auditPasswordFieldList: Array<AuditPasswordField>
  }): Promise<unknown> {
    return this.request({ method: 'post', data: auditPasswordFieldList, path: '/PasswordField' })
  }

  /**
   * @summary Get one AuditPasswordField
   * @description Use this to return a single instance of AuditPasswordField. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getPasswordFieldById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({ method: 'get', path: `/PasswordField/${id}`, params: { includedetails } })
  }
}
