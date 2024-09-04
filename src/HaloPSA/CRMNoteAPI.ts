/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link AreaNote} */
export type AreaNote = schemas['AreaNote']

/**
 * @module CRMNoteAPI
 */

/**
 * CRMNote module
 * @public
 */
export class CRMNoteAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of AreaNote
   * @description Use this to return multiple AreaNote.<br>
				Requires authentication.
   * @param {number} client_id 
   * @param {number} count 
   * @param {number} supplier_id 
   * @param {number} toplevel_id 
   */
  getCRMNote(
    client_id: number,
    count: number,
    supplier_id: number,
    toplevel_id: number,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/CRMNote',
      params: {
        client_id,
        count,
        supplier_id,
        toplevel_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postCRMNote(areaNote: Array<AreaNote>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/CRMNote',
      data: areaNote,
    })
  }

  /**
   * @summary Get one AreaNote
   * @description Use this to return a single instance of AreaNote.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getCRMNoteById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/CRMNote/${id}`,
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
  deleteCRMNoteById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/CRMNote/${id}`,
    })
  }
}
