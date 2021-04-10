import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

// JSON
import usersList from 'src/assets/json/users.json';

@Component({
  selector: 'app-login',
  templateUrl: '../template/login.component.html',
  styleUrls: ['../scss/login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  dataLoading = false;
  users: any = usersList;
  unregistered = false;
  invalid = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [ '', [Validators.required, Validators.minLength(3)]],
      password: [ '', [Validators.required, Validators.minLength(6)]]
    });
  }
  loginUser() {
    if (this.loginForm.invalid) { return; }
    // TODO : Falta integrar el servicio para autentificar al usuario
    // JSON simulando usuarios
    const userLogin = this.loginForm.value.username;
    const filterJson = this.users.filter((user: any) => {
      return user.first_name === userLogin;
    });
    if (filterJson.length > 0) {
      this.router.navigate(['/principal/ships']);
    } else {
      this.unregistered = true;
    }
  }
}

