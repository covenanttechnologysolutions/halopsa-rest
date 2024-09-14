/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link ViewLists} */
export type ViewLists = schemas['ViewLists']

/**
 * @module ViewListsAPI
 */

/**
 * ViewLists module
 * @public
 */
export class ViewListsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of ViewLists
   * @description Use this to return multiple ViewLists.<br>
				Requires authentication.
   * @param {number} [connectedinstance_id] 
   * @param {string} [domain] 
   * @param {boolean} [globalonly] 
   * @param {boolean} [istree] 
   * @param {boolean} [showall] 
   * @param {number} [showallforteam] 
   * @param {number} [showallfortech] 
   * @param {boolean} [showcounts] 
   * @param {number} [ticketarea_id] 
   * @param {string} [type] 
   */
  getViewLists({
    connectedinstance_id,
    domain,
    globalonly,
    istree,
    showall,
    showallforteam,
    showallfortech,
    showcounts,
    ticketarea_id,
    type,
  }: {
    connectedinstance_id?: number
    domain?: string
    globalonly?: boolean
    istree?: boolean
    showall?: boolean
    showallforteam?: number
    showallfortech?: number
    showcounts?: boolean
    ticketarea_id?: number
    type?: string
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ViewLists',
      params: {
        connectedinstance_id,
        domain,
        globalonly,
        istree,
        showall,
        showallforteam,
        showallfortech,
        showcounts,
        ticketarea_id,
        type,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postViewLists({ viewLists }: { viewLists: Array<ViewLists> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ViewLists',
      data: viewLists,
    })
  }

  /**
   * @summary Get one ViewLists
   * @description Use this to return a single instance of ViewLists.<br>
				Requires authentication.
   * @param {number} id 
   * @param {string} [domain] 
   * @param {boolean} [includedetails] 
   * @param {boolean} [showcounts] 
   */
  getViewListsById({
    id,
    domain,
    includedetails,
    showcounts,
  }: {
    id: number
    domain?: string
    includedetails?: boolean
    showcounts?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ViewLists/${id}`,
      params: {
        domain,
        includedetails,
        showcounts,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteViewListsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/ViewLists/${id}`,
    })
  }
}
