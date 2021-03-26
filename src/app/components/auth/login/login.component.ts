import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
   buildForm:FormGroup
   show:boolean=false
  ngOnInit() {
    this.buildForm=this.fb.group({
      email:'',
      password:''
    })
  }

}
