// Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './ts/login.component';
import { RegisterComponent } from './ts/register.component';

// Routes of the module
const routes: Routes = [
    // Initial path refers to LoginComponent
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
