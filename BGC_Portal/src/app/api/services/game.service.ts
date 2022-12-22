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

import { GameDto } from '../models/game-dto';

@Injectable({
  providedIn: 'root',
})
export class GameService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiGameGet
   */
  static readonly ApiGameGetPath = '/api/Game';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<GameDto>>> {

    const rb = new RequestBuilder(this.rootUrl, GameService.ApiGameGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GameDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGameGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<GameDto>> {

    return this.apiGameGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GameDto>>) => r.body as Array<GameDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<GameDto>>> {

    const rb = new RequestBuilder(this.rootUrl, GameService.ApiGameGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GameDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGameGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<GameDto>> {

    return this.apiGameGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GameDto>>) => r.body as Array<GameDto>)
    );
  }

  /**
   * Path part for operation apiGamePut
   */
  static readonly ApiGamePutPath = '/api/Game';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGamePut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGamePut$Response(params?: {
    id?: number;
    context?: HttpContext
    body?: GameDto
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GameService.ApiGamePutPath, 'put');
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
   * To access the full response (for headers, for example), `apiGamePut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGamePut(params?: {
    id?: number;
    context?: HttpContext
    body?: GameDto
  }
): Observable<void> {

    return this.apiGamePut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiGamePost
   */
  static readonly ApiGamePostPath = '/api/Game';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGamePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGamePost$Response(params?: {
    context?: HttpContext
    body?: GameDto
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GameService.ApiGamePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGamePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGamePost(params?: {
    context?: HttpContext
    body?: GameDto
  }
): Observable<void> {

    return this.apiGamePost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiGameDelete
   */
  static readonly ApiGameDeletePath = '/api/Game';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameDelete$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GameService.ApiGameDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiGameDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameDelete(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiGameDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiGameIdGet
   */
  static readonly ApiGameIdGetPath = '/api/Game/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameIdGet$Plain$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<GameDto>> {

    const rb = new RequestBuilder(this.rootUrl, GameService.ApiGameIdGetPath, 'get');
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
        return r as StrictHttpResponse<GameDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGameIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameIdGet$Plain(params: {
    id: number;
    context?: HttpContext
  }
): Observable<GameDto> {

    return this.apiGameIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<GameDto>) => r.body as GameDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameIdGet$Json$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<GameDto>> {

    const rb = new RequestBuilder(this.rootUrl, GameService.ApiGameIdGetPath, 'get');
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
        return r as StrictHttpResponse<GameDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGameIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameIdGet$Json(params: {
    id: number;
    context?: HttpContext
  }
): Observable<GameDto> {

    return this.apiGameIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<GameDto>) => r.body as GameDto)
    );
  }

}
