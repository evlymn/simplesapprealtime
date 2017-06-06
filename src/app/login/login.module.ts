import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { LoginFormComponent } from './login-form/login-form.component';
import { LoginComponent } from './login.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginCadastroFormComponent } from './login-cadastro-form/login-cadastro-form.component';
import { LoginRoutingModule } from './login.routing.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule, LoginRoutingModule
  ],
  declarations: [LoginFormComponent, LoginComponent, LoginCadastroFormComponent],
  exports: [LoginComponent],
  providers: [AngularFireAuth]
})
export class LoginModule { }


