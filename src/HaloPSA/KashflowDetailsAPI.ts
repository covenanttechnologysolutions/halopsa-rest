/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link KashflowDetails} */
export type KashflowDetails = schemas['KashflowDetails']

/**
 * @module KashflowDetailsAPI
 */

/**
 * KashflowDetails module
 * @public
 */
export class KashflowDetailsAPI extends BaseAPI {
  /**
   * @summary List of KashflowDetails
   * @description Use this to return multiple KashflowDetails. Requires authentication.
   * @param {boolean} [includedisabled]
   * @param {boolean} [includeenabled]
   * @param {number} [tenantid]
   */
  getKashflowDetails({
    includedisabled,
    includeenabled,
    tenantid,
  }: {
    includedisabled?: boolean
    includeenabled?: boolean
    tenantid?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/KashflowDetails',
      params: { includedisabled, includeenabled, tenantid },
    })
  }

  postKashflowDetails({
    kashflowDetailsList,
  }: {
    kashflowDetailsList: Array<KashflowDetails>
  }): Promise<KashflowDetails> {
    return this.request({ method: 'post', data: kashflowDetailsList, path: '/KashflowDetails' })
  }

  /**
   * @summary Get one KashflowDetails
   * @description Use this to return a single instance of KashflowDetails. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getKashflowDetailsById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<KashflowDetails> {
    return this.request({
      method: 'get',
      path: `/KashflowDetails/${id}`,
      params: { includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteKashflowDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/KashflowDetails/${id}` })
  }
}
