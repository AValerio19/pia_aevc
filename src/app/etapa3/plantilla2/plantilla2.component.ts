import { Component } from '@angular/core';

@Component({
  selector: 'app-plantilla2',
  templateUrl: './plantilla2.component.html',
  styleUrl: './plantilla2.component.css',
})
export class Plantilla2Component {
  usuario: any = {};
  mostrar: boolean = false;

  submitForm(form: any) {
    console.log('Formulario valido, datos del usuario: ', this.usuario);
    this.mostrar = !this.mostrar;
  }
}
