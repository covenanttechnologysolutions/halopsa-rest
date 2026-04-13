/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module MattermostChannelDetailsAPI
 */

/**
 * MattermostChannelDetails module
 * @public
 */
export class MattermostChannelDetailsAPI extends BaseAPI {
  getMattermostChannelDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/MattermostChannelDetails' })
  }
}
