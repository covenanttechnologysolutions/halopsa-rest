/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link IngramMicroResellerDetails} */
export type IngramMicroResellerDetails = schemas['IngramMicroResellerDetails']

/**
 * @module IngramMicroResellerDetailsAPI
 */

/**
 * IngramMicroResellerDetails module
 * @public
 */
export class IngramMicroResellerDetailsAPI extends BaseAPI {
  getIngramMicroResellerDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IngramMicroResellerDetails' })
  }

  postIngramMicroResellerDetails({
    ingramMicroResellerDetailsList,
  }: {
    ingramMicroResellerDetailsList: Array<IngramMicroResellerDetails>
  }): Promise<IngramMicroResellerDetails> {
    return this.request({
      method: 'post',
      data: ingramMicroResellerDetailsList,
      path: '/IngramMicroResellerDetails',
    })
  }

  /**
   * @param {number} id
   */
  getIngramMicroResellerDetailsById({ id }: { id: number }): Promise<IngramMicroResellerDetails> {
    return this.request({ method: 'get', path: `/IngramMicroResellerDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteIngramMicroResellerDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/IngramMicroResellerDetails/${id}` })
  }
}
