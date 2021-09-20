import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectEditorRoutingModule } from './project-editor-routing.module';
import { ProjectEditorComponent } from './project-editor.component';

@NgModule({
  declarations: [ProjectEditorComponent],
  imports: [CommonModule, ProjectEditorRoutingModule],
})
export class ProjectEditorModule {}
