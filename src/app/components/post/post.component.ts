import { Component } from '@angular/core';
import { BlogPost } from 'src/app/utils/blog-post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  
  constructor(private postService: PostService) {}

  get postList(): BlogPost[]{
    return this.postService.postList
  } 


  
 
}
