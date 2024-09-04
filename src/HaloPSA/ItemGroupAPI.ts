/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link ItemGroup} */
export type ItemGroup = schemas['ItemGroup']

/**
 * @module ItemGroupAPI
 */

/**
 * ItemGroup module
 * @public
 */
export class ItemGroupAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * 
   * 
   
   */
  getItemGroup(): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ItemGroup',
    })
  }

  /**
   * 
   * 
   
   */
  postItemGroup(itemGroup: Array<ItemGroup>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ItemGroup',
      data: itemGroup,
    })
  }

  /**
   * @summary Get one ItemGroup
   * @description Use this to return a single instance of ItemGroup.<br>
				Requires authentication.
   * @param {number} id 
   * @param {number} groupQuantity 
   * @param {boolean} includedetails 
   */
  getItemGroupById(id: number, groupQuantity: number, includedetails: boolean): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ItemGroup/${id}`,
      params: {
        groupQuantity,
        includedetails,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteItemGroupById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/ItemGroup/${id}`,
    })
  }
}
