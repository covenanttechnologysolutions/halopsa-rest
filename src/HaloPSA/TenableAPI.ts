/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link TenableCreateExport} */
export type TenableCreateExport = schemas['TenableCreateExport']

/**
 * @module TenableAPI
 */

/**
 * Tenable module
 * @public
 */
export class TenableAPI extends BaseAPI {
  getTenableGet(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Tenable/Get' })
  }

  postTenableExport({
    tenableCreateExport,
  }: {
    tenableCreateExport: TenableCreateExport
  }): Promise<unknown> {
    return this.request({ method: 'post', data: tenableCreateExport, path: '/Tenable/Export' })
  }

  getTenableStatus(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Tenable/Status' })
  }

  postTenableCancel(): Promise<unknown> {
    return this.request({ method: 'post', path: '/Tenable/Cancel' })
  }
}
