/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link MessageContent} */
export type MessageContent = schemas['MessageContent']

/**
 * @module EmailTemplateAPI
 */

/**
 * EmailTemplate module
 * @public
 */
export class EmailTemplateAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of MessageContent
   * @description Use this to return multiple MessageContent.<br>
				Requires authentication.
   * @param {number} access_control_level 
   * @param {boolean} ignore_mg 
   * @param {boolean} isconfig 
   * @param {number} messagegroup 
   * @param {boolean} release_only 
   * @param {boolean} portalcss 
   */
  getEmailTemplate(
    access_control_level: number,
    ignore_mg: boolean,
    isconfig: boolean,
    messagegroup: number,
    release_only: boolean,
    portalcss: boolean,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/EmailTemplate',
      params: {
        access_control_level,
        ignore_mg,
        isconfig,
        messagegroup,
        release_only,
        portalcss,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postEmailTemplate(messageContent: Array<MessageContent>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/EmailTemplate',
      data: messageContent,
    })
  }

  /**
   * @summary Get one MessageContent
   * @description Use this to return a single instance of MessageContent.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   * @param {number} messagegroup 
   */
  getEmailTemplateById(id: number, includedetails: boolean, messagegroup: number): Promise<any> {
    return this.request({
      method: 'get',
      path: `/EmailTemplate/${id}`,
      params: {
        includedetails,
        messagegroup,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteEmailTemplateById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/EmailTemplate/${id}`,
    })
  }
}
