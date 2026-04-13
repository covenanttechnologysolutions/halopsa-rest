/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link KaseyaVSAXDetails} */
export type KaseyaVSAXDetails = schemas['KaseyaVSAXDetails']

/**
 * @module KaseyaVSAXDetailsAPI
 */

/**
 * KaseyaVSAXDetails module
 * @public
 */
export class KaseyaVSAXDetailsAPI extends BaseAPI {
  getKaseyaVSAXDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/KaseyaVSAXDetails' })
  }

  postKaseyaVSAXDetails({
    kaseyaVSAXDetailsList,
  }: {
    kaseyaVSAXDetailsList: Array<KaseyaVSAXDetails>
  }): Promise<KaseyaVSAXDetails> {
    return this.request({ method: 'post', data: kaseyaVSAXDetailsList, path: '/KaseyaVSAXDetails' })
  }

  /**
   * @param {number} id
   */
  getKaseyaVSAXDetailsById({ id }: { id: number }): Promise<KaseyaVSAXDetails> {
    return this.request({ method: 'get', path: `/KaseyaVSAXDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteKaseyaVSAXDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/KaseyaVSAXDetails/${id}` })
  }
}
