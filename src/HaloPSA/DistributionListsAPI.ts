/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link DistributionLists} */
export type DistributionLists = schemas['DistributionLists']

/**
 * @module DistributionListsAPI
 */

/**
 * DistributionLists module
 * @public
 */
export class DistributionListsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getDistributionLists(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/DistributionLists',
    })
  }

  /**
   * 
   * 
   
   */
  postDistributionLists(distributionLists: Array<DistributionLists>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/DistributionLists',
      data: distributionLists,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getDistributionListsById(id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: `/DistributionLists/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteDistributionListsById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/DistributionLists/${id}`,
    })
  }
}
