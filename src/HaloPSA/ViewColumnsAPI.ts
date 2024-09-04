/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link ViewColumns} */
export type ViewColumns = schemas['ViewColumns']

/**
 * @module ViewColumnsAPI
 */

/**
 * ViewColumns module
 * @public
 */
export class ViewColumnsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of ViewColumns
   * @description Use this to return multiple ViewColumns.<br>
				Requires authentication.
   * @param {boolean} globalonly 
   * @param {boolean} showall 
   * @param {number} showallforteam 
   * @param {number} showallfortech 
   * @param {number} ticketarea_id 
   * @param {string} type 
   */
  getViewColumns(
    globalonly: boolean,
    showall: boolean,
    showallforteam: number,
    showallfortech: number,
    ticketarea_id: number,
    type: string,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ViewColumns',
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
  postViewColumns(viewColumns: Array<ViewColumns>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ViewColumns',
      data: viewColumns,
    })
  }

  /**
   * @summary Get one ViewColumns
   * @description Use this to return a single instance of ViewColumns.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getViewColumnsById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ViewColumns/${id}`,
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
  deleteViewColumnsById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/ViewColumns/${id}`,
    })
  }
}
