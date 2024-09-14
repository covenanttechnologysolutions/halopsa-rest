/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link SageBusinessCloudDetails} */
export type SageBusinessCloudDetails = schemas['SageBusinessCloudDetails']

/**
 * @module SageBusinessCloudDetailsAPI
 */

/**
 * SageBusinessCloudDetails module
 * @public
 */
export class SageBusinessCloudDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of SageBusinessCloudDetails
   * @description Use this to return multiple SageBusinessCloudDetails.<br>
				Requires authentication.
   * @param {boolean} [connectedonly] 
   * @param {string} [tenantid] 
   */
  getSageBusinessCloudDetails({
    connectedonly,
    tenantid,
  }: {
    connectedonly?: boolean
    tenantid?: string
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/SageBusinessCloudDetails',
      params: {
        connectedonly,
        tenantid,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postSageBusinessCloudDetails({
    sageBusinessCloudDetails,
  }: {
    sageBusinessCloudDetails: Array<SageBusinessCloudDetails>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/SageBusinessCloudDetails',
      data: sageBusinessCloudDetails,
    })
  }

  /**
   * @summary Get one SageBusinessCloudDetails
   * @description Use this to return a single instance of SageBusinessCloudDetails.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getSageBusinessCloudDetailsById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/SageBusinessCloudDetails/${id}`,
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
  deleteSageBusinessCloudDetailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/SageBusinessCloudDetails/${id}`,
    })
  }
}
