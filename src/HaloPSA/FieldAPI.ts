/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link Field} */
export type Field = schemas['Field']

/**
 * @module FieldAPI
 */

/**
 * Field module
 * @public
 */
export class FieldAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of Field
   * @description Use this to return multiple Field.<br>
				Requires authentication.
   * @param {string} [kind] 
   * @param {number} [type_id] 
   */
  getField({ kind, type_id }: { kind?: string; type_id?: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Field',
      params: {
        kind,
        type_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postField({ field }: { field: Array<Field> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Field',
      data: field,
    })
  }

  /**
   * @summary Get one Field
   * @description Use this to return a single instance of Field.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   * @param {string} [kind] 
   */
  getFieldById({
    id,
    includedetails,
    kind,
  }: {
    id: number
    includedetails?: boolean
    kind?: string
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Field/${id}`,
      params: {
        includedetails,
        kind,
      },
    })
  }

  /**
   * @summary Delete one Field
   * @description Delete specific Field.<br>
				Requires authentication.
   * @param {number} id 
   * @param {string} [kind] 
   */
  deleteFieldById({ id, kind }: { id: number; kind?: string }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Field/${id}`,
      params: {
        kind,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  postFieldAddFieldToAllById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'post',
      path: `/Field/AddFieldToAll/${id}`,
    })
  }
}
