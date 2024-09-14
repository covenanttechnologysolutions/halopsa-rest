/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link DistributionListsLog} */
export type DistributionListsLog = schemas['DistributionListsLog']

/**
 * @module DistributionListsLogAPI
 */

/**
 * DistributionListsLog module
 * @public
 */
export class DistributionListsLogAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getDistributionListsLog({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/DistributionListsLog',
    })
  }

  /**
   * 
   * 
   
   */
  postDistributionListsLog({
    distributionListsLog,
  }: {
    distributionListsLog: Array<DistributionListsLog>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/DistributionListsLog',
      data: distributionListsLog,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getDistributionListsLogById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/DistributionListsLog/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteDistributionListsLogById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/DistributionListsLog/${id}`,
    })
  }
}
