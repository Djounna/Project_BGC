/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { RpgCampaignDto } from '../models/rpg-campaign-dto';

@Injectable({
  providedIn: 'root',
})
export class RpgCampaignService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiRpgCampaignGet
   */
  static readonly ApiRpgCampaignGetPath = '/api/RpgCampaign';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRpgCampaignGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRpgCampaignGet$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RpgCampaignService.ApiRpgCampaignGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRpgCampaignGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRpgCampaignGet(params?: {
    context?: HttpContext
  }
): Observable<void> {

    return this.apiRpgCampaignGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiRpgCampaignPut
   */
  static readonly ApiRpgCampaignPutPath = '/api/RpgCampaign';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRpgCampaignPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRpgCampaignPut$Response(params?: {
    id?: number;
    context?: HttpContext
    body?: RpgCampaignDto
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RpgCampaignService.ApiRpgCampaignPutPath, 'put');
    if (params) {
      rb.query('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRpgCampaignPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRpgCampaignPut(params?: {
    id?: number;
    context?: HttpContext
    body?: RpgCampaignDto
  }
): Observable<void> {

    return this.apiRpgCampaignPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiRpgCampaignPost
   */
  static readonly ApiRpgCampaignPostPath = '/api/RpgCampaign';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRpgCampaignPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRpgCampaignPost$Response(params?: {
    context?: HttpContext
    body?: RpgCampaignDto
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RpgCampaignService.ApiRpgCampaignPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRpgCampaignPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRpgCampaignPost(params?: {
    context?: HttpContext
    body?: RpgCampaignDto
  }
): Observable<void> {

    return this.apiRpgCampaignPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiRpgCampaignDelete
   */
  static readonly ApiRpgCampaignDeletePath = '/api/RpgCampaign';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRpgCampaignDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRpgCampaignDelete$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RpgCampaignService.ApiRpgCampaignDeletePath, 'delete');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRpgCampaignDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRpgCampaignDelete(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiRpgCampaignDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiRpgCampaignIdGet
   */
  static readonly ApiRpgCampaignIdGetPath = '/api/RpgCampaign/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRpgCampaignIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRpgCampaignIdGet$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RpgCampaignService.ApiRpgCampaignIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRpgCampaignIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRpgCampaignIdGet(params: {
    id: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiRpgCampaignIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
