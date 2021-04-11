
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LocalStorageService } from 'src/app/services/storage/local-storage.service';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule],
      providers: [LocalStorageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('will be invalid form when empty', () => {
    expect(component.registerForm.invalid).toBeTruthy();
  });

  it('will be invalid userName when length is less than 3', () => {
    component.registerForm.setValue({ userName: 'a', password: '', firstName: '', lastName: '', email: '' });
    expect(component.registerForm.get('userName').invalid).toBeTruthy();
  });

  it('will be valid userName when length is greater or equal than 3', () => {
    component.registerForm.setValue({ userName: 'abm', password: '', firstName: '', lastName: '', email: '' });
    expect(component.registerForm.get('userName').invalid).toBeFalsy();
  });

  it('will be invalid password when length is less than 6', () => {
    component.registerForm.setValue({ userName: '', password: 'a', firstName: '', lastName: '', email: '' });
    expect(component.registerForm.get('password').invalid).toBeTruthy();
  });

  it('will be valid password when length is greater or equal than 6', () => {
    component.registerForm.setValue({ userName: '', password: '123456', firstName: '', lastName: '', email: '' });
    expect(component.registerForm.get('password').invalid).toBeFalsy();
  });

  it('will be invalid firstName when length is less than 3', () => {
    component.registerForm.setValue({ userName: '', password: '', firstName: 'a', lastName: '', email: '' });
    expect(component.registerForm.get('firstName').invalid).toBeTruthy();
  });

  it('will be valid firstName when length is greater or equal than 3', () => {
    component.registerForm.setValue({ userName: '', password: '', firstName: 'Alberto', lastName: '', email: '' });
    expect(component.registerForm.get('firstName').invalid).toBeFalsy();
  });

  it('will be invalid lastName when length is less than 3', () => {
    component.registerForm.setValue({ userName: '', password: '', firstName: '', lastName: 'a', email: '' });
    expect(component.registerForm.get('lastName').invalid).toBeTruthy();
  });

  it('will be valid lastName when length is greater or equal than 3', () => {
    component.registerForm.setValue({ userName: 'a', password: 'a', firstName: 'a', lastName: 'Bueno', email: '' });
    expect(component.registerForm.get('lastName').invalid).toBeFalsy();
  });

  it('will be invalid email when length is less than 6', () => {
    component.registerForm.setValue({ userName: '', password: '', firstName: '', lastName: '', email: 'a' });
    expect(component.registerForm.get('email').invalid).toBeTruthy();
  });

  it('will be valid email when length is greater or equal than 6', () => {
    component.registerForm.setValue({ userName: '', password: '', firstName: '', lastName: '', email: 'abm@1234.com' });
    expect(component.registerForm.get('email').invalid).toBeFalsy();
  });

  /* it('should register into the app when user not exists', waitForAsync(() => {
    component.registerForm.setValue({ userName: 'abm', password: '123456',
      firstName: 'Alberto', lastName: 'Bueno', email: 'abm@1234.com' });
    component.registerUser();
    fixture.whenStable().then(() => {
      expect(component.router.url).toEqual('/principal/ships');
    });
  }));

  it('should log into the app when user exists', waitForAsync(() => {
    component.registerForm.setValue({ userName: 'abm', password: '123456',
      firstName: 'Alberto', lastName: 'Bueno', email: 'abm@1234.com' });
    component.registerUser();
    fixture.whenStable().then(() => {
      expect(component.router.url).toEqual('/');
    });
  })); */
});
