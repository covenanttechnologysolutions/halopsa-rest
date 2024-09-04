/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link AzureDevOpsDetails} */
export type AzureDevOpsDetails = schemas['AzureDevOpsDetails']

/**
 * @module AzureDevOpsDetailsAPI
 */

/**
 * AzureDevOpsDetails module
 * @public
 */
export class AzureDevOpsDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getAzureDevOpsDetails(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/AzureDevOpsDetails',
    })
  }

  /**
   * 
   * 
   
   */
  postAzureDevOpsDetails(azureDevOpsDetails: Array<AzureDevOpsDetails>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/AzureDevOpsDetails',
      data: azureDevOpsDetails,
    })
  }

  /**
   * @summary Get one AzureDevOpsDetails
   * @description Use this to return a single instance of AzureDevOpsDetails.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getAzureDevOpsDetailsById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/AzureDevOpsDetails/${id}`,
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
  deleteAzureDevOpsDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/AzureDevOpsDetails/${id}`,
    })
  }
}
