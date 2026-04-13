/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link CreateSlackManifest} */
export type CreateSlackManifest = schemas['CreateSlackManifest']

/**
 * @module SlackAPI
 */

/**
 * Slack module
 * @public
 */
export class SlackAPI extends BaseAPI {
  postSlackManifest({
    createSlackManifest,
  }: {
    createSlackManifest: CreateSlackManifest
  }): Promise<unknown> {
    return this.request({ method: 'post', data: createSlackManifest, path: '/Slack/Manifest' })
  }

  postSlackCommand(): Promise<unknown> {
    return this.request({ method: 'post', path: '/Slack/Command' })
  }

  postSlackEvent(): Promise<unknown> {
    return this.request({ method: 'post', path: '/Slack/Event' })
  }

  postSlackInteractivity(): Promise<unknown> {
    return this.request({ method: 'post', path: '/Slack/Interactivity' })
  }
}
