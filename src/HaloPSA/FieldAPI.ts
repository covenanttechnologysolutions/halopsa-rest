/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Field} */
export type Field = schemas['Field']

/**
 * @module FieldAPI
 */

/**
 * Field module
 * @public
 */
export class FieldAPI extends BaseAPI {
  /**
   * @summary List of Field
   * @description Use this to return multiple Field. Requires authentication.
   * @param {string} [kind]
   * @param {number} [type_id]
   */
  getField({ kind, type_id }: { kind?: string; type_id?: number }): Promise<unknown> {
    return this.request({ method: 'get', path: '/Field', params: { kind, type_id } })
  }

  postField({ fieldList }: { fieldList: Array<Field> }): Promise<Field> {
    return this.request({ method: 'post', data: fieldList, path: '/Field' })
  }

  /**
   * @summary Get one Field
   * @description Use this to return a single instance of Field. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   * @param {string} [kind]
   */
  getFieldById({
    id,
    includedetails,
    kind,
  }: {
    id: number
    includedetails?: boolean
    kind?: string
  }): Promise<Field> {
    return this.request({ method: 'get', path: `/Field/${id}`, params: { includedetails, kind } })
  }

  /**
   * @summary Delete one Field
   * @description Delete specific Field. Requires authentication.
   * @param {number} id
   * @param {string} [kind]
   */
  deleteFieldById({ id, kind }: { id: number; kind?: string }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Field/${id}`, params: { kind } })
  }

  /**
   * @param {number} id
   */
  postFieldAddFieldToAllById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'post', path: `/Field/AddFieldToAll/${id}` })
  }
}
