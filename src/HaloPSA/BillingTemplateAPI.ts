/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ContractTemplateHeader} */
export type ContractTemplateHeader = schemas['ContractTemplateHeader']

/**
 * @module BillingTemplateAPI
 */

/**
 * BillingTemplate module
 * @public
 */
export class BillingTemplateAPI extends BaseAPI {
  getBillingTemplate(): Promise<unknown> {
    return this.request({ method: 'get', path: '/BillingTemplate' })
  }

  postBillingTemplate({
    contractTemplateHeaderList,
  }: {
    contractTemplateHeaderList: Array<ContractTemplateHeader>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: contractTemplateHeaderList,
      path: '/BillingTemplate',
    })
  }

  /**
   * @summary Get one ContractTemplateHeader
   * @description Use this to return a single instance of ContractTemplateHeader. Requires authentication.
   * @param {number} id
   * @param {number} [client_id]
   * @param {boolean} [includedetails]
   */
  getBillingTemplateById({
    id,
    client_id,
    includedetails,
  }: {
    id: number
    client_id?: number
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: `/BillingTemplate/${id}`,
      params: { client_id, includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteBillingTemplateById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/BillingTemplate/${id}` })
  }
}
