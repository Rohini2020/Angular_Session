import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { LoginPayload} from '../login-payload';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
@Component({


  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginPayload: LoginPayload;



  constructor(private formBuilder : FormBuilder, private authService: AuthService,private router:Router) {
    this.loginForm= this.formBuilder.group({
      email:['',[Validators.required,Validators.email, Validators.pattern( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
      password:['',Validators.required]
    })

    this.loginPayload = {
      email: '',
      password: ''
    }
   }

  ngOnInit(): void {
  }


  onSubmit(): void {
    this.loginPayload.email = this.loginForm.get('email').value;
    this.loginPayload.password = this.loginForm.get('password').value;
    console.log(this.loginPayload);

    this.authService.login(this.loginPayload).subscribe(data =>{
      console.log(data);
      this.router.navigateByUrl("/home");
    }, error =>{
      alert('Unsuccessful');
    });
    
  }
}
