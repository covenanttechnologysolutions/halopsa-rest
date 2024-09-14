/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class PublishProfilesAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getPublishProfiles({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/PublishProfiles',
    })
  }

  /**
   * 
   * 
   
   */
  postPublishProfiles({
    publishProfiles,
  }: {
    publishProfiles: Array<PublishProfiles>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/PublishProfiles',
      data: publishProfiles,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getPublishProfilesById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/PublishProfiles/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deletePublishProfilesById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/PublishProfiles/${id}`,
    })
  }
}
