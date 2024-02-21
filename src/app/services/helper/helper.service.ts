import { Injectable } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  private jwtHelper : JwtHelperService = new JwtHelperService();
  private decodedToken : any;

  constructor() {

    // cest ce que je veux dire au moment dinjection de ce service !
     this.decodedToken = this.jwtHelper.decodeToken(localStorage.getItem('token') as string);
     // achaque fois je fais ca je suis sur et certaines que ja un token otherwise les guard vont faire leur travail ! je parle above all de token guard !!
  }

  get UserId() : number {
    return this.decodedToken.userId;
  }

  get UserFullname () : string {
    return this.decodedToken.fullName;
  }



}
