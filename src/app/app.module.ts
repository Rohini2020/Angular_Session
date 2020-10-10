import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { AddPostComponent } from './add-post/add-post.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { RegisterComponent } from './auth/register/register.component';
import { HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import { NgxWebstorageModule} from 'ngx-webstorage';
import { HomeComponent } from './home/home.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    LoginComponent,
    AddPostComponent,
    RegisterComponent,
    HomeComponent,
    RegisterSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    FormsModule,
    EditorModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent},
      { path: 'add-post', component: AddPostComponent},
      {path: 'register',component: RegisterComponent},
      { path:'home',component: HomeComponent},
      {path: 'register-success', component: RegisterSuccessComponent},

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
