/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class FeedbackAPI extends BaseAPI {
  getFeedback(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Feedback' })
  }

  postFeedback({ feedbackList }: { feedbackList: Array<Feedback> }): Promise<Feedback> {
    return this.request({ method: 'post', data: feedbackList, path: '/Feedback' })
  }

  /**
   * @summary Get one Feedback
   * @description Use this to return a single instance of Feedback. Requires authentication.
   * @param {number} id
   * @param {boolean} [clearcomment]
   * @param {boolean} [includedetails]
   * @param {string} [key]
   */
  getFeedbackById({
    id,
    clearcomment,
    includedetails,
    key,
  }: {
    id: number
    clearcomment?: boolean
    includedetails?: boolean
    key?: string
  }): Promise<Feedback> {
    return this.request({
      method: 'get',
      path: `/Feedback/${id}`,
      params: { clearcomment, includedetails, key },
    })
  }

  /**
   * @param {number} id
   */
  deleteFeedbackById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Feedback/${id}` })
  }

  getFeedbackFeedbackMessage(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Feedback/FeedbackMessage' })
  }
}
