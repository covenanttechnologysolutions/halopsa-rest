/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module MicrosoftTeamsAPI
 */

/**
 * MicrosoftTeams module
 * @public
 */
export class MicrosoftTeamsAPI extends BaseAPI {
  getMicrosoftTeamsGet(): Promise<unknown> {
    return this.request({ method: 'get', path: '/MicrosoftTeams/Get' })
  }
}
