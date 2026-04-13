/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ServiceRequestDetails} */
export type ServiceRequestDetails = schemas['ServiceRequestDetails']

/**
 * @module ServiceRequestDetailsAPI
 */

/**
 * ServiceRequestDetails module
 * @public
 */
export class ServiceRequestDetailsAPI extends BaseAPI {
  /**
   * @summary List of ServiceRequestDetails
   * @description Use this to return multiple ServiceRequestDetails. Requires authentication.
   * @param {boolean} [exclude_urls]
   * @param {boolean} [includedetails]
   * @param {number} [service_id]
   */
  getServiceRequestDetails({
    exclude_urls,
    includedetails,
    service_id,
  }: {
    exclude_urls?: boolean
    includedetails?: boolean
    service_id?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/ServiceRequestDetails',
      params: { exclude_urls, includedetails, service_id },
    })
  }

  /**
   * @summary Get one ServiceRequestDetails
   * @description Use this to return a single instance of ServiceRequestDetails. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getServiceRequestDetailsById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<ServiceRequestDetails> {
    return this.request({
      method: 'get',
      path: `/ServiceRequestDetails/${id}`,
      params: { includedetails },
    })
  }
}
