/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link CSPSubscriptionPricing} */
export type CSPSubscriptionPricing = schemas['CSPSubscriptionPricing']

/**
 * @module CSPSubscriptionPricingAPI
 */

/**
 * CSPSubscriptionPricing module
 * @public
 */
export class CSPSubscriptionPricingAPI extends BaseAPI {
  postCSPSubscriptionPricingManage({
    cSPSubscriptionPricingList,
  }: {
    cSPSubscriptionPricingList: Array<CSPSubscriptionPricing>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: cSPSubscriptionPricingList,
      path: '/CSPSubscriptionPricing/manage',
    })
  }
}
