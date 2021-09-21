import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProyectosService } from '../data/proyectos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public proyectos?: any[]; // = this.service.getProyectos();
  public color = 'brown';

  public elValor = 5;

  constructor(private service: ProyectosService) {
    const proyectos$: Observable<{ data: any[] }> = service.getProyectos$();

    proyectos$.subscribe(
      res => (this.proyectos = res.data),
      err => console.error(err),
      () => console.log('THE END'),
    );

    // proyectos$.subscribe({
    //   next: data => console.log(data),
    //   error: err => console.error(err),
    //   complete: () => console.log('THE END'),
    // });
  }

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
