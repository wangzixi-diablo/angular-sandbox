import { NgModule } from '@angular/core';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    UnlessDirective
  ],
  exports: [
    UnlessDirective
  ]
})
export class UnlessDirectiveModule {}
