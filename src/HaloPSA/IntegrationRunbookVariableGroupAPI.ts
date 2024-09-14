/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module IntegrationRunbookVariableGroupAPI
 */

/**
 * IntegrationRunbookVariableGroup module
 * @public
 */
export class IntegrationRunbookVariableGroupAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of IntegrationRunbookVariableGroup
   * @description Use this to return multiple IntegrationRunbookVariableGroup.<br>
				Requires authentication.
   * @param {boolean} [exclude_method_id] 
   * @param {string} [one_runbook_id] 
   */
  getIntegrationRunbookVariableGroup({
    exclude_method_id,
    one_runbook_id,
  }: {
    exclude_method_id?: boolean
    one_runbook_id?: string
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/IntegrationRunbookVariableGroup',
      params: {
        exclude_method_id,
        one_runbook_id,
      },
    })
  }

  /**
   * @summary Get one IntegrationRunbookVariableGroup
   * @description Use this to return a single instance of IntegrationRunbookVariableGroup.<br>
				Requires authentication.
   * @param {string} id 
   * @param {number} [exclude_method_id] 
   * @param {string} [method_ids] 
   */
  getIntegrationRunbookVariableGroupById({
    id,
    exclude_method_id,
    method_ids,
  }: {
    id: string
    exclude_method_id?: number
    method_ids?: string
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/IntegrationRunbookVariableGroup/${id}`,
      params: {
        exclude_method_id,
        method_ids,
      },
    })
  }
}
