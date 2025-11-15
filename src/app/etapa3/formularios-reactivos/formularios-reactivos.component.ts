import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios-reactivos',
  templateUrl: './formularios-reactivos.component.html',
  styleUrl: './formularios-reactivos.component.css'
})
export class FormulariosReactivosComponent {
  registroForm:FormGroup;
  mostrarDatos:boolean = false;

  constructor (private formBuilder:FormBuilder) {
    this.registroForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      fecha: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]]
    });
  }

  onSubmit(){
    if (this.registroForm && this.registroForm.valid){
      console.log('Formulario valido, Datos: ');
      console.log('Nombre: ', this.registroForm.value.nombre);
      console.log('Correo Electronico: ', this.registroForm.value.email);
      console.log('Contraseña: ', this.registroForm.value.password);
      this.mostrarDatos = true;
    } else {
      console.error('Formulario invalido. Por favor, completa todos los campos correctamente');
    }
  }
}
