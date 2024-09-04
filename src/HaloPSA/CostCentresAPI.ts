/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class CostCentresAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getCostCentres(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/CostCentres',
    })
  }

  /**
   * 
   * 
   
   */
  postCostCentres(costcentres: Array<Costcentres>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/CostCentres',
      data: costcentres,
    })
  }

  /**
   * @summary Get one Costcentres
   * @description Use this to return a single instance of Costcentres.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getCostCentresById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/CostCentres/${id}`,
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
  deleteCostCentresById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/CostCentres/${id}`,
    })
  }
}
