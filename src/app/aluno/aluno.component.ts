import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
interface Aluno {
 ra: string;
  nome: string; 
  curso: string;
  valor: number;
  datamatricula: Date;
}


@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent {
  aluno: Aluno = {
    ra: '',
    nome: '',
    curso: '',
    valor: 0,
    datamatricula: new Date(),

  };
  salvar(form: NgForm) {
    if (form.invalid) {
      console.log(this.aluno);
    }

  }
}


