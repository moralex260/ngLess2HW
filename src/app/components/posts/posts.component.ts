import {Component, Input, OnInit} from '@angular/core';
import {Comments, Posts} from '../models';
import {PostService} from '../servises/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
@Input()
post: Posts;
  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
  }
  allcomentsLog(postId: number): void {
    console.log(postId);
    this.postService.getCommentsOfPost(postId).subscribe(value => console.log(value));
  }
}
