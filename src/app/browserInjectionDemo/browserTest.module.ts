import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserTestComponent } from './browserTest.component';
import { BrowserWidgetModule } from './browser';
import { InternetExplorerModule } from './internet-explorer';
import { SharedModule } from './shared';

@NgModule({
  declarations: [BrowserTestComponent],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserWidgetModule,
    InternetExplorerModule,
  ],
  exports:[BrowserTestComponent]
})
export class BrowserTestModule {}
