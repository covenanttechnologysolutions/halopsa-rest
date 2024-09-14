/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link ExternalLink_List} */
export type ExternalLink_List = schemas['ExternalLink_List']
/** {@link GenerateExternalLink} */
export type GenerateExternalLink = schemas['GenerateExternalLink']

/**
 * @module ExternalLinkAPI
 */

/**
 * ExternalLink module
 * @public
 */
export class ExternalLinkAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of ExternalLink
   * @description Use this to return multiple ExternalLink.<br>
				Requires authentication.
   * @param {number} [count] 
   * @param {number} [details_id] 
   * @param {number} [halo_id] 
   * @param {number} [module_id] 
   * @param {string} [module_list] 
   * @param {string} [order] 
   * @param {string} [order2] 
   * @param {string} [order3] 
   * @param {string} [order4] 
   * @param {string} [order5] 
   * @param {boolean} [orderdesc] 
   * @param {boolean} [orderdesc2] 
   * @param {boolean} [orderdesc3] 
   * @param {boolean} [orderdesc4] 
   * @param {boolean} [orderdesc5] 
   * @param {number} [page_no] 
   * @param {number} [page_size] 
   * @param {boolean} [pageinate] 
   * @param {string} [search] 
   * @param {number} [table_id] 
   * @param {string} [third_party_desc] 
   * @param {string} [third_party_id] 
   * @param {string} [third_party_secondary_id] 
   * @param {string} [third_party_type] 
   */
  getExternalLink({
    count,
    details_id,
    halo_id,
    module_id,
    module_list,
    order,
    order2,
    order3,
    order4,
    order5,
    orderdesc,
    orderdesc2,
    orderdesc3,
    orderdesc4,
    orderdesc5,
    page_no,
    page_size,
    pageinate,
    search,
    table_id,
    third_party_desc,
    third_party_id,
    third_party_secondary_id,
    third_party_type,
  }: {
    count?: number
    details_id?: number
    halo_id?: number
    module_id?: number
    module_list?: string
    order?: string
    order2?: string
    order3?: string
    order4?: string
    order5?: string
    orderdesc?: boolean
    orderdesc2?: boolean
    orderdesc3?: boolean
    orderdesc4?: boolean
    orderdesc5?: boolean
    page_no?: number
    page_size?: number
    pageinate?: boolean
    search?: string
    table_id?: number
    third_party_desc?: string
    third_party_id?: string
    third_party_secondary_id?: string
    third_party_type?: string
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/ExternalLink',
      params: {
        count,
        details_id,
        halo_id,
        module_id,
        module_list,
        order,
        order2,
        order3,
        order4,
        order5,
        orderdesc,
        orderdesc2,
        orderdesc3,
        orderdesc4,
        orderdesc5,
        page_no,
        page_size,
        pageinate,
        search,
        table_id,
        third_party_desc,
        third_party_id,
        third_party_secondary_id,
        third_party_type,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postExternalLink({
    externalLink_List,
  }: {
    externalLink_List: Array<ExternalLink_List>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ExternalLink',
      data: externalLink_List,
    })
  }

  /**
   * @summary Get one ExternalLink
   * @description Use this to return a single instance of ExternalLink.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getExternalLinkById({
    id,
    includedetails,
  }: {
    id: number
    includedetails?: boolean
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/ExternalLink/${id}`,
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
  deleteExternalLinkById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/ExternalLink/${id}`,
    })
  }

  /**
   * 
   * 
   
   */
  postExternalLinkGenerate({
    generateExternalLink,
  }: {
    generateExternalLink: GenerateExternalLink
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/ExternalLink/Generate',
      data: generateExternalLink,
    })
  }
}
