/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class AISuggestionAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getAISuggestion({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/AISuggestion',
    })
  }

  /**
   * 
   * 
   
   */
  postAISuggestion({ aiSuggestion }: { aiSuggestion: Array<AiSuggestion> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/AISuggestion',
      data: aiSuggestion,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getAISuggestionById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/AISuggestion/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteAISuggestionById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/AISuggestion/${id}`,
    })
  }
}
