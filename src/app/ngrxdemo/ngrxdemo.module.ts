import {StoreModule} from '@ngrx/store';
import {reducers} from './reducer';
import { NgModule } from '@angular/core';
import { CounterComponent } from './container/component/counter/counter.component';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('example', reducers) // 这个才是关键哦
  ],
  declarations: [CounterComponent],
  exports: [CounterComponent]
})
export class ExampleModule { }
