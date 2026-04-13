/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ReleaseNoteGroup} */
export type ReleaseNoteGroup = schemas['ReleaseNoteGroup']

/**
 * @module ReleaseNoteGroupAPI
 */

/**
 * ReleaseNoteGroup module
 * @public
 */
export class ReleaseNoteGroupAPI extends BaseAPI {
  getReleaseNoteGroup(): Promise<unknown> {
    return this.request({ method: 'get', path: '/ReleaseNoteGroup' })
  }

  postReleaseNoteGroup({
    releaseNoteGroupList,
  }: {
    releaseNoteGroupList: Array<ReleaseNoteGroup>
  }): Promise<ReleaseNoteGroup> {
    return this.request({ method: 'post', data: releaseNoteGroupList, path: '/ReleaseNoteGroup' })
  }

  /**
   * @summary Get one ReleaseNoteGroup
   * @description Use this to return a single instance of ReleaseNoteGroup. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getReleaseNoteGroupById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<ReleaseNoteGroup> {
    return this.request({
      method: 'get',
      path: `/ReleaseNoteGroup/${id}`,
      params: { includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteReleaseNoteGroupById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/ReleaseNoteGroup/${id}` })
  }
}
