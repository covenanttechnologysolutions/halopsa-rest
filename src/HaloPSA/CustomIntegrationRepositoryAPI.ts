/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module CustomIntegrationRepositoryAPI
 */

/**
 * CustomIntegrationRepository module
 * @public
 */
export class CustomIntegrationRepositoryAPI extends BaseAPI {
  getCustomIntegrationRepository(): Promise<unknown> {
    return this.request({ method: 'get', path: '/CustomIntegrationRepository' })
  }

  /**
   * @summary Get one OutboundIntegration
   * @description Use this to return a single instance of OutboundIntegration. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   * @param {boolean} [includemethods]
   * @param {number} [module_id]
   */
  getCustomIntegrationRepositoryById({
    id,
    includedetails,
    includemethods,
    module_id,
  }: {
    id: number
    includedetails?: boolean
    includemethods?: boolean
    module_id?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: `/CustomIntegrationRepository/${id}`,
      params: { includedetails, includemethods, module_id },
    })
  }
}
