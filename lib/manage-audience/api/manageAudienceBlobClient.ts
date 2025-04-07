/**
 * LINE Messaging API
 * This document describes LINE Messaging API.
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/* tslint:disable:no-unused-locals */
import { CreateAudienceGroupResponse } from "../model/createAudienceGroupResponse.js";

import * as Types from "../../types.js";
import { ensureJSON } from "../../utils.js";
import { Readable } from "node:stream";

import HTTPFetchClient, {
  convertResponseToReadable,
} from "../../http-fetch.js";

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

interface httpClientConfig {
  baseURL?: string;
  channelAccessToken: string;
  // TODO support defaultHeaders?
}

export class ManageAudienceBlobClient {
  private httpClient: HTTPFetchClient;

  constructor(config: httpClientConfig) {
    const baseURL = config.baseURL || "https://api-data.line.me";
    this.httpClient = new HTTPFetchClient({
      defaultHeaders: {
        Authorization: "Bearer " + config.channelAccessToken,
      },
      baseURL: baseURL,
    });
  }

  /**
   * Add user IDs or Identifiers for Advertisers (IFAs) to an audience for uploading user IDs (by file).
   * @param file A text file with one user ID or IFA entered per line. Specify text/plain as Content-Type. Max file number: 1 Max number: 1,500,000
   * @param audienceGroupId The audience ID.
   * @param uploadDescription The description to register with the job
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#update-upload-audience-group-by-file"> Documentation</a>
   */
  public async addUserIdsToAudience(
    file: Blob,
    audienceGroupId?: number,
    uploadDescription?: string,
  ): Promise<Types.MessageAPIResponseBase> {
    return (
      await this.addUserIdsToAudienceWithHttpInfo(
        file,
        audienceGroupId,
        uploadDescription,
      )
    ).body;
  }

  /**
   * Add user IDs or Identifiers for Advertisers (IFAs) to an audience for uploading user IDs (by file)..
   * This method includes HttpInfo object to return additional information.
   * @param file A text file with one user ID or IFA entered per line. Specify text/plain as Content-Type. Max file number: 1 Max number: 1,500,000
   * @param audienceGroupId The audience ID.
   * @param uploadDescription The description to register with the job
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#update-upload-audience-group-by-file"> Documentation</a>
   */
  public async addUserIdsToAudienceWithHttpInfo(
    file: Blob,
    audienceGroupId?: number,
    uploadDescription?: string,
  ): Promise<Types.ApiResponseType<Types.MessageAPIResponseBase>> {
    const form = new FormData();
    form.append("audienceGroupId", String(audienceGroupId));
    form.append("uploadDescription", String(uploadDescription));
    form.append("file", file); // file

    const res = await this.httpClient.putFormMultipart(
      "/v2/bot/audienceGroup/upload/byFile",
      form,
    );
    const text = await res.text();
    const parsedBody = text ? JSON.parse(text) : null;
    return { httpResponse: res, body: parsedBody };
  }
  /**
   * Create audience for uploading user IDs (by file).
   * @param file A text file with one user ID or IFA entered per line. Specify text/plain as Content-Type. Max file number: 1 Max number: 1,500,000
   * @param description The audience\\\'s name. This is case-insensitive, meaning AUDIENCE and audience are considered identical. Max character limit: 120
   * @param isIfaAudience To specify recipients by IFAs: set `true`. To specify recipients by user IDs: set `false` or omit isIfaAudience property.
   * @param uploadDescription The description to register for the job (in `jobs[].description`).
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group-by-file"> Documentation</a>
   */
  public async createAudienceForUploadingUserIds(
    file: Blob,
    description?: string,
    isIfaAudience?: boolean,
    uploadDescription?: string,
  ): Promise<CreateAudienceGroupResponse> {
    return (
      await this.createAudienceForUploadingUserIdsWithHttpInfo(
        file,
        description,
        isIfaAudience,
        uploadDescription,
      )
    ).body;
  }

  /**
   * Create audience for uploading user IDs (by file)..
   * This method includes HttpInfo object to return additional information.
   * @param file A text file with one user ID or IFA entered per line. Specify text/plain as Content-Type. Max file number: 1 Max number: 1,500,000
   * @param description The audience\\\'s name. This is case-insensitive, meaning AUDIENCE and audience are considered identical. Max character limit: 120
   * @param isIfaAudience To specify recipients by IFAs: set `true`. To specify recipients by user IDs: set `false` or omit isIfaAudience property.
   * @param uploadDescription The description to register for the job (in `jobs[].description`).
   *
   * @see <a href="https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group-by-file"> Documentation</a>
   */
  public async createAudienceForUploadingUserIdsWithHttpInfo(
    file: Blob,
    description?: string,
    isIfaAudience?: boolean,
    uploadDescription?: string,
  ): Promise<Types.ApiResponseType<CreateAudienceGroupResponse>> {
    const form = new FormData();
    form.append("description", String(description));
    form.append("isIfaAudience", String(isIfaAudience));
    form.append("uploadDescription", String(uploadDescription));
    form.append("file", file); // file

    const res = await this.httpClient.postFormMultipart(
      "/v2/bot/audienceGroup/upload/byFile",
      form,
    );
    const text = await res.text();
    const parsedBody = text ? JSON.parse(text) : null;
    return { httpResponse: res, body: parsedBody };
  }
}
