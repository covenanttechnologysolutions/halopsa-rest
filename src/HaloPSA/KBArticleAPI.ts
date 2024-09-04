/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link KBEntry} */
export type KBEntry = schemas['KBEntry']

/**
 * @module KBArticleAPI
 */

/**
 * KBArticle module
 * @public
 */
export class KBArticleAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of KBEntry
   * @description Use this to return multiple KBEntry.<br>
				Requires authentication.
   * @param {string} activeinactive (string) Filter on active/inactive assets - comma seperated, first value being true or false for active, second for inactive.
   * @param {string} advanced_search 
   * @param {string} articletype (string) Filter on article type, comma seperated.
   * @param {number} client_id (int) Filters by the specified client.
   * @param {number} count (int) Number of Knowledge Base Entries to return in the response.
   * @param {number} device_id 
   * @param {string} faqlists (int) Filters response based on the Knowledge Base Article FAQ lists.
   * @param {boolean} includeactive (bool) Include active Knowledge Base Entries in the response.
   * @param {boolean} includeinactive (bool) Include inactive Knowledge Base Entries in the response.
   * @param {string} key (string) Filters response based on the knowledge base key.
   * @param {string} language_code 
   * @param {string} language_override 
   * @param {string} needsreview (string) Filter on Knowdledge Base Articles that are past their next review date.
   * @param {string} order (string) The name of the field to order by first.
   * @param {string} order2 (string) The name of the field to order by second.
   * @param {string} order3 (string) The name of the field to order by third.
   * @param {string} order4 (string) The name of the field to order by fourth.
   * @param {string} order5 (string) The name of the field to order by fifth.
   * @param {boolean} orderdesc (bool) Whether to order ascending or descending on first order.
   * @param {boolean} orderdesc2 (bool) Whether to order ascending or descending on second order.
   * @param {boolean} orderdesc3 (bool) Whether to order ascending or descending on third order.
   * @param {boolean} orderdesc4 (bool) Whether to order ascending or descending on fourth order.
   * @param {boolean} orderdesc5 (bool) Whether to order ascending or descending on fifth order.
   * @param {number} organisation_id (int) Filters by Knowdledge Base Articles belonging to a particular organisation.
   * @param {number} page_no (int) When using Pagination, the page number to return.
   * @param {number} page_size (int) When using Pagination, the size of the page.
   * @param {boolean} pageinate (bool) Whether to use Pagination in the response.
   * @param {number} related_to (int) Filters response based on the related Knowledge Base Article.
   * @param {number} related_to_ticket (int) Filters response based on the related ticket.
   * @param {string} search (string) Filters response based on the search string.
   * @param {number} site_id (int) Filters by the specified site.
   * @param {number} type (int) Filters response based on the Knowledge Base Article type.
   */
  getKBArticle(
    activeinactive: string,
    advanced_search: string,
    articletype: string,
    client_id: number,
    count: number,
    device_id: number,
    faqlists: string,
    includeactive: boolean,
    includeinactive: boolean,
    key: string,
    language_code: string,
    language_override: string,
    needsreview: string,
    order: string,
    order2: string,
    order3: string,
    order4: string,
    order5: string,
    orderdesc: boolean,
    orderdesc2: boolean,
    orderdesc3: boolean,
    orderdesc4: boolean,
    orderdesc5: boolean,
    organisation_id: number,
    page_no: number,
    page_size: number,
    pageinate: boolean,
    related_to: number,
    related_to_ticket: number,
    search: string,
    site_id: number,
    type: number,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: '/KBArticle',
      params: {
        activeinactive,
        advanced_search,
        articletype,
        client_id,
        count,
        device_id,
        faqlists,
        includeactive,
        includeinactive,
        key,
        language_code,
        language_override,
        needsreview,
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
        organisation_id,
        page_no,
        page_size,
        pageinate,
        related_to,
        related_to_ticket,
        search,
        site_id,
        type,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postKBArticle(kBEntry: Array<KBEntry>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/KBArticle',
      data: kBEntry,
    })
  }

  /**
   * @summary Get one KBEntry
   * @description Use this to return a single instance of KBEntry.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} includedetails (bool) Include extra objects in the response.
   * @param {string} language_code 
   * @param {string} language_override 
   * @param {number} organisation_id 
   */
  getKBArticleById(
    id: number,
    includedetails: boolean,
    language_code: string,
    language_override: string,
    organisation_id: number,
  ): Promise<any> {
    return this.request({
      method: 'get',
      path: `/KBArticle/${id}`,
      params: {
        includedetails,
        language_code,
        language_override,
        organisation_id,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteKBArticleById(id: number): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/KBArticle/${id}`,
    })
  }

  /**
   * 
   * 
   
   */
  postKBArticleVote(kBEntry: Array<KBEntry>): Promise<any> {
    return this.request({
      method: 'post',
      path: '/KBArticle/vote',
      data: kBEntry,
    })
  }
}
