import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Githubuser } from './githubuser';
import { GithubRepo } from './github-repo';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  constructor(private httpSrv : HttpClient) { }

  getUserResponse(url : string) : Observable<Githubuser>{
      return this.httpSrv.get<Githubuser>(url)
  }

  getProjectResponse(url : string): Observable<GithubRepo[]>{
    return this.httpSrv.get<GithubRepo[]>(url)
  }
}
