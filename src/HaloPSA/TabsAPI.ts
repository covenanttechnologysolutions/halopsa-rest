/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Tabname} */
export type Tabname = schemas['Tabname']

/**
 * @module TabsAPI
 */

/**
 * Tabs module
 * @public
 */
export class TabsAPI extends BaseAPI {
  /**
   * @summary List of Tabname
   * @description Use this to return multiple Tabname. Requires authentication.
   * @param {number} [type]
   * @param {number} [typeid]
   */
  getTabs({ type, typeid }: { type?: number; typeid?: number }): Promise<unknown> {
    return this.request({ method: 'get', path: '/Tabs', params: { type, typeid } })
  }

  postTabs({ tabnameList }: { tabnameList: Array<Tabname> }): Promise<unknown> {
    return this.request({ method: 'post', data: tabnameList, path: '/Tabs' })
  }

  /**
   * @summary Get one Tabname
   * @description Use this to return a single instance of Tabname. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getTabsById({ id, includedetails }: { id: number; includedetails?: boolean }): Promise<unknown> {
    return this.request({ method: 'get', path: `/Tabs/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteTabsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Tabs/${id}` })
  }
}
