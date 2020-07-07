import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comments} from '../models';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient: HttpClient) { }

getComments(): Observable<Comments[]> {
  return this.httpClient
    .get<Comments[]>('https://jsonplaceholder.typicode.com/comments?_limit=10');
}
}
