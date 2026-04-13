/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link DynatraceDetails} */
export type DynatraceDetails = schemas['DynatraceDetails']

/**
 * @module DynatraceDetailsAPI
 */

/**
 * DynatraceDetails module
 * @public
 */
export class DynatraceDetailsAPI extends BaseAPI {
  getDynatraceDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/DynatraceDetails' })
  }

  postDynatraceDetails({
    dynatraceDetailsList,
  }: {
    dynatraceDetailsList: Array<DynatraceDetails>
  }): Promise<DynatraceDetails> {
    return this.request({ method: 'post', data: dynatraceDetailsList, path: '/DynatraceDetails' })
  }

  /**
   * @param {number} id
   */
  getDynatraceDetailsById({ id }: { id: number }): Promise<DynatraceDetails> {
    return this.request({ method: 'get', path: `/DynatraceDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteDynatraceDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/DynatraceDetails/${id}` })
  }
}
