import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true, // standalone component
  imports: [FormsModule], // needed for ngModel
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {

  // user object
  user = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  register() {
    // store data in localStorage
    localStorage.setItem('user', JSON.stringify(this.user));

    alert("Registered Successfully");

    // go to login page
    this.router.navigate(['/login']);
  }
}