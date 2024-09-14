/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link ModuleSetup} */
export type ModuleSetup = schemas['ModuleSetup']

/**
 * @module FeaturesAPI
 */

/**
 * Features module
 * @public
 */
export class FeaturesAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of ModuleSetup
   * @description Use this to return multiple ModuleSetup.<br>
				Requires authentication.
   * @param {boolean} [isconfig] 
   * @param {boolean} [showdisabled] 
   * @param {boolean} [showenabled] 
   */
  getFeatures({
    isconfig,
    showdisabled,
    showenabled,
  }: {
    isconfig?: boolean
    showdisabled?: boolean
    showenabled?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Features',
      params: {
        isconfig,
        showdisabled,
        showenabled,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postFeatures({ moduleSetup }: { moduleSetup: Array<ModuleSetup> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Features',
      data: moduleSetup,
    })
  }

  /**
   * @summary Get one ModuleSetup
   * @description Use this to return a single instance of ModuleSetup.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getFeaturesById({ id, includedetails }: { id: number; includedetails?: boolean }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Features/${id}`,
      params: {
        includedetails,
      },
    })
  }
}
