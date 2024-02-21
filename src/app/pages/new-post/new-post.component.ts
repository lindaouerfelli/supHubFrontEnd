import { Component, OnInit } from '@angular/core';
import {PostDto} from "../../services/models/post-dto";
import {PostsService} from "../../services/services/posts.service";
import {HelperService} from "../../services/helper/helper.service";
import {Router} from "@angular/router";
import {addWarning} from "@angular-devkit/build-angular/src/utils/webpack-diagnostics";
import {save} from "../../services/fn/users/save";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {


  constructor(
  ) { }

  ngOnInit(): void {
  }

}
