import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitlyService {
  url : string;
  token : string;

  constructor(private http : HttpClient ) { 
    this.url = 'https://api-ssl.bitly.com/v4/shorten';
  }

  acortarUrl(urlAcortar : string): Observable<any>{

    const BODY = {
      "long_url" : urlAcortar
    }

    return this.http.post(this.url, BODY);
  }



}
