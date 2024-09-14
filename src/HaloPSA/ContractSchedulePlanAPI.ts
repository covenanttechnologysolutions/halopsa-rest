/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link ContractSchedulePlan} */
export type ContractSchedulePlan = schemas['ContractSchedulePlan']

/**
 * @module ContractSchedulePlanAPI
 */

/**
 * ContractSchedulePlan module
 * @public
 */
export class ContractSchedulePlanAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getContractSchedulePlan({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ContractSchedulePlan',
    })
  }

  /**
   * 
   * 
   
   */
  postContractSchedulePlan({
    contractSchedulePlan,
  }: {
    contractSchedulePlan: Array<ContractSchedulePlan>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ContractSchedulePlan',
      data: contractSchedulePlan,
    })
  }

  /**
   * @summary Get one ContractSchedulePlan
   * @description Use this to return a single instance of ContractSchedulePlan.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getContractSchedulePlanById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ContractSchedulePlan/${id}`,
      params: {
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteContractSchedulePlanById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/ContractSchedulePlan/${id}`,
    })
  }
}
