/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class ViewColumnsAPI extends BaseAPI {
  /**
   * @summary List of ViewColumns
   * @description Use this to return multiple ViewColumns. Requires authentication.
   * @param {boolean} [globalonly]
   * @param {boolean} [showall]
   * @param {number} [showallforteam]
   * @param {number} [showallfortech]
   * @param {number} [ticketarea_id]
   * @param {string} [type]
   */
  getViewColumns({
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
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/ViewColumns',
      params: { globalonly, showall, showallforteam, showallfortech, ticketarea_id, type },
    })
  }

  postViewColumns({
    viewColumnsList,
  }: {
    viewColumnsList: Array<ViewColumns>
  }): Promise<ViewColumns> {
    return this.request({ method: 'post', data: viewColumnsList, path: '/ViewColumns' })
  }

  /**
   * @summary Get one ViewColumns
   * @description Use this to return a single instance of ViewColumns. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getViewColumnsById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<ViewColumns> {
    return this.request({ method: 'get', path: `/ViewColumns/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteViewColumnsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/ViewColumns/${id}` })
  }
}
