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

import { MemberDto } from '../models/member-dto';

@Injectable({
  providedIn: 'root',
})
export class MemberService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiMemberGet
   */
  static readonly ApiMemberGetPath = '/api/Member';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMemberGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMemberGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<MemberDto>>> {

    const rb = new RequestBuilder(this.rootUrl, MemberService.ApiMemberGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MemberDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMemberGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMemberGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<MemberDto>> {

    return this.apiMemberGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MemberDto>>) => r.body as Array<MemberDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMemberGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMemberGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<MemberDto>>> {

    const rb = new RequestBuilder(this.rootUrl, MemberService.ApiMemberGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MemberDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMemberGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMemberGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<MemberDto>> {

    return this.apiMemberGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MemberDto>>) => r.body as Array<MemberDto>)
    );
  }

  /**
   * Path part for operation apiMemberPut
   */
  static readonly ApiMemberPutPath = '/api/Member';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMemberPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMemberPut$Response(params?: {
    id?: number;
    context?: HttpContext
    body?: MemberDto
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MemberService.ApiMemberPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiMemberPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMemberPut(params?: {
    id?: number;
    context?: HttpContext
    body?: MemberDto
  }
): Observable<void> {

    return this.apiMemberPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiMemberPost
   */
  static readonly ApiMemberPostPath = '/api/Member';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMemberPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMemberPost$Response(params?: {
    context?: HttpContext
    body?: MemberDto
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MemberService.ApiMemberPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiMemberPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMemberPost(params?: {
    context?: HttpContext
    body?: MemberDto
  }
): Observable<void> {

    return this.apiMemberPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiMemberDelete
   */
  static readonly ApiMemberDeletePath = '/api/Member';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMemberDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMemberDelete$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MemberService.ApiMemberDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiMemberDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMemberDelete(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.apiMemberDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiMemberIdGet
   */
  static readonly ApiMemberIdGetPath = '/api/Member/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMemberIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMemberIdGet$Plain$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<MemberDto>> {

    const rb = new RequestBuilder(this.rootUrl, MemberService.ApiMemberIdGetPath, 'get');
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
        return r as StrictHttpResponse<MemberDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMemberIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMemberIdGet$Plain(params: {
    id: number;
    context?: HttpContext
  }
): Observable<MemberDto> {

    return this.apiMemberIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<MemberDto>) => r.body as MemberDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMemberIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMemberIdGet$Json$Response(params: {
    id: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<MemberDto>> {

    const rb = new RequestBuilder(this.rootUrl, MemberService.ApiMemberIdGetPath, 'get');
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
        return r as StrictHttpResponse<MemberDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMemberIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMemberIdGet$Json(params: {
    id: number;
    context?: HttpContext
  }
): Observable<MemberDto> {

    return this.apiMemberIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<MemberDto>) => r.body as MemberDto)
    );
  }

  /**
   * Path part for operation apiMemberEmailGet
   */
  static readonly ApiMemberEmailGetPath = '/api/Member/{email}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMemberEmailGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMemberEmailGet$Plain$Response(params: {
    email: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<MemberDto>> {

    const rb = new RequestBuilder(this.rootUrl, MemberService.ApiMemberEmailGetPath, 'get');
    if (params) {
      rb.path('email', params.email, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MemberDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMemberEmailGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMemberEmailGet$Plain(params: {
    email: string;
    context?: HttpContext
  }
): Observable<MemberDto> {

    return this.apiMemberEmailGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<MemberDto>) => r.body as MemberDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMemberEmailGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMemberEmailGet$Json$Response(params: {
    email: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<MemberDto>> {

    const rb = new RequestBuilder(this.rootUrl, MemberService.ApiMemberEmailGetPath, 'get');
    if (params) {
      rb.path('email', params.email, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MemberDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMemberEmailGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMemberEmailGet$Json(params: {
    email: string;
    context?: HttpContext
  }
): Observable<MemberDto> {

    return this.apiMemberEmailGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<MemberDto>) => r.body as MemberDto)
    );
  }

  /**
   * Path part for operation apiMemberNameGet
   */
  static readonly ApiMemberNameGetPath = '/api/Member/{name}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMemberNameGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMemberNameGet$Plain$Response(params: {
    name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<MemberDto>> {

    const rb = new RequestBuilder(this.rootUrl, MemberService.ApiMemberNameGetPath, 'get');
    if (params) {
      rb.path('name', params.name, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MemberDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMemberNameGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMemberNameGet$Plain(params: {
    name: string;
    context?: HttpContext
  }
): Observable<MemberDto> {

    return this.apiMemberNameGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<MemberDto>) => r.body as MemberDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMemberNameGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMemberNameGet$Json$Response(params: {
    name: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<MemberDto>> {

    const rb = new RequestBuilder(this.rootUrl, MemberService.ApiMemberNameGetPath, 'get');
    if (params) {
      rb.path('name', params.name, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MemberDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMemberNameGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMemberNameGet$Json(params: {
    name: string;
    context?: HttpContext
  }
): Observable<MemberDto> {

    return this.apiMemberNameGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<MemberDto>) => r.body as MemberDto)
    );
  }

  /**
   * Path part for operation apiMemberCheckUserExistsPost
   */
  static readonly ApiMemberCheckUserExistsPostPath = '/api/Member/CheckUserExists';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMemberCheckUserExistsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMemberCheckUserExistsPost$Plain$Response(params?: {
    context?: HttpContext
    body?: MemberDto
  }
): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, MemberService.ApiMemberCheckUserExistsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMemberCheckUserExistsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMemberCheckUserExistsPost$Plain(params?: {
    context?: HttpContext
    body?: MemberDto
  }
): Observable<boolean> {

    return this.apiMemberCheckUserExistsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMemberCheckUserExistsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMemberCheckUserExistsPost$Json$Response(params?: {
    context?: HttpContext
    body?: MemberDto
  }
): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, MemberService.ApiMemberCheckUserExistsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMemberCheckUserExistsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMemberCheckUserExistsPost$Json(params?: {
    context?: HttpContext
    body?: MemberDto
  }
): Observable<boolean> {

    return this.apiMemberCheckUserExistsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

}
