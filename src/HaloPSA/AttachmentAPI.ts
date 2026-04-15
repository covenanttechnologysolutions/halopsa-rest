/* This file was auto-generated, do not manually edit. */
import { BaseAPI } from '../BaseAPI'
import type { OctetStreamResponse } from '../types'
import type { components } from '../types'
type schemas = components['schemas']
/** {@link Attachment} */
export type Attachment = schemas['Attachment']
/** {@link Attachment_View} */
export type Attachment_View = schemas['Attachment_View']
/** {@link PresignedURLRequest} */
export type PresignedURLRequest = schemas['PresignedURLRequest']

/**
 * @module AttachmentAPI
 */

/**
 * Attachment module
 * @public
 */
export class AttachmentAPI extends BaseAPI {
  /**
   * @summary List of Attachment
   * @description Use this to return multiple Attachment. Requires authentication.
   * @param {number} [action_id] Returns attachments from the action ID specified (requires ticket_id).
   * @param {boolean} [domotzagents]
   * @param {string} [filetype] Returns attachments of the specified file type.
   * @param {boolean} [idonly]
   * @param {boolean} [isxlsimport]
   * @param {number} [one_attachment_id]
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
   * @param {number} [portal]
   * @param {number} [ticket_id] Returns attachments from the ticket ID specified.
   * @param {string} [token]
   * @param {number} [type] Returns attachments of the specified type.
   * @param {number} [unique_id] Returns an attachment with the unique ID specified.
   */
  getAttachment({
    action_id,
    domotzagents,
    filetype,
    idonly,
    isxlsimport,
    one_attachment_id,
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
    portal,
    ticket_id,
    token,
    type,
    unique_id,
  }: {
    action_id?: number
    domotzagents?: boolean
    filetype?: string
    idonly?: boolean
    isxlsimport?: boolean
    one_attachment_id?: number
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
    portal?: number
    ticket_id?: number
    token?: string
    type?: number
    unique_id?: number
  }): Promise<Attachment_View> {
    return this.request({
      method: 'get',
      path: '/Attachment',
      params: {
        action_id,
        domotzagents,
        filetype,
        idonly,
        isxlsimport,
        one_attachment_id,
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
        portal,
        ticket_id,
        token,
        type,
        unique_id,
      },
    })
  }

  postAttachment({ attachmentList }: { attachmentList: Array<Attachment> }): Promise<Attachment> {
    return this.request({ method: 'post', data: attachmentList, path: '/Attachment' })
  }

  /**
   * @summary Get one Attachment
   * @description Use this to return a single instance of Attachment. Requires authentication.
   * @param {number} id
   * @param {number} [childticketid]
   * @param {boolean} [includedetails] Include extra objects in the response.
   * @param {string} [token]
   */
  getAttachmentById({
    id,
    childticketid,
    includedetails,
    token,
  }: {
    id: number
    childticketid?: number
    includedetails?: boolean
    token?: string
  }): Promise<OctetStreamResponse> {
    return this.request({
      method: 'get',
      path: `/Attachment/${id}`,
      params: { childticketid, includedetails, token },
      responseType: 'arraybuffer',
    })
  }

  /**
   * @param {number} id
   */
  deleteAttachmentById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Attachment/${id}` })
  }

  /**
   * @param {number} id
   * @param {string} [token]
   */
  getAttachmentNhserverById({ id, token }: { id: number; token?: string }): Promise<unknown> {
    return this.request({ method: 'get', path: `/Attachment/nhserver/${id}`, params: { token } })
  }

  /**
   * @param {string} id
   */
  getAttachmentImageById({ id }: { id: string }): Promise<unknown> {
    return this.request({ method: 'get', path: `/Attachment/image/${id}` })
  }

  /**
   * @param {string} id
   */
  deleteAttachmentImageById({ id }: { id: string }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Attachment/image/${id}` })
  }

  /**
   * @param {string} [token]
   * @param {string} [nonce]
   */
  getAttachmentImage({ token, nonce }: { token?: string; nonce?: string }): Promise<unknown> {
    return this.request({ method: 'get', path: '/Attachment/image', params: { token, nonce } })
  }

  /**
   * @param {string} [atblob]
   * @param {boolean} [file_stream.CanRead]
   * @param {boolean} [file_stream.CanSeek]
   * @param {boolean} [file_stream.CanWrite]
   * @param {number} [file_stream.Capacity]
   * @param {number} [file_stream.Length]
   * @param {number} [file_stream.Position]
   * @param {boolean} [file_stream.CanTimeout]
   * @param {number} [file_stream.ReadTimeout]
   * @param {number} [file_stream.WriteTimeout]
   * @param {number} [ticket_id]
   * @param {number} [action_id]
   * @param {number} [outcome_id]
   * @param {number} [aauserid]
   * @param {number} [aaunum]
   * @param {number} [attachmentaction_id]
   * @param {string} [copytopath]
   * @param {boolean} [_canupdate]
   * @param {string} [atguid]
   * @param {string} [useThisGuid]
   * @param {number} [image_upload_id]
   * @param {string} [image_upload_key]
   * @param {boolean} [_enduserportalpdfprint]
   * @param {string} [atthirdpartyid]
   * @param {boolean} [atallowguid]
   * @param {number} [atencid]
   * @param {string} [link]
   * @param {string} [atipaddress]
   * @param {number} [atimageuse]
   * @param {string} [atcontenttype]
   * @param {number} [anon_outcomeid]
   * @param {string} [content_id]
   * @param {boolean} [has_scanned]
   * @param {string} [_warning]
   * @param {boolean} [_is_new_version]
   * @param {string} [parent_name]
   * @param {string} [parent_desc]
   * @param {number} [version_count]
   * @param {string} [last_updated]
   * @param {boolean} [_alreadyuploaded]
   * @param {number} [copy_from_id]
   * @param {number} [new_external_link.elid]
   * @param {number} [new_external_link.eltableid]
   * @param {number} [new_external_link.elmoduleid]
   * @param {string} [new_external_link.elintegrationname]
   * @param {number} [new_external_link.elhaloid]
   * @param {string} [new_external_link.elthirdpartyid]
   * @param {string} [new_external_link.elthirdpartydesc]
   * @param {string} [new_external_link.elthirdpartytype]
   * @param {string} [new_external_link.elthirdpartyurl]
   * @param {string} [new_external_link.elthirdpartyassignedto]
   * @param {number} [new_external_link.elthirdpartycount]
   * @param {boolean} [new_external_link.elisprimary]
   * @param {string} [new_external_link.halo_desc]
   * @param {number} [new_external_link.halo_second_id]
   * @param {string} [new_external_link.halo_second_desc]
   * @param {string} [new_external_link.extra_match_field]
   * @param {number} [new_external_link.eldetailsid]
   * @param {string} [new_external_link.third_party_secondary_id]
   * @param {string} [new_external_link._warning]
   * @param {string} [new_external_link.elthirdpartystatus]
   * @param {string} [new_external_link.elthirdpartypriority]
   * @param {boolean} [new_external_link._match]
   * @param {boolean} [new_external_link.populate_url]
   * @param {string} [new_external_link.eldatecreated]
   * @param {string} [new_external_link.eldateupdated]
   * @param {string} [new_external_link.elsubscriptionid]
   * @param {string} [new_external_link.elsubscriptionkey]
   * @param {string} [new_external_link.new_subscription_key]
   * @param {string} [new_external_link.elsubscriptionexpiry]
   * @param {any} [new_external_link._webhookaction]
   * @param {number} [new_external_link.elrevisions]
   * @param {boolean} [new_external_link.eldontmoveexistingassets]
   * @param {number} [new_external_link.chat_message_count]
   * @param {string} [new_external_link.elthirdpartyadditionalid]
   * @param {string} [new_external_link.eldescription]
   * @param {boolean} [new_external_link.update_existing_link]
   * @param {Array<unknown>} [new_external_link.filters]
   * @param {number} [new_external_link.elparentid]
   * @param {Array<unknown>} [new_external_link.child_links]
   * @param {string} [new_external_link.elurlforlinkedentity]
   * @param {string} [new_external_link.elurlforlinkedentitycaption]
   * @param {string} [new_external_link.eliconforlinkedentity]
   * @param {string} [_match_thirdparty_id]
   * @param {string} [_match_additional_id]
   * @param {number} [_match_integration_id]
   * @param {string} [_match_integration_name]
   * @param {number} [import_details_id]
   * @param {Array<unknown>} [external_links]
   * @param {Array<unknown>} [access_control]
   * @param {boolean} [_start_transcription]
   * @param {boolean} [_transcription_started]
   * @param {boolean} [_transcription_is_new_action]
   * @param {number} [atid]
   * @param {string} [atfilename]
   * @param {string} [atdatecreated]
   * @param {string} [atnote]
   * @param {number} [atfilesize]
   * @param {number} [attype]
   * @param {number} [atuniqueid]
   * @param {string} [atdesc]
   * @param {boolean} [atshowforusers]
   * @param {boolean} [atisimage]
   * @param {boolean} [aashowforusers]
   * @param {boolean} [aashowforchildren]
   * @param {boolean} [aashowforrelated]
   * @param {string} [atblob_base64]
   * @param {string} [download_url]
   * @param {string} [third_party_token]
   * @param {string} [third_party_id]
   * @param {boolean} [already_posted]
   * @param {string} [atlastupdated]
   * @param {number} [faultid]
   * @param {boolean} [_isimport]
   * @param {string} [_importtype]
   * @param {string} [atkey]
   * @param {string} [s3url]
   * @param {string} [atlink]
   * @param {number} [child_count]
   * @param {number} [atparentid]
   * @param {number} [atlinkedversionid]
   * @param {boolean} [atallowanonupload]
   * @param {number} [tickettype_id]
   * @param {string} [tickettype_guid]
   * @param {string} [validate_guid]
   * @param {string} [date_created_override]
   * @param {string} [import_parentid]
   * @param {string} [folder_hierarchy]
   * @param {number} [access_control_level]
   * @param {boolean} [is_s3]
   */
  postAttachmentImage({
    file,
    atblob,
    'file_stream.CanRead': file_stream_CanRead,
    'file_stream.CanSeek': file_stream_CanSeek,
    'file_stream.CanWrite': file_stream_CanWrite,
    'file_stream.Capacity': file_stream_Capacity,
    'file_stream.Length': file_stream_Length,
    'file_stream.Position': file_stream_Position,
    'file_stream.CanTimeout': file_stream_CanTimeout,
    'file_stream.ReadTimeout': file_stream_ReadTimeout,
    'file_stream.WriteTimeout': file_stream_WriteTimeout,
    ticket_id,
    action_id,
    outcome_id,
    aauserid,
    aaunum,
    attachmentaction_id,
    copytopath,
    _canupdate,
    atguid,
    useThisGuid,
    image_upload_id,
    image_upload_key,
    _enduserportalpdfprint,
    atthirdpartyid,
    atallowguid,
    atencid,
    link,
    atipaddress,
    atimageuse,
    atcontenttype,
    anon_outcomeid,
    content_id,
    has_scanned,
    _warning,
    _is_new_version,
    parent_name,
    parent_desc,
    version_count,
    last_updated,
    _alreadyuploaded,
    copy_from_id,
    'new_external_link.elid': new_external_link_elid,
    'new_external_link.eltableid': new_external_link_eltableid,
    'new_external_link.elmoduleid': new_external_link_elmoduleid,
    'new_external_link.elintegrationname': new_external_link_elintegrationname,
    'new_external_link.elhaloid': new_external_link_elhaloid,
    'new_external_link.elthirdpartyid': new_external_link_elthirdpartyid,
    'new_external_link.elthirdpartydesc': new_external_link_elthirdpartydesc,
    'new_external_link.elthirdpartytype': new_external_link_elthirdpartytype,
    'new_external_link.elthirdpartyurl': new_external_link_elthirdpartyurl,
    'new_external_link.elthirdpartyassignedto': new_external_link_elthirdpartyassignedto,
    'new_external_link.elthirdpartycount': new_external_link_elthirdpartycount,
    'new_external_link.elisprimary': new_external_link_elisprimary,
    'new_external_link.halo_desc': new_external_link_halo_desc,
    'new_external_link.halo_second_id': new_external_link_halo_second_id,
    'new_external_link.halo_second_desc': new_external_link_halo_second_desc,
    'new_external_link.extra_match_field': new_external_link_extra_match_field,
    'new_external_link.eldetailsid': new_external_link_eldetailsid,
    'new_external_link.third_party_secondary_id': new_external_link_third_party_secondary_id,
    'new_external_link._warning': new_external_link__warning,
    'new_external_link.elthirdpartystatus': new_external_link_elthirdpartystatus,
    'new_external_link.elthirdpartypriority': new_external_link_elthirdpartypriority,
    'new_external_link._match': new_external_link__match,
    'new_external_link.populate_url': new_external_link_populate_url,
    'new_external_link.eldatecreated': new_external_link_eldatecreated,
    'new_external_link.eldateupdated': new_external_link_eldateupdated,
    'new_external_link.elsubscriptionid': new_external_link_elsubscriptionid,
    'new_external_link.elsubscriptionkey': new_external_link_elsubscriptionkey,
    'new_external_link.new_subscription_key': new_external_link_new_subscription_key,
    'new_external_link.elsubscriptionexpiry': new_external_link_elsubscriptionexpiry,
    'new_external_link._webhookaction': new_external_link__webhookaction,
    'new_external_link.elrevisions': new_external_link_elrevisions,
    'new_external_link.eldontmoveexistingassets': new_external_link_eldontmoveexistingassets,
    'new_external_link.chat_message_count': new_external_link_chat_message_count,
    'new_external_link.elthirdpartyadditionalid': new_external_link_elthirdpartyadditionalid,
    'new_external_link.eldescription': new_external_link_eldescription,
    'new_external_link.update_existing_link': new_external_link_update_existing_link,
    'new_external_link.filters': new_external_link_filters,
    'new_external_link.elparentid': new_external_link_elparentid,
    'new_external_link.child_links': new_external_link_child_links,
    'new_external_link.elurlforlinkedentity': new_external_link_elurlforlinkedentity,
    'new_external_link.elurlforlinkedentitycaption': new_external_link_elurlforlinkedentitycaption,
    'new_external_link.eliconforlinkedentity': new_external_link_eliconforlinkedentity,
    _match_thirdparty_id,
    _match_additional_id,
    _match_integration_id,
    _match_integration_name,
    import_details_id,
    external_links,
    access_control,
    _start_transcription,
    _transcription_started,
    _transcription_is_new_action,
    atid,
    atfilename,
    atdatecreated,
    atnote,
    atfilesize,
    attype,
    atuniqueid,
    atdesc,
    atshowforusers,
    atisimage,
    aashowforusers,
    aashowforchildren,
    aashowforrelated,
    atblob_base64,
    download_url,
    third_party_token,
    third_party_id,
    already_posted,
    atlastupdated,
    faultid,
    _isimport,
    _importtype,
    atkey,
    s3url,
    atlink,
    child_count,
    atparentid,
    atlinkedversionid,
    atallowanonupload,
    tickettype_id,
    tickettype_guid,
    validate_guid,
    date_created_override,
    import_parentid,
    folder_hierarchy,
    access_control_level,
    is_s3,
  }: {
    file: File
    atblob?: string
    'file_stream.CanRead'?: boolean
    'file_stream.CanSeek'?: boolean
    'file_stream.CanWrite'?: boolean
    'file_stream.Capacity'?: number
    'file_stream.Length'?: number
    'file_stream.Position'?: number
    'file_stream.CanTimeout'?: boolean
    'file_stream.ReadTimeout'?: number
    'file_stream.WriteTimeout'?: number
    ticket_id?: number
    action_id?: number
    outcome_id?: number
    aauserid?: number
    aaunum?: number
    attachmentaction_id?: number
    copytopath?: string
    _canupdate?: boolean
    atguid?: string
    useThisGuid?: string
    image_upload_id?: number
    image_upload_key?: string
    _enduserportalpdfprint?: boolean
    atthirdpartyid?: string
    atallowguid?: boolean
    atencid?: number
    link?: string
    atipaddress?: string
    atimageuse?: number
    atcontenttype?: string
    anon_outcomeid?: number
    content_id?: string
    has_scanned?: boolean
    _warning?: string
    _is_new_version?: boolean
    parent_name?: string
    parent_desc?: string
    version_count?: number
    last_updated?: string
    _alreadyuploaded?: boolean
    copy_from_id?: number
    'new_external_link.elid'?: number
    'new_external_link.eltableid'?: number
    'new_external_link.elmoduleid'?: number
    'new_external_link.elintegrationname'?: string
    'new_external_link.elhaloid'?: number
    'new_external_link.elthirdpartyid'?: string
    'new_external_link.elthirdpartydesc'?: string
    'new_external_link.elthirdpartytype'?: string
    'new_external_link.elthirdpartyurl'?: string
    'new_external_link.elthirdpartyassignedto'?: string
    'new_external_link.elthirdpartycount'?: number
    'new_external_link.elisprimary'?: boolean
    'new_external_link.halo_desc'?: string
    'new_external_link.halo_second_id'?: number
    'new_external_link.halo_second_desc'?: string
    'new_external_link.extra_match_field'?: string
    'new_external_link.eldetailsid'?: number
    'new_external_link.third_party_secondary_id'?: string
    'new_external_link._warning'?: string
    'new_external_link.elthirdpartystatus'?: string
    'new_external_link.elthirdpartypriority'?: string
    'new_external_link._match'?: boolean
    'new_external_link.populate_url'?: boolean
    'new_external_link.eldatecreated'?: string
    'new_external_link.eldateupdated'?: string
    'new_external_link.elsubscriptionid'?: string
    'new_external_link.elsubscriptionkey'?: string
    'new_external_link.new_subscription_key'?: string
    'new_external_link.elsubscriptionexpiry'?: string
    'new_external_link._webhookaction'?: any
    'new_external_link.elrevisions'?: number
    'new_external_link.eldontmoveexistingassets'?: boolean
    'new_external_link.chat_message_count'?: number
    'new_external_link.elthirdpartyadditionalid'?: string
    'new_external_link.eldescription'?: string
    'new_external_link.update_existing_link'?: boolean
    'new_external_link.filters'?: Array<unknown>
    'new_external_link.elparentid'?: number
    'new_external_link.child_links'?: Array<unknown>
    'new_external_link.elurlforlinkedentity'?: string
    'new_external_link.elurlforlinkedentitycaption'?: string
    'new_external_link.eliconforlinkedentity'?: string
    _match_thirdparty_id?: string
    _match_additional_id?: string
    _match_integration_id?: number
    _match_integration_name?: string
    import_details_id?: number
    external_links?: Array<unknown>
    access_control?: Array<unknown>
    _start_transcription?: boolean
    _transcription_started?: boolean
    _transcription_is_new_action?: boolean
    atid?: number
    atfilename?: string
    atdatecreated?: string
    atnote?: string
    atfilesize?: number
    attype?: number
    atuniqueid?: number
    atdesc?: string
    atshowforusers?: boolean
    atisimage?: boolean
    aashowforusers?: boolean
    aashowforchildren?: boolean
    aashowforrelated?: boolean
    atblob_base64?: string
    download_url?: string
    third_party_token?: string
    third_party_id?: string
    already_posted?: boolean
    atlastupdated?: string
    faultid?: number
    _isimport?: boolean
    _importtype?: string
    atkey?: string
    s3url?: string
    atlink?: string
    child_count?: number
    atparentid?: number
    atlinkedversionid?: number
    atallowanonupload?: boolean
    tickettype_id?: number
    tickettype_guid?: string
    validate_guid?: string
    date_created_override?: string
    import_parentid?: string
    folder_hierarchy?: string
    access_control_level?: number
    is_s3?: boolean
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: file,
      path: '/Attachment/image',
      params: {
        atblob,
        'file_stream.CanRead': file_stream_CanRead,
        'file_stream.CanSeek': file_stream_CanSeek,
        'file_stream.CanWrite': file_stream_CanWrite,
        'file_stream.Capacity': file_stream_Capacity,
        'file_stream.Length': file_stream_Length,
        'file_stream.Position': file_stream_Position,
        'file_stream.CanTimeout': file_stream_CanTimeout,
        'file_stream.ReadTimeout': file_stream_ReadTimeout,
        'file_stream.WriteTimeout': file_stream_WriteTimeout,
        ticket_id,
        action_id,
        outcome_id,
        aauserid,
        aaunum,
        attachmentaction_id,
        copytopath,
        _canupdate,
        atguid,
        useThisGuid,
        image_upload_id,
        image_upload_key,
        _enduserportalpdfprint,
        atthirdpartyid,
        atallowguid,
        atencid,
        link,
        atipaddress,
        atimageuse,
        atcontenttype,
        anon_outcomeid,
        content_id,
        has_scanned,
        _warning,
        _is_new_version,
        parent_name,
        parent_desc,
        version_count,
        last_updated,
        _alreadyuploaded,
        copy_from_id,
        'new_external_link.elid': new_external_link_elid,
        'new_external_link.eltableid': new_external_link_eltableid,
        'new_external_link.elmoduleid': new_external_link_elmoduleid,
        'new_external_link.elintegrationname': new_external_link_elintegrationname,
        'new_external_link.elhaloid': new_external_link_elhaloid,
        'new_external_link.elthirdpartyid': new_external_link_elthirdpartyid,
        'new_external_link.elthirdpartydesc': new_external_link_elthirdpartydesc,
        'new_external_link.elthirdpartytype': new_external_link_elthirdpartytype,
        'new_external_link.elthirdpartyurl': new_external_link_elthirdpartyurl,
        'new_external_link.elthirdpartyassignedto': new_external_link_elthirdpartyassignedto,
        'new_external_link.elthirdpartycount': new_external_link_elthirdpartycount,
        'new_external_link.elisprimary': new_external_link_elisprimary,
        'new_external_link.halo_desc': new_external_link_halo_desc,
        'new_external_link.halo_second_id': new_external_link_halo_second_id,
        'new_external_link.halo_second_desc': new_external_link_halo_second_desc,
        'new_external_link.extra_match_field': new_external_link_extra_match_field,
        'new_external_link.eldetailsid': new_external_link_eldetailsid,
        'new_external_link.third_party_secondary_id': new_external_link_third_party_secondary_id,
        'new_external_link._warning': new_external_link__warning,
        'new_external_link.elthirdpartystatus': new_external_link_elthirdpartystatus,
        'new_external_link.elthirdpartypriority': new_external_link_elthirdpartypriority,
        'new_external_link._match': new_external_link__match,
        'new_external_link.populate_url': new_external_link_populate_url,
        'new_external_link.eldatecreated': new_external_link_eldatecreated,
        'new_external_link.eldateupdated': new_external_link_eldateupdated,
        'new_external_link.elsubscriptionid': new_external_link_elsubscriptionid,
        'new_external_link.elsubscriptionkey': new_external_link_elsubscriptionkey,
        'new_external_link.new_subscription_key': new_external_link_new_subscription_key,
        'new_external_link.elsubscriptionexpiry': new_external_link_elsubscriptionexpiry,
        'new_external_link._webhookaction': new_external_link__webhookaction,
        'new_external_link.elrevisions': new_external_link_elrevisions,
        'new_external_link.eldontmoveexistingassets': new_external_link_eldontmoveexistingassets,
        'new_external_link.chat_message_count': new_external_link_chat_message_count,
        'new_external_link.elthirdpartyadditionalid': new_external_link_elthirdpartyadditionalid,
        'new_external_link.eldescription': new_external_link_eldescription,
        'new_external_link.update_existing_link': new_external_link_update_existing_link,
        'new_external_link.filters': new_external_link_filters,
        'new_external_link.elparentid': new_external_link_elparentid,
        'new_external_link.child_links': new_external_link_child_links,
        'new_external_link.elurlforlinkedentity': new_external_link_elurlforlinkedentity,
        'new_external_link.elurlforlinkedentitycaption':
          new_external_link_elurlforlinkedentitycaption,
        'new_external_link.eliconforlinkedentity': new_external_link_eliconforlinkedentity,
        _match_thirdparty_id,
        _match_additional_id,
        _match_integration_id,
        _match_integration_name,
        import_details_id,
        external_links,
        access_control,
        _start_transcription,
        _transcription_started,
        _transcription_is_new_action,
        atid,
        atfilename,
        atdatecreated,
        atnote,
        atfilesize,
        attype,
        atuniqueid,
        atdesc,
        atshowforusers,
        atisimage,
        aashowforusers,
        aashowforchildren,
        aashowforrelated,
        atblob_base64,
        download_url,
        third_party_token,
        third_party_id,
        already_posted,
        atlastupdated,
        faultid,
        _isimport,
        _importtype,
        atkey,
        s3url,
        atlink,
        child_count,
        atparentid,
        atlinkedversionid,
        atallowanonupload,
        tickettype_id,
        tickettype_guid,
        validate_guid,
        date_created_override,
        import_parentid,
        folder_hierarchy,
        access_control_level,
        is_s3,
      },
    })
  }

  postAttachmentGetS3PresignedURL({
    presignedURLRequestList,
  }: {
    presignedURLRequestList: Array<PresignedURLRequest>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: presignedURLRequestList,
      path: '/Attachment/GetS3PresignedURL',
    })
  }

  postAttachmentPresignedURLUploadComplete({
    presignedURLRequestList,
  }: {
    presignedURLRequestList: Array<PresignedURLRequest>
  }): Promise<unknown> {
    return this.request({
      method: 'post',
      data: presignedURLRequestList,
      path: '/Attachment/PresignedURLUploadComplete',
    })
  }

  /**
   * @param {number} id
   */
  getAttachmentDocumentById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'get', path: `/Attachment/document/${id}` })
  }

  /**
   * @param {number} id
   */
  deleteAttachmentDocumentById({ id }: { id: number }): Promise<unknown> {
    return this.request({ method: 'delete', path: `/Attachment/document/${id}` })
  }

  postAttachmentDocument({
    attachmentList,
  }: {
    attachmentList: Array<Attachment>
  }): Promise<unknown> {
    return this.request({ method: 'post', data: attachmentList, path: '/Attachment/document' })
  }
}
