/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link TaxRule} */
export type TaxRule = schemas['TaxRule']

/**
 * @module TaxRuleAPI
 */

/**
 * TaxRule module
 * @public
 */
export class TaxRuleAPI extends BaseAPI {
  getTaxRule(): Promise<unknown> {
    return this.request({ method: 'get', path: '/TaxRule' })
  }

  postTaxRule({ taxRuleList }: { taxRuleList: Array<TaxRule> }): Promise<TaxRule> {
    return this.request({ method: 'post', data: taxRuleList, path: '/TaxRule' })
  }

  /**
   * @param {number} id
   */
  getTaxRuleById({ id }: { id: number }): Promise<TaxRule> {
    return this.request({ method: 'get', path: `/TaxRule/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteTaxRuleById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/TaxRule/${id}` })
  }
}
