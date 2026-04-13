/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link SlackChatApp} */
export type SlackChatApp = schemas['SlackChatApp']

/**
 * @module SlackChatAppAPI
 */

/**
 * SlackChatApp module
 * @public
 */
export class SlackChatAppAPI extends BaseAPI {
  getSlackChatApp(): Promise<unknown> {
    return this.request({ method: 'get', path: '/SlackChatApp' })
  }

  postSlackChatApp({
    slackChatAppList,
  }: {
    slackChatAppList: Array<SlackChatApp>
  }): Promise<SlackChatApp> {
    return this.request({ method: 'post', data: slackChatAppList, path: '/SlackChatApp' })
  }

  /**
   * @param {number} id
   */
  getSlackChatAppById({ id }: { id: number }): Promise<SlackChatApp> {
    return this.request({ method: 'get', path: `/SlackChatApp/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteSlackChatAppById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/SlackChatApp/${id}` })
  }
}
