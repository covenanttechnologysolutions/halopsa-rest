/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link NCentralDetails} */
export type NCentralDetails = schemas['NCentralDetails']

/**
 * @module NCentralDetailsAPI
 */

/**
 * NCentralDetails module
 * @public
 */
export class NCentralDetailsAPI extends BaseAPI {
  /**
   * @summary List of NCentralDetails
   * @description Use this to return multiple NCentralDetails. Requires authentication.
   * @param {boolean} [includedetails]
   */
  getNCentralDetails({ includedetails }: { includedetails?: boolean }): Promise<unknown> {
    return this.request({ method: 'get', path: '/NCentralDetails', params: { includedetails } })
  }

  postNCentralDetails({
    nCentralDetailsList,
  }: {
    nCentralDetailsList: Array<NCentralDetails>
  }): Promise<NCentralDetails> {
    return this.request({ method: 'post', data: nCentralDetailsList, path: '/NCentralDetails' })
  }

  /**
   * @summary Get one NCentralDetails
   * @description Use this to return a single instance of NCentralDetails. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getNCentralDetailsById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<NCentralDetails> {
    return this.request({
      method: 'get',
      path: `/NCentralDetails/${id}`,
      params: { includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteNCentralDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/NCentralDetails/${id}` })
  }
}
