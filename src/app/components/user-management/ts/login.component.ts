import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/storage/local-storage.service';
import { User } from 'src/app/shared/models/user.model';
import { GeneralUtil } from 'src/app/shared/util/general-util';

// JSON
import usersList from 'src/assets/json/users.json';

@Component({
  selector: 'app-login',
  templateUrl: '../template/login.component.html',
  styleUrls: ['../scss/login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public dataLoading = false;
  public unregistered = false;

  private users: any = usersList;
  private invalid = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private storageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [ '', [Validators.required, Validators.minLength(3)]],
      password: [ '', [Validators.required, Validators.minLength(6)]]
    });
  }

  /**
   * Method for users login
   */
  public loginUser() {
    // Check if the form is valid
    if (!this.loginForm.invalid) {
      // Obtain user and password
      const userLogin = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      const registeredUsers: User[] = this.storageService.get('users');
      // Check if there is registered users
      if (GeneralUtil.hasValueArray(registeredUsers)) {
        const existsUser = registeredUsers.find((user: User) => {
          return user.userName === userLogin &&
            user.password === password;
        });
        if (GeneralUtil.isWorkableObject(existsUser)) {
          this.router.navigate(['/principal/ships']);
        } else {
          this.unregistered = true;
        }
      } else {
        this.unregistered = true;
      }
    }
  }
}

