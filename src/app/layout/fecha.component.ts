import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fecha',
  template: ` <div>El {{ fecha | date: 'dd-MMMM-yyyy' | uppercase }}</div> `,
  styles: [],
})
export class FechaComponent implements OnInit {
  public fecha = new Date();
  constructor() {}

  ngOnInit(): void {}
}
