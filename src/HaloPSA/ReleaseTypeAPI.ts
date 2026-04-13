/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ReleaseType} */
export type ReleaseType = schemas['ReleaseType']

/**
 * @module ReleaseTypeAPI
 */

/**
 * ReleaseType module
 * @public
 */
export class ReleaseTypeAPI extends BaseAPI {
  getReleaseType(): Promise<unknown> {
    return this.request({ method: 'get', path: '/ReleaseType' })
  }

  postReleaseType({
    releaseTypeList,
  }: {
    releaseTypeList: Array<ReleaseType>
  }): Promise<ReleaseType> {
    return this.request({ method: 'post', data: releaseTypeList, path: '/ReleaseType' })
  }

  /**
   * @summary Get one ReleaseType
   * @description Use this to return a single instance of ReleaseType. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getReleaseTypeById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<ReleaseType> {
    return this.request({ method: 'get', path: `/ReleaseType/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteReleaseTypeById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/ReleaseType/${id}` })
  }
}
