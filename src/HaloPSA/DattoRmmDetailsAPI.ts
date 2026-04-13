/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link DattoRmmDetails} */
export type DattoRmmDetails = schemas['DattoRmmDetails']

/**
 * @module DattoRmmDetailsAPI
 */

/**
 * DattoRmmDetails module
 * @public
 */
export class DattoRmmDetailsAPI extends BaseAPI {
  getDattoRmmDetails(): Promise<unknown> {
    return this.request({ method: 'get', path: '/DattoRmmDetails' })
  }

  postDattoRmmDetails({
    dattoRmmDetailsList,
  }: {
    dattoRmmDetailsList: Array<DattoRmmDetails>
  }): Promise<DattoRmmDetails> {
    return this.request({ method: 'post', data: dattoRmmDetailsList, path: '/DattoRmmDetails' })
  }

  /**
   * @param {number} id
   */
  getDattoRmmDetailsById({ id }: { id: number }): Promise<DattoRmmDetails> {
    return this.request({ method: 'get', path: `/DattoRmmDetails/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteDattoRmmDetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/DattoRmmDetails/${id}` })
  }
}
