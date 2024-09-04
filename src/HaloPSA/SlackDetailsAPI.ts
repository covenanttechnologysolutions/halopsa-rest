/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class SlackDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of SlackDetails
   * @description Use this to return multiple SlackDetails.<br>
				Requires authentication.
   * @param {string} agent_id 
   * @param {string} channel_name 
   * @param {string} includedisabled 
   * @param {string} includeenabled 
   * @param {string} team_name 
   */
  getSlackDetails(
    agent_id: string,
    channel_name: string,
    includedisabled: string,
    includeenabled: string,
    team_name: string,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/SlackDetails',
      params: {
        agent_id,
        channel_name,
        includedisabled,
        includeenabled,
        team_name,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postSlackDetails(slackDetails: Array<SlackDetails>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/SlackDetails',
      data: slackDetails,
    })
  }

  /**
   * @summary Get one SlackDetails
   * @description Use this to return a single instance of SlackDetails.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getSlackDetailsById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/SlackDetails/${id}`,
      params: {
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteSlackDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/SlackDetails/${id}`,
    })
  }

  /**
   * 
   * 
   
   */
  postSlackDetailsUninstall(slackDetails: SlackDetails): Promise<any> {
    return this.request({
      method: 'post',
      path: '/SlackDetails/Uninstall',
      data: slackDetails,
    })
  }
}
