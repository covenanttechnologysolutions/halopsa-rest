/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Actions} */
export type Actions = schemas['Actions']
/** {@link Faults} */
export type Faults = schemas['Faults']

/**
 * @module HaloIntegrationAPI
 */

/**
 * HaloIntegration module
 * @public
 */
export class HaloIntegrationAPI extends BaseAPI {
  getHaloIntegrationGet(): Promise<unknown> {
    return this.request({ method: 'get', path: '/HaloIntegration/Get' })
  }

  postHaloIntegrationCreateTicket({ faults }: { faults: Faults }): Promise<unknown> {
    return this.request({ method: 'post', data: faults, path: '/HaloIntegration/CreateTicket' })
  }

  postHaloIntegrationCreateAction({ actions }: { actions: Actions }): Promise<unknown> {
    return this.request({ method: 'post', data: actions, path: '/HaloIntegration/CreateAction' })
  }
}
