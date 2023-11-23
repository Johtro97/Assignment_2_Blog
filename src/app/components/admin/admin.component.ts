import { Component, Output, } from '@angular/core';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  creationDate = new Date();
  likes: number = 0;
  dislikes: number = 0;
  comments: string[] = [];

  constructor (private postService: PostService){
  }
 
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
          this.comments
        );
        alert ("Post is created!")
        window.location.reload();   
      } else alert("Write some text!")
    } else alert("Title is missing!")
  }
}
