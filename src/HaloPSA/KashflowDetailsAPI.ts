/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link KashflowDetails} */
export type KashflowDetails = schemas['KashflowDetails']

/**
 * @module KashflowDetailsAPI
 */

/**
 * KashflowDetails module
 * @public
 */
export class KashflowDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of KashflowDetails
   * @description Use this to return multiple KashflowDetails.<br>
				Requires authentication.
   * @param {boolean} [includedisabled] 
   * @param {boolean} [includeenabled] 
   * @param {number} [tenantid] 
   */
  getKashflowDetails({
    includedisabled,
    includeenabled,
    tenantid,
  }: {
    includedisabled?: boolean
    includeenabled?: boolean
    tenantid?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/KashflowDetails',
      params: {
        includedisabled,
        includeenabled,
        tenantid,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postKashflowDetails({
    kashflowDetails,
  }: {
    kashflowDetails: Array<KashflowDetails>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/KashflowDetails',
      data: kashflowDetails,
    })
  }

  /**
   * @summary Get one KashflowDetails
   * @description Use this to return a single instance of KashflowDetails.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getKashflowDetailsById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/KashflowDetails/${id}`,
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
  deleteKashflowDetailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/KashflowDetails/${id}`,
    })
  }
}
