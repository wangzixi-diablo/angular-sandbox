import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { SwitchMapComponent } from './switchMap/switchMap.component';

@NgModule({
  declarations: [CombineLatestComponent, SwitchMapComponent],
  imports: [
    CommonModule
  ],
  exports:[CombineLatestComponent, SwitchMapComponent]
})
export class RsJSModule { }
