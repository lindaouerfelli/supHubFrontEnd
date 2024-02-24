import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/services/posts.service";
import {Router} from "@angular/router";
import {HelperService} from "../../services/helper/helper.service";
import {MessagesService} from "../../services/services/messages.service";
import {PostDto} from "../../services/models/post-dto";
import {MessageDto} from "../../services/models/message-dto";

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {

  message : MessageDto = {};
  errorMessages: Array<string> = [];

  constructor(

    private messageService : MessagesService,
    private router : Router,
    private helperService : HelperService

  ) { }

  ngOnInit(): void {
  }

  save () {
    this.message.senderId = this.helperService.UserId;
    this.message.senderName = this.helperService.UserFullname;
    this.messageService.save3({

      body : this.message
    })
      .subscribe({
        next : async (data) => {
          await this.router.navigate (['user/my-messages']);
        },
        error : (err) => {
          this.errorMessages = err.error.validationErrors;
        }
      });
  }

  async cancel() {

    await this.router.navigate(['user/my-messages']);

  }

}
