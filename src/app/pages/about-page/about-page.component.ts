import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent { 
  name: string = "";
  email: string = "";
  message: string = ""; 

  sendMessage(name: string, email: string, message: string): void {
    if(name.length > 0){
      if(email.length > 0){
        if(message.length > 0){
          let contact: string = "name: " + name + ", email: " + email + ", Message: " + message;
          alert("Message Sent!")
          console.log(contact)
          this.name = "";
          this.email = "";
          this.message = "";  
        } else alert("Please, write your message")
      } else alert("Please, write your email")
    } else alert("Please, write your name")
  }
}
