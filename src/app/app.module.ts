import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JerrySandBoxService } from './jerrySandBoxService';
import { GreetingService } from './greeting.service';
import { EnglishGreetingService } from './english.greeting.service';
import { ExampleModule } from './ngrxdemo/ngrxdemo.module';
import { CounterComponent } from './ngrxdemo/container/component/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './ngrxdemo/reducer';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExampleModule,
    CommonModule,
    StoreModule.forRoot({})
  ],
  providers: [{ provide: JerrySandBoxService },
  { provide: GreetingService, useClass: EnglishGreetingService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
