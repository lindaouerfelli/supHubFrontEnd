/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ReservationDto } from '../../models/reservation-dto';

export interface FindAll1$Params {
}

export function findAll1(http: HttpClient, rootUrl: string, params?: FindAll1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ReservationDto>>> {
  const rb = new RequestBuilder(rootUrl, findAll1.PATH, 'get');
  if (params) {
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

findAll1.PATH = '/reservations/';
