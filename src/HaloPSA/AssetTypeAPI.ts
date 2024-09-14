/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link Xtype} */
export type Xtype = schemas['Xtype']

/**
 * @module AssetTypeAPI
 */

/**
 * AssetType module
 * @public
 */
export class AssetTypeAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of Xtype
   * @description Use this to return multiple Xtype.<br>
				Requires authentication.
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
  getAssetType({
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/AssetType',
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

  /**
   * 
   * 
   
   */
  postAssetType({ xtype }: { xtype: Array<Xtype> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/AssetType',
      data: xtype,
    })
  }

  /**
   * @summary Get one Xtype
   * @description Use this to return a single instance of Xtype.<br>
				Requires authentication.
   * @param {number} id 
   * @param {number} [booking_type] 
   * @param {number} [client_id] 
   * @param {string} [end_date] 
   * @param {boolean} [fieldsandlayoutonly] 
   * @param {boolean} [includedetails] 
   * @param {number} [site_id] 
   * @param {string} [start_date] 
   */
  getAssetTypeById({
    id,
    booking_type,
    client_id,
    end_date,
    fieldsandlayoutonly,
    includedetails,
    site_id,
    start_date,
  }: {
    id: number
    booking_type?: number
    client_id?: number
    end_date?: string
    fieldsandlayoutonly?: boolean
    includedetails?: boolean
    site_id?: number
    start_date?: string
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/AssetType/${id}`,
      params: {
        booking_type,
        client_id,
        end_date,
        fieldsandlayoutonly,
        includedetails,
        site_id,
        start_date,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteAssetTypeById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/AssetType/${id}`,
    })
  }
}
