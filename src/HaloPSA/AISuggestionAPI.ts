/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link AiSuggestion} */
export type AiSuggestion = schemas['AiSuggestion']

/**
 * @module AISuggestionAPI
 */

/**
 * AISuggestion module
 * @public
 */
export class AISuggestionAPI extends BaseAPI {
  getAISuggestion(): Promise<unknown> {
    return this.request({ method: 'get', path: '/AISuggestion' })
  }

  postAISuggestion({
    aiSuggestionList,
  }: {
    aiSuggestionList: Array<AiSuggestion>
  }): Promise<unknown> {
    return this.request({ method: 'post', data: aiSuggestionList, path: '/AISuggestion' })
  }

  /**
   * @param {number} id
   */
  getAISuggestionById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'get', path: `/AISuggestion/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteAISuggestionById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/AISuggestion/${id}` })
  }
}
