/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link IntegrationDelta} */
export type IntegrationDelta = schemas['IntegrationDelta']

/**
 * @module IntegrationDeltaAPI
 */

/**
 * IntegrationDelta module
 * @public
 */
export class IntegrationDeltaAPI extends BaseAPI {
  getIntegrationDelta(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationDelta' })
  }

  postIntegrationDelta({
    integrationDeltaList,
  }: {
    integrationDeltaList: Array<IntegrationDelta>
  }): Promise<IntegrationDelta> {
    return this.request({ method: 'post', data: integrationDeltaList, path: '/IntegrationDelta' })
  }

  /**
   * @param {number} id
   */
  getIntegrationDeltaById({ id }: { id: number }): Promise<IntegrationDelta> {
    return this.request({ method: 'get', path: `/IntegrationDelta/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteIntegrationDeltaById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/IntegrationDelta/${id}` })
  }
}
