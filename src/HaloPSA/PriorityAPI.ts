/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Policy} */
export type Policy = schemas['Policy']

/**
 * @module PriorityAPI
 */

/**
 * Priority module
 * @public
 */
export class PriorityAPI extends BaseAPI {
  /**
   * @summary List of Policy
   * @description Use this to return multiple Policy. Requires authentication.
   * @param {boolean} [includedistinct]
   * @param {number} [slaid]
   */
  getPriority({
    includedistinct,
    slaid,
  }: {
    includedistinct?: boolean
    slaid?: number
  }): Promise<unknown> {
    return this.request({ method: 'get', path: '/Priority', params: { includedistinct, slaid } })
  }

  postPriority({ policyList }: { policyList: Array<Policy> }): Promise<unknown> {
    return this.request({ method: 'post', data: policyList, path: '/Priority' })
  }

  /**
   * @summary Get one Policy
   * @description Use this to return a single instance of Policy. Requires authentication.
   * @param {string} id
   * @param {boolean} [includedetails]
   */
  getPriorityById({
    id,
    includedetails,
  }: {
    id: string
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({ method: 'get', path: `/Priority/${id}`, params: { includedetails } })
  }

  /**
   * @param {string} id
   */
  deletePriorityById({ id }: { id: string }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Priority/${id}` })
  }
}
