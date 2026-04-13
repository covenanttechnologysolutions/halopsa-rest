/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link MicrosoftSubscriptionMapping} */
export type MicrosoftSubscriptionMapping = schemas['MicrosoftSubscriptionMapping']

/**
 * @module MicrosoftSubscriptionMappingAPI
 */

/**
 * MicrosoftSubscriptionMapping module
 * @public
 */
export class MicrosoftSubscriptionMappingAPI extends BaseAPI {
  getMicrosoftSubscriptionMapping(): Promise<unknown> {
    return this.request({ method: 'get', path: '/MicrosoftSubscriptionMapping' })
  }

  postMicrosoftSubscriptionMapping({
    microsoftSubscriptionMappingList,
  }: {
    microsoftSubscriptionMappingList: Array<MicrosoftSubscriptionMapping>
  }): Promise<MicrosoftSubscriptionMapping> {
    return this.request({
      method: 'post',
      data: microsoftSubscriptionMappingList,
      path: '/MicrosoftSubscriptionMapping',
    })
  }

  /**
   * @param {number} id
   */
  getMicrosoftSubscriptionMappingById({
    id,
  }: {
    id: number
  }): Promise<MicrosoftSubscriptionMapping> {
    return this.request({ method: 'get', path: `/MicrosoftSubscriptionMapping/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteMicrosoftSubscriptionMappingById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/MicrosoftSubscriptionMapping/${id}` })
  }
}
