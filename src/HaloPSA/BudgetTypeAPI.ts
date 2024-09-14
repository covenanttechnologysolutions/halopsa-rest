/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link BudgetType} */
export type BudgetType = schemas['BudgetType']

/**
 * @module BudgetTypeAPI
 */

/**
 * BudgetType module
 * @public
 */
export class BudgetTypeAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of BudgetType
   * @description Use this to return multiple BudgetType.<br>
				Requires authentication.
   * @param {number} [ticket_id] 
   */
  getBudgetType({ ticket_id }: { ticket_id?: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/BudgetType',
      params: {
        ticket_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postBudgetType({ budgetType }: { budgetType: Array<BudgetType> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/BudgetType',
      data: budgetType,
    })
  }

  /**
   * @summary Get one BudgetType
   * @description Use this to return a single instance of BudgetType.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getBudgetTypeById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/BudgetType/${id}`,
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
  deleteBudgetTypeById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/BudgetType/${id}`,
    })
  }
}
