/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link Lookup} */
export type Lookup = schemas['Lookup']

/**
 * @module LookupAPI
 */

/**
 * Lookup module
 * @public
 */
export class LookupAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of Lookup
   * @description Use this to return multiple Lookup.<br>
				Requires authentication.
   * @param {number} [access_control_level] 
   * @param {number} [assettype_id] 
   * @param {number} [client_id] 
   * @param {string} [clientname] 
   * @param {number} [contract_id] 
   * @param {number} [country_code_id] 
   * @param {string} [dbc_company_id] 
   * @param {string} [domain] 
   * @param {boolean} [exclude_nocharge] 
   * @param {boolean} [exclude_nolinkedtypes] 
   * @param {boolean} [exclude_zero] 
   * @param {boolean} [iscustomfield] 
   * @param {boolean} [istree] 
   * @param {number} [lookupid] 
   * @param {number} [ordervaluetype] 
   * @param {number} [outcome_id] 
   * @param {boolean} [showallcodes] 
   * @param {number} [ticket_id] 
   * @param {boolean} [unameaprestriction] 
   * @param {number} [use] 
   * @param {number} [use2] 
   */
  getLookup({
    access_control_level,
    assettype_id,
    client_id,
    clientname,
    contract_id,
    country_code_id,
    dbc_company_id,
    domain,
    exclude_nocharge,
    exclude_nolinkedtypes,
    exclude_zero,
    iscustomfield,
    istree,
    lookupid,
    ordervaluetype,
    outcome_id,
    showallcodes,
    ticket_id,
    unameaprestriction,
    use,
    use2,
  }: {
    access_control_level?: number
    assettype_id?: number
    client_id?: number
    clientname?: string
    contract_id?: number
    country_code_id?: number
    dbc_company_id?: string
    domain?: string
    exclude_nocharge?: boolean
    exclude_nolinkedtypes?: boolean
    exclude_zero?: boolean
    iscustomfield?: boolean
    istree?: boolean
    lookupid?: number
    ordervaluetype?: number
    outcome_id?: number
    showallcodes?: boolean
    ticket_id?: number
    unameaprestriction?: boolean
    use?: number
    use2?: number
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Lookup',
      params: {
        access_control_level,
        assettype_id,
        client_id,
        clientname,
        contract_id,
        country_code_id,
        dbc_company_id,
        domain,
        exclude_nocharge,
        exclude_nolinkedtypes,
        exclude_zero,
        iscustomfield,
        istree,
        lookupid,
        ordervaluetype,
        outcome_id,
        showallcodes,
        ticket_id,
        unameaprestriction,
        use,
        use2,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postLookup({ lookup }: { lookup: Array<Lookup> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Lookup',
      data: lookup,
    })
  }

  /**
   * @summary Get one Lookup
   * @description Use this to return a single instance of Lookup.<br>
				Requires authentication.
   * @param {number} id 
   * @param {boolean} [includedetails] 
   */
  getLookupById({ id, includedetails }: { id: number; includedetails?: boolean }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Lookup/${id}`,
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
  deleteLookupById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Lookup/${id}`,
    })
  }

  /**
   * 
   * 
   
   */
  postLookupClearCache({}: {}): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Lookup/ClearCache',
    })
  }
}
