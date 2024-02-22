import { Component, OnInit } from '@angular/core';
import { MessagesService } from "../../services/services/messages.service";
import { HelperService } from "../../services/helper/helper.service";
import { MessageDto } from "../../services/models/message-dto";

@Component({
  selector: 'app-my-messages',
  templateUrl: './my-messages.component.html',
  styleUrls: ['./my-messages.component.scss']
})
export class MyMessagesComponent implements OnInit {

  messages: Array<MessageDto> = [];
  //userFullname: string = '';

  constructor(
    private messageService: MessagesService,
    public helperService: HelperService
  ) { }


  ngOnInit(): void {
    this.messageService.findAllByUserId({
      'user-id': this.helperService.UserId
    }).subscribe({
      next: (data) => {
        this.messages = data;
      }
    });
  }


/*  ngOnInit(): void {
    this.userFullname = this.helperService.UserFullname; // Obtenez le fullname de l'utilisateur connecté
    this.messageService.findAllByUserId({
      'user-id': this.helperService.UserId
    }).subscribe({
      next: (data) => {
        this.messages = data;
      }
    });
  }*/

}
