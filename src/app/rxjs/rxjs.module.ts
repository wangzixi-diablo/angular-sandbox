import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { SwitchMapComponent } from './switchMap/switchMap.component';
import { BehaviorSubjectComponent } from './BehaviorSubject/behavior-subject.component';
import { MergeMapComponent } from './mergeMap/merge-map.component';

@NgModule({
  declarations: [CombineLatestComponent, SwitchMapComponent,
    BehaviorSubjectComponent, MergeMapComponent],
  imports: [
    CommonModule
  ],
  exports:[CombineLatestComponent, SwitchMapComponent,
    BehaviorSubjectComponent,MergeMapComponent]
})
export class RsJSModule { }
