import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LocalStorageService } from 'src/app/services/storage/local-storage.service';
import { User } from 'src/app/shared/models/user.model';


import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule],
      providers: [LocalStorageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('will be invalid form when empty', () => {
    expect(component.loginForm.invalid).toBeTruthy();
  });

  it('will be invalid username when length is less than 3', () => {
    component.loginForm.setValue({ username: 'a', password: '' });
    expect(component.loginForm.get('username').invalid).toBeTruthy();
  });

  it('will be valid username when length is greater or equal than 3', () => {
    component.loginForm.setValue({ username: 'abm', password: '' });
    expect(component.loginForm.get('username').invalid).toBeFalsy();
  });

  it('will be invalid password when length is less than 6', () => {
    component.loginForm.setValue({ username: 'a', password: 'a' });
    expect(component.loginForm.get('password').invalid).toBeTruthy();
  });

  it('will be valid password when length is greater or equal than 6', () => {
    component.loginForm.setValue({ username: 'abm', password: '123456' });
    expect(component.loginForm.get('password').invalid).toBeFalsy();
  });

  /* it('shouldnt log into the app when user not exists', waitForAsync(() => {
    component.loginForm.setValue({ username: 'abm', password: '123456' });
    component.loginUser();
    fixture.whenStable().then(() => {
      expect(component.router.url).toEqual('/');
    });
  }));

  it('should log into the app when user exists', waitForAsync(() => {
    component.loginForm.setValue({ username: 'abm', password: '123456' });
    component.loginUser();
    fixture.whenStable().then(() => {
      expect(component.router.url).toEqual('/principal/ships');
    });
  })); */
});
