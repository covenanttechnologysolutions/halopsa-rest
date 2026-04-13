/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'

/**
 * @module FeedAPI
 */

/**
 * Feed module
 * @public
 */
export class FeedAPI extends BaseAPI {
  /**
   * @summary List of Feed
   * @description Use this to return multiple Feed. Requires authentication.
   * @param {number} [accountmanager_id]
   * @param {boolean} [agent_only]
   * @param {number} [count]
   * @param {boolean} [exclude_private]
   * @param {boolean} [followed_only]
   * @param {number} [newer_than_id]
   * @param {number} [older_than_id]
   * @param {number} [one_agent_id]
   * @param {number} [one_agents_tickets_id]
   * @param {number} [one_user_id]
   * @param {number} [related_asset_id]
   * @param {number} [related_client_id]
   * @param {number} [related_site_id]
   * @param {number} [related_user_id]
   * @param {boolean} [user_only]
   */
  getFeed({
    accountmanager_id,
    agent_only,
    count,
    exclude_private,
    followed_only,
    newer_than_id,
    older_than_id,
    one_agent_id,
    one_agents_tickets_id,
    one_user_id,
    related_asset_id,
    related_client_id,
    related_site_id,
    related_user_id,
    user_only,
  }: {
    accountmanager_id?: number
    agent_only?: boolean
    count?: number
    exclude_private?: boolean
    followed_only?: boolean
    newer_than_id?: number
    older_than_id?: number
    one_agent_id?: number
    one_agents_tickets_id?: number
    one_user_id?: number
    related_asset_id?: number
    related_client_id?: number
    related_site_id?: number
    related_user_id?: number
    user_only?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'get',
      path: '/Feed',
      params: {
        accountmanager_id,
        agent_only,
        count,
        exclude_private,
        followed_only,
        newer_than_id,
        older_than_id,
        one_agent_id,
        one_agents_tickets_id,
        one_user_id,
        related_asset_id,
        related_client_id,
        related_site_id,
        related_user_id,
        user_only,
      },
    })
  }
}
