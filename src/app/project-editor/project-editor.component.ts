import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectosService } from '../data/proyectos.service';

@Component({
  selector: 'app-project-editor',
  templateUrl: './project-editor.component.html',
  styleUrls: ['./project-editor.component.scss'],
})
export class ProjectEditorComponent implements OnInit {
  public projectId = '';
  public project = { name: '', budget: 0 };
  constructor(private route: ActivatedRoute, private service: ProyectosService) {
    // const projectId = route.snapshot.params['id'];
    // this.projectId = projectId;
  }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.params['id'];
    const projects = this.service.getProyectos();
    this.project = projects.find(p => p.id === this.projectId);
  }
}

// const x = new ProjectEditorComponent(  );

class Alumno {
  //public nombre = '';
  public edad = 0;

  constructor(public nombre: string) {
    //this.nombre = nombre;
  }

  imprimir() {
    console.log(this.nombre);
  }
}

const manuel = new Alumno('Manuel Ruiz');
// manuel.nombre = 'Manuel Ruiz';
manuel.edad = 36;
