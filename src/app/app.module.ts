import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JerrySandBoxService } from './jerrySandBoxService';
import { GreetingService } from './greeting.service';
import { EnglishGreetingService } from './english.greeting.service';
import { ExampleModule } from './ngrxdemo/ngrxdemo.module';

import { StoreModule } from '@ngrx/store';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effect';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExampleModule,
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([AppEffects]),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: JerrySandBoxService },
  { provide: GreetingService, useClass: EnglishGreetingService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
