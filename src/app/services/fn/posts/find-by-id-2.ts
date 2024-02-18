/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PostDto } from '../../models/post-dto';

export interface FindById2$Params {
  'post-id': number;
}

export function findById2(http: HttpClient, rootUrl: string, params: FindById2$Params, context?: HttpContext): Observable<StrictHttpResponse<PostDto>> {
  const rb = new RequestBuilder(rootUrl, findById2.PATH, 'get');
  if (params) {
    rb.path('post-id', params['post-id'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PostDto>;
    })
  );
}

findById2.PATH = '/posts/{post-id}';
