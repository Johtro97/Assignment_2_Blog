import { Component } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { BlogPost } from 'src/app/utils/blog-post';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private postService: PostService) {}

  get postList(): BlogPost[]{
    this.postService.getPlaceHolderData();
    return this.postService.postList;
  }  
}
