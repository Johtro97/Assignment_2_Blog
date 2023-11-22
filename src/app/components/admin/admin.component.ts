import { Component, Output, } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  creationDate: Date = new Date();
  likes: number = 0;
  dislikes: number = 0;
  comments: string[] = [];

  constructor (private postService: PostService, private router: Router,){}
 
  addPost(title: string, thumbnailUrl: string, body: string): void {
    if (title.length > 0){
      if(body.length > 0){
        this.postService.addPost(
          title, 
          thumbnailUrl,
          body, 
          this.creationDate,
          this.likes,
          this.dislikes,
          this.comments);   
          this.router.navigate(['/']);    
        }
        else {
          alert("Write some text!")
        }
        }
    else {
      alert("Title is missing!")
    }
  }
}
