/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ZoomCreateMessageRequest} */
export type ZoomCreateMessageRequest = schemas['ZoomCreateMessageRequest']

/**
 * @module ZoomAPI
 */

/**
 * Zoom module
 * @public
 */
export class ZoomAPI extends BaseAPI {
  postZoomMessage({
    zoomCreateMessageRequest,
  }: {
    zoomCreateMessageRequest: ZoomCreateMessageRequest
  }): Promise<unknown> {
    return this.request({ method: 'post', data: zoomCreateMessageRequest, path: '/Zoom/Message' })
  }
}
