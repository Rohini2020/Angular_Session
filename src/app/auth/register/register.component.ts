import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import {CustomValidationService} from './confirm-password.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder ) { 
    this.registerForm = this.formBuilder.group({
      fname:['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      lname:['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      description:['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      email:['',[Validators.required,Validators.email,Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
      password:['',[Validators.required]],
      confirmpassword:['',[Validators.required]],
      contactnumber:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });

  }

  ngOnInit(): void {
  }

}
