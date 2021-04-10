// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PrincipalModule } from './components/principal/principal.module';
import { UserManagementModule } from './components/user-management/user-management.module';

// Components
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/ts/principal.component';

const COMPONENTS = [
  AppComponent,
  PrincipalComponent
];

const IMPORTS = [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  PrincipalModule,
  UserManagementModule
];


@NgModule({
  declarations: COMPONENTS,
  imports: IMPORTS,
  bootstrap: [AppComponent]
})
export class AppModule { }
