import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/storage/local-storage.service';
import { User } from 'src/app/shared/models/user.model';
import { GeneralUtil } from 'src/app/shared/util/general-util';

@Component({
  selector: 'app-register',
  templateUrl: '../template/register.component.html',
  styleUrls: ['../scss/register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public dataLoading = false;
  public userExists = false;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private storageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: [ '', [Validators.required, Validators.minLength(3)]],
      lastName: [ '', [Validators.required, Validators.minLength(3)]],
      userName: [ '', [Validators.required, Validators.minLength(3)]],
      email: [ '', [Validators.required, Validators.minLength(6)]],
      password: [ '', [Validators.required, Validators.minLength(6)]]

    });
  }

  /**
   * Method used for user registration
   * Obtains the users already registered from the LocalStorage.
   * Once the registered users are loaded, check if the username is already in use and
   * register the user if not.
   */
  registerUser() {
    // Check if the form is valid
    if (!this.registerForm.invalid) {
      // Get registered users
      const registeredUsers: User[] = GeneralUtil.hasValueArray(this.storageService.get('users')) ?
        this.storageService.get('users') : [];
      // Check if user already exists
      const existsUser = registeredUsers.find((user: User) => {
        return user.firstName === this.registerForm.value.userName;
      });
      if (GeneralUtil.isWorkableObject(existsUser)) {
        // Show error
        this.userExists = true;
      } else {
        // Create user object
      const user: User = new User();
      user.firstName = this.registerForm.value.firstName;
      user.lastName = this.registerForm.value.lastName;
      user.userName = this.registerForm.value.userName;
      user.email = this.registerForm.value.email;
      user.password = this.registerForm.value.password;
      registeredUsers.push(user);
      // Save changes
      if (this.storageService.set('users', registeredUsers)) {
        this.router.navigate(['/principal/ships']);
      }
      }
    }

  }

}
