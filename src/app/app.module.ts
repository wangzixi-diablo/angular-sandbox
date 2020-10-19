import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, NgTemplateOutletExampleComponent } from './app.component';
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

import { UnlessDirective } from '../unless/unless.directive';
import { RainbowDirective } from './color/color.directive';
import { HERO_DI_CONFIG, APP_CONFIG } from './app.config';

// 'http://localhost:4200/heros'

@NgModule({
  declarations: [
    AppComponent,
    UnlessDirective,
    NgTemplateOutletExampleComponent,
    RainbowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExampleModule,
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([AppEffects]),
    //FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: JerrySandBoxService },
  { provide: GreetingService, useClass: EnglishGreetingService},
  {
    provide: 'apiUrl',
    useValue: 'http://localhost:4200/heros'
  },
  { provide: APP_CONFIG, useValue: HERO_DI_CONFIG }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
