import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './contacto.component';
import { SuscribirComponent } from './suscribir/suscribir.component';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
  declarations: [ContactoComponent, SuscribirComponent, ContadorComponent],
  imports: [CommonModule, ContactoRoutingModule],
})
export class ContactoModule {}
