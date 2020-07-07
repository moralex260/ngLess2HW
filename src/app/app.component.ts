import { Component } from '@angular/core';
import {Comments, Posts, Users} from './components/models';
import {PostService} from './components/servises/post.service';
import {UserService} from './components/servises/user.service';
import {CommentsService} from './components/servises/comments.service';

@Component({
  selector: 'app-root',
  template: `<app-comments *ngFor="let c of comments" [comment] = "c" ></app-comments>
  <app-users *ngFor="let u of users" [user]= "u"  ></app-users>
  <app-posts *ngFor="let p of posts" [post]= "p" ></app-posts>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: Users[];
  posts: Posts[];
  comments: Comments[];
  constructor( public userService: UserService, public postService: PostService, public commentsService: CommentsService) {

this.userService.getUsers().subscribe(responce => this.users = responce);
this.postService.getPosts().subscribe(response => this.posts = response);
// this.commentsService.getComments().subscribe(response => this.comments = response);
  }

}
