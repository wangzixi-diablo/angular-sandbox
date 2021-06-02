import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyService, MyNewerService } from './di-service';
import { DitestComponent } from './ditest.component';

@NgModule({
  declarations: [DitestComponent],
  imports: [
    CommonModule
  ],
  providers:[
  { provide: MyService, useExisting: MyNewerService, multi: true},
  { provide: MyService, useExisting: MyNewerService, multi: true}],
  exports: [DitestComponent]
})
export class DitestModule { }
