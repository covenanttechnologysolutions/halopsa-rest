/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link RaynetDetails} */
export type RaynetDetails = schemas['RaynetDetails']

/**
 * @module RaynetDetailsAPI
 */

/**
 * RaynetDetails module
 * @public
 */
export class RaynetDetailsAPI extends BaseAPI {
  getRaynetDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/RaynetDetails' })
  }

  postRaynetDetails({
    raynetDetailsList,
  }: {
    raynetDetailsList: Array<RaynetDetails>
  }): Promise<RaynetDetails> {
    return this.request({ method: 'post', data: raynetDetailsList, path: '/RaynetDetails' })
  }

  /**
   * @param {number} id
   */
  getRaynetDetailsById({ id }: { id: number }): Promise<RaynetDetails> {
    return this.request({ method: 'get', path: `/RaynetDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteRaynetDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/RaynetDetails/${id}` })
  }
}
