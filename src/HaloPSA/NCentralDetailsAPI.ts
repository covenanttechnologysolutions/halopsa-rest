/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link NCentralDetails} */
export type NCentralDetails = schemas['NCentralDetails']

/**
 * @module NCentralDetailsAPI
 */

/**
 * NCentralDetails module
 * @public
 */
export class NCentralDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of NCentralDetails
   * @description Use this to return multiple NCentralDetails.<br>
				Requires authentication.
   * @param {boolean} [includedetails] 
   */
  getNCentralDetails({ includedetails }: { includedetails?: boolean }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/NCentralDetails',
      params: {
        includedetails,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postNCentralDetails({
    nCentralDetails,
  }: {
    nCentralDetails: Array<NCentralDetails>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/NCentralDetails',
      data: nCentralDetails,
    })
  }

  /**
   * @summary Get one NCentralDetails
   * @description Use this to return a single instance of NCentralDetails.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getNCentralDetailsById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/NCentralDetails/${id}`,
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
  deleteNCentralDetailsById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/NCentralDetails/${id}`,
    })
  }
}
