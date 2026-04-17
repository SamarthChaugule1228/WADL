// Import components
import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register';
import { LoginComponent } from './login/login';
import { ProfileComponent } from './profile/profile';

// Define routes
export const routes: Routes = [
  { path: '', component: RegisterComponent },   // default page
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent }
];