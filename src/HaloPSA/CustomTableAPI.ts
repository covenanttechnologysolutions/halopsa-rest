/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link CustomTable} */
export type CustomTable = schemas['CustomTable']

/**
 * @module CustomTableAPI
 */

/**
 * CustomTable module
 * @public
 */
export class CustomTableAPI extends BaseAPI {
  /**
   * @summary List of CustomTable
   * @description Use this to return multiple CustomTable. Requires authentication.
   * @param {number} [access_control_level]
   * @param {boolean} [customonly]
   * @param {boolean} [isconfig]
   * @param {boolean} [iswebhookmapping]
   * @param {boolean} [systemonly]
   * @param {number} [usage]
   */
  getCustomTable({
    access_control_level,
    customonly,
    isconfig,
    iswebhookmapping,
    systemonly,
    usage,
  }: {
    access_control_level?: number
    customonly?: boolean
    isconfig?: boolean
    iswebhookmapping?: boolean
    systemonly?: boolean
    usage?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/CustomTable',
      params: { access_control_level, customonly, isconfig, iswebhookmapping, systemonly, usage },
    })
  }

  postCustomTable({
    customTableList,
  }: {
    customTableList: Array<CustomTable>
  }): Promise<CustomTable> {
    return this.request({ method: 'post', data: customTableList, path: '/CustomTable' })
  }

  /**
   * @summary Get one CustomTable
   * @description Use this to return a single instance of CustomTable. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getCustomTableById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<CustomTable> {
    return this.request({ method: 'get', path: `/CustomTable/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteCustomTableById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/CustomTable/${id}` })
  }
}
