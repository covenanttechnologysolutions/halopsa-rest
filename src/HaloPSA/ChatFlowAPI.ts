/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ChatFlowProcess} */
export type ChatFlowProcess = schemas['ChatFlowProcess']

/**
 * @module ChatFlowAPI
 */

/**
 * ChatFlow module
 * @public
 */
export class ChatFlowAPI extends BaseAPI {
  postChatFlow({
    chatFlowProcessList,
  }: {
    chatFlowProcessList: Array<ChatFlowProcess>
  }): Promise<unknown> {
    return this.request({ method: 'post', data: chatFlowProcessList, path: '/ChatFlow' })
  }
}
