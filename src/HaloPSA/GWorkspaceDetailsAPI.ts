/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link GWorkspaceDetails} */
export type GWorkspaceDetails = schemas['GWorkspaceDetails']

/**
 * @module GWorkspaceDetailsAPI
 */

/**
 * GWorkspaceDetails module
 * @public
 */
export class GWorkspaceDetailsAPI extends BaseAPI {
  getGWorkspaceDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/GWorkspaceDetails' })
  }

  postGWorkspaceDetails({
    gWorkspaceDetailsList,
  }: {
    gWorkspaceDetailsList: Array<GWorkspaceDetails>
  }): Promise<GWorkspaceDetails> {
    return this.request({ method: 'post', data: gWorkspaceDetailsList, path: '/GWorkspaceDetails' })
  }

  /**
   * @param {number} id
   */
  getGWorkspaceDetailsById({ id }: { id: number }): Promise<GWorkspaceDetails> {
    return this.request({ method: 'get', path: `/GWorkspaceDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteGWorkspaceDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/GWorkspaceDetails/${id}` })
  }
}
