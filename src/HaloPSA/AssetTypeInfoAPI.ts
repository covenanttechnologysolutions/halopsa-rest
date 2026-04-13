/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module AssetTypeInfoAPI
 */

/**
 * AssetTypeInfo module
 * @public
 */
export class AssetTypeInfoAPI extends BaseAPI {
  /**
   * @summary List of Xtype
   * @description Use this to return multiple Xtype. Requires authentication.
   * @param {number} [assetgroup_id]
   * @param {boolean} [can_create_only]
   * @param {boolean} [can_edit_only]
   * @param {boolean} [fixedassetgroups]
   * @param {number} [include_current]
   * @param {boolean} [resourcesonly]
   * @param {boolean} [setuplist]
   * @param {number} [tickettype_id]
   * @param {string} [type]
   */
  getAssetTypeInfo({
    assetgroup_id,
    can_create_only,
    can_edit_only,
    fixedassetgroups,
    include_current,
    resourcesonly,
    setuplist,
    tickettype_id,
    type,
  }: {
    assetgroup_id?: number
    can_create_only?: boolean
    can_edit_only?: boolean
    fixedassetgroups?: boolean
    include_current?: number
    resourcesonly?: boolean
    setuplist?: boolean
    tickettype_id?: number
    type?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/AssetTypeInfo',
      params: {
        assetgroup_id,
        can_create_only,
        can_edit_only,
        fixedassetgroups,
        include_current,
        resourcesonly,
        setuplist,
        tickettype_id,
        type,
      },
    })
  }
}
