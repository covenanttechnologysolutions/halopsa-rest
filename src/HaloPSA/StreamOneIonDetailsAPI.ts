/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link StreamOneIonDetails} */
export type StreamOneIonDetails = schemas['StreamOneIonDetails']

/**
 * @module StreamOneIonDetailsAPI
 */

/**
 * StreamOneIonDetails module
 * @public
 */
export class StreamOneIonDetailsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getStreamOneIonDetails(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/StreamOneIonDetails',
    })
  }

  /**
   * 
   * 
   
   */
  postStreamOneIonDetails(streamOneIonDetails: Array<StreamOneIonDetails>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/StreamOneIonDetails',
      data: streamOneIonDetails,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getStreamOneIonDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: `/StreamOneIonDetails/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteStreamOneIonDetailsById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/StreamOneIonDetails/${id}`,
    })
  }
}
