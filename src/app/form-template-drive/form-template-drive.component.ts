import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Cliente {
  nome: string;
  email: string;
  celular: string;
}

@Component({
  selector: 'app-form-template-drive',
  templateUrl: './form-template-drive.component.html',
  styleUrls: ['./form-template-drive.component.css']
})
export class FormTemplateDriveComponent {
  cliente: Cliente = {
    nome: '',
    email: '',
    celular: '',
  };
  salvar(form: NgForm) { 
    if (form.invalid) {
    console.log(this.cliente);
  }

}
}

