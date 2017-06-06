import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-login-cadastro-form',
  templateUrl: './login-cadastro-form.component.html',
  styleUrls: ['./login-cadastro-form.component.css']
})
export class LoginCadastroFormComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() { }

  verificaSeEmailsSaoIguais(f: NgForm): boolean {
    if (f.controls.email)
      return f.controls.email.value.toString().trim() == f.controls.emailconfirmacao.value.toString().trim();
    return false;
  }

  verificaSeSenhasSaoIguais(f: NgForm): boolean {
    if (f.controls.senha)
      return f.controls.senha.value.toString().trim() == f.controls.senhaconfirmacao.value.toString().trim();
    return false;
  }

  verificaSeFormEValido(f: NgForm): boolean {
    return f.form.valid && this.verificaSeEmailsSaoIguais(f) && this.verificaSeSenhasSaoIguais(f);
  }

  form_cadastro(f: NgForm) {
    let email = f.controls.email.value.toString().trim();
    let senha = f.controls.senha.value.toString().trim();
    this.afAuth.auth.createUserWithEmailAndPassword(email, senha)
      .then(t => {
        alert('Uhuu!! Usuário criado! =D \n Id: ' + t.uid);
      })
      .catch(c => {
        alert('Ihhh deu probleminha aqui! \n Erro: ' + c.message);
      })
  }
}
