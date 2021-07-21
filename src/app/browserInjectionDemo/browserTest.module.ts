import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserTestComponent } from './browserTest.component';
import { BrowserWidgetModule } from './browser';
import { InternetExplorerModule } from './internet-explorer';
import { SharedModule } from './shared';
import { Routes, RouterModule } from '@angular/router';
import { DummyComponent } from './dummy.component';
import { EntryComponent } from './entry.component';

const CUSTOM_ROUTES: Routes = [
    { path: '', component: BrowserTestComponent },
    { path: 'custom', component: DummyComponent }
  ]

@NgModule({
  declarations: [BrowserTestComponent, EntryComponent],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserWidgetModule,
    InternetExplorerModule,
    RouterModule.forChild(CUSTOM_ROUTES)
  ],
  exports:[EntryComponent]
})
export class BrowserTestModule {}




