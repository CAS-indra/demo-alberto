import { Component } from '@angular/core';
import { ProyectosService } from '../data/proyectos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public proyectos = this.service.getProyectos();
  public color = 'brown';

  public elValor = 5;

  constructor(private service: ProyectosService) {}

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
