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

import { RpgSessionDto } from '../models/rpg-session-dto';

@Injectable({
  providedIn: 'root',
})
export class RpgSessionService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiRpgSessionGet
   */
  static readonly ApiRpgSessionGetPath = '/api/RpgSession';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRpgSessionGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRpgSessionGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<RpgSessionDto>>> {

    const rb = new RequestBuilder(this.rootUrl, RpgSessionService.ApiRpgSessionGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<RpgSessionDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRpgSessionGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRpgSessionGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<RpgSessionDto>> {

    return this.apiRpgSessionGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<RpgSessionDto>>) => r.body as Array<RpgSessionDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRpgSessionGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRpgSessionGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<RpgSessionDto>>> {

    const rb = new RequestBuilder(this.rootUrl, RpgSessionService.ApiRpgSessionGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<RpgSessionDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRpgSessionGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRpgSessionGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<RpgSessionDto>> {

    return this.apiRpgSessionGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<RpgSessionDto>>) => r.body as Array<RpgSessionDto>)
    );
  }

  /**
   * Path part for operation apiRpgSessionPut
   */
  static readonly ApiRpgSessionPutPath = '/api/RpgSession';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRpgSessionPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRpgSessionPut$Response(params?: {
    id?: number;
    context?: HttpContext
    body?: RpgSessionDto
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RpgSessionService.ApiRpgSessionPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiRpgSessionPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRpgSessionPut(params?: {
    id?: number;
    context?: HttpContext
    body?: RpgSessionDto
  }
): Observable<void> {

    return this.apiRpgSessionPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiRpgSessionPost
   */
  static readonly ApiRpgSessionPostPath = '/api/RpgSession';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRpgSessionPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRpgSessionPost$Response(params?: {
    context?: HttpContext
    body?: RpgSessionDto
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RpgSessionService.ApiRpgSessionPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiRpgSessionPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRpgSessionPost(params?: {
    context?: HttpContext
    body?: RpgSessionDto
  }
): Observable<void> {

    return this.apiRpgSessionPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiRpgSessionDelete
   */
  static readonly ApiRpgSessionDeletePath = '/api/RpgSession';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRpgSessionDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRpgSessionDelete$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, RpgSessionService.ApiRpgSessionDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiRpgSessionDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRpgSessionDelete(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiRpgSessionDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiRpgSessionIdGet
   */
  static readonly ApiRpgSessionIdGetPath = '/api/RpgSession/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRpgSessionIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRpgSessionIdGet$Plain$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<RpgSessionDto>> {

    const rb = new RequestBuilder(this.rootUrl, RpgSessionService.ApiRpgSessionIdGetPath, 'get');
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
        return r as StrictHttpResponse<RpgSessionDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRpgSessionIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRpgSessionIdGet$Plain(params: {
    id: number;
    context?: HttpContext
  }
): Observable<RpgSessionDto> {

    return this.apiRpgSessionIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<RpgSessionDto>) => r.body as RpgSessionDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRpgSessionIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRpgSessionIdGet$Json$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<RpgSessionDto>> {

    const rb = new RequestBuilder(this.rootUrl, RpgSessionService.ApiRpgSessionIdGetPath, 'get');
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
        return r as StrictHttpResponse<RpgSessionDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiRpgSessionIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRpgSessionIdGet$Json(params: {
    id: number;
    context?: HttpContext
  }
): Observable<RpgSessionDto> {

    return this.apiRpgSessionIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<RpgSessionDto>) => r.body as RpgSessionDto)
    );
  }

}
