import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


export class User {
  id: number;
  username: string;
  email: string;
  password: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  loginUser (username: string, password: string) {
      alert('You did it!');
      const title = username;
    }
}
