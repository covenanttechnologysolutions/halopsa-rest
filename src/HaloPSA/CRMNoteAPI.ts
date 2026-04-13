/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class CRMNoteAPI extends BaseAPI {
  /**
   * @summary List of AreaNote
   * @description Use this to return multiple AreaNote. Requires authentication.
   * @param {number} [client_id]
   * @param {number} [count]
   * @param {number} [supplier_id]
   * @param {number} [toplevel_id]
   */
  getCRMNote({
    client_id,
    count,
    supplier_id,
    toplevel_id,
  }: {
    client_id?: number
    count?: number
    supplier_id?: number
    toplevel_id?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/CRMNote',
      params: { client_id, count, supplier_id, toplevel_id },
    })
  }

  postCRMNote({ areaNoteList }: { areaNoteList: Array<AreaNote> }): Promise<unknown> {
    return this.request({ method: 'post', data: areaNoteList, path: '/CRMNote' })
  }

  /**
   * @summary Get one AreaNote
   * @description Use this to return a single instance of AreaNote. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getCRMNoteById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({ method: 'get', path: `/CRMNote/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteCRMNoteById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/CRMNote/${id}` })
  }
}
