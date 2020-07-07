import {Component, Input, OnInit} from '@angular/core';
import {Post, Posts, Users} from '../models';
import {UserService} from '../servises/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
  ,
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input()
  user: Users;
  post: Posts[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

getUserlPosts = (userId: number) => {
    console.log(userId);
    this.userService.getUserPosts(userId).subscribe(value => {
      return this.post = value;
    });
  }
}
