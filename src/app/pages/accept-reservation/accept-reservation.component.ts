import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PostsService } from "../../services/services/posts.service";
import { PostDto } from "../../services/models/post-dto";
import { UserDto } from "../../services/models/user-dto";
import { UsersService } from "../../services/services/users.service";
import { ReservationsService } from "../../services/services/reservations.service";
import { ReservationDto } from "../../services/models/reservation-dto";

@Component({
  selector: 'app-accept-reservation',
  templateUrl: './accept-reservation.component.html',
  styleUrls: ['./accept-reservation.component.scss']
})
export class AcceptReservationComponent implements OnInit {

  confirmationMessage: string = ''; // Message de confirmation
  denialMessage: string = ''; // Message de refus

  userId: number | undefined;
  postId: number | undefined;
  reservationId: number | undefined;

  reservation: ReservationDto | undefined;

  selectedReservation: ReservationDto | undefined;
  selectedUser: UserDto | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostsService,
    private userService: UsersService,
    private reservationService: ReservationsService
  ) { }

  ngOnInit(): void {
    // Récupérer les détails de la réservation à partir des paramètres de navigation
    const navigationState = window.history.state;
    this.reservation = navigationState.reservation;

    this.userId = this.reservation?.userId;

    if (this.userId) {
      this.userService.findById({ 'user-id': this.userId })
        .subscribe({
          next: (data) => {
            this.selectedUser = data;
          },
          error: (err) => {
            console.error('Error fetching user details:', err);
          }
        });
    }
  }

  goBack(): void {
    this.router.navigate(['user', 'my-posts']); // Rediriger vers la liste des réservations
  }

  confirmReservation(): void {
    // Logique pour confirmer la réservation
    this.confirmationMessage = 'Reservation successfully confirmed! Don\'t hesitate to contact the person who made the reservation by clicking on the "Contact Owner" button.';
  }

  denyReservation(): void {
    // Logique pour refuser la réservation
    this.denialMessage = 'Reservation denied. Your announcement is available again.';
  }

}
