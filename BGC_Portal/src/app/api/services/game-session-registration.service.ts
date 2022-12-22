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

import { GameSessionRegistrationDto } from '../models/game-session-registration-dto';

@Injectable({
  providedIn: 'root',
})
export class GameSessionRegistrationService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiGameSessionRegistrationGet
   */
  static readonly ApiGameSessionRegistrationGetPath = '/api/GameSessionRegistration';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameSessionRegistrationGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameSessionRegistrationGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<GameSessionRegistrationDto>>> {

    const rb = new RequestBuilder(this.rootUrl, GameSessionRegistrationService.ApiGameSessionRegistrationGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GameSessionRegistrationDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGameSessionRegistrationGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameSessionRegistrationGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<GameSessionRegistrationDto>> {

    return this.apiGameSessionRegistrationGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GameSessionRegistrationDto>>) => r.body as Array<GameSessionRegistrationDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameSessionRegistrationGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameSessionRegistrationGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<GameSessionRegistrationDto>>> {

    const rb = new RequestBuilder(this.rootUrl, GameSessionRegistrationService.ApiGameSessionRegistrationGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GameSessionRegistrationDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGameSessionRegistrationGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameSessionRegistrationGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<GameSessionRegistrationDto>> {

    return this.apiGameSessionRegistrationGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GameSessionRegistrationDto>>) => r.body as Array<GameSessionRegistrationDto>)
    );
  }

  /**
   * Path part for operation apiGameSessionRegistrationPut
   */
  static readonly ApiGameSessionRegistrationPutPath = '/api/GameSessionRegistration';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameSessionRegistrationPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGameSessionRegistrationPut$Response(params?: {
    id?: number;
    context?: HttpContext
    body?: GameSessionRegistrationDto
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GameSessionRegistrationService.ApiGameSessionRegistrationPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiGameSessionRegistrationPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGameSessionRegistrationPut(params?: {
    id?: number;
    context?: HttpContext
    body?: GameSessionRegistrationDto
  }
): Observable<void> {

    return this.apiGameSessionRegistrationPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiGameSessionRegistrationPost
   */
  static readonly ApiGameSessionRegistrationPostPath = '/api/GameSessionRegistration';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameSessionRegistrationPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGameSessionRegistrationPost$Response(params?: {
    context?: HttpContext
    body?: GameSessionRegistrationDto
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GameSessionRegistrationService.ApiGameSessionRegistrationPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGameSessionRegistrationPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGameSessionRegistrationPost(params?: {
    context?: HttpContext
    body?: GameSessionRegistrationDto
  }
): Observable<void> {

    return this.apiGameSessionRegistrationPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiGameSessionRegistrationDelete
   */
  static readonly ApiGameSessionRegistrationDeletePath = '/api/GameSessionRegistration';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameSessionRegistrationDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameSessionRegistrationDelete$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GameSessionRegistrationService.ApiGameSessionRegistrationDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiGameSessionRegistrationDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameSessionRegistrationDelete(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiGameSessionRegistrationDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiGameSessionRegistrationIdGet
   */
  static readonly ApiGameSessionRegistrationIdGetPath = '/api/GameSessionRegistration/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameSessionRegistrationIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameSessionRegistrationIdGet$Plain$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<GameSessionRegistrationDto>> {

    const rb = new RequestBuilder(this.rootUrl, GameSessionRegistrationService.ApiGameSessionRegistrationIdGetPath, 'get');
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
        return r as StrictHttpResponse<GameSessionRegistrationDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGameSessionRegistrationIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameSessionRegistrationIdGet$Plain(params: {
    id: number;
    context?: HttpContext
  }
): Observable<GameSessionRegistrationDto> {

    return this.apiGameSessionRegistrationIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<GameSessionRegistrationDto>) => r.body as GameSessionRegistrationDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameSessionRegistrationIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameSessionRegistrationIdGet$Json$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<GameSessionRegistrationDto>> {

    const rb = new RequestBuilder(this.rootUrl, GameSessionRegistrationService.ApiGameSessionRegistrationIdGetPath, 'get');
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
        return r as StrictHttpResponse<GameSessionRegistrationDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGameSessionRegistrationIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameSessionRegistrationIdGet$Json(params: {
    id: number;
    context?: HttpContext
  }
): Observable<GameSessionRegistrationDto> {

    return this.apiGameSessionRegistrationIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<GameSessionRegistrationDto>) => r.body as GameSessionRegistrationDto)
    );
  }

}
