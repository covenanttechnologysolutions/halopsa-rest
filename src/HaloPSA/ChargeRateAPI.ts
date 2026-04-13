/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ChargeRate} */
export type ChargeRate = schemas['ChargeRate']

/**
 * @module ChargeRateAPI
 */

/**
 * ChargeRate module
 * @public
 */
export class ChargeRateAPI extends BaseAPI {
  /**
   * @summary List of ChargeRate
   * @description Use this to return multiple ChargeRate. Requires authentication.
   * @param {number} [chargerate_id]
   * @param {number} [client_id]
   * @param {number} [contract_id]
   * @param {boolean} [currentonly]
   * @param {boolean} [globalonly]
   */
  getChargeRate({
    chargerate_id,
    client_id,
    contract_id,
    currentonly,
    globalonly,
  }: {
    chargerate_id?: number
    client_id?: number
    contract_id?: number
    currentonly?: boolean
    globalonly?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/ChargeRate',
      params: { chargerate_id, client_id, contract_id, currentonly, globalonly },
    })
  }

  /**
   * @summary Get one ChargeRate
   * @description Use this to return a single instance of ChargeRate. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getChargeRateById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<ChargeRate> {
    return this.request({ method: 'get', path: `/ChargeRate/${id}`, params: { includedetails } })
  }
}
