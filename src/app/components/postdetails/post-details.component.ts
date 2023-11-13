import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from 'src/app/utils/blog-post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  title: string = "";
  
  constructor(
    private activatedRoute: ActivatedRoute, 
    private postService: PostService)
    {
      activatedRoute.params.subscribe((params) => {
        this.title = params['title'];
      });
    }

  //Get the post you clicked on
  get post(): BlogPost | undefined {
    return this.postService.postList.find(
      (post) => post.title === this.title,
    );
  }

}
