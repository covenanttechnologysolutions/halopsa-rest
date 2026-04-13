/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link PRTGDetails} */
export type PRTGDetails = schemas['PRTGDetails']

/**
 * @module PRTGDetailsAPI
 */

/**
 * PRTGDetails module
 * @public
 */
export class PRTGDetailsAPI extends BaseAPI {
  getPRTGDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/PRTGDetails' })
  }

  postPRTGDetails({
    pRTGDetailsList,
  }: {
    pRTGDetailsList: Array<PRTGDetails>
  }): Promise<PRTGDetails> {
    return this.request({ method: 'post', data: pRTGDetailsList, path: '/PRTGDetails' })
  }

  /**
   * @param {number} id
   */
  getPRTGDetailsById({ id }: { id: number }): Promise<PRTGDetails> {
    return this.request({ method: 'get', path: `/PRTGDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deletePRTGDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/PRTGDetails/${id}` })
  }
}
