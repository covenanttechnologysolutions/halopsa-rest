/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class DattoCommerceDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of DattoCommerceDetails
   * @description Use this to return multiple DattoCommerceDetails.<br>
				Requires authentication.
   * @param {boolean} includedetails 
   */
  getDattoCommerceDetails(includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: '/DattoCommerceDetails',
      params: {
        includedetails,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postDattoCommerceDetails(dattoCommerceDetails: Array<DattoCommerceDetails>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/DattoCommerceDetails',
      data: dattoCommerceDetails,
    })
  }

  /**
   * @summary Get one DattoCommerceDetails
   * @description Use this to return a single instance of DattoCommerceDetails.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getDattoCommerceDetailsById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/DattoCommerceDetails/${id}`,
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
  deleteDattoCommerceDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/DattoCommerceDetails/${id}`,
    })
  }
}
