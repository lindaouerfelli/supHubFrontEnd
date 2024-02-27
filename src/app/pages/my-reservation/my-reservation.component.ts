import { Component, OnInit } from '@angular/core';
import {PostDto} from "../../services/models/post-dto";
import {ReservationDto} from "../../services/models/reservation-dto";
import {ReservationsService} from "../../services/services/reservations.service";
import {Router} from "@angular/router";
import {PostsService} from "../../services/services/posts.service";
import {HelperService} from "../../services/helper/helper.service";

@Component({
  selector: 'app-my-reservation',
  templateUrl: './my-reservation.component.html',
  styleUrls: ['./my-reservation.component.scss']
})
export class MyReservationComponent implements OnInit {

  reservations: Array<ReservationDto> = [];
  selectedPost: PostDto | undefined;
  //showPostDetailsModal: boolean = false;
  //reservationToDelete : any = -1;


  //selectedReservationId: any;
  //selectedPostId: any;


  constructor(
    private reservationService: ReservationsService,
    private router: Router,
    private postService: PostsService,
    private helperService: HelperService,
   // private _snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.findAllReservationByUserId();
  }

  private findAllReservationByUserId() {
    this.reservationService.getAllPostsByUser({
      'userId': this.helperService.UserId

    })
      .subscribe({
        next: (data) => {
          this.reservations = data;
        }
      });
  }


  showPostDetails(postId: number | undefined) {
    if (postId !== undefined) {
      //this.selectedPost = postId;
      this.router.navigate(['/post-details', postId]); // Rediriger vers le composant des détails du post avec l'ID du post

    } else {
      console.error('postId est undefined');
    }
  }

  delete(reservationId: number | undefined, postId: number | undefined) {
    if (reservationId !== undefined && postId !== undefined) {

      this.reservationService.delete1({
        'reservation-id': reservationId
      })
        .subscribe({
          next: () => {
            this.findAllReservationByUserId();
            this.postService.available({'post-id' : postId})
              .subscribe({
              next: () => {
                console.log("suppression réussie ! ")
                //this._snackBar.open('Suppression réussie.', 'Fermer', {
                // duration: 2000,
              }
                });
              },
              error: (err) => {
                console.error('Erreur lors de la mise à jour du statut du post:', err);
              }
            });

    }

  }

}
