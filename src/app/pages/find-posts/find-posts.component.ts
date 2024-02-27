import { Component, OnInit } from '@angular/core';
import { PostDto } from "../../services/models/post-dto";
import { PostsService } from "../../services/services/posts.service";
import { HelperService } from "../../services/helper/helper.service";
import {ReservationsService} from "../../services/services/reservations.service";
import {ReservationDto} from "../../services/models/reservation-dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-find-posts',
  templateUrl: './find-posts.component.html',
  styleUrls: ['./find-posts.component.scss']
})
export class FindPostsComponent implements OnInit {

  reservation : ReservationDto = {};

  posts: Array<PostDto> = [];
  filteredPosts: Array<PostDto> = [];
  selectedCategory: string = '';
  selectedStatus: string = '';
  errorMessages : Array<string> = [];

  constructor(
    private postService: PostsService,
    private helperService: HelperService,
    private reservationService : ReservationsService,
    private router : Router,

  ) { }

  ngOnInit(): void {
    this.postService.findAll2()
      .subscribe({
        next: (data) => {
          this.posts = data;
          this.filteredPosts = data;
        }
      });
  }

  applyFilter(): void {
    if (this.selectedCategory || this.selectedStatus) {
      if (this.selectedCategory) {
        this.filterByCategory(this.selectedCategory);
      }
      if (this.selectedStatus) {
        this.filterByStatus(this.selectedStatus);
      }
    } else {
      this.filteredPosts = this.posts;
    }
  }


  filterByCategory(category: string) {
    const validCategories: Array<string> = ['LIVRES', 'ELECTRONIQUE', 'VETEMENTS', 'MEUBLES', 'EQUIPEMENTSPORTIF', 'AUTRES', 'All'];
    if (validCategories.includes(category)) {
      if (category === 'All') {
        this.filteredPosts = this.posts;
      } else {
        this.postService.getAllPostsByCategory({ category: category as ('LIVRES' | 'ELECTRONIQUE' | 'VETEMENTS' | 'MEUBLES' | 'EQUIPEMENTSPORTIF' | 'AUTRES') })
          .subscribe(posts => this.filteredPosts = posts);
      }
    }
  }

  filterByStatus(status: string) {
    const validStatuses: Array<string> = ['AVAILABLE', 'RESERVED', 'All'];
    if (validStatuses.includes(status)) {
      if (status === 'All') {
        this.filteredPosts = this.posts;
      } else {
        this.postService.getAllPostsByStatus({ status: status as ('AVAILABLE' | 'RESERVED' ) })
          .subscribe(posts => this.filteredPosts = posts);
      }
    }
  }


   reserve(postId: number | undefined) {
     if (postId !== undefined) {
       this.postService.updatePostStatus({
         'post-id' : postId
       })
         .subscribe(() => {
           this.reservation.userId = this.helperService.UserId;
           this.reservation.postId = postId
           this.reservationService.save1({
             body : this.reservation
           }).subscribe({
             next : async (data) => {
               await this.router.navigate (['confirm-reservation']);
             },
             error : (err) => {
               this.errorMessages = err.error.validationErrors;
             }
           });
         });
     }

     else
     {
       console.error('postId est undefined');
     }
   }


 /* reserve(postId: number | undefined) {
    if (postId !== undefined) {
      const params: CheckPostStatus$Params = { 'post-id': postId };
      this.reservationService.checkPostStatus(params)
        .subscribe((response) => {
        this.reservationMessage = response;
        //console.log('Reservation message:', this.reservationMessage); // Ajouter cette ligne

          /!*    if (response.message === 'Post is available.') {
                console.log('Réservation effectuée avec succès !');
              } else if (response.message === 'Post is already reserved.') {
                console.log('Ce post est déjà réservé.');
              }*!/
      });
    } else {
      console.error('postId est undefined');
    }
  }*/

}
