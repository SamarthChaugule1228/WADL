import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class ProfileComponent implements OnInit {

  user: any = {};

  constructor(private router: Router) {}

  ngOnInit() {
    // get user data
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  logout() {
    this.router.navigate(['/login']);
  }
}