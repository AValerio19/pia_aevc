import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-padre3',
  templateUrl: './padre3.component.html',
  styleUrl: './padre3.component.css'
})
export class Padre3Component {
  constructor(private namesServicio: ServicioService) {}
  addName(name: string){
    this.namesServicio.addName(name)
  }
}
