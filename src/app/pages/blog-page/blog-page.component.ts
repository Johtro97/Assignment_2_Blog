import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent {
  admin: boolean = false;
  
  toggleView(): void{
    this.admin = !this.admin;
  }
}
