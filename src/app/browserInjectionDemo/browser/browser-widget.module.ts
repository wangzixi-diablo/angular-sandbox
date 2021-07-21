import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared';
import { TextModule } from '../text';
import { BrowserFakerComponent } from './browser-faker.component';
import { UrlComponent } from './url.component';

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
  ],
})
export class BrowserWidgetModule {}
