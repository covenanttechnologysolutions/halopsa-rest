/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link MicrosoftTeamsMapping} */
export type MicrosoftTeamsMapping = schemas['MicrosoftTeamsMapping']

/**
 * @module MicrosoftTeamsMappingAPI
 */

/**
 * MicrosoftTeamsMapping module
 * @public
 */
export class MicrosoftTeamsMappingAPI extends BaseAPI {
  getMicrosoftTeamsMapping(): Promise<unknown> {
    return this.request({ method: 'get', path: '/MicrosoftTeamsMapping' })
  }

  postMicrosoftTeamsMapping({
    microsoftTeamsMappingList,
  }: {
    microsoftTeamsMappingList: Array<MicrosoftTeamsMapping>
  }): Promise<MicrosoftTeamsMapping> {
    return this.request({
      method: 'post',
      data: microsoftTeamsMappingList,
      path: '/MicrosoftTeamsMapping',
    })
  }

  /**
   * @param {number} id
   */
  getMicrosoftTeamsMappingById({ id }: { id: number }): Promise<MicrosoftTeamsMapping> {
    return this.request({ method: 'get', path: `/MicrosoftTeamsMapping/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteMicrosoftTeamsMappingById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/MicrosoftTeamsMapping/${id}` })
  }
}
