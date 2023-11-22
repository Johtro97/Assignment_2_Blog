import { Component, Input  } from '@angular/core';
import { BlogPost } from 'src/app/utils/blog-post';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{ 
  @Input() post: BlogPost = {} as BlogPost;
  
}
