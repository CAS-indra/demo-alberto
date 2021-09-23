import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent {
  public suscriptores = 0;

  constructor() {}

  public addSuscriptor(): void {
    this.suscriptores++;
  }
}
