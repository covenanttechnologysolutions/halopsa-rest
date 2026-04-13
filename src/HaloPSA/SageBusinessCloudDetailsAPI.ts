/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link SageBusinessCloudDetails} */
export type SageBusinessCloudDetails = schemas['SageBusinessCloudDetails']

/**
 * @module SageBusinessCloudDetailsAPI
 */

/**
 * SageBusinessCloudDetails module
 * @public
 */
export class SageBusinessCloudDetailsAPI extends BaseAPI {
  /**
   * @summary List of SageBusinessCloudDetails
   * @description Use this to return multiple SageBusinessCloudDetails. Requires authentication.
   * @param {boolean} [connectedonly]
   * @param {string} [tenantid]
   */
  getSageBusinessCloudDetails({
    connectedonly,
    tenantid,
  }: {
    connectedonly?: boolean
    tenantid?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/SageBusinessCloudDetails',
      params: { connectedonly, tenantid },
    })
  }

  postSageBusinessCloudDetails({
    sageBusinessCloudDetailsList,
  }: {
    sageBusinessCloudDetailsList: Array<SageBusinessCloudDetails>
  }): Promise<SageBusinessCloudDetails> {
    return this.request({
      method: 'post',
      data: sageBusinessCloudDetailsList,
      path: '/SageBusinessCloudDetails',
    })
  }

  /**
   * @summary Get one SageBusinessCloudDetails
   * @description Use this to return a single instance of SageBusinessCloudDetails. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getSageBusinessCloudDetailsById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<SageBusinessCloudDetails> {
    return this.request({
      method: 'get',
      path: `/SageBusinessCloudDetails/${id}`,
      params: { includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteSageBusinessCloudDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/SageBusinessCloudDetails/${id}` })
  }
}
