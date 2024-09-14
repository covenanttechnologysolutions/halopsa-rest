/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link ConnectedInstance} */
export type ConnectedInstance = schemas['ConnectedInstance']

/**
 * @module ConnectedInstanceAPI
 */

/**
 * ConnectedInstance module
 * @public
 */
export class ConnectedInstanceAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getConnectedInstance({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ConnectedInstance',
    })
  }

  /**
   * 
   * 
   
   */
  postConnectedInstance({
    connectedInstance,
  }: {
    connectedInstance: Array<ConnectedInstance>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ConnectedInstance',
      data: connectedInstance,
    })
  }

  /**
   * @summary Get one ConnectedInstance
   * @description Use this to return a single instance of ConnectedInstance.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getConnectedInstanceById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ConnectedInstance/${id}`,
      params: {
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteConnectedInstanceById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/ConnectedInstance/${id}`,
    })
  }
}
