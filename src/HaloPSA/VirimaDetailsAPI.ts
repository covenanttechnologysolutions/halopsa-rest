/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link VirimaDetails} */
export type VirimaDetails = schemas['VirimaDetails']

/**
 * @module VirimaDetailsAPI
 */

/**
 * VirimaDetails module
 * @public
 */
export class VirimaDetailsAPI extends BaseAPI {
  getVirimaDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/VirimaDetails' })
  }

  postVirimaDetails({
    virimaDetailsList,
  }: {
    virimaDetailsList: Array<VirimaDetails>
  }): Promise<VirimaDetails> {
    return this.request({ method: 'post', data: virimaDetailsList, path: '/VirimaDetails' })
  }

  /**
   * @param {number} id
   */
  getVirimaDetailsById({ id }: { id: number }): Promise<VirimaDetails> {
    return this.request({ method: 'get', path: `/VirimaDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteVirimaDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/VirimaDetails/${id}` })
  }
}
