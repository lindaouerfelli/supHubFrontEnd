import { Component, OnInit } from '@angular/core';
import { PostDto } from "../../services/models/post-dto";
import { PostsService } from "../../services/services/posts.service";
import { HelperService } from "../../services/helper/helper.service";

@Component({
  selector: 'app-find-posts',
  templateUrl: './find-posts.component.html',
  styleUrls: ['./find-posts.component.scss']
})
export class FindPostsComponent implements OnInit {

  posts: Array<PostDto> = [];
  filteredPosts: Array<PostDto> = [];
  selectedCategory: string = '';
  selectedStatus: string = '';

  constructor(
    private postService: PostsService,
    private helperService: HelperService
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

}
