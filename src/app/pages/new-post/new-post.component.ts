import {Component, OnInit, Sanitizer} from '@angular/core';
import { PostsService } from "../../services/services/posts.service";
import { PostDto } from "../../services/models/post-dto";
import { Router } from "@angular/router";
import { HelperService } from "../../services/helper/helper.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  post : PostDto = {};
  errorMessages : Array<string> = [];


  constructor(

    private postService : PostsService,
    private router : Router,
    private helperService : HelperService

  ) {
  }

  ngOnInit(): void {
  }

  save () {
    this.post.userId = this.helperService.UserId;
    this.post.ownerFullName = this.helperService.UserFullname;
    this.postService.save2({

      body : this.post
    })
      .subscribe({
        next : async (data) => {
          await this.router.navigate (['user/my-posts']);
        },
        error : (err) => {
          this.errorMessages = err.error.validationErrors;
        }
      });
  }

  async cancel() {

    await this.router.navigate(['user/my-posts']);

  }
}

