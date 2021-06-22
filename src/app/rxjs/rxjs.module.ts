import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { SwitchMapComponent } from './switchMap/switchMap.component';
import { BehaviorSubjectComponent } from './BehaviorSubject/behavior-subject.component';

@NgModule({
  declarations: [CombineLatestComponent, SwitchMapComponent,
    BehaviorSubjectComponent],
  imports: [
    CommonModule
  ],
  exports:[CombineLatestComponent, SwitchMapComponent,
    BehaviorSubjectComponent]
})
export class RsJSModule { }
