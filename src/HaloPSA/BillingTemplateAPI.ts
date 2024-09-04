/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class BillingTemplateAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getBillingTemplate(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/BillingTemplate',
    })
  }

  /**
   * 
   * 
   
   */
  postBillingTemplate(contractTemplateHeader: Array<ContractTemplateHeader>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/BillingTemplate',
      data: contractTemplateHeader,
    })
  }

  /**
   * @summary Get one ContractTemplateHeader
   * @description Use this to return a single instance of ContractTemplateHeader.<br>
				Requires authentication.
   * @param {number} id 
   * @param {number} client_id 
   * @param {boolean} includedetails 
   */
  getBillingTemplateById(id: number, client_id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/BillingTemplate/${id}`,
      params: {
        client_id,
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteBillingTemplateById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/BillingTemplate/${id}`,
    })
  }
}
