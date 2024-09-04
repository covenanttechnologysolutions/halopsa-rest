/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link ScriptHeader} */
export type ScriptHeader = schemas['ScriptHeader']

/**
 * @module CallScriptAPI
 */

/**
 * CallScript module
 * @public
 */
export class CallScriptAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getCallScript(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/CallScript',
    })
  }

  /**
   * 
   * 
   
   */
  postCallScript(scriptHeader: Array<ScriptHeader>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/CallScript',
      data: scriptHeader,
    })
  }

  /**
   * @summary Get one ScriptHeader
   * @description Use this to return a single instance of ScriptHeader.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getCallScriptById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/CallScript/${id}`,
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
  deleteCallScriptById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/CallScript/${id}`,
    })
  }
}
