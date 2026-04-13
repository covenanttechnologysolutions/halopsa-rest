/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module XtypeRoleAPI
 */

/**
 * XtypeRole module
 * @public
 */
export class XtypeRoleAPI extends BaseAPI {
  /**
   * @summary List of XTypeRole
   * @description Use this to return multiple XTypeRole. Requires authentication.
   * @param {number} [xtype_id]
   * @param {number} [xtyperole_id]
   */
  getXtypeRole({
    xtype_id,
    xtyperole_id,
  }: {
    xtype_id?: number
    xtyperole_id?: number
  }): Promise<unknown> {
    return this.request({ method: 'get', path: '/XtypeRole', params: { xtype_id, xtyperole_id } })
  }
}
