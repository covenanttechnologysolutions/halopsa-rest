/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link TeamsChatMessage_List} */
export type TeamsChatMessage_List = schemas['TeamsChatMessage_List']

/**
 * @module ExternalChatMessageAPI
 */

/**
 * ExternalChatMessage module
 * @public
 */
export class ExternalChatMessageAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getExternalChatMessage({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ExternalChatMessage',
    })
  }

  /**
   * 
   * 
   
   */
  postExternalChatMessage({
    teamsChatMessage_List,
  }: {
    teamsChatMessage_List: Array<TeamsChatMessage_List>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ExternalChatMessage',
      data: teamsChatMessage_List,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getExternalChatMessageById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ExternalChatMessage/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteExternalChatMessageById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/ExternalChatMessage/${id}`,
    })
  }
}
