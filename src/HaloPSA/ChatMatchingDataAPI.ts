/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ChatMatchingData} */
export type ChatMatchingData = schemas['ChatMatchingData']

/**
 * @module ChatMatchingDataAPI
 */

/**
 * ChatMatchingData module
 * @public
 */
export class ChatMatchingDataAPI extends BaseAPI {
  postChatMatchingData({
    chatMatchingDataList,
  }: {
    chatMatchingDataList: Array<ChatMatchingData>
  }): Promise<ChatMatchingData> {
    return this.request({ method: 'post', data: chatMatchingDataList, path: '/ChatMatchingData' })
  }
}
