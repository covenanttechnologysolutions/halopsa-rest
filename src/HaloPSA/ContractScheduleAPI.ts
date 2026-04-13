/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ContractSchedule} */
export type ContractSchedule = schemas['ContractSchedule']

/**
 * @module ContractScheduleAPI
 */

/**
 * ContractSchedule module
 * @public
 */
export class ContractScheduleAPI extends BaseAPI {
  getContractSchedule(): Promise<unknown> {
    return this.request({ method: 'get', path: '/ContractSchedule' })
  }

  postContractSchedule({
    contractScheduleList,
  }: {
    contractScheduleList: Array<ContractSchedule>
  }): Promise<ContractSchedule> {
    return this.request({ method: 'post', data: contractScheduleList, path: '/ContractSchedule' })
  }

  /**
   * @summary Get one ContractSchedule
   * @description Use this to return a single instance of ContractSchedule. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getContractScheduleById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<ContractSchedule> {
    return this.request({
      method: 'get',
      path: `/ContractSchedule/${id}`,
      params: { includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteContractScheduleById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/ContractSchedule/${id}` })
  }
}
