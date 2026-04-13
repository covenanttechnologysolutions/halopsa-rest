/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Pax8Details} */
export type Pax8Details = schemas['Pax8Details']

/**
 * @module Pax8DetailsAPI
 */

/**
 * Pax8Details module
 * @public
 */
export class Pax8DetailsAPI extends BaseAPI {
  getPax8Details(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Pax8Details' })
  }

  postPax8Details({
    pax8DetailsList,
  }: {
    pax8DetailsList: Array<Pax8Details>
  }): Promise<Pax8Details> {
    return this.request({ method: 'post', data: pax8DetailsList, path: '/Pax8Details' })
  }

  /**
   * @param {number} id
   */
  getPax8DetailsById({ id }: { id: number }): Promise<Pax8Details> {
    return this.request({ method: 'get', path: `/Pax8Details/${id}` })
  }

  /**
   * @param {number} id
   */
  deletePax8DetailsById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Pax8Details/${id}` })
  }
}
