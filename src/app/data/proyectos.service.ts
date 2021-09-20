import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  private proyectos = [
    {
      id: 'aprender-angular',
      name: 'Aprender angular',
      budget: 500,
      status: 1,
    },
    {
      id: 'tener-un-buen-trabajo',
      name: 'Tener un buen trabajo',
      budget: 50,
      status: 0,
    },
  ];
  constructor() {}
  public getProyectos(): any[] {
    return this.proyectos;
  }
}
