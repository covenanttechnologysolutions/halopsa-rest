/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link TranscriptionStore} */
export type TranscriptionStore = schemas['TranscriptionStore']

/**
 * @module TranscriptionStoreAPI
 */

/**
 * TranscriptionStore module
 * @public
 */
export class TranscriptionStoreAPI extends BaseAPI {
  getTranscriptionStore(): Promise<unknown> {
    return this.request({ method: 'get', path: '/TranscriptionStore' })
  }

  postTranscriptionStore({
    transcriptionStoreList,
  }: {
    transcriptionStoreList: Array<TranscriptionStore>
  }): Promise<TranscriptionStore> {
    return this.request({
      method: 'post',
      data: transcriptionStoreList,
      path: '/TranscriptionStore',
    })
  }

  /**
   * @param {number} id
   */
  getTranscriptionStoreById({ id }: { id: number }): Promise<TranscriptionStore> {
    return this.request({ method: 'get', path: `/TranscriptionStore/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteTranscriptionStoreById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/TranscriptionStore/${id}` })
  }
}
