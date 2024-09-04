/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link PartsLookupConfirmation} */
export type PartsLookupConfirmation = schemas['PartsLookupConfirmation']

/**
 * @module DatabaseLookupConfirmationAPI
 */

/**
 * DatabaseLookupConfirmation module
 * @public
 */
export class DatabaseLookupConfirmationAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   *
   *
   * @param {number} id
   */
  getDatabaseLookupConfirmationById(id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: `/DatabaseLookupConfirmation/${id}`,
    })
  }

  /**
   * 
   * 
   
   */
  postDatabaseLookupConfirmation(
    partsLookupConfirmation: Array<PartsLookupConfirmation>,
  ): Promise<any> {
    return this.request({
      method: 'post',
      path: '/DatabaseLookupConfirmation',
      data: partsLookupConfirmation,
    })
  }
}
