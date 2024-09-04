/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link PartsLookup} */
export type PartsLookup = schemas['PartsLookup']

/**
 * @module DatabaseLookupAPI
 */

/**
 * DatabaseLookup module
 * @public
 */
export class DatabaseLookupAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of PartsLookup
   * @description Use this to return multiple PartsLookup.<br>
				Requires authentication.
   * @param {number} type 
   */
  getDatabaseLookup(type: number): Promise<any> {
    return this.request({
      method: 'get',
      path: '/DatabaseLookup',
      params: {
        type,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postDatabaseLookup(partsLookup: Array<PartsLookup>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/DatabaseLookup',
      data: partsLookup,
    })
  }

  /**
   * @summary Get one PartsLookup
   * @description Use this to return a single instance of PartsLookup.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   * @param {obj} lookup_value 
   */
  getDatabaseLookupById(id: number, includedetails: boolean, lookup_value: obj): Promise<any> {
    return this.request({
      method: 'get',
      path: `/DatabaseLookup/${id}`,
      params: {
        includedetails,
        lookup_value,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteDatabaseLookupById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/DatabaseLookup/${id}`,
    })
  }

  /**
   * 
   * 
   
   */
  postDatabaseLookupRun(partsLookup: Array<PartsLookup>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/DatabaseLookup/run',
      data: partsLookup,
    })
  }
}
