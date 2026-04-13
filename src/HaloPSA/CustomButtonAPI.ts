/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
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
export class CustomButtonAPI extends BaseAPI {
  /**
   * @summary List of CustomButton
   * @description Use this to return multiple CustomButton. Requires authentication.
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
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/CustomButton',
      params: { isbuttonsetup, ispermissionsetup, msid, typeid },
    })
  }

  postCustomButton({
    customButtonList,
  }: {
    customButtonList: Array<CustomButton>
  }): Promise<CustomButton> {
    return this.request({ method: 'post', data: customButtonList, path: '/CustomButton' })
  }

  /**
   * @summary Get one CustomButton
   * @description Use this to return a single instance of CustomButton. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails]
   */
  getCustomButtonById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<CustomButton> {
    return this.request({ method: 'get', path: `/CustomButton/${id}`, params: { includedetails } })
  }

  /**
   * @param {number} id
   */
  deleteCustomButtonById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/CustomButton/${id}` })
  }
}
