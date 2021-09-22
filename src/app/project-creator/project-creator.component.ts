import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProyectosService } from '../data/proyectos.service';

@Component({
  selector: 'app-project-creator',
  templateUrl: './project-creator.component.html',
  styleUrls: ['./project-creator.component.scss'],
})
export class ProjectCreatorComponent {
  public formGroup: FormGroup;
  public message = '';
  constructor(fb: FormBuilder, private service: ProyectosService) {
    this.formGroup = fb.group({
      name: [
        'Apagar un volcán',
        [Validators.required, Validators.minLength(3), Validators.maxLength(15)],
      ],
      budget: new FormControl(10, [
        Validators.required,
        Validators.min(10),
        Validators.max(1000000),
      ]),
      startDate: new Date(),
    });
  }

  public submitProject(): void {
    console.log('Enviando...');
    console.log(this.formGroup.value);
    // To Do: llamar al servicio y hacer el post
    this.service.postProyecto$(this.formGroup.value).subscribe({
      error: err => (this.message = err.message),
    });
  }
}
