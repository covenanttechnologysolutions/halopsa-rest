/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link KBEntry} */
export type KBEntry = schemas['KBEntry']
/** {@link KBEntry_View} */
export type KBEntry_View = schemas['KBEntry_View']

/**
 * @module KBArticleAPI
 */

/**
 * KBArticle module
 * @public
 */
export class KBArticleAPI extends BaseAPI {
  /**
   * @summary List of KBEntry
   * @description Use this to return multiple KBEntry. Requires authentication.
   * @param {string} [activeinactive] Filter on active/inactive assets - comma seperated, first value being true or false for active, second for inactive.
   * @param {string} [advanced_search]
   * @param {string} [articletype] Filter on article type, comma seperated.
   * @param {number} [client_id] Filters by the specified client.
   * @param {number} [count] Number of Knowledge Base Entries to return in the response.
   * @param {number} [device_id]
   * @param {string} [faqlists] Filters response based on the Knowledge Base Article FAQ lists.
   * @param {boolean} [includeactive] Include active Knowledge Base Entries in the response.
   * @param {boolean} [includeinactive] Include inactive Knowledge Base Entries in the response.
   * @param {string} [key] Filters response based on the knowledge base key.
   * @param {string} [language_code]
   * @param {string} [language_override]
   * @param {string} [needsreview] Filter on Knowdledge Base Articles that are past their next review date.
   * @param {string} [order] The name of the field to order by first.
   * @param {string} [order2] The name of the field to order by second.
   * @param {string} [order3] The name of the field to order by third.
   * @param {string} [order4] The name of the field to order by fourth.
   * @param {string} [order5] The name of the field to order by fifth.
   * @param {boolean} [orderdesc] Whether to order ascending or descending on first order.
   * @param {boolean} [orderdesc2] Whether to order ascending or descending on second order.
   * @param {boolean} [orderdesc3] Whether to order ascending or descending on third order.
   * @param {boolean} [orderdesc4] Whether to order ascending or descending on fourth order.
   * @param {boolean} [orderdesc5] Whether to order ascending or descending on fifth order.
   * @param {number} [organisation_id] Filters by Knowdledge Base Articles belonging to a particular organisation.
   * @param {number} [page_no] When using Pagination, the page number to return.
   * @param {number} [page_size] When using Pagination, the size of the page.
   * @param {boolean} [pageinate] Whether to use Pagination in the response.
   * @param {number} [related_to] Filters response based on the related Knowledge Base Article.
   * @param {number} [related_to_ticket] Filters response based on the related ticket.
   * @param {string} [search] Filters response based on the search string.
   * @param {number} [site_id] Filters by the specified site.
   * @param {number} [type] Filters response based on the Knowledge Base Article type.
   */
  getKBArticle({
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
  }: {
    activeinactive?: string
    advanced_search?: string
    articletype?: string
    client_id?: number
    count?: number
    device_id?: number
    faqlists?: string
    includeactive?: boolean
    includeinactive?: boolean
    key?: string
    language_code?: string
    language_override?: string
    needsreview?: string
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
    organisation_id?: number
    page_no?: number
    page_size?: number
    pageinate?: boolean
    related_to?: number
    related_to_ticket?: number
    search?: string
    site_id?: number
    type?: number
  }): Promise<KBEntry_View> {
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

  postKBArticle({ kBEntryList }: { kBEntryList: Array<KBEntry> }): Promise<KBEntry> {
    return this.request({ method: 'post', data: kBEntryList, path: '/KBArticle' })
  }

  /**
   * @summary Get one KBEntry
   * @description Use this to return a single instance of KBEntry. Requires authentication.
   * @param {number} id
   * @param {boolean} [includedetails] Include extra objects in the response.
   * @param {string} [language_code]
   * @param {string} [language_override]
   * @param {number} [organisation_id]
   */
  getKBArticleById({
    id,
    includedetails,
    language_code,
    language_override,
    organisation_id,
  }: {
    id: number
    includedetails?: boolean
    language_code?: string
    language_override?: string
    organisation_id?: number
  }): Promise<KBEntry> {
    return this.request({
      method: 'get',
      path: `/KBArticle/${id}`,
      params: { includedetails, language_code, language_override, organisation_id },
    })
  }

  /**
   * @param {number} id
   */
  deleteKBArticleById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/KBArticle/${id}` })
  }

  postKBArticleVote({ kBEntryList }: { kBEntryList: Array<KBEntry> }): Promise<unknown> {
    return this.request({ method: 'post', data: kBEntryList, path: '/KBArticle/vote' })
  }
}
