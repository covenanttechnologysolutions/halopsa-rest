/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link OnlineStatus} */
export type OnlineStatus = schemas['OnlineStatus']

/**
 * @module OnlineStatusAPI
 */

/**
 * OnlineStatus module
 * @public
 */
export class OnlineStatusAPI extends BaseAPI {
  /**
   * @param {number} [TechID]
   * @param {string} [LastOnlineDate]
   * @param {boolean} [IsOnline]
   * @param {string} [LastOnline]
   * @param {number} [agent_status]
   * @param {boolean} [status_overidden]
   * @param {boolean} [fetch_all]
   * @param {boolean} [is_logout]
   * @param {string} [command]
   * @param {string} [last_active]
   * @param {boolean} [is_idle]
   * @param {boolean} [idle_warn]
   */
  getOnlineStatus({
    TechID,
    LastOnlineDate,
    IsOnline,
    LastOnline,
    agent_status,
    status_overidden,
    fetch_all,
    is_logout,
    command,
    last_active,
    is_idle,
    idle_warn,
  }: {
    TechID?: number
    LastOnlineDate?: string
    IsOnline?: boolean
    LastOnline?: string
    agent_status?: number
    status_overidden?: boolean
    fetch_all?: boolean
    is_logout?: boolean
    command?: string
    last_active?: string
    is_idle?: boolean
    idle_warn?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/OnlineStatus',
      params: {
        TechID,
        LastOnlineDate,
        IsOnline,
        LastOnline,
        agent_status,
        status_overidden,
        fetch_all,
        is_logout,
        command,
        last_active,
        is_idle,
        idle_warn,
      },
    })
  }

  postOnlineStatus({
    onlineStatusList,
  }: {
    onlineStatusList: Array<OnlineStatus>
  }): Promise<OnlineStatus> {
    return this.request({ method: 'post', data: onlineStatusList, path: '/OnlineStatus' })
  }
}
