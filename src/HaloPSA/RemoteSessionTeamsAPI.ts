/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module RemoteSessionTeamsAPI
 */

/**
 * RemoteSessionTeams module
 * @public
 */
export class RemoteSessionTeamsAPI extends BaseAPI {
  /**
   * @summary List of RemoteSessionTeams
   * @description Use this to return multiple RemoteSessionTeams. Requires authentication.
   * @param {boolean} [includeenabled]
   * @param {string} [msid]
   */
  getRemoteSessionTeams({
    includeenabled,
    msid,
  }: {
    includeenabled?: boolean
    msid?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/RemoteSessionTeams',
      params: { includeenabled, msid },
    })
  }
}
