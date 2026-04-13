/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ServiceAvailability} */
export type ServiceAvailability = schemas['ServiceAvailability']

/**
 * @module ServiceAvailabilityAPI
 */

/**
 * ServiceAvailability module
 * @public
 */
export class ServiceAvailabilityAPI extends BaseAPI {
  getServiceAvailability(): Promise<unknown> {
    return this.request({ method: 'get', path: '/ServiceAvailability' })
  }

  postServiceAvailability({
    serviceAvailabilityList,
  }: {
    serviceAvailabilityList: Array<ServiceAvailability>
  }): Promise<ServiceAvailability> {
    return this.request({
      method: 'post',
      data: serviceAvailabilityList,
      path: '/ServiceAvailability',
    })
  }

  /**
   * @param {number} id
   */
  getServiceAvailabilityById({ id }: { id: number }): Promise<ServiceAvailability> {
    return this.request({ method: 'get', path: `/ServiceAvailability/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteServiceAvailabilityById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/ServiceAvailability/${id}` })
  }
}
