import { Component } from '@angular/core';

@Component({
  selector: 'app-titulo',
  template: ` <h1>{{ title }} funciona!</h1> `,
  styles: [
    `
      h1 {
        color: green;
      }
    `,
  ],
})
export class TituloComponent {
  title = 'App demo de Alberto';
}
