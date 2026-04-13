/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link TechDataResellerDetails} */
export type TechDataResellerDetails = schemas['TechDataResellerDetails']

/**
 * @module TechDataResellerDetailsAPI
 */

/**
 * TechDataResellerDetails module
 * @public
 */
export class TechDataResellerDetailsAPI extends BaseAPI {
  getTechDataResellerDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/TechDataResellerDetails' })
  }

  postTechDataResellerDetails({
    techDataResellerDetailsList,
  }: {
    techDataResellerDetailsList: Array<TechDataResellerDetails>
  }): Promise<TechDataResellerDetails> {
    return this.request({
      method: 'post',
      data: techDataResellerDetailsList,
      path: '/TechDataResellerDetails',
    })
  }

  /**
   * @param {number} id
   */
  getTechDataResellerDetailsById({ id }: { id: number }): Promise<TechDataResellerDetails> {
    return this.request({ method: 'get', path: `/TechDataResellerDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteTechDataResellerDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/TechDataResellerDetails/${id}` })
  }
}
