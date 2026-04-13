/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ChatProfile} */
export type ChatProfile = schemas['ChatProfile']

/**
 * @module ChatProfileAPI
 */

/**
 * ChatProfile module
 * @public
 */
export class ChatProfileAPI extends BaseAPI {
  /**
   * @summary List of ChatProfile
   * @description Use this to return multiple ChatProfile. Requires authentication.
   * @param {number} [type]
   */
  getChatProfile({ type }: { type?: number }): Promise<unknown> {
    return this.request({ method: 'get', path: '/ChatProfile', params: { type } })
  }

  postChatProfile({
    chatProfileList,
  }: {
    chatProfileList: Array<ChatProfile>
  }): Promise<ChatProfile> {
    return this.request({ method: 'post', data: chatProfileList, path: '/ChatProfile' })
  }

  /**
   * @summary Get one ChatProfile
   * @description Use this to return a single instance of ChatProfile. Requires authentication.
   * @param {string} id
   * @param {boolean} [check_available]
   * @param {boolean} [includedetails]
   * @param {string} [key]
   */
  getChatProfileById({
    id,
    check_available,
    includedetails,
    key,
  }: {
    id: string
    check_available?: boolean
    includedetails?: boolean
    key?: string
  }): Promise<ChatProfile> {
    return this.request({
      method: 'get',
      path: `/ChatProfile/${id}`,
      params: { check_available, includedetails, key },
    })
  }

  /**
   * @param {string} id
   */
  deleteChatProfileById({ id }: { id: string }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/ChatProfile/${id}` })
  }
}
