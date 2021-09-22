import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectCreatorRoutingModule } from './project-creator-routing.module';
import { ProjectCreatorComponent } from './project-creator.component';

@NgModule({
  declarations: [ProjectCreatorComponent],
  imports: [CommonModule, ProjectCreatorRoutingModule, ReactiveFormsModule],
})
export class ProjectCreatorModule {}
