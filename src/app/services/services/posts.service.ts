/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { available } from '../fn/posts/available';
import { Available$Params } from '../fn/posts/available';
import { delete2 } from '../fn/posts/delete-2';
import { Delete2$Params } from '../fn/posts/delete-2';
import { findAll2 } from '../fn/posts/find-all-2';
import { FindAll2$Params } from '../fn/posts/find-all-2';
import { findById2 } from '../fn/posts/find-by-id-2';
import { FindById2$Params } from '../fn/posts/find-by-id-2';
import { getAllPostsByCategory } from '../fn/posts/get-all-posts-by-category';
import { GetAllPostsByCategory$Params } from '../fn/posts/get-all-posts-by-category';
import { getAllPostsByStatus } from '../fn/posts/get-all-posts-by-status';
import { GetAllPostsByStatus$Params } from '../fn/posts/get-all-posts-by-status';
import { getAllPostsByUser1 } from '../fn/posts/get-all-posts-by-user-1';
import { GetAllPostsByUser1$Params } from '../fn/posts/get-all-posts-by-user-1';
import { PostDto } from '../models/post-dto';
import { save2 } from '../fn/posts/save-2';
import { Save2$Params } from '../fn/posts/save-2';
import { updatePostStatus } from '../fn/posts/update-post-status';
import { UpdatePostStatus$Params } from '../fn/posts/update-post-status';

@Injectable({ providedIn: 'root' })
export class PostsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updatePostStatus()` */
  static readonly UpdatePostStatusPath = '/posts/reserved/{post-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePostStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  updatePostStatus$Response(params: UpdatePostStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return updatePostStatus(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updatePostStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updatePostStatus(params: UpdatePostStatus$Params, context?: HttpContext): Observable<void> {
    return this.updatePostStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `available()` */
  static readonly AvailablePath = '/posts/available/{post-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `available()` instead.
   *
   * This method doesn't expect any request body.
   */
  available$Response(params: Available$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return available(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `available$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  available(params: Available$Params, context?: HttpContext): Observable<void> {
    return this.available$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `findAll2()` */
  static readonly FindAll2Path = '/posts/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll2$Response(params?: FindAll2$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PostDto>>> {
    return findAll2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll2(params?: FindAll2$Params, context?: HttpContext): Observable<Array<PostDto>> {
    return this.findAll2$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PostDto>>): Array<PostDto> => r.body)
    );
  }

  /** Path part for operation `save2()` */
  static readonly Save2Path = '/posts/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save2$Response(params: Save2$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return save2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save2(params: Save2$Params, context?: HttpContext): Observable<number> {
    return this.save2$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findById2()` */
  static readonly FindById2Path = '/posts/{post-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById2$Response(params: FindById2$Params, context?: HttpContext): Observable<StrictHttpResponse<PostDto>> {
    return findById2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById2(params: FindById2$Params, context?: HttpContext): Observable<PostDto> {
    return this.findById2$Response(params, context).pipe(
      map((r: StrictHttpResponse<PostDto>): PostDto => r.body)
    );
  }

  /** Path part for operation `delete2()` */
  static readonly Delete2Path = '/posts/{post-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete2()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete2$Response(params: Delete2$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete2(params: Delete2$Params, context?: HttpContext): Observable<void> {
    return this.delete2$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getAllPostsByUser1()` */
  static readonly GetAllPostsByUser1Path = '/posts/user/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllPostsByUser1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllPostsByUser1$Response(params: GetAllPostsByUser1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PostDto>>> {
    return getAllPostsByUser1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllPostsByUser1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllPostsByUser1(params: GetAllPostsByUser1$Params, context?: HttpContext): Observable<Array<PostDto>> {
    return this.getAllPostsByUser1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PostDto>>): Array<PostDto> => r.body)
    );
  }

  /** Path part for operation `getAllPostsByStatus()` */
  static readonly GetAllPostsByStatusPath = '/posts/status/{status}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllPostsByStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllPostsByStatus$Response(params: GetAllPostsByStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PostDto>>> {
    return getAllPostsByStatus(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllPostsByStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllPostsByStatus(params: GetAllPostsByStatus$Params, context?: HttpContext): Observable<Array<PostDto>> {
    return this.getAllPostsByStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PostDto>>): Array<PostDto> => r.body)
    );
  }

  /** Path part for operation `getAllPostsByCategory()` */
  static readonly GetAllPostsByCategoryPath = '/posts/category/{category}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllPostsByCategory()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllPostsByCategory$Response(params: GetAllPostsByCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PostDto>>> {
    return getAllPostsByCategory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllPostsByCategory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllPostsByCategory(params: GetAllPostsByCategory$Params, context?: HttpContext): Observable<Array<PostDto>> {
    return this.getAllPostsByCategory$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PostDto>>): Array<PostDto> => r.body)
    );
  }

}
