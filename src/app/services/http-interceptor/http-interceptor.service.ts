import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import * as url from "url";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor() { }
  // ce intercepteur il va intercépter toute la requete sortante etajouter le bearer token a cette requete !
  // il permet d'injecter de facon automatique le bearer token !
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!req.url.includes('/authenticate') || !req.url.includes('/register')) {

      const token = localStorage.getItem('token');
      if (token !== undefined && token !== null) {

        //assigner le token;

        const  authReq = req.clone({
          headers: new HttpHeaders({
            Authorization : 'Bearer ' + token
          })
        });

        return next.handle(authReq);
      }
    }

    return next.handle(req);

  }
}
