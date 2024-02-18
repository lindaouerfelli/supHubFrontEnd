/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ReservationDto } from '../../models/reservation-dto';

export interface GetAllPostsByUser$Params {
  userId: number;
}

export function getAllPostsByUser(http: HttpClient, rootUrl: string, params: GetAllPostsByUser$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ReservationDto>>> {
  const rb = new RequestBuilder(rootUrl, getAllPostsByUser.PATH, 'get');
  if (params) {
    rb.path('userId', params.userId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ReservationDto>>;
    })
  );
}

getAllPostsByUser.PATH = '/reservations/user/{userId}';
