/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PostSumDetails } from '../../models/post-sum-details';

export interface CountTotalPostsBetweenDatess$Params {
  'start-date': string;
  'end-date': string;
}

export function countTotalPostsBetweenDatess(http: HttpClient, rootUrl: string, params: CountTotalPostsBetweenDatess$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PostSumDetails>>> {
  const rb = new RequestBuilder(rootUrl, countTotalPostsBetweenDatess.PATH, 'get');
  if (params) {
    rb.query('start-date', params['start-date'], {});
    rb.query('end-date', params['end-date'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<PostSumDetails>>;
    })
  );
}

countTotalPostsBetweenDatess.PATH = '/statistics/count-by-date';
