import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/services/posts.service";
import {PostDto} from "../../services/models/post-dto";
import {HelperService} from "../../services/helper/helper.service";

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss']
})
export class MyPostsComponent implements OnInit {

  posts : Array<PostDto> = [];

  constructor(

    private postService : PostsService,
    private helperService : HelperService

  ) { }

  ngOnInit(): void {
    this.postService.getAllPostsByUser1({
      'userId' : this.helperService.UserId
    }).subscribe({

      next : (data) => {
        this.posts = data;
      }
    });
  }

}
