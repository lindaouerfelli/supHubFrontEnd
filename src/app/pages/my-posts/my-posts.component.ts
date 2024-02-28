import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/services/posts.service";
import {PostDto} from "../../services/models/post-dto";
import {HelperService} from "../../services/helper/helper.service";
import {MessageDto} from "../../services/models/message-dto";
import {Router} from "@angular/router";
import {DataServiceService} from "../../services/first-service/data-service.service";
import {ReservationDto} from "../../services/models/reservation-dto";
import {ReservationsService} from "../../services/services/reservations.service";

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss']
})
export class MyPostsComponent implements OnInit {

  selectedReservation: ReservationDto | undefined;
  showModal: boolean = false;


  posts : Array<PostDto> = [];
  postToDelete: any = -1;
  reservations: Array<ReservationDto> = [];


  constructor(

    private postService : PostsService,
    private helperService : HelperService,
    private router : Router,
    private reservationService: ReservationsService,
    public dataService: DataServiceService // Injectez le DataService


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
        // Pour chaque publication réservée, récupérer les détails de réservation
        this.posts.forEach(post => {

          if (post.status === 'RESERVED' && post.id !== undefined) {
            this.reservationService.getReservationByPostId({
              'post-id' : post.id
            })
              .subscribe(reservation => {
                this.reservations.push(reservation);
              });
          }

        });


      }
    });
  }

  async update(id: number | undefined) {
    await this.router.navigate(['user/new-post', id]);

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

  getReservationForPost(postId: number | undefined): ReservationDto | undefined {
    return this.reservations.find(reservation => reservation.postId === postId);
  }

  showReservationDetails(reservation: ReservationDto | undefined): void {
    if (reservation) {
      this.router.navigate(['/accept-reservation'],{ state: { reservation } });
    } else {
      console.error('Les détails de réservation sont null.');
    }
  }

/*
  showReservationDetails(reservation: ReservationDto | undefined): void {
    console.log('Reservation:', reservation);
    if (reservation) {
      this.selectedReservation = reservation;
      this.showModal = true;
      console.log('Selected Reservation:', this.selectedReservation);
    } else {
      console.error('Les détails de réservation sont null.');
    }
  }
*/






}
