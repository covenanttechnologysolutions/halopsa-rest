/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link FieldGroup} */
export type FieldGroup = schemas['FieldGroup']

/**
 * @module FieldGroupAPI
 */

/**
 * FieldGroup module
 * @public
 */
export class FieldGroupAPI extends BaseAPI {
  /**
   * @summary List of FieldGroup
   * @description Use this to return multiple FieldGroup. Requires authentication.
   * @param {number} [access_control_level]
   * @param {boolean} [includefields]
   * @param {boolean} [isconfig]
   */
  getFieldGroup({
    access_control_level,
    includefields,
    isconfig,
  }: {
    access_control_level?: number
    includefields?: boolean
    isconfig?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/FieldGroup',
      params: { access_control_level, includefields, isconfig },
    })
  }

  postFieldGroup({ fieldGroupList }: { fieldGroupList: Array<FieldGroup> }): Promise<FieldGroup> {
    return this.request({ method: 'post', data: fieldGroupList, path: '/FieldGroup' })
  }

  /**
   * @summary Get one FieldGroup
   * @description Use this to return a single instance of FieldGroup. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getFieldGroupById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<FieldGroup> {
    return this.request({ method: 'get', path: `/FieldGroup/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteFieldGroupById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/FieldGroup/${id}` })
  }
}
