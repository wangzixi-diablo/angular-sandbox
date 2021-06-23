import { NgModule } from '@angular/core';
import { FunctionComponent } from './functionFeature.component';

@NgModule({
  declarations: [FunctionComponent],
  exports:[FunctionComponent]
})
export class FunctionModule { }
