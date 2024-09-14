/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module ChatAPI
 */

/**
 * Chat module
 * @public
 */
export class ChatAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of LiveChatHeader
   * @description Use this to return multiple LiveChatHeader.<br>
				Requires authentication.
   * @param {string} [after] 
   * @param {string} [chatprofile_id] 
   * @param {boolean} [checkavailable] 
   * @param {number} [count] 
   * @param {boolean} [ignore_all_closed] 
   * @param {string} [order] 
   * @param {string} [order2] 
   * @param {string} [order3] 
   * @param {string} [order4] 
   * @param {string} [order5] 
   * @param {boolean} [orderdesc] 
   * @param {boolean} [orderdesc2] 
   * @param {boolean} [orderdesc3] 
   * @param {boolean} [orderdesc4] 
   * @param {boolean} [orderdesc5] 
   * @param {number} [page_no] 
   * @param {number} [page_size] 
   * @param {boolean} [pageinate] 
   * @param {string} [teams_conversation_id] 
   * @param {number} [ticket_id] 
   */
  getChat({
    after,
    chatprofile_id,
    checkavailable,
    count,
    ignore_all_closed,
    order,
    order2,
    order3,
    order4,
    order5,
    orderdesc,
    orderdesc2,
    orderdesc3,
    orderdesc4,
    orderdesc5,
    page_no,
    page_size,
    pageinate,
    teams_conversation_id,
    ticket_id,
  }: {
    after?: string
    chatprofile_id?: string
    checkavailable?: boolean
    count?: number
    ignore_all_closed?: boolean
    order?: string
    order2?: string
    order3?: string
    order4?: string
    order5?: string
    orderdesc?: boolean
    orderdesc2?: boolean
    orderdesc3?: boolean
    orderdesc4?: boolean
    orderdesc5?: boolean
    page_no?: number
    page_size?: number
    pageinate?: boolean
    teams_conversation_id?: string
    ticket_id?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Chat',
      params: {
        after,
        chatprofile_id,
        checkavailable,
        count,
        ignore_all_closed,
        order,
        order2,
        order3,
        order4,
        order5,
        orderdesc,
        orderdesc2,
        orderdesc3,
        orderdesc4,
        orderdesc5,
        page_no,
        page_size,
        pageinate,
        teams_conversation_id,
        ticket_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postChat({}: {}): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Chat',
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getChatById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Chat/${id}`,
    })
  }
}
