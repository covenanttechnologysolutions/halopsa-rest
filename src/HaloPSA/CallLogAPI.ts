/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link CallLog} */
export type CallLog = schemas['CallLog']

/**
 * @module CallLogAPI
 */

/**
 * CallLog module
 * @public
 */
export class CallLogAPI extends BaseAPI {
  /**
   * @summary List of CallLog
   * @description Use this to return multiple CallLog. Requires authentication.
   * @param {boolean} [showall]
   */
  getCallLog({ showall }: { showall?: boolean }): Promise<unknown> {
    return this.request({ method: 'get', path: '/CallLog', params: { showall } })
  }

  postCallLog({ callLogList }: { callLogList: Array<CallLog> }): Promise<CallLog> {
    return this.request({ method: 'post', data: callLogList, path: '/CallLog' })
  }

  /**
   * @summary Get one CallLog
   * @description Use this to return a single instance of CallLog. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getCallLogById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<CallLog> {
    return this.request({ method: 'get', path: `/CallLog/${id}`, params: { includedetails } })
  }
}
