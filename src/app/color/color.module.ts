import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RainbowDirective } from './color.directive';
import { ColorComponent } from './color.component';


@NgModule({
  declarations: [RainbowDirective, ColorComponent],
  imports: [
    CommonModule
  ],
  exports:[ColorComponent, RainbowDirective]
})
export class ColorModule { }
