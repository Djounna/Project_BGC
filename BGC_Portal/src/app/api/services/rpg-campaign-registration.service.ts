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

import { RpgCampaignRegistrationDto } from '../models/rpg-campaign-registration-dto';

@Injectable({
  providedIn: 'root',
})
export class RpgCampaignRegistrationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiRpgCampaignRegistrationGet
   */
  static readonly ApiRpgCampaignRegistrationGetPath = '/api/RpgCampaignRegistration';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRpgCampaignRegistrationGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRpgCampaignRegistrationGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<RpgCampaignRegistrationDto>>> {

    const rb = new RequestBuilder(this.rootUrl, RpgCampaignRegistrationService.ApiRpgCampaignRegistrationGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<RpgCampaignRegistrationDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRpgCampaignRegistrationGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRpgCampaignRegistrationGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<RpgCampaignRegistrationDto>> {

    return this.apiRpgCampaignRegistrationGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<RpgCampaignRegistrationDto>>) => r.body as Array<RpgCampaignRegistrationDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRpgCampaignRegistrationGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRpgCampaignRegistrationGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<RpgCampaignRegistrationDto>>> {

    const rb = new RequestBuilder(this.rootUrl, RpgCampaignRegistrationService.ApiRpgCampaignRegistrationGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<RpgCampaignRegistrationDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRpgCampaignRegistrationGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRpgCampaignRegistrationGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<RpgCampaignRegistrationDto>> {

    return this.apiRpgCampaignRegistrationGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<RpgCampaignRegistrationDto>>) => r.body as Array<RpgCampaignRegistrationDto>)
    );
  }

  /**
   * Path part for operation apiRpgCampaignRegistrationPut
   */
  static readonly ApiRpgCampaignRegistrationPutPath = '/api/RpgCampaignRegistration';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRpgCampaignRegistrationPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRpgCampaignRegistrationPut$Response(params?: {
    id?: number;
    context?: HttpContext
    body?: RpgCampaignRegistrationDto
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RpgCampaignRegistrationService.ApiRpgCampaignRegistrationPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiRpgCampaignRegistrationPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRpgCampaignRegistrationPut(params?: {
    id?: number;
    context?: HttpContext
    body?: RpgCampaignRegistrationDto
  }
): Observable<void> {

    return this.apiRpgCampaignRegistrationPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiRpgCampaignRegistrationPost
   */
  static readonly ApiRpgCampaignRegistrationPostPath = '/api/RpgCampaignRegistration';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRpgCampaignRegistrationPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRpgCampaignRegistrationPost$Response(params?: {
    context?: HttpContext
    body?: RpgCampaignRegistrationDto
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RpgCampaignRegistrationService.ApiRpgCampaignRegistrationPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiRpgCampaignRegistrationPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRpgCampaignRegistrationPost(params?: {
    context?: HttpContext
    body?: RpgCampaignRegistrationDto
  }
): Observable<void> {

    return this.apiRpgCampaignRegistrationPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiRpgCampaignRegistrationDelete
   */
  static readonly ApiRpgCampaignRegistrationDeletePath = '/api/RpgCampaignRegistration';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRpgCampaignRegistrationDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRpgCampaignRegistrationDelete$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RpgCampaignRegistrationService.ApiRpgCampaignRegistrationDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiRpgCampaignRegistrationDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRpgCampaignRegistrationDelete(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiRpgCampaignRegistrationDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiRpgCampaignRegistrationIdGet
   */
  static readonly ApiRpgCampaignRegistrationIdGetPath = '/api/RpgCampaignRegistration/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRpgCampaignRegistrationIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRpgCampaignRegistrationIdGet$Plain$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<RpgCampaignRegistrationDto>> {

    const rb = new RequestBuilder(this.rootUrl, RpgCampaignRegistrationService.ApiRpgCampaignRegistrationIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RpgCampaignRegistrationDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRpgCampaignRegistrationIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRpgCampaignRegistrationIdGet$Plain(params: {
    id: number;
    context?: HttpContext
  }
): Observable<RpgCampaignRegistrationDto> {

    return this.apiRpgCampaignRegistrationIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<RpgCampaignRegistrationDto>) => r.body as RpgCampaignRegistrationDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRpgCampaignRegistrationIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRpgCampaignRegistrationIdGet$Json$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<RpgCampaignRegistrationDto>> {

    const rb = new RequestBuilder(this.rootUrl, RpgCampaignRegistrationService.ApiRpgCampaignRegistrationIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<RpgCampaignRegistrationDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRpgCampaignRegistrationIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRpgCampaignRegistrationIdGet$Json(params: {
    id: number;
    context?: HttpContext
  }
): Observable<RpgCampaignRegistrationDto> {

    return this.apiRpgCampaignRegistrationIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<RpgCampaignRegistrationDto>) => r.body as RpgCampaignRegistrationDto)
    );
  }

}
