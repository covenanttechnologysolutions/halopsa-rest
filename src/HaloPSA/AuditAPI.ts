/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Audit} */
export type Audit = schemas['Audit']

/**
 * @module AuditAPI
 */

/**
 * Audit module
 * @public
 */
export class AuditAPI extends BaseAPI {
  getAudit(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Audit' })
  }

  postAudit({ auditList }: { auditList: Array<Audit> }): Promise<Audit> {
    return this.request({ method: 'post', data: auditList, path: '/Audit' })
  }

  /**
   * @summary Get one Audit
   * @description Use this to return a single instance of Audit. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getAuditById({ id, includedetails }: { id: number; includedetails?: boolean }): Promise<Audit> {
    return this.request({ method: 'get', path: `/Audit/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteAuditById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Audit/${id}` })
  }
}
