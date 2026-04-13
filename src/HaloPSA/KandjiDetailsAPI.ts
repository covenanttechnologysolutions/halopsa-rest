/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link KandjiDetails} */
export type KandjiDetails = schemas['KandjiDetails']

/**
 * @module KandjiDetailsAPI
 */

/**
 * KandjiDetails module
 * @public
 */
export class KandjiDetailsAPI extends BaseAPI {
  getKandjiDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/KandjiDetails' })
  }

  postKandjiDetails({
    kandjiDetailsList,
  }: {
    kandjiDetailsList: Array<KandjiDetails>
  }): Promise<KandjiDetails> {
    return this.request({ method: 'post', data: kandjiDetailsList, path: '/KandjiDetails' })
  }

  /**
   * @param {number} id
   */
  getKandjiDetailsById({ id }: { id: number }): Promise<KandjiDetails> {
    return this.request({ method: 'get', path: `/KandjiDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteKandjiDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/KandjiDetails/${id}` })
  }
}
