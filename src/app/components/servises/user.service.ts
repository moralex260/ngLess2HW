import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Posts, Users} from '../models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpClient: HttpClient) { }
  getUsers(): Observable<Users[]>{
    return this.httpClient
      .get<Users[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUserPosts(userId: number): Observable<Posts[]>{
    return this.httpClient
      .get<Posts[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }
}
