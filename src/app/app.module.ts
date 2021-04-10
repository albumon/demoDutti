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
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { effects, reducers } from './store';

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
  UserManagementModule,
  StoreModule.forRoot(reducers),
  StoreDevtoolsModule.instrument({}),
  EffectsModule.forRoot(effects)
];


@NgModule({
  declarations: COMPONENTS,
  imports: IMPORTS,
  bootstrap: [AppComponent]
})
export class AppModule { }
