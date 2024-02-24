import { Component, OnInit } from '@angular/core';
import {PostDto} from "../../services/models/post-dto";
import {ReservationDto} from "../../services/models/reservation-dto";
import {ReservationsService} from "../../services/services/reservations.service";
import {Router} from "@angular/router";
import {PostsService} from "../../services/services/posts.service";

@Component({
  selector: 'app-my-reservation',
  templateUrl: './my-reservation.component.html',
  styleUrls: ['./my-reservation.component.scss']
})
export class MyReservationComponent implements OnInit {

  reservations: Array<ReservationDto> = [];
  selectedPost: PostDto | undefined;
  showPostDetailsModal: boolean = false;


  constructor(
    private reservationService: ReservationsService,
    private router: Router,
    private postService: PostsService
  ) {
  }

  ngOnInit(): void {
    this.reservationService.findAll1()
      .subscribe({
        next: (data) => {
          this.reservations = data;
        }
      });
  }

   showPostDetails(postId: number | undefined) {
    if (postId !== undefined) {
       this.router.navigate(['/post-details', postId]); // Rediriger vers le composant des détails du post avec l'ID du post

    } else {
      console.error('postId est undefined');
    }
  }
}


