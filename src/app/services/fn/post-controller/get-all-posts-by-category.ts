/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PostDto } from '../../models/post-dto';

export interface GetAllPostsByCategory$Params {
  category: 'LIVRES' | 'ELECTRONIQUE' | 'VETEMENTS' | 'MEUBLES' | 'EQUIPEMENTSPORTIF' | 'AUTRES';
}

export function getAllPostsByCategory(http: HttpClient, rootUrl: string, params: GetAllPostsByCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<PostDto>>> {
  const rb = new RequestBuilder(rootUrl, getAllPostsByCategory.PATH, 'get');
  if (params) {
    rb.path('category', params.category, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<PostDto>>;
    })
  );
}

getAllPostsByCategory.PATH = '/posts/category/{category}';
