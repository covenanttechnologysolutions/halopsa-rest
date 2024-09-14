/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link Journey} */
export type Journey = schemas['Journey']

/**
 * @module JourneyAPI
 */

/**
 * Journey module
 * @public
 */
export class JourneyAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getJourney({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Journey',
    })
  }

  /**
   * 
   * 
   
   */
  postJourney({ journey }: { journey: Array<Journey> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Journey',
      data: journey,
    })
  }

  /**
   * @summary Get one Journey
   * @description Use this to return a single instance of Journey.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getJourneyById({ id, includedetails }: { id: number; includedetails?: boolean }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Journey/${id}`,
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
  deleteJourneyById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Journey/${id}`,
    })
  }
}
