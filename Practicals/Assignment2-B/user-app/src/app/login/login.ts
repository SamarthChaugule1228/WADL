import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    let user = JSON.parse(localStorage.getItem('user') || '{}');

    if (this.email === user.email &&
        this.password === user.password) {

      alert("Login Successful");

      this.router.navigate(['/profile']);
    } else {
      alert("Invalid Credentials");
    }
  }
}