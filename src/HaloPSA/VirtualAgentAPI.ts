/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link VirtualAgent} */
export type VirtualAgent = schemas['VirtualAgent']

/**
 * @module VirtualAgentAPI
 */

/**
 * VirtualAgent module
 * @public
 */
export class VirtualAgentAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getVirtualAgent({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/VirtualAgent',
    })
  }

  /**
   * 
   * 
   
   */
  postVirtualAgent({ virtualAgent }: { virtualAgent: Array<VirtualAgent> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/VirtualAgent',
      data: virtualAgent,
    })
  }

  /**
   *
   *
   * @param {string} id
   */
  getVirtualAgentById({ id }: { id: string }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/VirtualAgent/${id}`,
    })
  }

  /**
   *
   *
   * @param {string} id
   */
  deleteVirtualAgentById({ id }: { id: string }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/VirtualAgent/${id}`,
    })
  }
}
