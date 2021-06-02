import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyService, MyNewerService } from './di-service';
import { DitestComponent } from './ditest.component';
import { ManualDIComponent } from './manual.component';

@NgModule({
  declarations: [DitestComponent,ManualDIComponent],
  imports: [
    CommonModule
  ],
  providers:[
  { provide: MyService, useExisting: MyNewerService, multi: true},
  { provide: MyService, useExisting: MyNewerService, multi: true}],
  exports: [DitestComponent,ManualDIComponent]
})
export class DitestModule { }
