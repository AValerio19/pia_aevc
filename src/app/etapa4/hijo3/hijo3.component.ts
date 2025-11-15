import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-hijo3',
  templateUrl: './hijo3.component.html',
  styleUrl: './hijo3.component.css'
})
export class Hijo3Component {
  names:string[] = [];

  constructor (private nameServicio: ServicioService){}

  ngOnInit(){
    this.names = this.nameServicio.getnNames();
  }
}
