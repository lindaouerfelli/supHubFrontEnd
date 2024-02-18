/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { countTotalPostsBetweenDatess } from '../fn/statistics/count-total-posts-between-datess';
import { CountTotalPostsBetweenDatess$Params } from '../fn/statistics/count-total-posts-between-datess';
import { countTotalPostss } from '../fn/statistics/count-total-postss';
import { CountTotalPostss$Params } from '../fn/statistics/count-total-postss';
import { PostSumDetails } from '../models/post-sum-details';

@Injectable({ providedIn: 'root' })
export class StatisticsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `countTotalPostss()` */
  static readonly CountTotalPostssPath = '/statistics/count';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `countTotalPostss()` instead.
   *
   * This method doesn't expect any request body.
   */
  countTotalPostss$Response(params?: CountTotalPostss$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return countTotalPostss(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `countTotalPostss$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  countTotalPostss(params?: CountTotalPostss$Params, context?: HttpContext): Observable<number> {
    return this.countTotalPostss$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `countTotalPostsBetweenDatess()` */
  static readonly CountTotalPostsBetweenDatessPath = '/statistics/count-by-date';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `countTotalPostsBetweenDatess()` instead.
   *
   * This method doesn't expect any request body.
   */
  countTotalPostsBetweenDatess$Response(params: CountTotalPostsBetweenDatess$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PostSumDetails>>> {
    return countTotalPostsBetweenDatess(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `countTotalPostsBetweenDatess$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  countTotalPostsBetweenDatess(params: CountTotalPostsBetweenDatess$Params, context?: HttpContext): Observable<Array<PostSumDetails>> {
    return this.countTotalPostsBetweenDatess$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PostSumDetails>>): Array<PostSumDetails> => r.body)
    );
  }

}
