/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { MessageDto } from '../../models/message-dto';

export interface FindAllByUserId$Params {
  'user-id': number;
}

export function findAllByUserId(http: HttpClient, rootUrl: string, params: FindAllByUserId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<MessageDto>>> {
  const rb = new RequestBuilder(rootUrl, findAllByUserId.PATH, 'get');
  if (params) {
    rb.path('user-id', params['user-id'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<MessageDto>>;
    })
  );
}

findAllByUserId.PATH = '/messages/user/{user-id}';
