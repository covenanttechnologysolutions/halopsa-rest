/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class ReleasePipelineAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getReleasePipeline({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ReleasePipeline',
    })
  }

  /**
   * 
   * 
   
   */
  postReleasePipeline({
    releasePipeline,
  }: {
    releasePipeline: Array<ReleasePipeline>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ReleasePipeline',
      data: releasePipeline,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getReleasePipelineById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ReleasePipeline/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteReleasePipelineById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/ReleasePipeline/${id}`,
    })
  }
}
