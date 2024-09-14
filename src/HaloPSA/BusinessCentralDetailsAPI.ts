/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class BusinessCentralDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of BusinessCentralDetails
   * @description Use this to return multiple BusinessCentralDetails.<br>
				Requires authentication.
   * @param {string} [companyid] 
   * @param {boolean} [connectedonly] 
   */
  getBusinessCentralDetails({
    companyid,
    connectedonly,
  }: {
    companyid?: string
    connectedonly?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/BusinessCentralDetails',
      params: {
        companyid,
        connectedonly,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postBusinessCentralDetails({
    businessCentralDetails,
  }: {
    businessCentralDetails: Array<BusinessCentralDetails>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/BusinessCentralDetails',
      data: businessCentralDetails,
    })
  }

  /**
   * @summary Get one BusinessCentralDetails
   * @description Use this to return a single instance of BusinessCentralDetails.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getBusinessCentralDetailsById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/BusinessCentralDetails/${id}`,
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
  deleteBusinessCentralDetailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/BusinessCentralDetails/${id}`,
    })
  }
}
