/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link IntegrationConfiguration} */
export type IntegrationConfiguration = schemas['IntegrationConfiguration']

/**
 * @module IntegrationConfigurationAPI
 */

/**
 * IntegrationConfiguration module
 * @public
 */
export class IntegrationConfigurationAPI extends BaseAPI {
  getIntegrationConfiguration(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationConfiguration' })
  }

  postIntegrationConfiguration({
    integrationConfigurationList,
  }: {
    integrationConfigurationList: Array<IntegrationConfiguration>
  }): Promise<IntegrationConfiguration> {
    return this.request({
      method: 'post',
      data: integrationConfigurationList,
      path: '/IntegrationConfiguration',
    })
  }

  /**
   * @summary Get one IntegrationConfiguration
   * @description Use this to return a single instance of IntegrationConfiguration. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getIntegrationConfigurationById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<IntegrationConfiguration> {
    return this.request({
      method: 'get',
      path: `/IntegrationConfiguration/${id}`,
      params: { includedetails },
    })
  }
}
