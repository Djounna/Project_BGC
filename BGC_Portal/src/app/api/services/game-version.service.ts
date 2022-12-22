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

import { GameVersionDto } from '../models/game-version-dto';

@Injectable({
  providedIn: 'root',
})
export class GameVersionService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiGameVersionGet
   */
  static readonly ApiGameVersionGetPath = '/api/GameVersion';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameVersionGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameVersionGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<GameVersionDto>>> {

    const rb = new RequestBuilder(this.rootUrl, GameVersionService.ApiGameVersionGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GameVersionDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGameVersionGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameVersionGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<GameVersionDto>> {

    return this.apiGameVersionGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GameVersionDto>>) => r.body as Array<GameVersionDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameVersionGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameVersionGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<GameVersionDto>>> {

    const rb = new RequestBuilder(this.rootUrl, GameVersionService.ApiGameVersionGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GameVersionDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGameVersionGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameVersionGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<GameVersionDto>> {

    return this.apiGameVersionGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GameVersionDto>>) => r.body as Array<GameVersionDto>)
    );
  }

  /**
   * Path part for operation apiGameVersionPut
   */
  static readonly ApiGameVersionPutPath = '/api/GameVersion';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameVersionPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGameVersionPut$Response(params?: {
    id?: number;
    context?: HttpContext
    body?: GameVersionDto
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GameVersionService.ApiGameVersionPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiGameVersionPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGameVersionPut(params?: {
    id?: number;
    context?: HttpContext
    body?: GameVersionDto
  }
): Observable<void> {

    return this.apiGameVersionPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiGameVersionPost
   */
  static readonly ApiGameVersionPostPath = '/api/GameVersion';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameVersionPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGameVersionPost$Response(params?: {
    context?: HttpContext
    body?: GameVersionDto
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GameVersionService.ApiGameVersionPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGameVersionPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGameVersionPost(params?: {
    context?: HttpContext
    body?: GameVersionDto
  }
): Observable<void> {

    return this.apiGameVersionPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiGameVersionDelete
   */
  static readonly ApiGameVersionDeletePath = '/api/GameVersion';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameVersionDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameVersionDelete$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GameVersionService.ApiGameVersionDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiGameVersionDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameVersionDelete(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiGameVersionDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiGameVersionIdGet
   */
  static readonly ApiGameVersionIdGetPath = '/api/GameVersion/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameVersionIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameVersionIdGet$Plain$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<GameVersionDto>> {

    const rb = new RequestBuilder(this.rootUrl, GameVersionService.ApiGameVersionIdGetPath, 'get');
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
        return r as StrictHttpResponse<GameVersionDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGameVersionIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameVersionIdGet$Plain(params: {
    id: number;
    context?: HttpContext
  }
): Observable<GameVersionDto> {

    return this.apiGameVersionIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<GameVersionDto>) => r.body as GameVersionDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameVersionIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameVersionIdGet$Json$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<GameVersionDto>> {

    const rb = new RequestBuilder(this.rootUrl, GameVersionService.ApiGameVersionIdGetPath, 'get');
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
        return r as StrictHttpResponse<GameVersionDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGameVersionIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameVersionIdGet$Json(params: {
    id: number;
    context?: HttpContext
  }
): Observable<GameVersionDto> {

    return this.apiGameVersionIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<GameVersionDto>) => r.body as GameVersionDto)
    );
  }

}
