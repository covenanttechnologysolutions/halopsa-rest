/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link Feedback} */
export type Feedback = schemas['Feedback']

/**
 * @module FeedbackAPI
 */

/**
 * Feedback module
 * @public
 */
export class FeedbackAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getFeedback(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Feedback',
    })
  }

  /**
   * 
   * 
   
   */
  postFeedback(feedback: Array<Feedback>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Feedback',
      data: feedback,
    })
  }

  /**
   * @summary Get one Feedback
   * @description Use this to return a single instance of Feedback.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} clearcomment 
   * @param {boolean} includedetails 
   * @param {string} key 
   */
  getFeedbackById(
    id: number,
    clearcomment: boolean,
    includedetails: boolean,
    key: string,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Feedback/${id}`,
      params: {
        clearcomment,
        includedetails,
        key,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteFeedbackById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Feedback/${id}`,
    })
  }
}
