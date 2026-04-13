/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link DattoCommerceDetails} */
export type DattoCommerceDetails = schemas['DattoCommerceDetails']

/**
 * @module DattoCommerceDetailsAPI
 */

/**
 * DattoCommerceDetails module
 * @public
 */
export class DattoCommerceDetailsAPI extends BaseAPI {
  /**
   * @summary List of DattoCommerceDetails
   * @description Use this to return multiple DattoCommerceDetails. Requires authentication.
   * @param {boolean} [includedetails]
   */
  getDattoCommerceDetails({ includedetails }: { includedetails?: boolean }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/DattoCommerceDetails',
      params: { includedetails },
    })
  }

  postDattoCommerceDetails({
    dattoCommerceDetailsList,
  }: {
    dattoCommerceDetailsList: Array<DattoCommerceDetails>
  }): Promise<DattoCommerceDetails> {
    return this.request({
      method: 'post',
      data: dattoCommerceDetailsList,
      path: '/DattoCommerceDetails',
    })
  }

  /**
   * @summary Get one DattoCommerceDetails
   * @description Use this to return a single instance of DattoCommerceDetails. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getDattoCommerceDetailsById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<DattoCommerceDetails> {
    return this.request({
      method: 'get',
      path: `/DattoCommerceDetails/${id}`,
      params: { includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteDattoCommerceDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/DattoCommerceDetails/${id}` })
  }
}
