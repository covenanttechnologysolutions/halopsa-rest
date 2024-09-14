/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link DeviceMeterReading} */
export type DeviceMeterReading = schemas['DeviceMeterReading']

/**
 * @module MeterReadingAPI
 */

/**
 * MeterReading module
 * @public
 */
export class MeterReadingAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of DeviceMeterReading
   * @description Use this to return multiple DeviceMeterReading.<br>
				Requires authentication.
   * @param {number} [asset_id] 
   * @param {number} [count] 
   * @param {number} [page_no] 
   * @param {number} [page_size] 
   * @param {boolean} [pageinate] 
   * @param {number} [recurringinvoice_line_id] 
   */
  getMeterReading({
    asset_id,
    count,
    page_no,
    page_size,
    pageinate,
    recurringinvoice_line_id,
  }: {
    asset_id?: number
    count?: number
    page_no?: number
    page_size?: number
    pageinate?: boolean
    recurringinvoice_line_id?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/MeterReading',
      params: {
        asset_id,
        count,
        page_no,
        page_size,
        pageinate,
        recurringinvoice_line_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postMeterReading({
    deviceMeterReading,
  }: {
    deviceMeterReading: Array<DeviceMeterReading>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/MeterReading',
      data: deviceMeterReading,
    })
  }

  /**
   * @summary Get one DeviceMeterReading
   * @description Use this to return a single instance of DeviceMeterReading.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getMeterReadingById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/MeterReading/${id}`,
      params: {
        includedetails,
      },
    })
  }
}
