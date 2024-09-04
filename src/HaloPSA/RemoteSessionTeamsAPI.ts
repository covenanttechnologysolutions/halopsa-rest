/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module RemoteSessionTeamsAPI
 */

/**
 * RemoteSessionTeams module
 * @public
 */
export class RemoteSessionTeamsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of RemoteSessionTeams
   * @description Use this to return multiple RemoteSessionTeams.<br>
				Requires authentication.
   * @param {boolean} includeenabled 
   * @param {string} msid 
   */
  getRemoteSessionTeams(includeenabled: boolean, msid: string): Promise<any> {
    return this.request({
      method: 'get',
      path: '/RemoteSessionTeams',
      params: {
        includeenabled,
        msid,
      },
    })
  }
}
