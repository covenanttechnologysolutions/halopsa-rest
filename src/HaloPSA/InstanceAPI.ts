/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link Instance} */
export type Instance = schemas['Instance']

/**
 * @module InstanceAPI
 */

/**
 * Instance module
 * @public
 */
export class InstanceAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of Instance
   * @description Use this to return multiple Instance.<br>
				Requires authentication.
   * @param {number} comparewith 
   */
  getInstance(comparewith: number): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Instance',
      params: {
        comparewith,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postInstance(instance: Array<Instance>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Instance',
      data: instance,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getInstanceById(id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Instance/${id}`,
    })
  }
}
