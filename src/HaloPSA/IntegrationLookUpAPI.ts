/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link IntegrationLookUp} */
export type IntegrationLookUp = schemas['IntegrationLookUp']

/**
 * @module IntegrationLookUpAPI
 */

/**
 * IntegrationLookUp module
 * @public
 */
export class IntegrationLookUpAPI extends BaseAPI {
  getIntegrationLookUp(): Promise<unknown> {
    return this.request({ method: 'get', path: '/IntegrationLookUp' })
  }

  postIntegrationLookUp({
    integrationLookUpList,
  }: {
    integrationLookUpList: Array<IntegrationLookUp>
  }): Promise<IntegrationLookUp> {
    return this.request({ method: 'post', data: integrationLookUpList, path: '/IntegrationLookUp' })
  }
}
