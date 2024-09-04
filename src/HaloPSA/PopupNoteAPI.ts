/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class PopupNoteAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of AreaPopup
   * @description Use this to return multiple AreaPopup.<br>
				Requires authentication.
   * @param {number} client_id 
   * @param {boolean} showall 
   * @param {number} site_id 
   * @param {number} user_id 
   */
  getPopupNote(
    client_id: number,
    showall: boolean,
    site_id: number,
    user_id: number,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/PopupNote',
      params: {
        client_id,
        showall,
        site_id,
        user_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postPopupNoteRead(areaPopup: Array<AreaPopup>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/PopupNote/read',
      data: areaPopup,
    })
  }
}
