/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class CallScriptAPI extends BaseAPI {
  getCallScript(): Promise<unknown> {
    return this.request({ method: 'get', path: '/CallScript' })
  }

  postCallScript({
    scriptHeaderList,
  }: {
    scriptHeaderList: Array<ScriptHeader>
  }): Promise<unknown> {
    return this.request({ method: 'post', data: scriptHeaderList, path: '/CallScript' })
  }

  /**
   * @summary Get one ScriptHeader
   * @description Use this to return a single instance of ScriptHeader. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getCallScriptById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<unknown> {
    return this.request({ method: 'get', path: `/CallScript/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteCallScriptById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/CallScript/${id}` })
  }
}
