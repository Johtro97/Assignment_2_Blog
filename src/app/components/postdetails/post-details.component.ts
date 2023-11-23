import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from 'src/app/utils/blog-post';
import { PostService } from 'src/app/service/post.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  creationDate: Date = new Date;
  title: string = "";

  constructor(
    private activatedRoute: ActivatedRoute, 
    private postService: PostService)
    {
      activatedRoute.params.subscribe((params) => {
        this.creationDate = params['creationDate'];
      });
    }

  get post(): BlogPost | undefined {
    return this.postService.postList.find(
      (post) => post.creationDate === this.creationDate,
    );
  }

  upVote(): void{
    if (this.post !== undefined) {
      this.post.likes++;
      this.postService.savePost();
    }
  }

  downVote(): void {
    if (this.post !== undefined) {
      this.post.dislikes++;
      this.postService.savePost();
    }
  }

  addComment(content: string): void{
      if(this.post !== undefined){
        if(content.length > 0){
          this.postService.addComment(this.post, content);
        }
        else alert("Write something first!")
      }
  }
  
}
