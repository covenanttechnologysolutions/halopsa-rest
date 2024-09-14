/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link FAQListHead} */
export type FAQListHead = schemas['FAQListHead']

/**
 * @module FAQListsAPI
 */

/**
 * FAQLists module
 * @public
 */
export class FAQListsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of FAQListHead
   * @description Use this to return multiple FAQListHead.<br>
				Requires authentication.
   * @param {boolean} [allgroups] 
   * @param {boolean} [endoftreeonly] 
   * @param {number} [level] 
   * @param {number} [organisation_id] 
   * @param {number} [parent_id] 
   * @param {boolean} [showcounts] 
   * @param {number} [type] 
   */
  getFAQLists({
    allgroups,
    endoftreeonly,
    level,
    organisation_id,
    parent_id,
    showcounts,
    type,
  }: {
    allgroups?: boolean
    endoftreeonly?: boolean
    level?: number
    organisation_id?: number
    parent_id?: number
    showcounts?: boolean
    type?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/FAQLists',
      params: {
        allgroups,
        endoftreeonly,
        level,
        organisation_id,
        parent_id,
        showcounts,
        type,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postFAQLists({ fAQListHead }: { fAQListHead: Array<FAQListHead> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/FAQLists',
      data: fAQListHead,
    })
  }

  /**
   * @summary Get one FAQListHead
   * @description Use this to return a single instance of FAQListHead.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   * @param {number} [organisation_id] 
   */
  getFAQListsById({
    id,
    includedetails,
    organisation_id,
  }: {
    id: number
    includedetails?: boolean
    organisation_id?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/FAQLists/${id}`,
      params: {
        includedetails,
        organisation_id,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteFAQListsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/FAQLists/${id}`,
    })
  }
}
