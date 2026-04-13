/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class ContractSchedulePlanAPI extends BaseAPI {
  getContractSchedulePlan(): Promise<unknown> {
    return this.request({ method: 'get', path: '/ContractSchedulePlan' })
  }

  postContractSchedulePlan({
    contractSchedulePlanList,
  }: {
    contractSchedulePlanList: Array<ContractSchedulePlan>
  }): Promise<ContractSchedulePlan> {
    return this.request({
      method: 'post',
      data: contractSchedulePlanList,
      path: '/ContractSchedulePlan',
    })
  }

  /**
   * @summary Get one ContractSchedulePlan
   * @description Use this to return a single instance of ContractSchedulePlan. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getContractSchedulePlanById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<ContractSchedulePlan> {
    return this.request({
      method: 'get',
      path: `/ContractSchedulePlan/${id}`,
      params: { includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteContractSchedulePlanById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/ContractSchedulePlan/${id}` })
  }
}
