/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class TaxAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of Tax
   * @description Use this to return multiple Tax.<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Tax',
      params: {
        kashflowtenantid,
        qbocompanyid,
        related_to,
        xerotenantid,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postTax({ tax }: { tax: Array<Tax> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Tax',
      data: tax,
    })
  }

  /**
   * @summary Get one Tax
   * @description Use this to return a single instance of Tax.<br>
				Requires authentication.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Tax/${id}`,
      params: {
        includedetails,
        includeqbotaxrates,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteTaxById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Tax/${id}`,
    })
  }
}
