/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete3 } from '../fn/messages/delete-3';
import { Delete3$Params } from '../fn/messages/delete-3';
import { findAll3 } from '../fn/messages/find-all-3';
import { FindAll3$Params } from '../fn/messages/find-all-3';
import { findAllByUserId } from '../fn/messages/find-all-by-user-id';
import { FindAllByUserId$Params } from '../fn/messages/find-all-by-user-id';
import { findById3 } from '../fn/messages/find-by-id-3';
import { FindById3$Params } from '../fn/messages/find-by-id-3';
import { MessageDto } from '../models/message-dto';
import { save3 } from '../fn/messages/save-3';
import { Save3$Params } from '../fn/messages/save-3';

@Injectable({ providedIn: 'root' })
export class MessagesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAll3()` */
  static readonly FindAll3Path = '/messages/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll3()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll3$Response(params?: FindAll3$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MessageDto>>> {
    return findAll3(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll3(params?: FindAll3$Params, context?: HttpContext): Observable<Array<MessageDto>> {
    return this.findAll3$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MessageDto>>): Array<MessageDto> => r.body)
    );
  }

  /** Path part for operation `save3()` */
  static readonly Save3Path = '/messages/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save3()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save3$Response(params: Save3$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return save3(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save3$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save3(params: Save3$Params, context?: HttpContext): Observable<number> {
    return this.save3$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findById3()` */
  static readonly FindById3Path = '/messages/{message-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById3()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById3$Response(params: FindById3$Params, context?: HttpContext): Observable<StrictHttpResponse<MessageDto>> {
    return findById3(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById3(params: FindById3$Params, context?: HttpContext): Observable<MessageDto> {
    return this.findById3$Response(params, context).pipe(
      map((r: StrictHttpResponse<MessageDto>): MessageDto => r.body)
    );
  }

  /** Path part for operation `delete3()` */
  static readonly Delete3Path = '/messages/{message-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete3()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete3$Response(params: Delete3$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete3(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete3(params: Delete3$Params, context?: HttpContext): Observable<void> {
    return this.delete3$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `findAllByUserId()` */
  static readonly FindAllByUserIdPath = '/messages/user/{user-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllByUserId()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllByUserId$Response(params: FindAllByUserId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MessageDto>>> {
    return findAllByUserId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllByUserId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllByUserId(params: FindAllByUserId$Params, context?: HttpContext): Observable<Array<MessageDto>> {
    return this.findAllByUserId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<MessageDto>>): Array<MessageDto> => r.body)
    );
  }

}
