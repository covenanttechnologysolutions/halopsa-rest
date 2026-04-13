/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Tax} */
export type Tax = schemas['Tax']

/**
 * @module TaxAPI
 */

/**
 * Tax module
 * @public
 */
export class TaxAPI extends BaseAPI {
  /**
   * @summary List of Tax
   * @description Use this to return multiple Tax. Requires authentication.
   * @param {number} [kashflowtenantid]
   * @param {string} [qbocompanyid]
   * @param {number} [related_to]
   * @param {string} [xerotenantid]
   */
  getTax({
    kashflowtenantid,
    qbocompanyid,
    related_to,
    xerotenantid,
  }: {
    kashflowtenantid?: number
    qbocompanyid?: string
    related_to?: number
    xerotenantid?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/Tax',
      params: { kashflowtenantid, qbocompanyid, related_to, xerotenantid },
    })
  }

  postTax({ taxList }: { taxList: Array<Tax> }): Promise<Tax> {
    return this.request({ method: 'post', data: taxList, path: '/Tax' })
  }

  /**
   * @summary Get one Tax
   * @description Use this to return a single instance of Tax. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   * @param {boolean} [includeqbotaxrates]
   */
  getTaxById({
    id,
    includedetails,
    includeqbotaxrates,
  }: {
    id: number
    includedetails?: boolean
    includeqbotaxrates?: boolean
  }): Promise<Tax> {
    return this.request({
      method: 'get',
      path: `/Tax/${id}`,
      params: { includedetails, includeqbotaxrates },
    })
  }

  /**
   * @param {number} id
   */
  deleteTaxById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Tax/${id}` })
  }
}
