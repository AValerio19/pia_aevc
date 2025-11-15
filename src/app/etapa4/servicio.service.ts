import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private names: string[] = [];
  getnNames() {
    return this.names;
  }

  addName(name: string) {
    this.names.push(name);
  }

  constructor() { }
}
