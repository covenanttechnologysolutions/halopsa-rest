/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ItemGroup} */
export type ItemGroup = schemas['ItemGroup']

/**
 * @module ItemGroupAPI
 */

/**
 * ItemGroup module
 * @public
 */
export class ItemGroupAPI extends BaseAPI {
  getItemGroup(): Promise<unknown> {
    return this.request({ method: 'get', path: '/ItemGroup' })
  }

  postItemGroup({ itemGroupList }: { itemGroupList: Array<ItemGroup> }): Promise<ItemGroup> {
    return this.request({ method: 'post', data: itemGroupList, path: '/ItemGroup' })
  }

  /**
   * @summary Get one ItemGroup
   * @description Use this to return a single instance of ItemGroup. Requires authentication.
   * @param {number} id
   * @param {number} [groupQuantity]
   * @param {boolean} [includedetails]
   */
  getItemGroupById({
    id,
    groupQuantity,
    includedetails,
  }: {
    id: number
    groupQuantity?: number
    includedetails?: boolean
  }): Promise<ItemGroup> {
    return this.request({
      method: 'get',
      path: `/ItemGroup/${id}`,
      params: { groupQuantity, includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteItemGroupById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/ItemGroup/${id}` })
  }
}
