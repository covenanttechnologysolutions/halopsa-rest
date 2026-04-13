/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link TeamsChatMessage_List} */
export type TeamsChatMessage_List = schemas['TeamsChatMessage_List']

/**
 * @module ExternalChatMessageAPI
 */

/**
 * ExternalChatMessage module
 * @public
 */
export class ExternalChatMessageAPI extends BaseAPI {
  getExternalChatMessage(): Promise<unknown> {
    return this.request({ method: 'get', path: '/ExternalChatMessage' })
  }

  postExternalChatMessage({
    teamsChatMessage_ListList,
  }: {
    teamsChatMessage_ListList: Array<TeamsChatMessage_List>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: teamsChatMessage_ListList,
      path: '/ExternalChatMessage',
    })
  }

  /**
   * @param {number} id
   */
  getExternalChatMessageById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'get', path: `/ExternalChatMessage/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteExternalChatMessageById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/ExternalChatMessage/${id}` })
  }
}
