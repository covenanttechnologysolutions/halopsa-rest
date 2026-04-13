/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link GoogleBusinessDetails} */
export type GoogleBusinessDetails = schemas['GoogleBusinessDetails']

/**
 * @module GoogleBusinessDetailsAPI
 */

/**
 * GoogleBusinessDetails module
 * @public
 */
export class GoogleBusinessDetailsAPI extends BaseAPI {
  getGoogleBusinessDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/GoogleBusinessDetails' })
  }

  postGoogleBusinessDetails({
    googleBusinessDetailsList,
  }: {
    googleBusinessDetailsList: Array<GoogleBusinessDetails>
  }): Promise<GoogleBusinessDetails> {
    return this.request({
      method: 'post',
      data: googleBusinessDetailsList,
      path: '/GoogleBusinessDetails',
    })
  }

  /**
   * @param {number} id
   */
  getGoogleBusinessDetailsById({ id }: { id: number }): Promise<GoogleBusinessDetails> {
    return this.request({ method: 'get', path: `/GoogleBusinessDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteGoogleBusinessDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/GoogleBusinessDetails/${id}` })
  }
}
