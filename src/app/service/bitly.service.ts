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
    this.token = '909436c9e26329867d7f5b217e4a5d3faca5be7b';
  }

  acortarUrl(urlAcortar : string): Observable<any>{

    const tokenHeader = new HttpHeaders({Authorization: 'Bearer ' + this.token});

    const BODY = {
      "long_url" : urlAcortar
    }

    return this.http.post(this.url, BODY, {headers : tokenHeader});
  }



}
