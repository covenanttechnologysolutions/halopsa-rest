/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link AddigyCreateWebhook} */
export type AddigyCreateWebhook = schemas['AddigyCreateWebhook']

/**
 * @module AddigyAPI
 */

/**
 * Addigy module
 * @public
 */
export class AddigyAPI extends BaseAPI {
  getAddigyGet(): Promise<unknown> {
    return this.request({ method: 'get', path: '/Addigy/Get' })
  }

  postAddigyPost({
    addigyCreateWebhook,
  }: {
    addigyCreateWebhook: AddigyCreateWebhook
  }): Promise<unknown> {
    return this.request({ method: 'post', data: addigyCreateWebhook, path: '/Addigy/Post' })
  }
}
