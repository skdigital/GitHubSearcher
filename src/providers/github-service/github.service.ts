import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { User } from "../../models/user.interface";
import { USER_LIST } from "../../mocks/user.mocks";

import { Repository } from "../../models/repository.interface";
import { REPOSITORY_LIST } from "../../mocks/repository.mocks";

@Injectable()
export class GithubServiceProvider {

  private baseUrl: string = 'https://api.github.com/users'
  private reposUrl: string = 'repos'

  constructor(public http: Http) {
    console.log('Hello GithubServiceProvider Provider');
  }

  getUserInformation(username: string): Observable<User> {
    return this.http.get(`${this.baseUrl}/${username}`)
    .do(this.logData)
    .map(this.extractData)
    .do(this.logData)
    .catch(this.errorHandler);
  }

  getRepositoryInformation(username: string): Observable<Repository[]> {
    return this.http.get(`${this.baseUrl}/${username}/${this.reposUrl}`)
    .do(this.logData)
    .map(this.extractData)
    .do(this.logData)
    .catch(this.errorHandler);
  }

  //finding the username from within USER_LIST, equal to teh Username passed in.
  //Returning the results as an Observable.
  mockGetUserInformation(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(res => res.name === username)[0]);
  }

  //finding repositories from within REPOSITORY_LIST, equal to the Username passed in.
  //returning the results as an Observable
  mockGetRepositoryInformation(username: string): Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter(data => data.owner.name === username))
  }

  // Utilities
  // Log data console response utility
  private logData(response: Response) {
    console.log(response);
  }

  private extractData(response: Response) {
    return response.json();
  }

  private errorHandler(error: Response | any) {
    return Observable.throw(error.json().error || "Server error.");
  }

}
