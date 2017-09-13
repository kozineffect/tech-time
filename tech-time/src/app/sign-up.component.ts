import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
    values = [];
    onClick(firstname: string, lastname: string, username: string,
        email: string, rate: Float32Array, viewers: string, password: string) {
        this.values.push(firstname);
        this.values.push(lastname);
        this.values.push(username);
        this.values.push(email);
        this.values.push(rate);
        this.values.push(viewers);
        this.values.push(password);
    }
}
