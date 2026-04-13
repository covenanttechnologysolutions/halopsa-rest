/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link LDAPConnection} */
export type LDAPConnection = schemas['LDAPConnection']

/**
 * @module LDAPConnectionAPI
 */

/**
 * LDAPConnection module
 * @public
 */
export class LDAPConnectionAPI extends BaseAPI {
  /**
   * @summary List of LDAPConnection
   * @description Use this to return multiple LDAPConnection. Requires authentication.
   * @param {string} [clientidoverride]
   */
  getLDAPConnection({ clientidoverride }: { clientidoverride?: string }): Promise<unknown> {
    return this.request({ method: 'get', path: '/LDAPConnection', params: { clientidoverride } })
  }

  postLDAPConnection({
    lDAPConnectionList,
  }: {
    lDAPConnectionList: Array<LDAPConnection>
  }): Promise<LDAPConnection> {
    return this.request({ method: 'post', data: lDAPConnectionList, path: '/LDAPConnection' })
  }

  /**
   * @summary Get one LDAPConnection
   * @description Use this to return a single instance of LDAPConnection. Requires authentication.
   * @param {number} id
   * @param {string} [clientidoverride]
   * @param {boolean} [includedetails]
   */
  getLDAPConnectionById({
    id,
    clientidoverride,
    includedetails,
  }: {
    id: number
    clientidoverride?: string
    includedetails?: boolean
  }): Promise<LDAPConnection> {
    return this.request({
      method: 'get',
      path: `/LDAPConnection/${id}`,
      params: { clientidoverride, includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteLDAPConnectionById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/LDAPConnection/${id}` })
  }
}
