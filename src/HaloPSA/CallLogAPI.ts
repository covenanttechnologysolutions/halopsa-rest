/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
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
export class CallLogAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of CallLog
   * @description Use this to return multiple CallLog.<br>
				Requires authentication.
   * @param {boolean} [showall] 
   */
  getCallLog({ showall }: { showall?: boolean }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/CallLog',
      params: {
        showall,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postCallLog({ callLog }: { callLog: Array<CallLog> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/CallLog',
      data: callLog,
    })
  }

  /**
   * @summary Get one CallLog
   * @description Use this to return a single instance of CallLog.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getCallLogById({ id, includedetails }: { id: number; includedetails?: boolean }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/CallLog/${id}`,
      params: {
        includedetails,
      },
    })
  }
}
