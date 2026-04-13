/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link CustomButtonAudit} */
export type CustomButtonAudit = schemas['CustomButtonAudit']

/**
 * @module CustomButtonAuditAPI
 */

/**
 * CustomButtonAudit module
 * @public
 */
export class CustomButtonAuditAPI extends BaseAPI {
  postCustomButtonAudit({
    customButtonAudit,
  }: {
    customButtonAudit: CustomButtonAudit
  }): Promise<CustomButtonAudit> {
    return this.request({ method: 'post', data: customButtonAudit, path: '/CustomButtonAudit' })
  }
}
