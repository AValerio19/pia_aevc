import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  numero:number = 1;

  Incrementar(){
    this.numero = this.numero + 1;
  }

  Decrementar(){
    this.numero = this.numero - 1;
  }
}
