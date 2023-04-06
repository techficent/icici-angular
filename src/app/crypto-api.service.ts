import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoResponse } from './crypto-response';

@Injectable({
  providedIn: 'root'
})
export class CryptoApiService {

  constructor(private httpSrv : HttpClient ) { }


  fetchResponse(url : string) : Observable<CryptoResponse>{
    return this.httpSrv.get<CryptoResponse>(url)
  }
}
