/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link FaultToDo} */
export type FaultToDo = schemas['FaultToDo']

/**
 * @module ToDoAPI
 */

/**
 * ToDo module
 * @public
 */
export class ToDoAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of FaultToDo
   * @description Use this to return multiple FaultToDo.<br>
				Requires authentication.
   * @param {number} ticket_id 
   */
  getToDo(ticket_id: number): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ToDo',
      params: {
        ticket_id,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postToDo(faultToDo: Array<FaultToDo>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ToDo',
      data: faultToDo,
    })
  }
}
