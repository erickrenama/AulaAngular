import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reserva-viagens',
  templateUrl: './reserva-viagens.component.html',
  styleUrls: ['./reserva-viagens.component.css']
})
export class ReservaViagensComponent {
    Form: FormGroup;
  
    constructor(private fb: FormBuilder) {
      this.Form = this.fb.group({
        destination: ['', Validators.required],
        departureDate: ['', Validators.required],
        returnDate: ['', Validators.required],
        passengers: [1, [Validators.required, Validators.min(1), Validators.max(5)]],
        email: ['', [Validators.required, Validators.email]]
      });
    }
  
    getErrorMessage(field: string): string {
      const control = this.Form.get(field);
      if (control?.hasError('required')) {
        return 'Campo obrigatório.';
      }
      if (field === 'passengers') {
        if (control?.hasError('min') || control?.hasError('max')) {
          return 'O número de passageiros deve estar entre 1 e 5.';
        }
      }
      if (field === 'email') {
        if (control?.hasError('email')) {
          return 'Insira um e-mail válido.';
        }
      }
      return '';
    }
  
    onSubmit(): void {
      if (this.Form.valid) {
        console.log(this.Form.value);
      }
    }
  }