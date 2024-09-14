/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link ConfirmClosure} */
export type ConfirmClosure = schemas['ConfirmClosure']

/**
 * @module ConfirmClosureAPI
 */

/**
 * ConfirmClosure module
 * @public
 */
export class ConfirmClosureAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getConfirmClosure({}: {}): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ConfirmClosure',
    })
  }

  /**
   * 
   * 
   
   */
  postConfirmClosure({ confirmClosure }: { confirmClosure: Array<ConfirmClosure> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ConfirmClosure',
      data: confirmClosure,
    })
  }

  /**
   * @summary Get one ConfirmClosure
   * @description Use this to return a single instance of ConfirmClosure.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getConfirmClosureById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ConfirmClosure/${id}`,
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
  deleteConfirmClosureById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/ConfirmClosure/${id}`,
    })
  }
}
