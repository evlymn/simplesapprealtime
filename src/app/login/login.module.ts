import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginFormComponent } from './login-form/login-form.component';
import { LoginComponent } from './login.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { RouterModule } from "@angular/router/src";

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [LoginFormComponent, LoginComponent], 
  exports:[LoginComponent, LoginFormComponent],
  providers:[AngularFireAuth]
})
export class LoginModule { }
