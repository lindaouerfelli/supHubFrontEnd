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


  constructor() {
  }

  ngOnInit(): void {

  }

}

