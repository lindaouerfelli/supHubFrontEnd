
import { Component, OnInit } from '@angular/core';
import {MessageDto} from "../../services/models/message-dto";
import {MessagesService} from "../../services/services/messages.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HelperService} from "../../services/helper/helper.service";

@Component({
  selector: 'app-message-reservation',
  templateUrl: './message-reservation.component.html',
  styleUrls: ['./message-reservation.component.scss']
})
export class MessageReservationComponent implements OnInit {

  message : MessageDto = {};

  userId: number | undefined;
  firstname: string | undefined;
  lastname: string | undefined;

  constructor(

    private messageService : MessagesService,
    private router : Router,
    private helperService : HelperService,
    private route: ActivatedRoute


  ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.firstname = this.route.snapshot.params['firstname'];
    this.lastname = this.route.snapshot.params['lastname'];

  }

  save () {

    this.message.senderId = this.helperService.UserId;
    this.message.senderName = this.helperService.UserFullname;
    this.message.receiverName = this.firstname;
    this.message.receiverId = this.userId;

    this.messageService.save3({

      body : this.message
    })
      .subscribe({
        next : async (data) => {
          await this.router.navigate (['user/my-messages']);
        },
      });
  }

  async cancel() {

    await this.router.navigate(['user/my-messages']);

  }

}

