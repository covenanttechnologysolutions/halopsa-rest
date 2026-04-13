/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ReleasePipeline} */
export type ReleasePipeline = schemas['ReleasePipeline']

/**
 * @module ReleasePipelineAPI
 */

/**
 * ReleasePipeline module
 * @public
 */
export class ReleasePipelineAPI extends BaseAPI {
  getReleasePipeline(): Promise<unknown> {
    return this.request({ method: 'get', path: '/ReleasePipeline' })
  }

  postReleasePipeline({
    releasePipelineList,
  }: {
    releasePipelineList: Array<ReleasePipeline>
  }): Promise<ReleasePipeline> {
    return this.request({ method: 'post', data: releasePipelineList, path: '/ReleasePipeline' })
  }

  /**
   * @param {number} id
   */
  getReleasePipelineById({ id }: { id: number }): Promise<ReleasePipeline> {
    return this.request({ method: 'get', path: `/ReleasePipeline/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteReleasePipelineById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/ReleasePipeline/${id}` })
  }
}
