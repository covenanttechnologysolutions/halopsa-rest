/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link CannedText} */
export type CannedText = schemas['CannedText']

/**
 * @module CannedTextAPI
 */

/**
 * CannedText module
 * @public
 */
export class CannedTextAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of CannedText
   * @description Use this to return multiple CannedText.<br>
				Requires authentication.
   * @param {number} access_control_level 
   * @param {number} agent_id 
   * @param {number} department_id 
   * @param {number} group_id 
   * @param {boolean} showall 
   * @param {number} team_id 
   * @param {boolean} ticketonly 
   */
  getCannedText(
    access_control_level: number,
    agent_id: number,
    department_id: number,
    group_id: number,
    showall: boolean,
    team_id: number,
    ticketonly: boolean,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/CannedText',
      params: {
        access_control_level,
        agent_id,
        department_id,
        group_id,
        showall,
        team_id,
        ticketonly,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postCannedText(cannedText: Array<CannedText>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/CannedText',
      data: cannedText,
    })
  }

  /**
   * @summary Get one CannedText
   * @description Use this to return a single instance of CannedText.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getCannedTextById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/CannedText/${id}`,
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
  deleteCannedTextById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/CannedText/${id}`,
    })
  }
}
