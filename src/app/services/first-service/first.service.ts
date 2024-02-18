import { Injectable } from '@angular/core';
import {LightInfoInput} from "../../components/light-info/light-info.component";
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from "@angular/common/http";
import { filter, map } from 'rxjs/operators';
import {Observable, pipe} from 'rxjs';
import {PostDto} from "./post-dto";

@Injectable()

  //providedIn: 'root' // au démarrage de lapp le service est deja disponible

export class FirstService {

  rootUrl = 'http://localhost:8090';

  constructor(

    private httpClient : HttpClient

  ) { }
  findAllPosts(): Observable<any> {

    // CA CEST NOTRE AUTHORIZATION HEADER !
    //let = une var qui change pas constante  comme const
    let _headers : HttpHeaders = new HttpHeaders();
    _headers = _headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJheml6b3VlcmZlbGlAZ21haWwuY29tIiwiZnVsbE5hbWUiOiJheml6IG91ZXJmZWxsaSIsImV4cCI6MTcwODg5NDgzOSwidXNlcklkIjozLCJpYXQiOjE3MDgxNzQ4MzksImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJST0xFX1VTRVIifV19.clURKidhKvEgvqkz9WZ9NzhrxyIE7Prf8-aYZH7xTHk');

    //any de nimporte quelle type get post delete ..
    const request = new HttpRequest<any>(
      "GET",
      this.rootUrl + '/posts/',
      {
        headers : _headers,
        params : null,
        responseType : 'json'
      }
    );

    return this.httpClient.request(request) // ceci cest le service appelé first service il a effectué une requete vers le backend la requete qui et const request
      .pipe(
        filter(r => r instanceof HttpResponse),
        map(res => res as any)
      );

  }
  findAllPostsV2() : Observable<PostDto[]> {

    let _headers : HttpHeaders = new HttpHeaders();
    _headers = _headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJheml6b3VlcmZlbGlAZ21haWwuY29tIiwiZnVsbE5hbWUiOiJheml6IG91ZXJmZWxsaSIsImV4cCI6MTcwODg5NDgzOSwidXNlcklkIjozLCJpYXQiOjE3MDgxNzQ4MzksImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJST0xFX1VTRVIifV19.clURKidhKvEgvqkz9WZ9NzhrxyIE7Prf8-aYZH7xTHk');

    return this.httpClient.get(
       this.rootUrl + '/posts/',

      /*{
        // si cest une requette post on passe ici un body
      },*/

      {
        headers : _headers
      }
    ).pipe(
      filter( r => r instanceof HttpResponse),
      map(res => (res as HttpResponse<PostDto>).body as Array<PostDto>)
    )

  }
}
