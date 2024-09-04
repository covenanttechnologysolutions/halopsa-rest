/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link HaloNews} */
export type HaloNews = schemas['HaloNews']

/**
 * @module HaloNewsAPI
 */

/**
 * HaloNews module
 * @public
 */
export class HaloNewsAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getHaloNews(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/HaloNews',
    })
  }

  /**
   * 
   * 
   
   */
  postHaloNews(haloNews: Array<HaloNews>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/HaloNews',
      data: haloNews,
    })
  }

  /**
   * @summary Get one HaloNews
   * @description Use this to return a single instance of HaloNews.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails 
   */
  getHaloNewsById(id: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/HaloNews/${id}`,
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
  deleteHaloNewsById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/HaloNews/${id}`,
    })
  }

  /**
   * 
   * 
   
   */
  postHaloNewsRead(listNumber: number): Promise<any> {
    return this.request({
      method: 'post',
      path: '/HaloNews/read',
      data: listNumber,
    })
  }
}
