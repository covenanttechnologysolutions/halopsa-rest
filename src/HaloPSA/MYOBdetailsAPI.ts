/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link MYOBDetails} */
export type MYOBDetails = schemas['MYOBDetails']

/**
 * @module MYOBdetailsAPI
 */

/**
 * MYOBdetails module
 * @public
 */
export class MYOBdetailsAPI extends BaseAPI {
  getMYOBdetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/MYOBdetails' })
  }

  postMYOBdetails({ mYOBDetailsList }: { mYOBDetailsList: Array<MYOBDetails> }): Promise<unknown> {
    return this.request({ method: 'post', data: mYOBDetailsList, path: '/MYOBdetails' })
  }

  /**
   * @param {number} id
   */
  getMYOBdetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'get', path: `/MYOBdetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteMYOBdetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/MYOBdetails/${id}` })
  }
}
