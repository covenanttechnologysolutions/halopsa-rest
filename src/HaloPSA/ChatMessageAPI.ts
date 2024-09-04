/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class ChatMessageAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of LiveChatMsg
   * @description Use this to return multiple LiveChatMsg.<br>
				Requires authentication.
   * @param {number} chat_id 
   * @param {number} last_id 
   * @param {number} max_id 
   */
  getChatMessage(chat_id: number, last_id: number, max_id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ChatMessage',
      params: {
        chat_id,
        last_id,
        max_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postChatMessage(liveChatMsg: Array<LiveChatMsg>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ChatMessage',
      data: liveChatMsg,
    })
  }

  /**
   * 
   * 
   
   */
  postChatMessageIsTyping(liveChatIsTyping: LiveChatIsTyping): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ChatMessage/IsTyping',
      data: liveChatIsTyping,
    })
  }
}
