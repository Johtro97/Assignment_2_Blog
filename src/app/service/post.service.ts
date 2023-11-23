import { Injectable } from '@angular/core';
import { BlogPost } from '../utils/blog-post';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private _postList: BlogPost[] = [];
  
  constructor() { 
    this._postList = this.loadPost();
    console.log(this._postList)
  }   
  
  public getPlaceHolderData(): BlogPost[] {
    if (this._postList.length <= 0)
      localStorage.setItem('postList', JSON.stringify(this._dataList))
    return this._postList;
   }
  
  
  private loadPost(): BlogPost[] {  
    let json = localStorage.getItem('postList');
    return json !== null ? JSON.parse(json) : [];
  }

  public get postList(): BlogPost[] {
    return this._postList;
  }

  public savePost(): void {
    localStorage.setItem('postList', JSON.stringify(this._postList));
  }

  public addComment(blogPost: BlogPost, content: string): void {
      blogPost.comments.push(content);
      this.savePost();
  }

  public addPost(title: string, body: string, thumbnailUrl: string, creationDate: Date, likes: number, dislikes:number, comments: string[]): void {
    this._postList.push(
      new BlogPost(title, body, thumbnailUrl, creationDate, likes, dislikes, comments)
    );
    this.savePost();
  } 

  _dataList: BlogPost[] = [
    new BlogPost(
      "My Summer Plans",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "Convallis aenean et tortor at risus viverra adipiscing at. Consequat nisl vel pretium lectus quam id leo in. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Scelerisque eu ultrices vitae auctor eu augue ut. Risus quis varius quam quisque id diam. Ut lectus arcu bibendum at varius vel. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Diam maecenas sed enim ut sem viverra aliquet eget sit. Sapien eget mi proin sed libero enim. Sit amet purus gravida quis blandit turpis cursus. Justo donec enim diam vulputate. Pellentesque pulvinar pellentesque habitant morbi tristique. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Enim nulla aliquet porttitor lacus. Mi tempus imperdiet nulla malesuada pellentesque. Elementum nibh tellus molestie nunc non blandit massa. Urna neque viverra justo nec ultrices dui sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis aenean et tortor at risus viverra adipiscing at. Consequat nisl vel pretium lectus quam id leo in. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Scelerisque eu ultrices vitae auctor eu augue ut. Risus quis varius quam quisque id diam. Ut lectus arcu bibendum at varius vel. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Diam maecenas sed enim ut sem viverra aliquet eget sit. Sapien eget mi proin sed libero enim. Sit amet purus gravida quis blandit turpis cursus. Justo donec enim diam vulputate. Pellentesque pulvinar pellentesque habitant morbi tristique. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Enim nulla aliquet porttitor lacus. Mi tempus imperdiet nulla malesuada pellentesque. Elementum nibh tellus molestie nunc non blandit massa. Urna neque viverra justo nec ultrices dui sapien.",
      new Date("2023-05-21"),
      29,
      1,
      ["Very inspiring, I hope you have an awesome trip!", "Lorem ipsum. Convallis aenean et tortor at risus viverra adipiscing at.", "Dolor sit amet. Convallis aenean et tortor at risus viverra adipiscing at."]
    ),
    new BlogPost(
      "Camping Trip",
      "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis aenean et tortor at risus viverra adipiscing at. Consequat nisl vel pretium lectus quam id leo in. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Scelerisque eu ultrices vitae auctor eu augue ut. Risus quis varius quam quisque id diam. Ut lectus arcu bibendum at varius vel. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Diam maecenas sed enim ut sem viverra aliquet eget sit. Sapien eget mi proin sed libero enim. Sit amet purus gravida quis blandit turpis cursus. Justo donec enim diam vulputate. Pellentesque pulvinar pellentesque habitant morbi tristique. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Enim nulla aliquet porttitor lacus. Mi tempus imperdiet nulla malesuada pellentesque. Elementum nibh tellus molestie nunc non blandit massa. Urna neque viverra justo nec ultrices dui sapien.",
      new Date("2023-07-07"),
      15,
      0,
      ["Lorem ipsum. Convallis aenean et tortor at risus viverra adipiscing at.", "Dolor sit amet. Convallis aenean et tortor at risus viverra adipiscing at."]
    ),
    new BlogPost(
      "Today's Adventure",
      "https://images.unsplash.com/photo-1471400974796-1c823d00a96f?q=80&w=1667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis aenean et tortor at risus viverra adipiscing at. Consequat nisl vel pretium lectus quam id leo in. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Scelerisque eu ultrices vitae auctor eu augue ut. Risus quis varius quam quisque id diam. Ut lectus arcu bibendum at varius vel. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Diam maecenas sed enim ut sem viverra aliquet eget sit. Sapien eget mi proin sed libero enim. Sit amet purus gravida quis blandit turpis cursus. Justo donec enim diam vulputate. Pellentesque pulvinar pellentesque habitant morbi tristique. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Enim nulla aliquet porttitor lacus. Mi tempus imperdiet nulla malesuada pellentesque. Elementum nibh tellus molestie nunc non blandit massa. Urna neque viverra justo nec ultrices dui sapien.",
      new Date("2023-08-20"),
      30,
      4,
      ["Lorem ipsum. Convallis aenean et tortor at risus viverra adipiscing at.", "Dolor sit amet. Convallis aenean et tortor at risus viverra adipiscing at."]
    ),
    new BlogPost(
      "Fall is here",
      "https://images.unsplash.com/photo-1633367958160-bfe866c63868?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "Convallis aenean et tortor at risus viverra adipiscing at. Consequat nisl vel pretium lectus quam id leo in. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Scelerisque eu ultrices vitae auctor eu augue ut. Risus quis varius quam quisque id diam. Ut lectus arcu bibendum at varius vel. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Diam maecenas sed enim ut sem viverra aliquet eget sit. Sapien eget mi proin sed libero enim. Sit amet purus gravida quis blandit turpis cursus. Justo donec enim diam vulputate. Pellentesque pulvinar pellentesque habitant morbi tristique. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Enim nulla aliquet porttitor lacus. Mi tempus imperdiet nulla malesuada pellentesque. Elementum nibh tellus molestie nunc non blandit massa. Urna neque viverra justo nec ultrices dui sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis aenean et tortor at risus viverra adipiscing at. Consequat nisl vel pretium lectus quam id leo in. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Scelerisque eu ultrices vitae auctor eu augue ut. Risus quis varius quam quisque id diam. Ut lectus arcu bibendum at varius vel. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Diam maecenas sed enim ut sem viverra aliquet eget sit. Sapien eget mi proin sed libero enim. Sit amet purus gravida quis blandit turpis cursus. Justo donec enim diam vulputate. Pellentesque pulvinar pellentesque habitant morbi tristique. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Enim nulla aliquet porttitor lacus. Mi tempus imperdiet nulla malesuada pellentesque. Elementum nibh tellus molestie nunc non blandit massa. Urna neque viverra justo nec ultrices dui sapien.",
      new Date("2023-09-29"),
      5,
      0,
      ["Lorem ipsum. Convallis aenean et tortor at risus viverra adipiscing at.", "Dolor sit amet. Convallis aenean et tortor at risus viverra adipiscing at."]
    ),
    new BlogPost(
      "Wrapping Diy",
      "https://images.unsplash.com/photo-1571915096107-c6606c216058?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis aenean et tortor at risus viverra adipiscing at. Consequat nisl vel pretium lectus quam id leo in. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Scelerisque eu ultrices vitae auctor eu augue ut. Risus quis varius quam quisque id diam. Ut lectus arcu bibendum at varius vel. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Diam maecenas sed enim ut sem viverra aliquet eget sit. Sapien eget mi proin sed libero enim. Sit amet purus gravida quis blandit turpis cursus. Justo donec enim diam vulputate. Pellentesque pulvinar pellentesque habitant morbi tristique. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Enim nulla aliquet porttitor lacus. Mi tempus imperdiet nulla malesuada pellentesque. Elementum nibh tellus molestie nunc non blandit massa. Urna neque viverra justo nec ultrices dui sapien.",
      new Date("2023-11-14"),
      27,
      2,
      ["This is great, thank you for sharing!", "Convallis aenean et tortor at risus viverra adipiscing at.", "Lorem ipsum. Convallis aenean et tortor at risus viverra adipiscing at.",  "Dolor sit amet. Convallis aenean et tortor at risus viverra adipiscing at."]
    )
  ];

}


