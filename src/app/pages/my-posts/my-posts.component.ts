import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/services/posts.service";
import {PostDto} from "../../services/models/post-dto";
import {HelperService} from "../../services/helper/helper.service";
import {MessageDto} from "../../services/models/message-dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss']
})
export class MyPostsComponent implements OnInit {

  posts : Array<PostDto> = [];
  postToDelete: any = -1;

  constructor(

    private postService : PostsService,
    private helperService : HelperService,
    private router : Router

  ) { }

  ngOnInit(): void {
    this.finAllPostsByUser();
  }

  private finAllPostsByUser() {
    this.postService.getAllPostsByUser1({
      'userId': this.helperService.UserId
    }).subscribe({

      next: (data) => {
        this.posts = data;
      }
    });
  }

  async update(id: number | undefined) {
    await this.router.navigate(['user/new-post', id]);

  }

  prepareDelete() {

  }

  delete(postId: number | undefined) {
    if(postId) {
      this.postService.delete2({
        'post-id' : postId
      }).subscribe({
        next : () => {
          this.finAllPostsByUser();
          console.log("suppression réussie ! ")

        }

      });
    }
  }
}
