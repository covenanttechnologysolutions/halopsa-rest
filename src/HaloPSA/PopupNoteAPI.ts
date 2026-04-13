/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link AreaPopup} */
export type AreaPopup = schemas['AreaPopup']

/**
 * @module PopupNoteAPI
 */

/**
 * PopupNote module
 * @public
 */
export class PopupNoteAPI extends BaseAPI {
  /**
   * @summary List of AreaPopup
   * @description Use this to return multiple AreaPopup. Requires authentication.
   * @param {number} [client_id]
   * @param {boolean} [showall]
   * @param {number} [site_id]
   * @param {number} [user_id]
   */
  getPopupNote({
    client_id,
    showall,
    site_id,
    user_id,
  }: {
    client_id?: number
    showall?: boolean
    site_id?: number
    user_id?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/PopupNote',
      params: { client_id, showall, site_id, user_id },
    })
  }

  postPopupNoteRead({ areaPopupList }: { areaPopupList: Array<AreaPopup> }): Promise<unknown> {
    return this.request({ method: 'post', data: areaPopupList, path: '/PopupNote/read' })
  }
}
