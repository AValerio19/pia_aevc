import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css',
})
export class NgForComponent {
  ListaMaestros: Maestro[] = [
    {
      nombre: 'Juan Perez',
      edad: 30,
      materia: 'Matematicas',
      activo: true,
      img_url: 'https://picsum.photos/id/447/900',
    },
    {
      nombre: 'Maria Gomez',
      edad: 25,
      materia: 'Fisica',
      activo: false,
      img_url: 'https://picsum.photos/id/228/900',
    },
    {
      nombre: 'Jorge Rodriguez',
      edad: 40,
      materia: 'Quimica',
      activo: true,
      img_url: 'https://picsum.photos/id/1/900',
    },
    {
      nombre: 'Ana Martinez',
      edad: 35,
      materia: 'Biologia',
      activo: true,
      img_url: 'https://picsum.photos/id/64/900',
    },
    {
      nombre: 'Luis Hernandez',
      edad: 28,
      materia: 'Historia',
      activo: false,
      img_url: 'https://picsum.photos/id/177/900',
    },
  ];
}

interface Maestro {
  nombre: string;
  edad: number;
  materia: string;
  activo: boolean;
  img_url: string;
}
