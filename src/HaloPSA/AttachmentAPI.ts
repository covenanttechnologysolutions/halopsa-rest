/* This file was auto-generated, do not manually edit. */
import HaloPSA, { HaloOptions } from '../HaloPSA'
import { components } from '../types'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
/** {@link Attachment} */
export type Attachment = schemas['Attachment']
/** {@link PresignedURLRequest} */
export type PresignedURLRequest = schemas['PresignedURLRequest']

/**
 * @module AttachmentAPI
 */

/**
 * Attachment module
 * @public
 */
export class AttachmentAPI extends HaloPSA {
  constructor(props: HaloOptions) {
    super(props)
  }

  /**
   * @summary List of Attachment
   * @description Use this to return multiple Attachment.<br>
				Requires authentication.
   * @param {number} [action_id] (int) Returns attachments from the action ID specified (requires ticket_id).
   * @param {boolean} [domotzagents] 
   * @param {string} [filetype] (string) Returns attachments of the specified file type.
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
   * @param {number} [ticket_id] (int) Returns attachments from the ticket ID specified.
   * @param {string} [token] 
   * @param {number} [type] (int) Returns attachments of the specified type.
   * @param {number} [unique_id] (int) Returns an attachment with the unique ID specified.
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
  }): Promise<any> {
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

  /**
   * 
   * 
   
   */
  postAttachment({ attachment }: { attachment: Array<Attachment> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Attachment',
      data: attachment,
    })
  }

  /**
   * @summary Get one Attachment
   * @description Use this to return a single instance of Attachment.<br>
				Requires authentication.
   * @param {number} id 
   * @param {number} [childticketid] 
   * @param {boolean} [includedetails] (bool) Include extra objects in the response.
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
  }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Attachment/${id}`,
      params: {
        childticketid,
        includedetails,
        token,
      },
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteAttachmentById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Attachment/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   * @param {string} [token]
   */
  getAttachmentNhserverById({ id, token }: { id: number; token?: string }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Attachment/nhserver/${id}`,
      params: {
        token,
      },
    })
  }

  /**
   *
   *
   * @param {string} id
   */
  getAttachmentImageById({ id }: { id: string }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Attachment/image/${id}`,
    })
  }

  /**
   *
   *
   * @param {string} id
   */
  deleteAttachmentImageById({ id }: { id: string }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Attachment/image/${id}`,
    })
  }

  /**
   *
   *
   * @param {string} [token]
   * @param {string} [nonce]
   */
  getAttachmentImage({ token, nonce }: { token?: string; nonce?: string }): Promise<any> {
    return this.request({
      method: 'get',
      path: '/Attachment/image',
      params: {
        token,
        nonce,
      },
    })
  }

  /**
   *
   *
   * @param {string} [atblob]
   * @param {number} [ticket_id]
   * @param {number} [action_id]
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
   * @param {number} [version_count]
   * @param {string} [last_updated]
   * @param {boolean} [_alreadyuploaded]
   * @param {number} [copy_from_id]
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
   * @param {number} [faultid]
   * @param {boolean} [_isimport]
   * @param {string} [_importtype]
   * @param {string} [atkey]
   * @param {string} [s3url]
   * @param {string} [atlink]
   * @param {number} [child_count]
   * @param {number} [atparentid]
   * @param {number} [atlinkedversionid]
   * @param {string} [date_created_override]
   */
  postAttachmentImage({
    file,
    atblob,
    ticket_id,
    action_id,
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
    version_count,
    last_updated,
    _alreadyuploaded,
    copy_from_id,
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
    faultid,
    _isimport,
    _importtype,
    atkey,
    s3url,
    atlink,
    child_count,
    atparentid,
    atlinkedversionid,
    date_created_override,
  }: {
    file: File
    atblob?: string
    ticket_id?: number
    action_id?: number
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
    version_count?: number
    last_updated?: string
    _alreadyuploaded?: boolean
    copy_from_id?: number
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
    faultid?: number
    _isimport?: boolean
    _importtype?: string
    atkey?: string
    s3url?: string
    atlink?: string
    child_count?: number
    atparentid?: number
    atlinkedversionid?: number
    date_created_override?: string
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Attachment/image',
      data: file,
      params: {
        atblob,
        ticket_id,
        action_id,
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
        version_count,
        last_updated,
        _alreadyuploaded,
        copy_from_id,
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
        faultid,
        _isimport,
        _importtype,
        atkey,
        s3url,
        atlink,
        child_count,
        atparentid,
        atlinkedversionid,
        date_created_override,
      },
    })
  }

  /**
   * 
   * 
   
   */
  postAttachmentGetS3PresignedURL({
    presignedURLRequest,
  }: {
    presignedURLRequest: Array<PresignedURLRequest>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Attachment/GetS3PresignedURL',
      data: presignedURLRequest,
    })
  }

  /**
   * 
   * 
   
   */
  postAttachmentPresignedURLUploadComplete({
    presignedURLRequest,
  }: {
    presignedURLRequest: Array<PresignedURLRequest>
  }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Attachment/PresignedURLUploadComplete',
      data: presignedURLRequest,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  getAttachmentDocumentById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'get',
      path: `/Attachment/document/${id}`,
    })
  }

  /**
   *
   *
   * @param {number} id
   */
  deleteAttachmentDocumentById({ id }: { id: number }): Promise<any> {
    return this.request({
      method: 'delete',
      path: `/Attachment/document/${id}`,
    })
  }

  /**
   * 
   * 
   
   */
  postAttachmentDocument({ attachment }: { attachment: Array<Attachment> }): Promise<any> {
    return this.request({
      method: 'post',
      path: '/Attachment/document',
      data: attachment,
    })
  }
}
