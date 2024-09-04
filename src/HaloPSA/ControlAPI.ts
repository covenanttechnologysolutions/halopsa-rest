/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link Control} */
export type Control = schemas['Control']

/**
 * @module ControlAPI
 */

/**
 * Control module
 * @public
 */
export class ControlAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getControl(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Control',
    })
  }

  /**
   * 
   * 
   
   */
  postControl(control: Array<Control>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Control',
      data: control,
    })
  }

  /**
   * 
   * 
   
   */
  postControlSetup(): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Control/setup',
    })
  }

  /**
   * 
   * 
   
   */
  postControlClearCache(): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Control/ClearCache',
    })
  }

  /**
   * 
   * 
   
   */
  postControlUpdateEnc(): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Control/UpdateEnc',
    })
  }

  /**
   * 
   * 
   
   */
  getControlTeams(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Control/Teams',
    })
  }
}
