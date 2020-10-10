import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { LoginPayload } from '../login-payload';
import {CustomValidationService} from './confirm-password.service';
import {RegisterPayload } from '../register-payload';
import { AuthService } from 'src/app/auth.service';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  registerPayload : RegisterPayload;

  constructor(private formBuilder: FormBuilder,private customValidation: CustomValidationService, private authService : AuthService,private router: Router ) { 
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

      this.registerPayload = {
        email: '',
        password: '',
        username:'',
        first_name:'',
        last_name:'',
        description:'',
        linkdin_url:'',
        contact_number:'',
        status:'ACTIVE'

      }

  }

  ngOnInit(): void {
  }

  onSubmit(){
    
    this.registerPayload.email= this.registerForm.get('email').value;
    this.registerPayload.username= this.registerForm.get('username').value;
    this.registerPayload.first_name= this.registerForm.get('fname').value;
    this.registerPayload.last_name= this.registerForm.get('lname').value;
    this.registerPayload.password= this.registerForm.get('password').value;
    this.registerPayload.description= this.registerForm.get('bio').value;
    this.registerPayload.linkdin_url= this.registerForm.get('linkedin').value;
    this.registerPayload.contact_number= this.registerForm.get('contactnumber').value;
    
  
    this.authService.register(this.registerPayload).subscribe(data =>{
      alert("User Register Successfully.. Now go to login page ");
      // this.router.navigateByUrl("/login")
      this.router.navigateByUrl("/register-success");
    }, error =>{
      alert("Error Occurred..");
    });
  }


}
