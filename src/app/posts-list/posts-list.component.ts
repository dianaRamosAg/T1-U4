import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  public posts;
  
  constructor(private postService:PostService) { 
    this.posts=postService.posts;
  }

  ngOnInit() {
  }

}
