import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentChildComponent, ChildComponent } from './parent-child.component';



@NgModule({
  declarations: [ParentChildComponent, ChildComponent],
  exports:[ParentChildComponent, ChildComponent],
  imports: [
    CommonModule
  ]
})
export class ParentModule { }
