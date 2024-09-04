/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link ChatFlowProcess} */
export type ChatFlowProcess = schemas['ChatFlowProcess']

/**
 * @module ChatFlowAPI
 */

/**
 * ChatFlow module
 * @public
 */
export class ChatFlowAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  postChatFlow(chatFlowProcess: Array<ChatFlowProcess>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ChatFlow',
      data: chatFlowProcess,
    })
  }
}
