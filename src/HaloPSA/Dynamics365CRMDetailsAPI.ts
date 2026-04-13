/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Dynamics365CRMDetails} */
export type Dynamics365CRMDetails = schemas['Dynamics365CRMDetails']

/**
 * @module Dynamics365CRMDetailsAPI
 */

/**
 * Dynamics365CRMDetails module
 * @public
 */
export class Dynamics365CRMDetailsAPI extends BaseAPI {
  getDynamics365CRMDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Dynamics365CRMDetails' })
  }

  postDynamics365CRMDetails({
    dynamics365CRMDetailsList,
  }: {
    dynamics365CRMDetailsList: Array<Dynamics365CRMDetails>
  }): Promise<Dynamics365CRMDetails> {
    return this.request({
      method: 'post',
      data: dynamics365CRMDetailsList,
      path: '/Dynamics365CRMDetails',
    })
  }

  /**
   * @param {number} id
   */
  getDynamics365CRMDetailsById({ id }: { id: number }): Promise<Dynamics365CRMDetails> {
    return this.request({ method: 'get', path: `/Dynamics365CRMDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteDynamics365CRMDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Dynamics365CRMDetails/${id}` })
  }
}
