/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link QuickBooksDetails} */
export type QuickBooksDetails = schemas['QuickBooksDetails']

/**
 * @module QuickBooksDetailsAPI
 */

/**
 * QuickBooksDetails module
 * @public
 */
export class QuickBooksDetailsAPI extends BaseAPI {
  /**
   * @summary List of QuickBooksDetails
   * @description Use this to return multiple QuickBooksDetails. Requires authentication.
   * @param {string} [companyid]
   * @param {boolean} [connectedonly]
   */
  getQuickBooksDetails({
    companyid,
    connectedonly,
  }: {
    companyid?: string
    connectedonly?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/QuickBooksDetails',
      params: { companyid, connectedonly },
    })
  }

  postQuickBooksDetails({
    quickBooksDetailsList,
  }: {
    quickBooksDetailsList: Array<QuickBooksDetails>
  }): Promise<QuickBooksDetails> {
    return this.request({ method: 'post', data: quickBooksDetailsList, path: '/QuickBooksDetails' })
  }

  /**
   * @summary Get one QuickBooksDetails
   * @description Use this to return a single instance of QuickBooksDetails. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getQuickBooksDetailsById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<QuickBooksDetails> {
    return this.request({
      method: 'get',
      path: `/QuickBooksDetails/${id}`,
      params: { includedetails },
    })
  }

  /**
   * @param {number} id
   */
  deleteQuickBooksDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/QuickBooksDetails/${id}` })
  }
}
