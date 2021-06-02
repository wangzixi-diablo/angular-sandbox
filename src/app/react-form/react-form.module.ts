import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JerryReactFormComponent } from './react-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [JerryReactFormComponent],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  exports:[JerryReactFormComponent]
})
export class JerryReactFormModule { }
