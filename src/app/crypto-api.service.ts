import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoResponse } from './crypto-response';
import { CryptoOhlcv } from './crypto-ohlcv';
import { CryptoResponseOuter } from './crypto-response-outer';

@Injectable({
  providedIn: 'root'
})
export class CryptoApiService {

  constructor(private httpSrv : HttpClient ) { }


  fetchResponse(url : string) : Observable<CryptoResponse>{
    return this.httpSrv.get<CryptoResponse>(url)
  }

  fetchHistoryResponse(url: string)  : Observable<CryptoResponseOuter>{
    return this.httpSrv.get<CryptoResponseOuter>(url)
  }

}


/*

  Response{


        Data : {
            


                Data :  {

                  
                }
        }
  }
*/