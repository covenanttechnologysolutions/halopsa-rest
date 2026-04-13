/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link PublishProfiles} */
export type PublishProfiles = schemas['PublishProfiles']

/**
 * @module PublishProfilesAPI
 */

/**
 * PublishProfiles module
 * @public
 */
export class PublishProfilesAPI extends BaseAPI {
  getPublishProfiles(): Promise<unknown> {
    return this.request({ method: 'get', path: '/PublishProfiles' })
  }

  postPublishProfiles({
    publishProfilesList,
  }: {
    publishProfilesList: Array<PublishProfiles>
  }): Promise<PublishProfiles> {
    return this.request({ method: 'post', data: publishProfilesList, path: '/PublishProfiles' })
  }

  /**
   * @param {number} id
   */
  getPublishProfilesById({ id }: { id: number }): Promise<PublishProfiles> {
    return this.request({ method: 'get', path: `/PublishProfiles/${id}` })
  }

  /**
   * @param {number} id
   */
  deletePublishProfilesById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/PublishProfiles/${id}` })
  }
}
