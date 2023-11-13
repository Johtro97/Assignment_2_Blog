export class BlogPost {
  title: string;
  thumbnailUrl: string;
  body: string;
  creationDate: number;
  likes: number;
  dislikes: number;
  comments: string[];
  
  constructor(title: string, thumbnailUrl: string, body: string, creationDate: number, likes: number, dislikes: number, comments: string[]) {
    this.title = title;
    this.thumbnailUrl = thumbnailUrl;
    this.body = body;
    this.creationDate = creationDate;
    this.likes = likes;
    this.dislikes = dislikes;
    this.comments = comments;
  }
}


