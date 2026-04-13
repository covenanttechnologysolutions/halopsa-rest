/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link SlackDetails} */
export type SlackDetails = schemas['SlackDetails']

/**
 * @module SlackDetailsAPI
 */

/**
 * SlackDetails module
 * @public
 */
export class SlackDetailsAPI extends BaseAPI {
  /**
   * @summary List of SlackDetails
   * @description Use this to return multiple SlackDetails. Requires authentication.
   * @param {string} [agent_id]
   * @param {string} [channel_name]
   * @param {string} [includedisabled]
   * @param {string} [includeenabled]
   * @param {string} [team_name]
   */
  getSlackDetails({
    agent_id,
    channel_name,
    includedisabled,
    includeenabled,
    team_name,
  }: {
    agent_id?: string
    channel_name?: string
    includedisabled?: string
    includeenabled?: string
    team_name?: string
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/SlackDetails',
      params: { agent_id, channel_name, includedisabled, includeenabled, team_name },
    })
  }

  postSlackDetails({
    slackDetailsList,
  }: {
    slackDetailsList: Array<SlackDetails>
  }): Promise<SlackDetails> {
    return this.request({ method: 'post', data: slackDetailsList, path: '/SlackDetails' })
  }

  /**
   * @summary Get one SlackDetails
   * @description Use this to return a single instance of SlackDetails. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getSlackDetailsById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<SlackDetails> {
    return this.request({ method: 'get', path: `/SlackDetails/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteSlackDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/SlackDetails/${id}` })
  }

  postSlackDetailsUninstall(): Promise<unknown> {
    return this.request({ method: 'post', path: '/SlackDetails/Uninstall' })
  }
}
