/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link LiveChatIsTyping} */
export type LiveChatIsTyping = schemas['LiveChatIsTyping']
/** {@link LiveChatMsg} */
export type LiveChatMsg = schemas['LiveChatMsg']

/**
 * @module ChatMessageAPI
 */

/**
 * ChatMessage module
 * @public
 */
export class ChatMessageAPI extends BaseAPI {
  /**
   * @summary List of LiveChatMsg
   * @description Use this to return multiple LiveChatMsg. Requires authentication.
   * @param {number} [chat_id]
   * @param {number} [last_id]
   * @param {number} [max_id]
   */
  getChatMessage({
    chat_id,
    last_id,
    max_id,
  }: {
    chat_id?: number
    last_id?: number
    max_id?: number
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/ChatMessage',
      params: { chat_id, last_id, max_id },
    })
  }

  postChatMessage({ liveChatMsgList }: { liveChatMsgList: Array<LiveChatMsg> }): Promise<unknown> {
    return this.request({ method: 'post', data: liveChatMsgList, path: '/ChatMessage' })
  }

  postChatMessageIsTyping({
    liveChatIsTyping,
  }: {
    liveChatIsTyping: LiveChatIsTyping
  }): Promise<unknown> {
    return this.request({ method: 'post', data: liveChatIsTyping, path: '/ChatMessage/IsTyping' })
  }
}
