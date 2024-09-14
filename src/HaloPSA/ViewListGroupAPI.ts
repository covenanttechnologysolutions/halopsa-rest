/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class ViewListGroupAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of ViewListGroup
   * @description Use this to return multiple ViewListGroup.<br>
				Requires authentication.
   * @param {string} [type] 
   */
  getViewListGroup({ type }: { type?: string }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ViewListGroup',
      params: {
        type,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postViewListGroup({ viewListGroup }: { viewListGroup: Array<ViewListGroup> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ViewListGroup',
      data: viewListGroup,
    })
  }

  /**
   * @summary Get one ViewListGroup
   * @description Use this to return a single instance of ViewListGroup.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getViewListGroupById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ViewListGroup/${id}`,
      params: {
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteViewListGroupById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/ViewListGroup/${id}`,
    })
  }
}
