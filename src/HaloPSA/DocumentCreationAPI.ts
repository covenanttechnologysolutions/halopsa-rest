/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module DocumentCreationAPI
 */

/**
 * DocumentCreation module
 * @public
 */
export class DocumentCreationAPI extends BaseAPI {
  postDocumentCreation(): Promise<unknown> {
    return this.request({ method: 'post', path: '/DocumentCreation' })
  }
}
