import { Component } from '@angular/core';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrl: './plantilla.component.css',
})
export class PlantillaComponent {
  datos: string = '';
  MostrarDatos(
    nombre: string,
    apellido: string,
    correo: string,
    telefono: string
  ) {
    this.datos = `Nombre: ${nombre}, \n Apellido: ${apellido}, \n Correo: ${correo}, \n Telefono: ${telefono}`;
  }
}
