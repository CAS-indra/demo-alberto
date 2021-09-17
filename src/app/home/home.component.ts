import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public proyectos = [
    {
      name: 'Aprender angular',
      status: 1,
    },
    {
      name: 'Tener un buen trabajo',
      status: 0,
    },
  ];
  public color = 'brown';

  public elValor = 5;

  public multiplo(cantidad: number): number {
    return cantidad * this.elValor;
  }

  public incrementar(): void {
    this.elValor++;
  }
  reducir(): void {
    this.elValor--;
  }
}
