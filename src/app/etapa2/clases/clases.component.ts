import { Component } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrl: './clases.component.css'
})
export class ClasesComponent {
  clase_actual:string = "Ninguna";

  deshabilitado:boolean = false;

  grande:boolean = false;
  cursiva:boolean = false;
  subrayado:boolean = false;
}

