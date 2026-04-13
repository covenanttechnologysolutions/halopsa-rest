/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Qualification} */
export type Qualification = schemas['Qualification']

/**
 * @module QualificationAPI
 */

/**
 * Qualification module
 * @public
 */
export class QualificationAPI extends BaseAPI {
  /**
   * @summary List of Qualification
   * @description Use this to return multiple Qualification. Requires authentication.
   * @param {boolean} [includecriteriainfo]
   */
  getQualification({ includecriteriainfo }: { includecriteriainfo?: boolean }): Promise<unknown> {
    return this.request({ method: 'get', path: '/Qualification', params: { includecriteriainfo } })
  }

  postQualification({
    qualificationList,
  }: {
    qualificationList: Array<Qualification>
  }): Promise<Qualification> {
    return this.request({ method: 'post', data: qualificationList, path: '/Qualification' })
  }

  /**
   * @summary Get one Qualification
   * @description Use this to return a single instance of Qualification. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getQualificationById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<Qualification> {
    return this.request({ method: 'get', path: `/Qualification/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteQualificationById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Qualification/${id}` })
  }
}
