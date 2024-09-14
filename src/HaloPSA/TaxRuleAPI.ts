/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class TaxRuleAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getTaxRule({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/TaxRule',
    })
  }

  /**
   * 
   * 
   
   */
  postTaxRule({ taxRule }: { taxRule: Array<TaxRule> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/TaxRule',
      data: taxRule,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getTaxRuleById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/TaxRule/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteTaxRuleById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/TaxRule/${id}`,
    })
  }
}
