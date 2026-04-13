/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class StreamOneIonDetailsAPI extends BaseAPI {
  getStreamOneIonDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/StreamOneIonDetails' })
  }

  postStreamOneIonDetails({
    streamOneIonDetailsList,
  }: {
    streamOneIonDetailsList: Array<StreamOneIonDetails>
  }): Promise<StreamOneIonDetails> {
    return this.request({
      method: 'post',
      data: streamOneIonDetailsList,
      path: '/StreamOneIonDetails',
    })
  }

  /**
   * @param {number} id
   */
  getStreamOneIonDetailsById({ id }: { id: number }): Promise<StreamOneIonDetails> {
    return this.request({ method: 'get', path: `/StreamOneIonDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteStreamOneIonDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/StreamOneIonDetails/${id}` })
  }
}
