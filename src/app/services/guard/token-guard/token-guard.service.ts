import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class TokenGuardService implements CanActivate{

  constructor(
    private router :Router // si le token n'existe pas ou exprire on doit rediriger le user ver sle loginpur le refaire encore une fois

  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // STEP 1 : vérifier quele token est valide

    const token = localStorage.getItem('token');

    if (!token) {
      this.router.navigate(['login']);
      return false;
    }

    // STEP 2 :  on doit valider le token si on l'a

    const jwtHelper = new JwtHelperService();
    const isTokenExpired = jwtHelper.isTokenExpired(token);

    if (isTokenExpired) {
      localStorage.clear();
      this.router.navigate(['login']);
      return false;

    }
    // cesta dire le user est bien authentifié ( car il a un token le token != null ) et le token est bien valide !
    return true;
  }
}


