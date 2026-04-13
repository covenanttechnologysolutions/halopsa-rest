/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link XeroDetails} */
export type XeroDetails = schemas['XeroDetails']

/**
 * @module XeroDetailsAPI
 */

/**
 * XeroDetails module
 * @public
 */
export class XeroDetailsAPI extends BaseAPI {
  /**
   * @summary List of XeroDetails
   * @description Use this to return multiple XeroDetails. Requires authentication.
   * @param {boolean} [connectedonly]
   * @param {string} [tenantid]
   */
  getXeroDetails({
    connectedonly,
    tenantid,
  }: {
    connectedonly?: boolean
    tenantid?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/XeroDetails',
      params: { connectedonly, tenantid },
    })
  }

  postXeroDetails({
    xeroDetailsList,
  }: {
    xeroDetailsList: Array<XeroDetails>
  }): Promise<XeroDetails> {
    return this.request({ method: 'post', data: xeroDetailsList, path: '/XeroDetails' })
  }

  /**
   * @summary Get one XeroDetails
   * @description Use this to return a single instance of XeroDetails. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getXeroDetailsById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<XeroDetails> {
    return this.request({ method: 'get', path: `/XeroDetails/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteXeroDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/XeroDetails/${id}` })
  }
}
