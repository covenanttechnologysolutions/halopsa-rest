/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @module MattermostChannelDetailsAPI
 */

/**
 * MattermostChannelDetails module
 * @public
 */
export class MattermostChannelDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getMattermostChannelDetails({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/MattermostChannelDetails',
    })
  }
}
