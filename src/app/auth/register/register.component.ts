import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CustomValidationService} from './confirm-password.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private customValidation: CustomValidationService ) { 
    this.registerForm = this.formBuilder.group({
      fname:['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      lname:['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      username:['',[Validators.required]],
      bio:['',[Validators.required]],
      email:['',[Validators.required,Validators.email,Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
      password:['',[Validators.required]],
      confirmpassword:['',[Validators.required]],
      linkedin:'',
      contactnumber:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    },
      {
        validator: [this.customValidation.confirmedValidator('password', 'confirmpassword')]
      });

  }

  ngOnInit(): void {
  }

}
