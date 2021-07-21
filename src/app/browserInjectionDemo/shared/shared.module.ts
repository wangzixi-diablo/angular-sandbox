import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DevelopmentOnlyDirective } from './development-only.directive';

@NgModule({
  declarations: [
    DevelopmentOnlyDirective,
  ],
  exports: [
    CommonModule,
    DevelopmentOnlyDirective,
  ],
})
export class SharedModule {}
