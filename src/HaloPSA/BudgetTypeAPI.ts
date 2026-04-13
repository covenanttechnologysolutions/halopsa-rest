/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class BudgetTypeAPI extends BaseAPI {
  /**
   * @summary List of BudgetType
   * @description Use this to return multiple BudgetType. Requires authentication.
   * @param {number} [ticket_id]
   */
  getBudgetType({ ticket_id }: { ticket_id?: number }): Promise<unknown> {
    return this.request({ method: 'get', path: '/BudgetType', params: { ticket_id } })
  }

  postBudgetType({ budgetTypeList }: { budgetTypeList: Array<BudgetType> }): Promise<BudgetType> {
    return this.request({ method: 'post', data: budgetTypeList, path: '/BudgetType' })
  }

  /**
   * @summary Get one BudgetType
   * @description Use this to return a single instance of BudgetType. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getBudgetTypeById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<BudgetType> {
    return this.request({ method: 'get', path: `/BudgetType/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteBudgetTypeById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/BudgetType/${id}` })
  }
}
