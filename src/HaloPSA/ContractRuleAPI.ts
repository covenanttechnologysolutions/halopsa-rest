/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ContractRule} */
export type ContractRule = schemas['ContractRule']

/**
 * @module ContractRuleAPI
 */

/**
 * ContractRule module
 * @public
 */
export class ContractRuleAPI extends BaseAPI {
  getContractRule(): Promise<unknown> {
    return this.request({ method: 'get', path: '/ContractRule' })
  }

  postContractRule({
    contractRuleList,
  }: {
    contractRuleList: Array<ContractRule>
  }): Promise<ContractRule> {
    return this.request({ method: 'post', data: contractRuleList, path: '/ContractRule' })
  }

  /**
   * @param {number} id
   */
  getContractRuleById({ id }: { id: number }): Promise<ContractRule> {
    return this.request({ method: 'get', path: `/ContractRule/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteContractRuleById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/ContractRule/${id}` })
  }
}
