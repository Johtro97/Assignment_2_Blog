import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { PostComponent } from './components/post/post.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { PostDetailsComponent } from './components/postdetails/post-details.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    NavbarComponent,
    FooterComponent,
    AdminComponent,
    PostComponent,
    BlogPageComponent,
    PostDetailsComponent,
    DetailsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


