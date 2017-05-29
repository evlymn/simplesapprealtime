
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2/index';
import { FirebaseConfig } from './../environments/firebase.config';

import { CadastroPessoaModule } from './cadastro-pessoa/cadastro-pessoa.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, CadastroPessoaModule,
    AngularFireModule.initializeApp(FirebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
