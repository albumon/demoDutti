// Modules
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserManagementRoutingModule } from './user-management-routing.module';

// Components
import { LoginComponent } from './ts/login.component';
import { RegisterComponent } from './ts/register.component';

// Services
import { LocalStorageService } from 'src/app/services/storage/local-storage.service';

// Specify the imports for the module
const IMPORTS = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserManagementRoutingModule
];

// Specify the declarations of the module
const DECLARATIONS = [
    LoginComponent,
    RegisterComponent
];

// Specify the providers for the module
const PROVIDERS = [
  LocalStorageService
];

@NgModule({
  declarations: DECLARATIONS,
  imports: IMPORTS,
  providers: PROVIDERS
})
export class UserManagementModule { }
