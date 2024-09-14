/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class ContractScheduleAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getContractSchedule({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ContractSchedule',
    })
  }

  /**
   * 
   * 
   
   */
  postContractSchedule({
    contractSchedule,
  }: {
    contractSchedule: Array<ContractSchedule>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ContractSchedule',
      data: contractSchedule,
    })
  }

  /**
   * @summary Get one ContractSchedule
   * @description Use this to return a single instance of ContractSchedule.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getContractScheduleById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ContractSchedule/${id}`,
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
  deleteContractScheduleById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/ContractSchedule/${id}`,
    })
  }
}
