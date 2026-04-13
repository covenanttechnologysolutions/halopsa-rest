/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ViewListGroup} */
export type ViewListGroup = schemas['ViewListGroup']

/**
 * @module ViewListGroupAPI
 */

/**
 * ViewListGroup module
 * @public
 */
export class ViewListGroupAPI extends BaseAPI {
  /**
   * @summary List of ViewListGroup
   * @description Use this to return multiple ViewListGroup. Requires authentication.
   * @param {string} [type]
   */
  getViewListGroup({ type }: { type?: string }): Promise<unknown> {
    return this.request({ method: 'get', path: '/ViewListGroup', params: { type } })
  }

  postViewListGroup({
    viewListGroupList,
  }: {
    viewListGroupList: Array<ViewListGroup>
  }): Promise<ViewListGroup> {
    return this.request({ method: 'post', data: viewListGroupList, path: '/ViewListGroup' })
  }

  /**
   * @summary Get one ViewListGroup
   * @description Use this to return a single instance of ViewListGroup. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getViewListGroupById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<ViewListGroup> {
    return this.request({ method: 'get', path: `/ViewListGroup/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteViewListGroupById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/ViewListGroup/${id}` })
  }
}
