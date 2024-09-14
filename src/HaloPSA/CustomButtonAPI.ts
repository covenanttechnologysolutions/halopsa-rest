/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link CustomButton} */
export type CustomButton = schemas['CustomButton']

/**
 * @module CustomButtonAPI
 */

/**
 * CustomButton module
 * @public
 */
export class CustomButtonAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of CustomButton
   * @description Use this to return multiple CustomButton.<br>
				Requires authentication.
   * @param {boolean} [isbuttonsetup] 
   * @param {boolean} [ispermissionsetup] 
   * @param {number} [msid] 
   * @param {number} [typeid] 
   */
  getCustomButton({
    isbuttonsetup,
    ispermissionsetup,
    msid,
    typeid,
  }: {
    isbuttonsetup?: boolean
    ispermissionsetup?: boolean
    msid?: number
    typeid?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/CustomButton',
      params: {
        isbuttonsetup,
        ispermissionsetup,
        msid,
        typeid,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postCustomButton({ customButton }: { customButton: Array<CustomButton> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/CustomButton',
      data: customButton,
    })
  }

  /**
   * @summary Get one CustomButton
   * @description Use this to return a single instance of CustomButton.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getCustomButtonById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/CustomButton/${id}`,
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
  deleteCustomButtonById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/CustomButton/${id}`,
    })
  }
}
