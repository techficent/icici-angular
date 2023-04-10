import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PythonApiFetchService {

  constructor(private httpSrv : HttpClient) { }

  fetchResponse(url : string) : Observable<any> {
    return this.httpSrv.get(url)
  }
}
