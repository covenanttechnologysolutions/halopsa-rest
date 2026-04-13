/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link ProjectSetupLines} */
export type ProjectSetupLines = schemas['ProjectSetupLines']

/**
 * @module ProjectSetupLinesAPI
 */

/**
 * ProjectSetupLines module
 * @public
 */
export class ProjectSetupLinesAPI extends BaseAPI {
  postProjectSetupLines({
    projectSetupLinesList,
  }: {
    projectSetupLinesList: Array<ProjectSetupLines>
  }): Promise<ProjectSetupLines> {
    return this.request({ method: 'post', data: projectSetupLinesList, path: '/ProjectSetupLines' })
  }
}
