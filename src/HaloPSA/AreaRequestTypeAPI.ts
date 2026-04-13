/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link AreaRequestType} */
export type AreaRequestType = schemas['AreaRequestType']

/**
 * @module AreaRequestTypeAPI
 */

/**
 * AreaRequestType module
 * @public
 */
export class AreaRequestTypeAPI extends BaseAPI {
  getAreaRequestType(): Promise<unknown> {
    return this.request({ method: 'get', path: '/AreaRequestType' })
  }

  /**
   * @summary Get one AreaRequestType
   * @description Use this to return a single instance of AreaRequestType. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getAreaRequestTypeById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<AreaRequestType> {
    return this.request({
      method: 'get',
      path: `/AreaRequestType/${id}`,
      params: { includedetails },
    })
  }
}
