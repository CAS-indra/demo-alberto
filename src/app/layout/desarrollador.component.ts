import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desarrollador',
  template: ` <div>Creado por {{ desarrollador | uppercase }}</div> `,
  styles: [
    `
      div {
        color: blue;
      }
    `,
  ],
})
export class DesarrolladorComponent implements OnInit {
  public desarrollador = 'Alberto Basalo';

  constructor() {}

  ngOnInit(): void {}
}
