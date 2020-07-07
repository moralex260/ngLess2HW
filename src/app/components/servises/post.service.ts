import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Comments, Posts, Users} from '../models';
import {Observable} from 'rxjs';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class PostService {
comments: Comments[];

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<Posts[]> {
   return  this.httpClient
      .get<Posts[]>('https://jsonplaceholder.typicode.com/posts?_limit=10');

  }
  getCommentsOfPost(postId: number): Observable<Comments[]>{
    return this.httpClient
      .get<Comments[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }
}
