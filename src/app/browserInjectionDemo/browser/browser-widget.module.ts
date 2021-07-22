import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared';
import { TextModule } from '../text';
import { BrowserFakerComponent } from './browser-faker.component';
import { UrlComponent } from './url.component';
import { HighlightDirectiveModule } from '../highLightDirective/highlight.module';

@NgModule({
  declarations: [
    BrowserFakerComponent,
    UrlComponent,
  ],
  exports: [
    BrowserFakerComponent,
    UrlComponent,
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    TextModule,
    HighlightDirectiveModule
  ],
})
export class BrowserWidgetModule {}
