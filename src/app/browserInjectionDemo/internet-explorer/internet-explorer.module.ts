import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import {
  InternetExplorer11BannerComponent,
} from './internet-explorer-11-banner.component';

@NgModule({
  declarations: [InternetExplorer11BannerComponent],
  exports: [InternetExplorer11BannerComponent],
  imports: [
    SharedModule,
  ],
})
export class InternetExplorerModule {}
