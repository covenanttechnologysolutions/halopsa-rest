/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link Organisation} */
export type Organisation = schemas['Organisation']

/**
 * @module OrganisationAPI
 */

/**
 * Organisation module
 * @public
 */
export class OrganisationAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getOrganisation({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Organisation',
    })
  }

  /**
   * 
   * 
   
   */
  postOrganisation({ organisation }: { organisation: Array<Organisation> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Organisation',
      data: organisation,
    })
  }

  /**
   * @summary Get one Organisation
   * @description Use this to return a single instance of Organisation.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getOrganisationById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Organisation/${id}`,
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
  deleteOrganisationById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Organisation/${id}`,
    })
  }
}
