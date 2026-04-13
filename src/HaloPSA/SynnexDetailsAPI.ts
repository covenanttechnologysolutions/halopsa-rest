/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link SynnexDetails} */
export type SynnexDetails = schemas['SynnexDetails']

/**
 * @module SynnexDetailsAPI
 */

/**
 * SynnexDetails module
 * @public
 */
export class SynnexDetailsAPI extends BaseAPI {
  getSynnexDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/SynnexDetails' })
  }

  postSynnexDetails({
    synnexDetailsList,
  }: {
    synnexDetailsList: Array<SynnexDetails>
  }): Promise<SynnexDetails> {
    return this.request({ method: 'post', data: synnexDetailsList, path: '/SynnexDetails' })
  }

  /**
   * @summary Get one IngramMicroDetails
   * @description Use this to return a single instance of IngramMicroDetails. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getSynnexDetailsById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<SynnexDetails> {
    return this.request({ method: 'get', path: `/SynnexDetails/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteSynnexDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/SynnexDetails/${id}` })
  }
}
