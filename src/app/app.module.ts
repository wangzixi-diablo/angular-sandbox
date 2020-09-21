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
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effect';

registerLocaleData(en);

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
  { provide: GreetingService, useClass: EnglishGreetingService},
  { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
