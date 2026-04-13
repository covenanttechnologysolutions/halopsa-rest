/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link EracentDetails} */
export type EracentDetails = schemas['EracentDetails']

/**
 * @module EracentDetailsAPI
 */

/**
 * EracentDetails module
 * @public
 */
export class EracentDetailsAPI extends BaseAPI {
  getEracentDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/EracentDetails' })
  }

  postEracentDetails({
    eracentDetailsList,
  }: {
    eracentDetailsList: Array<EracentDetails>
  }): Promise<EracentDetails> {
    return this.request({ method: 'post', data: eracentDetailsList, path: '/EracentDetails' })
  }

  /**
   * @param {number} id
   */
  getEracentDetailsById({ id }: { id: number }): Promise<EracentDetails> {
    return this.request({ method: 'get', path: `/EracentDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteEracentDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/EracentDetails/${id}` })
  }
}
