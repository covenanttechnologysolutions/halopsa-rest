/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link ViewFilter} */
export type ViewFilter = schemas['ViewFilter']

/**
 * @module ViewFilterAPI
 */

/**
 * ViewFilter module
 * @public
 */
export class ViewFilterAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of ViewFilter
   * @description Use this to return multiple ViewFilter.<br>
				Requires authentication.
   * @param {boolean} [globalonly] 
   * @param {boolean} [showall] 
   * @param {number} [showallforteam] 
   * @param {number} [showallfortech] 
   * @param {number} [ticketarea_id] 
   * @param {string} [type] 
   */
  getViewFilter({
    globalonly,
    showall,
    showallforteam,
    showallfortech,
    ticketarea_id,
    type,
  }: {
    globalonly?: boolean
    showall?: boolean
    showallforteam?: number
    showallfortech?: number
    ticketarea_id?: number
    type?: string
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ViewFilter',
      params: {
        globalonly,
        showall,
        showallforteam,
        showallfortech,
        ticketarea_id,
        type,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postViewFilter({ viewFilter }: { viewFilter: Array<ViewFilter> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ViewFilter',
      data: viewFilter,
    })
  }

  /**
   * @summary Get one ViewFilter
   * @description Use this to return a single instance of ViewFilter.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getViewFilterById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ViewFilter/${id}`,
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
  deleteViewFilterById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/ViewFilter/${id}`,
    })
  }
}
