/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link BusinessCentralDetails} */
export type BusinessCentralDetails = schemas['BusinessCentralDetails']

/**
 * @module BusinessCentralDetailsAPI
 */

/**
 * BusinessCentralDetails module
 * @public
 */
export class BusinessCentralDetailsAPI extends BaseAPI {
  /**
   * @summary List of BusinessCentralDetails
   * @description Use this to return multiple BusinessCentralDetails. Requires authentication.
   * @param {string} [companyid]
   * @param {boolean} [connectedonly]
   */
  getBusinessCentralDetails({
    companyid,
    connectedonly,
  }: {
    companyid?: string
    connectedonly?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/BusinessCentralDetails',
      params: { companyid, connectedonly },
    })
  }

  postBusinessCentralDetails({
    businessCentralDetailsList,
  }: {
    businessCentralDetailsList: Array<BusinessCentralDetails>
  }): Promise<BusinessCentralDetails> {
    return this.request({
      method: 'post',
      data: businessCentralDetailsList,
      path: '/BusinessCentralDetails',
    })
  }

  /**
   * @summary Get one BusinessCentralDetails
   * @description Use this to return a single instance of BusinessCentralDetails. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getBusinessCentralDetailsById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<BusinessCentralDetails> {
    return this.request({
      method: 'get',
      path: `/BusinessCentralDetails/${id}`,
      params: { includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteBusinessCentralDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/BusinessCentralDetails/${id}` })
  }
}
