import { Injectable } from '@angular/core';
import { BlogPost } from '../utils/blog-post';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public savePosts(items: BlogPost[]): void {
    localStorage.setItem('post', JSON.stringify(items));
  }

  public loadPosts(): BlogPost[] {
    let postJson = localStorage.getItem('post');
    return !postJson ? [] : JSON.parse(postJson);
  }
}

