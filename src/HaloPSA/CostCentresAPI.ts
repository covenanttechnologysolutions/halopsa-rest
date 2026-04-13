/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Costcentres} */
export type Costcentres = schemas['Costcentres']

/**
 * @module CostCentresAPI
 */

/**
 * CostCentres module
 * @public
 */
export class CostCentresAPI extends BaseAPI {
  getCostCentres(): Promise<unknown> {
    return this.request({ method: 'get', path: '/CostCentres' })
  }

  postCostCentres({ costcentresList }: { costcentresList: Array<Costcentres> }): Promise<unknown> {
    return this.request({ method: 'post', data: costcentresList, path: '/CostCentres' })
  }

  /**
   * @summary Get one Costcentres
   * @description Use this to return a single instance of Costcentres. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getCostCentresById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({ method: 'get', path: `/CostCentres/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteCostCentresById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/CostCentres/${id}` })
  }
}
