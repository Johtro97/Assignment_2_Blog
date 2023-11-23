import { Component } from '@angular/core';
import { BlogPost } from 'src/app/utils/blog-post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})

export class BlogPageComponent{
  post: BlogPost[] = [];
  admin: boolean = false;
  
  theme: Record<string, boolean> = {
    userView: false,
    adminView: true,
  }

  toggleView(): void{
    this.admin = !this.admin;
  }

  constructor(private postService: PostService) {  
  }

  get postList(): BlogPost[]{
    return this.postService.postList;
  }
}

