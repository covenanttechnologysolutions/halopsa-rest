/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ArrowSphereDetails} */
export type ArrowSphereDetails = schemas['ArrowSphereDetails']

/**
 * @module ArrowSphereDetailsAPI
 */

/**
 * ArrowSphereDetails module
 * @public
 */
export class ArrowSphereDetailsAPI extends BaseAPI {
  getArrowSphereDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/ArrowSphereDetails' })
  }

  postArrowSphereDetails({
    arrowSphereDetailsList,
  }: {
    arrowSphereDetailsList: Array<ArrowSphereDetails>
  }): Promise<ArrowSphereDetails> {
    return this.request({
      method: 'post',
      data: arrowSphereDetailsList,
      path: '/ArrowSphereDetails',
    })
  }

  /**
   * @param {number} id
   */
  getArrowSphereDetailsById({ id }: { id: number }): Promise<ArrowSphereDetails> {
    return this.request({ method: 'get', path: `/ArrowSphereDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteArrowSphereDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/ArrowSphereDetails/${id}` })
  }
}
