/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module ChargeRateAPI
 */

/**
 * ChargeRate module
 * @public
 */
export class ChargeRateAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of ChargeRate
   * @description Use this to return multiple ChargeRate.<br>
				Requires authentication.
   * @param {number} chargerate_id 
   * @param {number} client_id 
   * @param {number} contract_id 
   * @param {boolean} currentonly 
   * @param {boolean} globalonly 
   */
  getChargeRate(
    chargerate_id: number,
    client_id: number,
    contract_id: number,
    currentonly: boolean,
    globalonly: boolean,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ChargeRate',
      params: {
        chargerate_id,
        client_id,
        contract_id,
        currentonly,
        globalonly,
      },
    })
  }

  /**
   * @summary Get one ChargeRate
   * @description Use this to return a single instance of ChargeRate.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getChargeRateById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ChargeRate/${id}`,
      params: {
        includedetails,
      },
    })
  }
}
