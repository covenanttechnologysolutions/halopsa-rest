/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link ChatProfile} */
export type ChatProfile = schemas['ChatProfile']

/**
 * @module ChatProfileAPI
 */

/**
 * ChatProfile module
 * @public
 */
export class ChatProfileAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of ChatProfile
   * @description Use this to return multiple ChatProfile.<br>
				Requires authentication.
   * @param {number} [type] 
   */
  getChatProfile({ type }: { type?: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ChatProfile',
      params: {
        type,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postChatProfile({ chatProfile }: { chatProfile: Array<ChatProfile> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ChatProfile',
      data: chatProfile,
    })
  }

  /**
   * @summary Get one ChatProfile
   * @description Use this to return a single instance of ChatProfile.<br>
				Requires authentication.
   * @param {string} id 
   * @param {boolean} [check_available] 
   * @param {boolean} [includedetails] 
   * @param {string} [key] 
   */
  getChatProfileById({
    id,
    check_available,
    includedetails,
    key,
  }: {
    id: string
    check_available?: boolean
    includedetails?: boolean
    key?: string
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ChatProfile/${id}`,
      params: {
        check_available,
        includedetails,
        key,
      },
    })
  }

  /**
   *
   *
   * @param {string} id
   */
  deleteChatProfileById({ id }: { id: string }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/ChatProfile/${id}`,
    })
  }
}
