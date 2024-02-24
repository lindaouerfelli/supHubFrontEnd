import { Component, OnInit } from '@angular/core';
import {PostDto} from "../../services/models/post-dto";
import {PostsService} from "../../services/services/posts.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  postId: number | undefined;
  selectedPost: PostDto | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostsService
  ) { }


  ngOnInit(): void {
    const postId = this.route.snapshot.params['id'];
    if (postId) {
      this.postService.findById2({ 'post-id': postId }).subscribe({
        next: (data) => {
          this.selectedPost = data;
        },
        error: (err) => {
          console.error('Error fetching post details:', err);
        }
      });
    } else {
      console.error('Post ID is undefined');
    }

  }
  goBack(): void {
    this.router.navigate(['user','my-reservations']); // Rediriger vers la liste des réservations
  }

}
