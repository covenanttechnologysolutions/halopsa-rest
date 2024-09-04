/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link OnlineStatus} */
export type OnlineStatus = schemas['OnlineStatus']

/**
 * @module OnlineStatusAPI
 */

/**
 * OnlineStatus module
 * @public
 */
export class OnlineStatusAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getOnlineStatus(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/OnlineStatus',
    })
  }

  /**
   * 
   * 
   
   */
  postOnlineStatus(onlineStatus: Array<OnlineStatus>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/OnlineStatus',
      data: onlineStatus,
    })
  }
}
