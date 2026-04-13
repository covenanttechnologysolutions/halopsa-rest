/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link TaniumDetails} */
export type TaniumDetails = schemas['TaniumDetails']

/**
 * @module TaniumDetailsAPI
 */

/**
 * TaniumDetails module
 * @public
 */
export class TaniumDetailsAPI extends BaseAPI {
  getTaniumDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/TaniumDetails' })
  }

  postTaniumDetails({
    taniumDetailsList,
  }: {
    taniumDetailsList: Array<TaniumDetails>
  }): Promise<TaniumDetails> {
    return this.request({ method: 'post', data: taniumDetailsList, path: '/TaniumDetails' })
  }

  /**
   * @param {number} id
   */
  getTaniumDetailsById({ id }: { id: number }): Promise<TaniumDetails> {
    return this.request({ method: 'get', path: `/TaniumDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteTaniumDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/TaniumDetails/${id}` })
  }
}
