/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ArmisDetails} */
export type ArmisDetails = schemas['ArmisDetails']

/**
 * @module ArmisDetailsAPI
 */

/**
 * ArmisDetails module
 * @public
 */
export class ArmisDetailsAPI extends BaseAPI {
  getArmisDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/ArmisDetails' })
  }

  postArmisDetails({
    armisDetailsList,
  }: {
    armisDetailsList: Array<ArmisDetails>
  }): Promise<ArmisDetails> {
    return this.request({ method: 'post', data: armisDetailsList, path: '/ArmisDetails' })
  }

  /**
   * @param {number} id
   */
  getArmisDetailsById({ id }: { id: number }): Promise<ArmisDetails> {
    return this.request({ method: 'get', path: `/ArmisDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteArmisDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/ArmisDetails/${id}` })
  }
}
