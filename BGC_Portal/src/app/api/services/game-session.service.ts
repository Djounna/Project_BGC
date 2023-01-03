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

import { GameSessionDto } from '../models/game-session-dto';

@Injectable({
  providedIn: 'root',
})
export class GameSessionService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiGameSessionGet
   */
  static readonly ApiGameSessionGetPath = '/api/GameSession';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameSessionGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameSessionGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<GameSessionDto>>> {

    const rb = new RequestBuilder(this.rootUrl, GameSessionService.ApiGameSessionGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GameSessionDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGameSessionGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameSessionGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<GameSessionDto>> {

    return this.apiGameSessionGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GameSessionDto>>) => r.body as Array<GameSessionDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameSessionGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameSessionGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<GameSessionDto>>> {

    const rb = new RequestBuilder(this.rootUrl, GameSessionService.ApiGameSessionGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GameSessionDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGameSessionGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameSessionGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<GameSessionDto>> {

    return this.apiGameSessionGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GameSessionDto>>) => r.body as Array<GameSessionDto>)
    );
  }

  /**
   * Path part for operation apiGameSessionPut
   */
  static readonly ApiGameSessionPutPath = '/api/GameSession';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameSessionPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGameSessionPut$Response(params?: {
    id?: number;
    context?: HttpContext
    body?: GameSessionDto
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GameSessionService.ApiGameSessionPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiGameSessionPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGameSessionPut(params?: {
    id?: number;
    context?: HttpContext
    body?: GameSessionDto
  }
): Observable<void> {

    return this.apiGameSessionPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiGameSessionPost
   */
  static readonly ApiGameSessionPostPath = '/api/GameSession';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameSessionPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGameSessionPost$Response(params?: {
    context?: HttpContext
    body?: GameSessionDto
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GameSessionService.ApiGameSessionPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGameSessionPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGameSessionPost(params?: {
    context?: HttpContext
    body?: GameSessionDto
  }
): Observable<void> {

    return this.apiGameSessionPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiGameSessionDelete
   */
  static readonly ApiGameSessionDeletePath = '/api/GameSession';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameSessionDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameSessionDelete$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GameSessionService.ApiGameSessionDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiGameSessionDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameSessionDelete(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiGameSessionDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiGameSessionIdGet
   */
  static readonly ApiGameSessionIdGetPath = '/api/GameSession/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameSessionIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameSessionIdGet$Plain$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<GameSessionDto>> {

    const rb = new RequestBuilder(this.rootUrl, GameSessionService.ApiGameSessionIdGetPath, 'get');
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
        return r as StrictHttpResponse<GameSessionDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGameSessionIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameSessionIdGet$Plain(params: {
    id: number;
    context?: HttpContext
  }
): Observable<GameSessionDto> {

    return this.apiGameSessionIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<GameSessionDto>) => r.body as GameSessionDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameSessionIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameSessionIdGet$Json$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<GameSessionDto>> {

    const rb = new RequestBuilder(this.rootUrl, GameSessionService.ApiGameSessionIdGetPath, 'get');
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
        return r as StrictHttpResponse<GameSessionDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGameSessionIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameSessionIdGet$Json(params: {
    id: number;
    context?: HttpContext
  }
): Observable<GameSessionDto> {

    return this.apiGameSessionIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<GameSessionDto>) => r.body as GameSessionDto)
    );
  }

  /**
   * Path part for operation apiGameSessionMemberNameGet
   */
  static readonly ApiGameSessionMemberNameGetPath = '/api/GameSession/memberName';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameSessionMemberNameGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameSessionMemberNameGet$Plain$Response(params?: {
    memberName?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<GameSessionDto>>> {

    const rb = new RequestBuilder(this.rootUrl, GameSessionService.ApiGameSessionMemberNameGetPath, 'get');
    if (params) {
      rb.query('memberName', params.memberName, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GameSessionDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGameSessionMemberNameGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameSessionMemberNameGet$Plain(params?: {
    memberName?: string;
    context?: HttpContext
  }
): Observable<Array<GameSessionDto>> {

    return this.apiGameSessionMemberNameGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GameSessionDto>>) => r.body as Array<GameSessionDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameSessionMemberNameGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameSessionMemberNameGet$Json$Response(params?: {
    memberName?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<GameSessionDto>>> {

    const rb = new RequestBuilder(this.rootUrl, GameSessionService.ApiGameSessionMemberNameGetPath, 'get');
    if (params) {
      rb.query('memberName', params.memberName, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GameSessionDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGameSessionMemberNameGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameSessionMemberNameGet$Json(params?: {
    memberName?: string;
    context?: HttpContext
  }
): Observable<Array<GameSessionDto>> {

    return this.apiGameSessionMemberNameGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GameSessionDto>>) => r.body as Array<GameSessionDto>)
    );
  }

}
