import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {DebugElement} from '@angular/core'
import {By} from '@angular/platform-browser'

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));
   let email:DebugElement
   let password:DebugElement
   let submit:DebugElement
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
     email=fixture.debugElement.query(By.css('input[type=email]'))
     password=fixture.debugElement.query(By.css('input[type=password'))
     submit=fixture.debugElement.query(By.css('button'))
    fixture.detectChanges();
  });
   
  it('should create', () => {
    expect(component).toBeTruthy();
  });
 let userMock={
    email:"ss@gg.com",
    password:"12345"
  }
  it('email and password must return mock data',()=>{

  })

});
