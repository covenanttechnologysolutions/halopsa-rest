/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link CannedText} */
export type CannedText = schemas['CannedText']
/** {@link CannedTextFavourites} */
export type CannedTextFavourites = schemas['CannedTextFavourites']

/**
 * @module CannedTextAPI
 */

/**
 * CannedText module
 * @public
 */
export class CannedTextAPI extends BaseAPI {
  /**
   * @summary List of CannedText
   * @description Use this to return multiple CannedText. Requires authentication.
   * @param {number} [access_control_level]
   * @param {number} [agent_id]
   * @param {number} [department_id]
   * @param {number} [group_id]
   * @param {boolean} [showall]
   * @param {number} [team_id]
   * @param {boolean} [ticketonly]
   */
  getCannedText({
    access_control_level,
    agent_id,
    department_id,
    group_id,
    showall,
    team_id,
    ticketonly,
  }: {
    access_control_level?: number
    agent_id?: number
    department_id?: number
    group_id?: number
    showall?: boolean
    team_id?: number
    ticketonly?: boolean
  }): Promise<unknown> {
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

  postCannedText({ cannedTextList }: { cannedTextList: Array<CannedText> }): Promise<CannedText> {
    return this.request({ method: 'post', data: cannedTextList, path: '/CannedText' })
  }

  /**
   * @summary Get one CannedText
   * @description Use this to return a single instance of CannedText. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getCannedTextById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<CannedText> {
    return this.request({ method: 'get', path: `/CannedText/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteCannedTextById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/CannedText/${id}` })
  }

  postCannedTextFavourite({
    cannedTextFavouritesList,
  }: {
    cannedTextFavouritesList: Array<CannedTextFavourites>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: cannedTextFavouritesList,
      path: '/CannedText/favourite',
    })
  }
}
