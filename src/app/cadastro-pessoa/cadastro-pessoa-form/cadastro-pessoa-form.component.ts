import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-cadastro-pessoa-form',
  templateUrl: './cadastro-pessoa-form.component.html',
  styleUrls: ['./cadastro-pessoa-form.component.css']
})
export class CadastroPessoaFormComponent implements OnInit {

  constructor(private angularFire: AngularFireDatabase) { }

  ngOnInit() { }

  form_submit(f: NgForm) {
    this.angularFire.list("pessoas").push(
      {
        nome: f.controls.nome.value,
        sobrenome: f.controls.sobrenome.value
      }
    ).then((t: any) => console.log('dados gravados: ' + t.key)),
      (e: any) => console.log(e.message);

    f.controls.nome.setValue('');
    f.controls.sobrenome.setValue('');
  }
}
