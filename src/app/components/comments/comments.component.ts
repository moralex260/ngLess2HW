import { Component, OnInit, Input } from '@angular/core';
import {Comments} from '../models';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
@Input()
comment: Comments;
  constructor() { }

  ngOnInit(): void {
  }

}
