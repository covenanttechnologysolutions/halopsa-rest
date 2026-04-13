/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module TeamImageAPI
 */

/**
 * TeamImage module
 * @public
 */
export class TeamImageAPI extends BaseAPI {
  /**
   * @param {string} id
   */
  getTeamImageById({ id }: { id: string }): Promise<unknown> {
    return this.request({ method: 'get', path: `/TeamImage/${id}` })
  }
}
