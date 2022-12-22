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

import { GameTableDto } from '../models/game-table-dto';

@Injectable({
  providedIn: 'root',
})
export class GameTableService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiGameTableGet
   */
  static readonly ApiGameTableGetPath = '/api/GameTable';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameTableGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameTableGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<GameTableDto>>> {

    const rb = new RequestBuilder(this.rootUrl, GameTableService.ApiGameTableGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GameTableDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGameTableGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameTableGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<GameTableDto>> {

    return this.apiGameTableGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GameTableDto>>) => r.body as Array<GameTableDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameTableGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameTableGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<GameTableDto>>> {

    const rb = new RequestBuilder(this.rootUrl, GameTableService.ApiGameTableGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GameTableDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGameTableGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameTableGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<GameTableDto>> {

    return this.apiGameTableGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<GameTableDto>>) => r.body as Array<GameTableDto>)
    );
  }

  /**
   * Path part for operation apiGameTablePut
   */
  static readonly ApiGameTablePutPath = '/api/GameTable';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameTablePut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGameTablePut$Response(params?: {
    id?: number;
    context?: HttpContext
    body?: GameTableDto
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GameTableService.ApiGameTablePutPath, 'put');
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
   * To access the full response (for headers, for example), `apiGameTablePut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGameTablePut(params?: {
    id?: number;
    context?: HttpContext
    body?: GameTableDto
  }
): Observable<void> {

    return this.apiGameTablePut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiGameTablePost
   */
  static readonly ApiGameTablePostPath = '/api/GameTable';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameTablePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGameTablePost$Response(params?: {
    context?: HttpContext
    body?: GameTableDto
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GameTableService.ApiGameTablePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiGameTablePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiGameTablePost(params?: {
    context?: HttpContext
    body?: GameTableDto
  }
): Observable<void> {

    return this.apiGameTablePost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiGameTableDelete
   */
  static readonly ApiGameTableDeletePath = '/api/GameTable';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameTableDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameTableDelete$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, GameTableService.ApiGameTableDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiGameTableDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameTableDelete(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiGameTableDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiGameTableIdGet
   */
  static readonly ApiGameTableIdGetPath = '/api/GameTable/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameTableIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameTableIdGet$Plain$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<GameTableDto>> {

    const rb = new RequestBuilder(this.rootUrl, GameTableService.ApiGameTableIdGetPath, 'get');
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
        return r as StrictHttpResponse<GameTableDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGameTableIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameTableIdGet$Plain(params: {
    id: number;
    context?: HttpContext
  }
): Observable<GameTableDto> {

    return this.apiGameTableIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<GameTableDto>) => r.body as GameTableDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiGameTableIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameTableIdGet$Json$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<GameTableDto>> {

    const rb = new RequestBuilder(this.rootUrl, GameTableService.ApiGameTableIdGetPath, 'get');
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
        return r as StrictHttpResponse<GameTableDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiGameTableIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiGameTableIdGet$Json(params: {
    id: number;
    context?: HttpContext
  }
): Observable<GameTableDto> {

    return this.apiGameTableIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<GameTableDto>) => r.body as GameTableDto)
    );
  }

}
