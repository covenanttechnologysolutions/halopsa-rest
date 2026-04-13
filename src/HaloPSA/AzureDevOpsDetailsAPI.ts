/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class AzureDevOpsDetailsAPI extends BaseAPI {
  getAzureDevOpsDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/AzureDevOpsDetails' })
  }

  postAzureDevOpsDetails({
    azureDevOpsDetailsList,
  }: {
    azureDevOpsDetailsList: Array<AzureDevOpsDetails>
  }): Promise<AzureDevOpsDetails> {
    return this.request({
      method: 'post',
      data: azureDevOpsDetailsList,
      path: '/AzureDevOpsDetails',
    })
  }

  /**
   * @summary Get one AzureDevOpsDetails
   * @description Use this to return a single instance of AzureDevOpsDetails. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getAzureDevOpsDetailsById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<AzureDevOpsDetails> {
    return this.request({
      method: 'get',
      path: `/AzureDevOpsDetails/${id}`,
      params: { includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteAzureDevOpsDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/AzureDevOpsDetails/${id}` })
  }
}
